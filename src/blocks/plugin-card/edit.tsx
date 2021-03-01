/* eslint-disable @typescript-eslint/ban-ts-comment */


import { BlockEditProps } from '@wordpress/blocks';
import * as React from 'react';
import { PluginCardAttrs } from './attributes';
import { Fragment, useState } from '@wordpress/element';
import { Disabled } from '@wordpress/components';

// @ts-ignore
import ServerSideRender from '@wordpress/server-side-render';
import Controls from './controls';

const Edit: React.FunctionComponent<BlockEditProps<PluginCardAttrs>> = ({
	attributes,
	setAttributes,
	className
}: BlockEditProps<PluginCardAttrs> ) => {
	const [ hasError, setError ] = useState( false );

	if ( ! attributes.slug ) {

		// return (
		// 	<Placeholder
		// 		attributes={ attributes }
		// 		setAttributes={ setAttributes }
		// 		hasError={ hasError }
		// 		setError={ setError }
		// 		className={ className }
		// 	/>
		// );
	}

	return (
		<Fragment>
			<Controls setAttributes={ setAttributes }/>

			<Disabled>
				<ServerSideRender
					block="themeisle-blocks/plugin-cards"
					className={ className }
					attributes={ { ...attributes } }
				/>
			</Disabled>
		</Fragment>
	);
};

export default Edit;
