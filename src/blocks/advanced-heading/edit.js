/**
 * External dependencies
 */
import classnames from 'classnames';
import hexToRgba from 'hex-rgba';
import GoogleFontLoader from 'react-google-font-loader';

/**
 * WordPress dependencies.
 */
const { __ } = wp.i18n;

const { createBlock } = wp.blocks;

const { withSelect } = wp.data;

const { RichText } = wp.blockEditor;

const {
	Fragment,
	useEffect,
	useState
} = wp.element;

const { withViewportMatch } = wp.viewport;

/**
 * Internal dependencies
 */
import Controls from './controls.js';
import Inspector from './inspector.js';

const Edit = ({
	attributes,
	setAttributes,
	className,
	clientId,
	mergeBlocks,
	insertBlocksAfter,
	onReplace,
	isLarger,
	isLarge,
	isSmall,
	isSmaller
}) => {
	useEffect( () => {
		initBlock();
	}, []);

	const initBlock = () => {
		if ( attributes.id === undefined || attributes.id.substr( attributes.id.length - 8 ) !== clientId.substr( 0, 8 ) ) {
			const instanceId = `wp-block-themeisle-blocks-advanced-heading-${ clientId.substr( 0, 8 ) }`;
			setAttributes({ id: instanceId });
		}
	};

	const [ fontSizeViewType, setFontSizeViewType ] = useState( 'desktop' );
	const [ alignmentViewType, setAlignmentViewType ] = useState( 'desktop' );
	const [ paddingViewType, setPaddingViewType ] = useState( 'desktop' );
	const [ marginViewType, setMarginViewType ] = useState( 'desktop' );

	const isDesktop = ( isLarger && ! isLarge && isSmall && ! isSmaller );

	const isTablet = ( ! isLarger && ! isLarge && isSmall && ! isSmaller );

	const isMobile = ( ! isLarger && ! isLarge && ! isSmall && ! isSmaller );

	const changeContent = value => {
		setAttributes({ content: value });
	};

	const changeFontFamily = value => {
		setAttributes({
			fontFamily: value,
			fontVariant: 'normal',
			fontStyle: 'normal'
		});
	};

	const changeFontVariant = value => {
		setAttributes({ fontVariant: value });
	};

	const changeFontStyle = value => {
		setAttributes({ fontStyle: value });
	};

	const changeTextTransform = value => {
		setAttributes({ textTransform: value });
	};

	const changeLineHeight = value => {
		setAttributes({ lineHeight: value });
	};

	const changeLetterSpacing = value => {
		setAttributes({ letterSpacing: value });
	};

	let fontSizeStyle, stylesheet, textShadowStyle;

	if ( isDesktop ) {
		fontSizeStyle = {
			fontSize: `${ attributes.fontSize }px`
		};

		stylesheet = {
			textAlign: attributes.align,
			paddingTop: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingTop }px`,
			paddingRight: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingRight }px`,
			paddingBottom: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingBottom }px`,
			paddingLeft: 'linked' === attributes.paddingType ? `${ attributes.padding }px` : `${ attributes.paddingLeft }px`,
			marginTop: 'linked' === attributes.marginType ? `${ attributes.margin }px` : `${ attributes.marginTop }px`,
			marginBottom: 'linked' === attributes.marginType ? `${ attributes.margin }px` : `${ attributes.marginBottom }px`
		};
	}

	if ( isTablet ) {
		fontSizeStyle = {
			fontSize: `${ attributes.fontSizeTablet }px`
		};

		stylesheet = {
			textAlign: attributes.alignTablet,
			paddingTop: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingTopTablet }px`,
			paddingRight: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingRightTablet }px`,
			paddingBottom: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingBottomTablet }px`,
			paddingLeft: 'linked' === attributes.paddingTypeTablet ? `${ attributes.paddingTablet }px` : `${ attributes.paddingLeftTablet }px`,
			marginTop: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }px` : `${ attributes.marginTopTablet }px`,
			marginBottom: 'linked' === attributes.marginTypeTablet ? `${ attributes.marginTablet }px` : `${ attributes.marginBottomTablet }px`
		};
	}

	if ( isMobile ) {
		fontSizeStyle = {
			fontSize: `${ attributes.fontSizeMobile }px`
		};

		stylesheet = {
			textAlign: attributes.alignMobile,
			paddingTop: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingTopMobile }px`,
			paddingRight: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingRightMobile }px`,
			paddingBottom: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingBottomMobile }px`,
			paddingLeft: 'linked' === attributes.paddingTypeMobile ? `${ attributes.paddingMobile }px` : `${ attributes.paddingLeftMobile }px`,
			marginTop: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }px` : `${ attributes.marginTopMobile }px`,
			marginBottom: 'linked' === attributes.marginTypeMobile ? `${ attributes.marginMobile }px` : `${ attributes.marginBottomMobile }px`
		};
	}

	if ( attributes.textShadow ) {
		textShadowStyle = {
			textShadow: `${ attributes.textShadowHorizontal }px ${ attributes.textShadowVertical }px ${ attributes.textShadowBlur }px ${  hexToRgba( ( attributes.textShadowColor ? attributes.textShadowColor : '#000000' ), attributes.textShadowColorOpacity ) }`
		};
	}

	const style = {
		color: attributes.headingColor,
		...fontSizeStyle,
		fontFamily: attributes.fontFamily ? attributes.fontFamily : 'inherit',
		fontWeight: 'regular' === attributes.fontVariant ? 'normal' : attributes.fontVariant,
		fontStyle: attributes.fontStyle,
		textTransform: attributes.textTransform,
		lineHeight: attributes.lineHeight && `${ attributes.lineHeight }px`,
		letterSpacing: attributes.letterSpacing && `${ attributes.letterSpacing }px`,
		...stylesheet,
		...textShadowStyle
	};

	return (
		<Fragment>
			<style>
				{ `.${ attributes.id } mark {
						color: ${ attributes.highlightColor };
						background: ${ attributes.highlightBackground };
					}` }
			</style>

			{ attributes.fontFamily && (
				<GoogleFontLoader fonts={ [ {
					font: attributes.fontFamily,
					weights: attributes.fontVariant && [ `${ attributes.fontVariant + ( 'italic' === attributes.fontStyle ? ':i' : '' ) }` ]
				} ] } />
			) }

			<Controls
				attributes={ attributes }
				setAttributes={ setAttributes }
				changeFontFamily={ changeFontFamily }
				changeFontVariant={ changeFontVariant }
				changeFontStyle={ changeFontStyle }
				changeTextTransform={ changeTextTransform }
				changeLineHeight={ changeLineHeight }
				changeLetterSpacing={ changeLetterSpacing }
			/>

			<Inspector
				attributes={ attributes }
				setAttributes={ setAttributes }
				changeFontFamily={ changeFontFamily }
				changeFontVariant={ changeFontVariant }
				changeFontStyle={ changeFontStyle }
				changeTextTransform={ changeTextTransform }
				changeLineHeight={ changeLineHeight }
				changeLetterSpacing={ changeLetterSpacing }
				fontSizeViewType={ fontSizeViewType }
				setFontSizeViewType={ setFontSizeViewType }
				alignmentViewType={ alignmentViewType }
				setAlignmentViewType={ setAlignmentViewType }
				paddingViewType={ paddingViewType }
				setPaddingViewType={ setPaddingViewType }
				marginViewType={ marginViewType }
				setMarginViewType={ setMarginViewType }
			/>

			<RichText
				identifier="content"
				className={ classnames(
					attributes.id,
					className
				) }
				value={ attributes.content }
				placeholder={ __( 'Write heading…' ) }
				tagName={ attributes.tag }
				formattingControls={ [ 'bold', 'italic', 'link', 'strikethrough', 'mark' ] }
				allowedFormats={ [ 'core/bold', 'core/italic', 'core/link', 'core/strikethrough', 'themeisle-blocks/mark' ] }
				onMerge={ mergeBlocks }
				unstableOnSplit={
					insertBlocksAfter ?
						( before, after, ...blocks ) => {
							setAttributes({ content: before });
							insertBlocksAfter([
								...blocks,
								createBlock( 'core/paragraph', { content: after })
							]);
						} :
						undefined
				}
				onRemove={ () => onReplace([]) }
				style={ style }
				onChange={ changeContent }
			/>
		</Fragment>
	);
};

export default withViewportMatch({
	isLarger: '>= large',
	isLarge: '<= large',
	isSmall: '>= small',
	isSmaller: '<= small'
})( Edit );
