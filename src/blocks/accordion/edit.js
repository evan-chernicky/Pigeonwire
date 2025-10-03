import {InnerBlocks, useBlockProps} from "@wordpress/block-editor"
import { useSelect } from "@wordpress/data";
import { justifyCenter } from "@wordpress/icons";

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

    const noInnerBlocksStyle = {
        padding: '20px',
        border: '1px dotted #000',
        display: 'flex',
        gap: '10px',
        justifyCenter: 'center',
        flexDirection: 'column',
        textAlign: 'center'
    };

  return (
        <div {...blockProps}>
            <div className="accordion" style={ hasInnerBlocks ? null : noInnerBlocksStyle }>
                {!hasInnerBlocks && (
                    <p style={{ color: '#000', fontStyle: 'italic', fontSize: '14px' }}>
                        Add an accordion item here...
                    </p>
                )}
                <InnerBlocks renderAppender={InnerBlocks.ButtonBlockAppender} allowedBlocks={['pigeonwire/accordionitem']} />
            </div>
        </div>
  )
}
