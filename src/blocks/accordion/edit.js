import {InnerBlocks, useBlockProps} from "@wordpress/block-editor"
import { useSelect } from "@wordpress/data";

export default function Edit({ clientId }) {
    const blockProps = useBlockProps()

    // Check if the current block has any inner blocks so we can apply custom styling if it doesn't
    const hasInnerBlocks = useSelect(
        (select) => {
            const { getBlock } = select('core/block-editor');
            const block = getBlock(clientId);
            return block ? block.innerBlocks.length > 0 : false;
        },
        [clientId]
    );

  return (
        <div {...blockProps}>
            <div className="accordion" style={ hasInnerBlocks ? {padding: '20px 0', border: '1px dotted #000'} : { padding: '20px', border: '1px dotted #000', display: 'flex', gap: '10px' } }>
                {!hasInnerBlocks && (
                    <p style={{ color: '#000', fontStyle: 'italic' }}>
                        Add an accordion item here...
                    </p>
                )}
                <InnerBlocks allowedBlocks={['pigeonwire/accordionitem']} />
            </div>
        </div>
  )
}
