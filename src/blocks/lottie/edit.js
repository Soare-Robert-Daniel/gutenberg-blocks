/**
 * External dependencies
 */
import { Player, Controls } from '@lottiefiles/react-lottie-player';
import classnames from 'classnames';
import { pencil, Icon } from '@wordpress/icons';

/**
 * Wordpress dependencies
 */
const { __ } = wp.i18n;

const {
	TextControl,
	Placeholder,
	Button,
	Notice,
	ToolbarGroup,
	ToolbarButton
} = wp.components;

const {
	Fragment,
	useEffect,
	useRef,
	useState
} = wp.element;

const { uniqueId } = lodash;

const { BlockControls } = wp.blockEditor;

/**
 * Internal dependencies
 */
import Inspector from './inspector.js';

const LottiePlayer = props => {

	const { attributes, setAttributes } = props;
	const playerRef = useRef( null );
	const [ src, setSrc ] = useState( attributes.src );
	const [ showEdit, setShowEdit ] = useState( ! attributes.src );
	const [ error, setError ] = useState( false );

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
					setError( true );
				}
			}
		}
	}, [ attributes ]);

	const validateURL = url => {
		const expression = /(http(s)?:\/\/.){1}(www\.)?[-a-zA-Z0-9@:%._\+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)([-a-zA-Z0-9_]\.json)/;
		const regex = new RegExp( expression );

		return url.match( regex );
	};

	const setSrcToAttributes = ( ) => {

		if ( validateURL( src ) ) {
			setAttributes({ src });
			setShowEdit( false );
		} else {
			setError( true );
		}
	};

	const eventHandeler = event => {

		if ( 'load' === event ) {
			playerRef.current.setPlayerDirection( attributes.direction );
			playerRef.current.setPlayerSpeed( attributes.speed );
			setError( false );
		}
	};

	const play = () => {
		if ( playerRef.current ) {
			playerRef.current.play();
		}
	};

	const pause = () => {
		if ( playerRef.current ) {
			playerRef.current.pause();
		}
	};

	const stop = () => {
		if ( playerRef.current ) {
			playerRef.current.stop();
		}
	};

	const renderPlayer = () => {

		if ( ! attributes.src || showEdit ) {
			return (
				<Placeholder
					label={ 'Lottie Animation URL' }
					className="wp-block-embed"
					instructions={ __(
						'Paste a link to the content you want to display on your site.'
					) }
				>
					<TextControl
						className={ classnames( 'wp-block-themeisle-block-src', { 'error': error })}
						help={ __( 'The URl must return a valid Lottie file. Ex: https://assets1.lottiefiles.com/datafiles/jEgAWaDrrm6qdJx/data.json' ) }
						type='url'
						value={ src }
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
				style={{ height: `${ attributes.height }px`, width: `${ attributes.width }px` }}
				background={ attributes.backgroundColor }
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
				error={ error }
			/>

			<BlockControls>
				<ToolbarGroup>
					{ ! showEdit && (
						<ToolbarButton
							label={ __( 'Edit URL' ) }
							icon={ <Icon icon={ pencil } /> }
							onClick={ setShowEdit }
						/>
					)}
				</ToolbarGroup>
			</BlockControls>

			{ error && (
				<Notice
					isDismissible
					status="error"
					onRemove={ () => setError( false )}
				>
					<p>Invalid URL</p>
				</Notice>
			)}
			{ renderPlayer() }

		</Fragment>
	);
};

export default LottiePlayer;

