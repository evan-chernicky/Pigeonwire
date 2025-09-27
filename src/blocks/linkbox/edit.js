import apiFetch from '@wordpress/api-fetch'
import { link } from "@wordpress/icons"
import {Button, PanelBody, Popover, PanelRow, ToolbarButton, ToolbarGroup} from '@wordpress/components'
import { useBlockProps, BlockControls, InspectorControls, MediaUpload, MediaUploadCheck, LinkControl } from "@wordpress/block-editor"
import placeholder from '../../../assets/images/placeholder.jpg'
import {useEffect, useState} from "@wordpress/element"


export default function Edit(props) {
    const blockProps = useBlockProps()
    const [isLinkPickerVisible, setIsLinkPickerVisible] = useState(false)
    const {imgID, imgURL, linkObject} = props.attributes

    useEffect(() => {
        if (!imgURL) {
            props.setAttributes({imgURL: placeholder})
        }
    },[])

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
            <BlockControls>
                <ToolbarGroup>
                    <ToolbarButton onClick={() => setIsLinkPickerVisible(prev => !prev)} icon={link} />
                </ToolbarGroup>
            </BlockControls>
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
            {isLinkPickerVisible && (
                <Popover position="middle center" onFocusOutside={() => setIsLinkPickerVisible(false)}>
                    <LinkControl settings={[]} value={linkObject} onChange={newLink => props.setAttributes({ linkObject: newLink })} />
                    <Button variant="primary" onClick={() => setIsLinkPickerVisible(false)} style={{ display: "block", width: "100%" }}>
                    Confirm Link
                    </Button>
                </Popover>
            )}
            <a href="#" className="linkbox">
                <div className="linkbox__image-container">
                    <img className="linkbox__image" src={imgURL}/>
                </div>
                <div>
                    <span>Category</span>
                    <h3>{linkObject.title}</h3>
                </div>
            </a>
        </div>
    )
}