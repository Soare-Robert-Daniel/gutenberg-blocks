import * as React from 'react';
import { registerBlockType } from '@wordpress/blocks';
import { __ } from '@wordpress/i18n';

/**
 * Internal dependencies
 */
// import edit from './edit';
// import save from './save';
// import attributes from './attributes';

registerBlockType( 'themeisle-blocks/type-test', {
	title: __( 'Test Type' ),
	description: __( 'Put the logo maker on the site.' ),
	category: 'widgets',
	icon: 'smiley',
	attributes: {},
	edit: (props) => {
		console.log(props)
		
		return <div>
			Hey
		</div>
	},
	save: () => <div id="themeisle-logo-maker-root" />
});
