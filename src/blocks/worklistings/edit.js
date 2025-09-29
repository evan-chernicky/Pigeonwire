import { useBlockProps, InspectorControls } from "@wordpress/block-editor"
import { ToggleControl, PanelBody, PanelRow } from "@wordpress/components"
import { useSelect } from '@wordpress/data';
import { store as coreStore } from '@wordpress/core-data';
import SingleListing from './SingleListing';

export default function Edit({ attributes, setAttributes }) {
    const { isFeaturedListings } = attributes;
    const blockProps = useBlockProps()

        // Fetch the CPT posts
    const works = useSelect(
        ( select ) => select( coreStore ).getEntityRecords(
            'postType',
            'work',
            { per_page: -1, status: 'publish', order: 'asc', orderby: 'date' } //Gets oldest posts first
        ),
        []
    );

    // Handle the loading and empty states
    if ( works === null ) {
        return <p>Loading…</p>;
    }
    if ( works.length === 0 ) {
        return <p>No Work posts found.</p>;
    }

    // Filter to only featured listings
    const filteredWorks = isFeaturedListings ? works.filter(work => work?.acf?.show_in_homepage_featured === true) : works;

    return (
        <div {...blockProps}>
            <InspectorControls>
                <PanelBody title="Customization" initialOpen={true}>
                    <PanelRow>
                        <ToggleControl
                            label="Only show featured listings?"
                            checked={ isFeaturedListings }
                            onChange={ (e) => setAttributes({ isFeaturedListings: e }) }
                        />
                    </PanelRow>
                </PanelBody>
            </InspectorControls>
            <ul className="work-listings">
                {filteredWorks.map((work) => <SingleListing key={work.id} work={work} />)}
            </ul> 
        </div>
    )
}