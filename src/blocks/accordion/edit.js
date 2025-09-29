import {InnerBlocks, useBlockProps} from "@wordpress/block-editor"

export default function Edit({ attributes, setAttributes }) {
    const blockProps = useBlockProps()
  return (
    <div className={blockProps}>
        <ul className="accordion" style={{padding: '20px 0'}}>
            <InnerBlocks allowedBlocks={['pigeonwire/accordion-item']} />
        </ul>
    </div>
  )
}
