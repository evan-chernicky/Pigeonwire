import {useBlockProps, RichText} from "@wordpress/block-editor"

export default function Edit({ attributes, setAttributes }) {
    const { heading, content } = attributes;
    const blockProps = useBlockProps({className: 'accordion-item'})
  return (
    <div {...blockProps}>
        <button>
            <div className="accordion-item__header">
                <RichText className="has-x-large-font-size" allowedFormats={[]} tagName="h3" value={heading} onChange={(value) => setAttributes({heading: value })}/>
            </div>
            <div className="accordion-item__content">
                <RichText className="has-medium-font-size" allowedFormats={[]} tagName="p" value={content} onChange={(value) => setAttributes({content: value })}/>
            </div>
        </button>
    </div>
  )
}
