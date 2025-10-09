import { useBlockProps, MediaUpload, MediaUploadCheck, InspectorControls, InnerBlocks } from "@wordpress/block-editor"
import {Button, PanelBody, PanelRow} from '@wordpress/components'


export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps()
    const { videoID, videoURL } = attributes

    
    return (
        <div {...blockProps}>
            {!videoURL && (
                <MediaUploadCheck>
                    <MediaUpload
                        onSelect={(video) => setAttributes({ videoID: video.id, videoURL: video.url })}
                        allowedTypes={['video']} // Limit to certain types
                        value={videoID}
                        render={({ open }) => (
                            <Button onClick={open}>
                                {videoURL ? 'Change Video' : 'Select Video'}
                            </Button>
                        )}
                    />
                </MediaUploadCheck>
            )}
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                    <PanelRow>
                        <MediaUploadCheck>
                        <MediaUpload 
                            onSelect={(video) => setAttributes({ videoID: video.id, videoURL: video.url })} 
                            value={videoID} render={({open}) => {
                                return <Button onClick={open}>{videoURL ? 'Change Video' : 'Select Video'}</Button>
                            }} 
                        />
                        </MediaUploadCheck>
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <div className="video-background">
                <div className="video-background__content-container">
                    <InnerBlocks renderAppender={InnerBlocks.ButtonBlockAppender}/>
                </div>
                {videoURL && <video src={videoURL} style={{ maxWidth: '100%' }} muted autoPlay loop />}
            </div>
        </div>
    )
}