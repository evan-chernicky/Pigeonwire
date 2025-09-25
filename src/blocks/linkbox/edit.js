import apiFetch from '@wordpress/api-fetch'
import {Button, PanelBody, PanelRow} from '@wordpress/components'
import { useBlockProps, InnerBlocks, InspectorControls, MediaUpload, MediaUploadCheck } from "@wordpress/block-editor"
import placeholder from '../../../assets/images/placeholder.jpg'
import {useEffect} from "@wordpress/element"


export default function Edit(props) {
    const blockProps = useBlockProps()
    const {imgID, imgURL, linkURL} = props.attributes

    useEffect(() => {
        if (!imgURL) {
            props.setAttributes({imgURL: placeholder})
        }
    },[])

    console.log(placeholder)
    
    useEffect(() => {
      async function go() {
          if (imgID) {
              try {
                  const response = await apiFetch({
                      path: `/wp/v2/media/${imgID}`,
                      method: 'GET'
                  });
                  props.setAttributes({ imgURL: response.media_details.sizes.medium_large.source_url });
              } catch (error) {
                  console.error("Failed to fetch media details:", error);
              }
          }
      }
      go()
    }, [imgID]) 
    
      function onFileSelect(x) {
        props.setAttributes({imgID: x.id})
      }
    
    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Background" initialOpen={true}>
                <PanelRow>
                    <MediaUploadCheck>
                    <MediaUpload onSelect={onFileSelect} value={imgID} render={({open}) => {
                        return <Button onClick={open}>Choose Image</Button>
                    }} />
                    </MediaUploadCheck>
                </PanelRow>
                </PanelBody>
            </InspectorControls>
            <a href="#" className="linkbox">
                <div className="linkbox__image-container">
                    <img className="linkbox__image" src={imgURL}/>
                </div>
            </a>
        </div>
    )
}