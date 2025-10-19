(function (wp) {
    const { addFilter } = wp.hooks;
    const { createElement, Fragment } = wp.element;
    const { InspectorControls } = wp.blockEditor || wp.editor;
    const { PanelBody, ToggleControl } = wp.components;

    // 1. Add new attribute to core/button
    addFilter('blocks.registerBlockType', 'custom/button-arrow-attribute', function (settings, name) {
        if (name !== 'core/button') return settings;

        settings.attributes = Object.assign({}, settings.attributes, {
            showArrow: {
                type: 'boolean',
                default: false,
            },
        });

        return settings;
    });

    // 2. Add toggle to Inspector Controls (Block Settings Panel)
    const withArrowToggle = wp.compose.createHigherOrderComponent(function (BlockEdit) {
        return function (props) {
            if (props.name !== 'core/button') {
                return createElement(BlockEdit, props);
            }

            const { attributes, setAttributes } = props;
            const { showArrow } = attributes;

            return createElement(
                Fragment,
                {},
                createElement(BlockEdit, props),

                createElement(
                    InspectorControls,
                    {},
                    createElement(
                        PanelBody,
                        { title: 'Arrow Options', initialOpen: true },
                        createElement(ToggleControl, {
                            label: 'Show Arrow',
                            checked: !!showArrow,
                            onChange: function (value) {
                                setAttributes({ showArrow: value });

                                // Toggle CSS class "has-arrow"
                                let className = attributes.className || '';
                                className = value
                                    ? (className + ' has-arrow').trim()
                                    : className.replace('has-arrow', '').trim();

                                setAttributes({ className: className });
                            },
                        })
                    )
                )
            );
        };
    }, 'withArrowToggle');

    addFilter('editor.BlockEdit', 'custom/button-arrow-toggle-control', withArrowToggle);

})(window.wp);