import {InnerBlocks} from '@wordpress/block-editor'
import {registerBlockType} from "@wordpress/blocks"
import metadata from './block.json'
import Edit from './edit'
import './style.scss';

registerBlockType(metadata.name, {
    edit: Edit,
    save: () =>  <InnerBlocks.Content />
})