import {useState, useEffect} from "@wordpress/element"
import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls, InnerBlocks, MediaPlaceholder, store as blockEditorStore } from "@wordpress/block-editor"
import {Button, PanelBody, PanelRow, DropZone, BaseControl, Spinner } from '@wordpress/components'
import { useSelect } from '@wordpress/data';

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps()
    const { videoID, videoURL, fileName, posterID } = attributes
    const [localPreview, setLocalPreview] = useState(null);

    //Fetching poster image
    const posterImage = useSelect(
        (select) => posterID ? select('core').getMedia(posterID) : null,
        [posterID]
    );

    useEffect(() => {
        if (posterID && localPreview) {
            URL.revokeObjectURL(localPreview)
            setLocalPreview(null);
        }
    },[posterID])

    //Prefer the medium-sized image if available for performance reasons.
    const mediumPosterURL = posterImage?.media_details?.sizes?.medium?.source_url || posterImage?.source_url || null;
    
    // Use a locally hosted preview image while uploading. Fallback to poster image or none.
    const backgroundURL = localPreview || mediumPosterURL  || '';

    /*
        Retrieves Gutenberg's media upload function 
        Required because DropZone does not natively handle file uploads. :(
    */
    const mediaFileUpload = useSelect((select) => select(blockEditorStore).getSettings().mediaUpload, []);

    function onFileDrop(files) {
        if (!files.length) return;
        
        const file = files[0];
        const previewURL = URL.createObjectURL(file); // temporary local preview
        setLocalPreview(previewURL);

        mediaFileUpload({
            filesList: files,
            allowedTypes: ['image'],
            onFileChange: ([image]) => {
                onPosterSelect(image);
            },
            onError: (err) => {
                console.error('Media upload failed', err);
            }
        });
    }

    function onPosterSelect(image) {
        setAttributes({ posterURL: image.url, posterID: image.id })
    }

    function onVideoSelect(video) {
        setAttributes({ videoID: video.id, videoURL: video.url, fileName: video.filename })
    }

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                {/* 
                    Background Video fields in Block Settings Sidebar  
                */}
                    <PanelRow>
                        <BaseControl.VisualLabel>Background Video</BaseControl.VisualLabel>
                    </PanelRow>
                    <PanelRow>
                        <MediaUploadCheck>
                            <MediaUpload 
                                onSelect={video => onVideoSelect(video)}
                                allowedTypes={['video/mp4']}
                                value={videoID} 
                                render={({open}) => {
                                    return <Button variant="secondary" onClick={open}>{videoURL ? 'Change Video' : 'Select Video'}</Button>
                                }} 
                            />
                        </MediaUploadCheck>
                        {videoURL && <span style={{ marginLeft: '10px' }}>{fileName}</span>}
                    </PanelRow>
                    <div  style={{marginBottom: '20px'}}></div>
                    {/* 
                        Background Poster fields in Block Settings Sidebar  
                    */}
                    <PanelRow>
                        <BaseControl.VisualLabel>Background Poster</BaseControl.VisualLabel>
                    </PanelRow>
                    <PanelRow>
                        <div className="poster-dropzone" style={{backgroundImage: `url("${backgroundURL || ''}")`}}>
                            <DropZone
                                onFilesDrop={ files => onFileDrop(files) }
                                onHTMLDrop={ files => onFileDrop(files)  }
                            />
                            <MediaUploadCheck>
                                <MediaUpload
                                    onSelect={image => onPosterSelect(image)}
                                    allowedTypes={['image']}
                                    value={posterID}
                                    render={({ open }) => (
                                        <>
                                            { localPreview ? (
                                                <Spinner />
                                            ) : (
                                                <Button variant="primary" onClick={open}>
                                                    {posterID ? 'Change Poster' : 'Select Poster'}
                                                </Button>
                                            )}
                                        </>
                                    )}
                                />
                            </MediaUploadCheck>
                        </div>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            {/* 
                Media Placeholder which shows upload settings in Block Editor Canvas if no video yet 
            */}
            {!videoURL ? (
                <MediaPlaceholder
                    onSelect={ (video) => {
                    setAttributes({
                        videoID: video.id,
                        videoURL: video.url,
                    });
                    } }
                    allowedTypes={ ['video'] }
                    multiple={ false }
                    labels={ { title: 'Background Video' } }
                    accept="video/mp4"
                    disableDropZone={ false }
                />
            ) : (
                <div className="video-background">
                    <div className="video-background__content-container">
                        <InnerBlocks renderAppender={InnerBlocks.ButtonBlockAppender}/>
                    </div>
                    {videoURL && <video src={videoURL} style={{ maxWidth: '100%' }} muted autoPlay loop />}
                </div>
            ) }
        </div>
    )
}