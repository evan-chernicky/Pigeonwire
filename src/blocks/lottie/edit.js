import { useBlockProps, InspectorControls } from '@wordpress/block-editor';
import { PanelBody, TextControl, ToggleControl } from '@wordpress/components';

export default function Edit({ attributes, setAttributes }) {
  const { src, isTapToPlay } = attributes;
  const blockProps = useBlockProps();

  console.log(themeData.themePath);

  return (
    <>
      <InspectorControls>
        <PanelBody title="Lottie Settings">
          <TextControl
            label="Lottie JSON URL"
            value={src}
            onChange={(val) => setAttributes({ src: val })}
          />
          <ToggleControl
            label="Use Tap to Play?"
            checked={isTapToPlay}
            onChange={(val) => setAttributes({ isTapToPlay: val })}
          />
        </PanelBody>
      </InspectorControls>

      <div {...blockProps}>
        {src ? (
          <lottie-player
            src={src}
            background="transparent"
          ></lottie-player>
        ) : (
          <p><i>Paste a Lottie JSON URL in the sidebar.</i></p>
        )}
      </div>
    </>
  );
}