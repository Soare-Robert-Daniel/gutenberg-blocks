/**
 * External dependencies
 */
import { Player, Controls } from '@lottiefiles/react-lottie-player';

/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n;

const { TextControl, Placeholder, Button } = wp.components;

const { Fragment, useEffect, useRef, useState } = wp.element;

/**
 * Internal dependencies
 */
import Inspector from './inspector.js';

const LottiePlayer = ({ attributes, setAttributes }) => {

	const playerRef = useRef( null );
	const [ src, setSrc ] = useState( attributes.src );

	useEffect( () => {
		if ( playerRef.current ) {

			if ( attributes.loop ) {
				playerRef.current.play();
			} else {
				playerRef.current.stop();
			}

			playerRef.current.setPlayerDirection( attributes.direction );
			playerRef.current.setPlayerSpeed( attributes.speed );
		}
	});

	const setSrcToAttributes = ( ) => {
		setAttributes({ src });
	};

	const eventHandeler = event => {
		if ( 'loop' === event && attributes.loop ) {
			playerRef.current.play();
		}

		if ( 'error' === event ) {
			console.log( 'Invalid source' );
		}
	};

	const renderPlayer = () => {

		if ( ! attributes.src ) {
			return (
				<Placeholder
					label={ 'Lottie Animation URL' }
					className="wp-block-embed"
					instructions={ __(
						'Paste a link to the content you want to display on your site.'
					) }
				>
					<TextControl
						help={ __( 'Ex: https://assets1.lottiefiles.com/datafiles/jEgAWaDrrm6qdJx/data.json' ) }
						type='text'
						value={ attributes.src }
						onChange={ setSrc }
					/>

					<Button
						isPrimary
						onClick={ setSrcToAttributes }
					>
						Add Animation
					</Button>
				</Placeholder>
			);
		}

		return (
			<Player
				ref= { playerRef }
				src={ attributes.src }
				onBackgroundChange={ value => console.log( value ) }
				style={{ height: `${ attributes.height }px`, width: `${ attributes.width }px`, background: attributes.background }}
				background={ attributes.background }
				loop={ attributes.loop }
				hover={ attributes.hover }
				direction={ attributes.direction }
				controls={ attributes.controls }
				autoplay={ attributes.autoplay }
				renderer={ attributes.renderer }
				onEvent={ eventHandeler }
			>
				<Controls
					visible={ attributes.controls }
					loop={ true }
					buttons={[ 'play', 'repeat', 'debug' ]} />
			</Player>
		);
	};

	return (
		<Fragment>
			<Inspector attributes={ attributes } setAttributes={ setAttributes } setSrc= { setSrc }/>
			{ renderPlayer() }
		</Fragment>
	);
};

export default LottiePlayer;

