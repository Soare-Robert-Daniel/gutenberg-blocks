/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;

const { registerBlockType } = wp.blocks;

/**
 * Internal dependencies
 */
import './editor.scss';
import './style.scss';
import './registerHeadingHighlight.js';
import { headingIcon } from '../../helpers/icons.js';
import attributes from './attributes.js';
import transforms from './transforms.js';
import edit from './edit.js';
import save from './save.js';

registerBlockType( 'themeisle-blocks/advanced-heading', {
	title: __( 'Advanced Heading' ),
	description: __( 'Advanced Heading gives a spin to editor\'s Heading block with much needed customization options.' ),
	icon: headingIcon,
	category: 'themeisle-blocks',
	keywords: [
		__( 'heading' ),
		__( 'title' ),
		__( 'advanced heading' )
	],
	attributes,
	transforms,
	edit,
	save
});
