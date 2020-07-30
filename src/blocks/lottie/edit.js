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

const { uniqueId } = lodash;

/**
 * Internal dependencies
 */
import Inspector from './inspector.js';

const LottiePlayer = props => {

	console.log( props );
	const { attributes, setAttributes } = props;
	const playerRef = useRef( null );
	const [ src, setSrc ] = useState( attributes.src );

	useEffect( () => {
		setAttributes({ id: uniqueId( 'lottie_anim_' )});
	}, []);

	useEffect( () => {
		if ( playerRef.current ) {
			playerRef.current.setPlayerDirection( attributes.direction );
			playerRef.current.setPlayerSpeed( attributes.speed );
		}

		if ( playerRef.current ) {
			const { playerState } = playerRef.current.state;

			if ( playerState ) {
				if ( 'error' === playerState ) {
					setAttributes({ src: '' });
				}
			}
		}
	}, [ attributes ]);

	const setSrcToAttributes = ( ) => {
		setAttributes({ src });
	};

	const eventHandeler = event => {

		if ( 'load' === event ) {
			console.log( 'Loaded' );
			playerRef.current.setPlayerDirection( attributes.direction );
			playerRef.current.setPlayerSpeed( attributes.speed );
		}

		if ( 'error' === event ) {
			console.log( 'Invalid source' );
		}
	};

	const play = () => {
		if ( playerRef.current ) {
			console.log( 'Play' );
			playerRef.current.play();
		}
	};

	const pause = () => {
		if ( playerRef.current ) {
			console.log( 'Pause' );
			playerRef.current.pause();
		}
	};

	const stop = () => {
		if ( playerRef.current ) {
			console.log( 'Stop' );
			playerRef.current.stop();
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

		if ( playerRef.current ) {
			console.log( playerRef.current );
		}

		return (
			<Player
				ref= { playerRef }
				src={ attributes.src }
				onBackgroundChange={ value => console.log( value ) }
				style={{ height: `${ attributes.height }px`, width: `${ attributes.width }px` }}
				background={ attributes.background }
				loop={ attributes.loop }
				hover={ attributes.hover }
				direction={ attributes.direction }
				controls={ attributes.controls }
				autoplay={ attributes.autoplay }
				renderer={ attributes.renderer }
				onEvent={ eventHandeler }
			>
				<Controls visible={ true } buttons={[ 'play', 'frame', 'debug' ]} />
			</Player>
		);
	};

	return (
		<Fragment>
			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
				setSrc= { setSrc }
				actions={{ play, pause, stop }}
				playerRef={ playerRef }
			/>
			{ renderPlayer() }

		</Fragment>
	);
};

export default LottiePlayer;

