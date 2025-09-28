import { useBlockProps } from "@wordpress/block-editor"
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
            { per_page: -1, status: 'publish' }
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

    return (
        <div {...blockProps}>
            <ul className="work-listings">
                {works.map((work) => <SingleListing key={work.id} work={work} />)}
            </ul> 
        </div>
    )
}