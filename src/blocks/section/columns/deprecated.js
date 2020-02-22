/**
 * External dependencies
 */
import classnames from 'classnames';
import hexToRgba from 'hex-rgba';

/**
 * WordPress dependencies
 */
const { InnerBlocks } = wp.blockEditor;

const {
	SVG,
	Path
} = wp.components;

const Separators = ({
	type,
	front,
	style,
	fill,
	invert,
	width,
	height
}) => {
	if ( 'none' === style ) {
		return false;
	}

	return (
		<div
			className={ classnames(
				'wp-block-themeisle-blocks-advanced-columns-separators',
				type
			) }
			style={ ( ! front && width ) ? {
				transform: `${ width ? `scaleX( ${ width / 100 } )` : '' }`
			} : {}}
		>
			{ ( 'bigTriangle' === style && false === invert ) && (
				<SVG
					id="bigTriangle"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'bottom' === type ? {
						transform: `${ 'bottom' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M0 0 L50 100 L100 0 Z"></Path>
				</SVG>
			) }

			{ ( 'bigTriangle' === style && true === invert ) && (
				<SVG
					id="bigTriangle"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'top' === type ? {
						transform: `${ 'top' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M100, 0l-50, 100l-50, -100l0, 100l100, 0l0, -100Z"></Path>
				</SVG>
			) }

			{ ( 'rightCurve' === style && false === invert ) && (
				<SVG
					id="rightCurve"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'top' === type ? {
						transform: `${ 'top' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M0 100 C 20 0 50 0 100 100 Z"></Path>
				</SVG>
			) }

			{ ( 'rightCurve' === style && true === invert ) && (
				<SVG
					id="rightCurve"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'top' === type ? {
						transform: `${ 'top' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M0 100 C 50 0 70 0 100 100 Z"></Path>
				</SVG>
			) }

			{ ( 'curve' === style ) && (
				<SVG
					id="curve"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'top' === type ? {
						transform: `${ 'top' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M0 100 C40 0 60 0 100 100 Z"></Path>
				</SVG>
			) }

			{ ( 'slant' === style && false === invert ) && (
				<SVG
					id="slant"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'bottom' === type ? {
						transform: `${ 'bottom' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M0 0 L100 100 L100 0 Z"></Path>
				</SVG>
			) }

			{ ( 'slant' === style && true === invert ) && (
				<SVG
					id="slant"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'bottom' === type ? {
						transform: `${ 'bottom' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M0 0 L0 100 L100 0 Z"></Path>
				</SVG>
			) }

			{ ( 'cloud' === style ) && (
				<SVG
					id="cloud"
					fill={ fill }
					viewBox="0 0 100 100"
					width="100%"
					height={ height ? `${ height }px` : '100' }
					preserveAspectRatio="none"
					xmlns="http://www.w3.org/2000/svg"
					style={ 'top' === type ? {
						transform: `${ 'top' === type ? 'rotate(180deg)' : '' }`
					} : {}}
				>
					<Path d="M-5 100 Q 10 -100 15 100 Z M10 100 Q 20 -20 30 100 M25 100 Q 35 -70 45 100 M40 100 Q 50 -100 60 100 M55 100 Q 65 -20 75 100 M70 100 Q 75 -45 90 100 M85 100 Q 90 -50 95 100 M90 100 Q 95 -25 105 100 Z"></Path>
				</SVG>
			) }
		</div>
	);
};

const deprecated = [ {
	attributes: {
		align: {
			type: 'string'
		},
		id: {
			type: 'string'
		},
		columns: {
			type: 'number'
		},
		layout: {
			type: 'string'
		},
		layoutTablet: {
			type: 'string',
			default: 'equal'
		},
		layoutMobile: {
			type: 'string',
			default: 'equal'
		},
		columnsGap: {
			type: 'string',
			default: 'default'
		},
		paddingType: {
			type: 'string',
			default: 'linked'
		},
		paddingTypeTablet: {
			type: 'string',
			default: 'linked'
		},
		paddingTypeMobile: {
			type: 'string',
			default: 'linked'
		},
		padding: {
			type: 'number',
			default: 20
		},
		paddingTablet: {
			type: 'number',
			default: 20
		},
		paddingMobile: {
			type: 'number',
			default: 20
		},
		paddingTop: {
			type: 'number',
			default: 20
		},
		paddingTopTablet: {
			type: 'number',
			default: 20
		},
		paddingTopMobile: {
			type: 'number',
			default: 20
		},
		paddingRight: {
			type: 'number',
			default: 20
		},
		paddingRightTablet: {
			type: 'number',
			default: 20
		},
		paddingRightMobile: {
			type: 'number',
			default: 20
		},
		paddingBottom: {
			type: 'number',
			default: 20
		},
		paddingBottomTablet: {
			type: 'number',
			default: 20
		},
		paddingBottomMobile: {
			type: 'number',
			default: 20
		},
		paddingLeft: {
			type: 'number',
			default: 20
		},
		paddingLeftTablet: {
			type: 'number',
			default: 20
		},
		paddingLeftMobile: {
			type: 'number',
			default: 20
		},
		marginType: {
			type: 'string',
			default: 'unlinked'
		},
		marginTypeTablet: {
			type: 'string',
			default: 'unlinked'
		},
		marginTypeMobile: {
			type: 'string',
			default: 'unlinked'
		},
		margin: {
			type: 'number',
			default: 20
		},
		marginTablet: {
			type: 'number',
			default: 20
		},
		marginMobile: {
			type: 'number',
			default: 20
		},
		marginTop: {
			type: 'number',
			default: 20
		},
		marginTopTablet: {
			type: 'number',
			default: 20
		},
		marginTopMobile: {
			type: 'number',
			default: 20
		},
		marginBottom: {
			type: 'number',
			default: 20
		},
		marginBottomTablet: {
			type: 'number',
			default: 20
		},
		marginBottomMobile: {
			type: 'number',
			default: 20
		},
		columnsWidth: {
			type: 'number'
		},
		columnsHeight: {
			type: 'string',
			default: 'auto'
		},
		columnsHeightCustom: {
			type: 'number'
		},
		columnsHeightCustomTablet: {
			type: 'number'
		},
		columnsHeightCustomMobile: {
			type: 'number'
		},
		horizontalAlign: {
			type: 'string',
			default: 'unset'
		},
		verticalAlign: {
			type: 'string',
			default: 'unset'
		},
		backgroundType: {
			type: 'string',
			default: 'color'
		},
		backgroundColor: {
			type: 'string'
		},
		backgroundImageID: {
			type: 'number'
		},
		backgroundImageURL: {
			type: 'string'
		},
		backgroundAttachment: {
			type: 'string',
			default: 'scroll'
		},
		backgroundPosition: {
			type: 'string',
			default: 'top left'
		},
		backgroundRepeat: {
			type: 'string',
			default: 'repeat'
		},
		backgroundSize: {
			type: 'string',
			default: 'auto'
		},
		backgroundGradientFirstColor: {
			type: 'string',
			default: '#36d1dc'
		},
		backgroundGradientFirstLocation: {
			type: 'number',
			default: 0
		},
		backgroundGradientSecondColor: {
			type: 'string',
			default: '#5b86e5'
		},
		backgroundGradientSecondLocation: {
			type: 'number',
			default: 100
		},
		backgroundGradientType: {
			type: 'string',
			default: 'linear'
		},
		backgroundGradientAngle: {
			type: 'number',
			default: 90
		},
		backgroundGradientPosition: {
			type: 'string',
			default: 'center center'
		},
		backgroundOverlayOpacity: {
			type: 'number',
			default: 50
		},
		backgroundOverlayType: {
			type: 'string',
			default: 'color'
		},
		backgroundOverlayColor: {
			type: 'string'
		},
		backgroundOverlayImageID: {
			type: 'number'
		},
		backgroundOverlayImageURL: {
			type: 'string'
		},
		backgroundOverlayAttachment: {
			type: 'string',
			default: 'scroll'
		},
		backgroundOverlayPosition: {
			type: 'string',
			default: 'top left'
		},
		backgroundOverlayRepeat: {
			type: 'string',
			default: 'repeat'
		},
		backgroundOverlaySize: {
			type: 'string',
			default: 'auto'
		},
		backgroundOverlayGradientFirstColor: {
			type: 'string',
			default: '#36d1dc'
		},
		backgroundOverlayGradientFirstLocation: {
			type: 'number',
			default: 0
		},
		backgroundOverlayGradientSecondColor: {
			type: 'string',
			default: '#5b86e5'
		},
		backgroundOverlayGradientSecondLocation: {
			type: 'number',
			default: 100
		},
		backgroundOverlayGradientType: {
			type: 'string',
			default: 'linear'
		},
		backgroundOverlayGradientAngle: {
			type: 'number',
			default: 90
		},
		backgroundOverlayGradientPosition: {
			type: 'string',
			default: 'center center'
		},
		backgroundOverlayFilterBlur: {
			type: 'number',
			default: 0
		},
		backgroundOverlayFilterBrightness: {
			type: 'number',
			default: 10
		},
		backgroundOverlayFilterContrast: {
			type: 'number',
			default: 10
		},
		backgroundOverlayFilterGrayscale: {
			type: 'number',
			default: 0
		},
		backgroundOverlayFilterHue: {
			type: 'number',
			default: 0
		},
		backgroundOverlayFilterSaturate: {
			type: 'number',
			default: 10
		},
		backgroundOverlayBlend: {
			type: 'string',
			default: 'normal'
		},
		borderType: {
			type: 'string',
			default: 'linked'
		},
		border: {
			type: 'number',
			default: 0
		},
		borderTop: {
			type: 'number',
			default: 0
		},
		borderRight: {
			type: 'number',
			default: 0
		},
		borderBottom: {
			type: 'number',
			default: 0
		},
		borderLeft: {
			type: 'number',
			default: 0
		},
		borderColor: {
			type: 'string',
			default: '#000000'
		},
		borderRadiusType: {
			type: 'string',
			default: 'linked'
		},
		borderRadius: {
			type: 'number',
			default: 0
		},
		borderRadiusTop: {
			type: 'number',
			default: 0
		},
		borderRadiusRight: {
			type: 'number',
			default: 0
		},
		borderRadiusBottom: {
			type: 'number',
			default: 0
		},
		borderRadiusLeft: {
			type: 'number',
			default: 0
		},
		boxShadow: {
			type: 'boolean',
			default: false
		},
		boxShadowColor: {
			type: 'string',
			default: '#000000'
		},
		boxShadowColorOpacity: {
			type: 'number',
			default: 50
		},
		boxShadowBlur: {
			type: 'number',
			default: 5
		},
		boxShadowSpread: {
			type: 'number',
			default: 0
		},
		boxShadowHorizontal: {
			type: 'number',
			default: 0
		},
		boxShadowVertical: {
			type: 'number',
			default: 0
		},
		dividerTopType: {
			type: 'string',
			default: 'none'
		},
		dividerTopColor: {
			type: 'string',
			default: '#000000'
		},
		dividerTopWidth: {
			type: 'number',
			default: 100
		},
		dividerTopWidthTablet: {
			type: 'number',
			default: 100
		},
		dividerTopWidthMobile: {
			type: 'number',
			default: 100
		},
		dividerTopHeight: {
			type: 'number',
			default: 100
		},
		dividerTopHeightTablet: {
			type: 'number',
			default: 100
		},
		dividerTopHeightMobile: {
			type: 'number',
			default: 100
		},
		dividerTopInvert: {
			type: 'boolean',
			default: false
		},
		dividerBottomType: {
			type: 'string',
			default: 'none'
		},
		dividerBottomColor: {
			type: 'string',
			default: '#000000'
		},
		dividerBottomWidth: {
			type: 'number',
			default: 100
		},
		dividerBottomWidthTablet: {
			type: 'number',
			default: 100
		},
		dividerBottomWidthMobile: {
			type: 'number',
			default: 100
		},
		dividerBottomHeight: {
			type: 'number',
			default: 100
		},
		dividerBottomHeightTablet: {
			type: 'number',
			default: 100
		},
		dividerBottomHeightMobile: {
			type: 'number',
			default: 100
		},
		dividerBottomInvert: {
			type: 'boolean',
			default: false
		},
		hide: {
			type: 'boolean',
			default: false
		},
		hideTablet: {
			type: 'boolean',
			default: false
		},
		hideMobile: {
			type: 'boolean',
			default: false
		},
		columnsHTMLTag: {
			type: 'string',
			default: 'div'
		}
	},

	supports: {
		align: [ 'wide', 'full' ],
		html: false
	},

	save: props => {
		const {
			id,
			columns,
			layout,
			layoutTablet,
			layoutMobile,
			columnsGap,
			columnsWidth,
			horizontalAlign,
			verticalAlign,
			backgroundType,
			backgroundColor,
			backgroundImageURL,
			backgroundAttachment,
			backgroundPosition,
			backgroundRepeat,
			backgroundSize,
			backgroundGradientFirstColor,
			backgroundGradientFirstLocation,
			backgroundGradientSecondColor,
			backgroundGradientSecondLocation,
			backgroundGradientType,
			backgroundGradientAngle,
			backgroundGradientPosition,
			backgroundOverlayOpacity,
			backgroundOverlayType,
			backgroundOverlayColor,
			backgroundOverlayImageURL,
			backgroundOverlayAttachment,
			backgroundOverlayPosition,
			backgroundOverlayRepeat,
			backgroundOverlaySize,
			backgroundOverlayGradientFirstColor,
			backgroundOverlayGradientFirstLocation,
			backgroundOverlayGradientSecondColor,
			backgroundOverlayGradientSecondLocation,
			backgroundOverlayGradientType,
			backgroundOverlayGradientAngle,
			backgroundOverlayGradientPosition,
			backgroundOverlayFilterBlur,
			backgroundOverlayFilterBrightness,
			backgroundOverlayFilterContrast,
			backgroundOverlayFilterGrayscale,
			backgroundOverlayFilterHue,
			backgroundOverlayFilterSaturate,
			backgroundOverlayBlend,
			borderType,
			border,
			borderTop,
			borderRight,
			borderBottom,
			borderLeft,
			borderColor,
			borderRadiusType,
			borderRadius,
			borderRadiusTop,
			borderRadiusRight,
			borderRadiusBottom,
			borderRadiusLeft,
			boxShadow,
			boxShadowColor,
			boxShadowColorOpacity,
			boxShadowBlur,
			boxShadowSpread,
			boxShadowHorizontal,
			boxShadowVertical,
			dividerTopType,
			dividerTopColor,
			dividerTopInvert,
			dividerBottomType,
			dividerBottomColor,
			dividerBottomInvert,
			hide,
			hideTablet,
			hideMobile,
			columnsHTMLTag
		} = props.attributes;

		const Tag = columnsHTMLTag;

		let background, overlayBackground, borderStyle, borderRadiusStyle, boxShadowStyle;

		if ( 'color' === backgroundType ) {
			background = {
				background: backgroundColor
			};
		}

		if ( 'image' === backgroundType ) {
			background = {
				backgroundImage: `url( '${ backgroundImageURL }' )`,
				backgroundAttachment,
				backgroundPosition,
				backgroundRepeat,
				backgroundSize
			};
		}

		if ( 'gradient' === backgroundType ) {
			let direction;

			if ( 'linear' === backgroundGradientType ) {
				direction = `${ backgroundGradientAngle }deg`;
			} else {
				direction = `at ${ backgroundGradientPosition }`;
			}

			background = {
				background: `${ backgroundGradientType }-gradient( ${ direction }, ${ backgroundGradientFirstColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundGradientFirstLocation }%, ${ backgroundGradientSecondColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundGradientSecondLocation }% )`
			};
		}

		if ( 'linked' === borderType ) {
			borderStyle = {
				borderWidth: `${ border }px`,
				borderStyle: 'solid',
				borderColor: borderColor
			};
		}

		if ( 'unlinked' === borderType ) {
			borderStyle = {
				borderTopWidth: `${ borderTop }px`,
				borderRightWidth: `${ borderRight }px`,
				borderBottomWidth: `${ borderBottom }px`,
				borderLeftWidth: `${ borderLeft }px`,
				borderStyle: 'solid',
				borderColor: borderColor
			};
		}

		if ( 'linked' === borderRadiusType ) {
			borderRadiusStyle = {
				borderRadius: `${ borderRadius }px`
			};
		}

		if ( 'unlinked' === borderRadiusType ) {
			borderRadiusStyle = {
				borderTopLeftRadius: `${ borderRadiusTop }px`,
				borderTopRightRadius: `${ borderRadiusRight }px`,
				borderBottomRightRadius: `${ borderRadiusBottom }px`,
				borderBottomLeftRadius: `${ borderRadiusLeft }px`
			};
		}

		if ( true === boxShadow ) {
			boxShadowStyle = {
				boxShadow: `${ boxShadowHorizontal }px ${ boxShadowVertical }px ${ boxShadowBlur }px ${ boxShadowSpread }px ${  hexToRgba( ( boxShadowColor ? boxShadowColor : '#000000' ), boxShadowColorOpacity ) }`
			};
		}

		const style = {
			...background,
			...borderStyle,
			...borderRadiusStyle,
			...boxShadowStyle,
			justifyContent: horizontalAlign
		};

		if ( 'color' === backgroundOverlayType ) {
			overlayBackground = {
				background: backgroundOverlayColor,
				opacity: backgroundOverlayOpacity / 100
			};
		}

		if ( 'image' === backgroundOverlayType ) {
			overlayBackground = {
				backgroundImage: `url( '${ backgroundOverlayImageURL }' )`,
				backgroundAttachment: backgroundOverlayAttachment,
				backgroundPosition: backgroundOverlayPosition,
				backgroundRepeat: backgroundOverlayRepeat,
				backgroundSize: backgroundOverlaySize,
				opacity: backgroundOverlayOpacity / 100
			};
		}

		if ( 'gradient' === backgroundOverlayType ) {
			let direction;

			if ( 'linear' === backgroundOverlayGradientType ) {
				direction = `${ backgroundOverlayGradientAngle }deg`;
			} else {
				direction = `at ${ backgroundOverlayGradientPosition }`;
			}

			overlayBackground = {
				background: `${ backgroundOverlayGradientType }-gradient( ${ direction }, ${ backgroundOverlayGradientFirstColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundOverlayGradientFirstLocation }%, ${ backgroundOverlayGradientSecondColor || 'rgba( 0, 0, 0, 0 )' } ${ backgroundOverlayGradientSecondLocation }% )`,
				opacity: backgroundOverlayOpacity / 100
			};
		}

		const overlayStyle = {
			...overlayBackground,
			mixBlendMode: backgroundOverlayBlend,
			filter: `blur( ${ backgroundOverlayFilterBlur / 10 }px ) brightness( ${ backgroundOverlayFilterBrightness / 10 } ) contrast( ${ backgroundOverlayFilterContrast / 10 } ) grayscale( ${ backgroundOverlayFilterGrayscale / 100 } ) hue-rotate( ${ backgroundOverlayFilterHue }deg ) saturate( ${ backgroundOverlayFilterSaturate / 10 } )`
		};

		let innerStyle = {};

		if ( columnsWidth ) {
			innerStyle = {
				maxWidth: columnsWidth + 'px'
			};
		}

		const desktopLayout = hide ? '' : `has-desktop-${ layout }-layout`;
		const tabletLayout = hideTablet ? '' : `has-tablet-${ layoutTablet }-layout`;
		const mobileLayout = hideMobile ? '' : `has-mobile-${ layoutMobile }-layout`;

		const classes = classnames(
			props.className,
			`has-${ columns }-columns`,
			desktopLayout,
			tabletLayout,
			mobileLayout,
			{ 'hide-in-desktop': hide },
			{ 'hide-in-tablet': hideTablet },
			{ 'hide-in-mobile': hideMobile },
			`has-${ columnsGap }-gap`,
			`has-vertical-${ verticalAlign }`
		);

		return (
			<Tag
				className={ classes }
				id={ id }
				style={ style }
			>
				<div
					className="wp-themeisle-block-overlay"
					style={ overlayStyle }
				>
				</div>

				<Separators
					type="top"
					front={ true }
					style={ dividerTopType }
					fill={ dividerTopColor }
					invert={ dividerTopInvert }
				/>

				<div
					className="innerblocks-wrap"
					style={ innerStyle }
				>
					<InnerBlocks.Content />
				</div>

				<Separators
					type="bottom"
					front={ true }
					style={ dividerBottomType }
					fill={ dividerBottomColor }
					invert={ dividerBottomInvert }
				/>
			</Tag>
		);
	}
}, {
	attributes: {
		id: {
			type: 'string'
		},
		columns: {
			type: 'number'
		},
		layout: {
			type: 'string'
		},
		layoutTablet: {
			type: 'string',
			default: 'equal'
		},
		layoutMobile: {
			type: 'string',
			default: 'equal'
		},
		columnsGap: {
			type: 'string',
			default: 'default'
		},
		paddingType: {
			type: 'string',
			default: 'linked'
		},
		paddingTypeTablet: {
			type: 'string',
			default: 'linked'
		},
		paddingTypeMobile: {
			type: 'string',
			default: 'linked'
		},
		padding: {
			type: 'number',
			default: 20
		},
		paddingTablet: {
			type: 'number',
			default: 20
		},
		paddingMobile: {
			type: 'number',
			default: 20
		},
		paddingTop: {
			type: 'number',
			default: 20
		},
		paddingTopTablet: {
			type: 'number',
			default: 20
		},
		paddingTopMobile: {
			type: 'number',
			default: 20
		},
		paddingRight: {
			type: 'number',
			default: 20
		},
		paddingRightTablet: {
			type: 'number',
			default: 20
		},
		paddingRightMobile: {
			type: 'number',
			default: 20
		},
		paddingBottom: {
			type: 'number',
			default: 20
		},
		paddingBottomTablet: {
			type: 'number',
			default: 20
		},
		paddingBottomMobile: {
			type: 'number',
			default: 20
		},
		paddingLeft: {
			type: 'number',
			default: 20
		},
		paddingLeftTablet: {
			type: 'number',
			default: 20
		},
		paddingLeftMobile: {
			type: 'number',
			default: 20
		},
		marginType: {
			type: 'string',
			default: 'unlinked'
		},
		marginTypeTablet: {
			type: 'string',
			default: 'unlinked'
		},
		marginTypeMobile: {
			type: 'string',
			default: 'unlinked'
		},
		margin: {
			type: 'number',
			default: 20
		},
		marginTablet: {
			type: 'number',
			default: 20
		},
		marginMobile: {
			type: 'number',
			default: 20
		},
		marginTop: {
			type: 'number',
			default: 20
		},
		marginTopTablet: {
			type: 'number',
			default: 20
		},
		marginTopMobile: {
			type: 'number',
			default: 20
		},
		marginBottom: {
			type: 'number',
			default: 20
		},
		marginBottomTablet: {
			type: 'number',
			default: 20
		},
		marginBottomMobile: {
			type: 'number',
			default: 20
		},
		columnsWidth: {
			type: 'number'
		},
		horizontalAlign: {
			type: 'string',
			default: 'unset'
		},
		columnsHeight: {
			type: 'string',
			default: 'auto'
		},
		columnsHeightCustom: {
			type: 'number'
		},
		columnsHeightCustomTablet: {
			type: 'number'
		},
		columnsHeightCustomMobile: {
			type: 'number'
		},
		verticalAlign: {
			type: 'string',
			default: 'unset'
		},
		backgroundType: {
			type: 'string',
			default: 'color'
		},
		backgroundColor: {
			type: 'string'
		},
		backgroundImageID: {
			type: 'number'
		},
		backgroundImageURL: {
			type: 'string'
		},
		backgroundAttachment: {
			type: 'string',
			default: 'scroll'
		},
		backgroundPosition: {
			type: 'string',
			default: 'top left'
		},
		backgroundRepeat: {
			type: 'string',
			default: 'repeat'
		},
		backgroundSize: {
			type: 'string',
			default: 'auto'
		},
		backgroundGradientFirstColor: {
			type: 'string',
			default: '#36d1dc'
		},
		backgroundGradientFirstLocation: {
			type: 'number',
			default: 0
		},
		backgroundGradientSecondColor: {
			type: 'string',
			default: '#5b86e5'
		},
		backgroundGradientSecondLocation: {
			type: 'number',
			default: 100
		},
		backgroundGradientType: {
			type: 'string',
			default: 'linear'
		},
		backgroundGradientAngle: {
			type: 'number',
			default: 90
		},
		backgroundGradientPosition: {
			type: 'string',
			default: 'center center'
		},
		backgroundOverlayOpacity: {
			type: 'number',
			default: 50
		},
		backgroundOverlayType: {
			type: 'string',
			default: 'color'
		},
		backgroundOverlayColor: {
			type: 'string'
		},
		backgroundOverlayImageID: {
			type: 'number'
		},
		backgroundOverlayImageURL: {
			type: 'string'
		},
		backgroundOverlayAttachment: {
			type: 'string',
			default: 'scroll'
		},
		backgroundOverlayPosition: {
			type: 'string',
			default: 'top left'
		},
		backgroundOverlayRepeat: {
			type: 'string',
			default: 'repeat'
		},
		backgroundOverlaySize: {
			type: 'string',
			default: 'auto'
		},
		backgroundOverlayGradientFirstColor: {
			type: 'string',
			default: '#36d1dc'
		},
		backgroundOverlayGradientFirstLocation: {
			type: 'number',
			default: 0
		},
		backgroundOverlayGradientSecondColor: {
			type: 'string',
			default: '#5b86e5'
		},
		backgroundOverlayGradientSecondLocation: {
			type: 'number',
			default: 100
		},
		backgroundOverlayGradientType: {
			type: 'string',
			default: 'linear'
		},
		backgroundOverlayGradientAngle: {
			type: 'number',
			default: 90
		},
		backgroundOverlayGradientPosition: {
			type: 'string',
			default: 'center center'
		},
		backgroundOverlayFilterBlur: {
			type: 'number',
			default: 0
		},
		backgroundOverlayFilterBrightness: {
			type: 'number',
			default: 10
		},
		backgroundOverlayFilterContrast: {
			type: 'number',
			default: 10
		},
		backgroundOverlayFilterGrayscale: {
			type: 'number',
			default: 0
		},
		backgroundOverlayFilterHue: {
			type: 'number',
			default: 0
		},
		backgroundOverlayFilterSaturate: {
			type: 'number',
			default: 10
		},
		backgroundOverlayBlend: {
			type: 'string',
			default: 'normal'
		},
		borderType: {
			type: 'string',
			default: 'linked'
		},
		border: {
			type: 'number',
			default: 0
		},
		borderTop: {
			type: 'number',
			default: 0
		},
		borderRight: {
			type: 'number',
			default: 0
		},
		borderBottom: {
			type: 'number',
			default: 0
		},
		borderLeft: {
			type: 'number',
			default: 0
		},
		borderColor: {
			type: 'string',
			default: '#000000'
		},
		borderRadiusType: {
			type: 'string',
			default: 'linked'
		},
		borderRadius: {
			type: 'number',
			default: 0
		},
		borderRadiusTop: {
			type: 'number',
			default: 0
		},
		borderRadiusRight: {
			type: 'number',
			default: 0
		},
		borderRadiusBottom: {
			type: 'number',
			default: 0
		},
		borderRadiusLeft: {
			type: 'number',
			default: 0
		},
		boxShadow: {
			type: 'boolean',
			default: false
		},
		boxShadowColor: {
			type: 'string',
			default: '#000000'
		},
		boxShadowColorOpacity: {
			type: 'number',
			default: 50
		},
		boxShadowBlur: {
			type: 'number',
			default: 5
		},
		boxShadowSpread: {
			type: 'number',
			default: 0
		},
		boxShadowHorizontal: {
			type: 'number',
			default: 0
		},
		boxShadowVertical: {
			type: 'number',
			default: 0
		},
		dividerTopType: {
			type: 'string',
			default: 'none'
		},
		dividerTopColor: {
			type: 'string',
			default: '#000000'
		},
		dividerTopWidth: {
			type: 'number',
			default: 100
		},
		dividerTopWidthTablet: {
			type: 'number',
			default: 100
		},
		dividerTopWidthMobile: {
			type: 'number',
			default: 100
		},
		dividerTopHeight: {
			type: 'number',
			default: 100
		},
		dividerTopHeightTablet: {
			type: 'number',
			default: 100
		},
		dividerTopHeightMobile: {
			type: 'number',
			default: 100
		},
		dividerTopInvert: {
			type: 'boolean',
			default: false
		},
		dividerBottomType: {
			type: 'string',
			default: 'none'
		},
		dividerBottomColor: {
			type: 'string',
			default: '#000000'
		},
		dividerBottomWidth: {
			type: 'number',
			default: 100
		},
		dividerBottomWidthTablet: {
			type: 'number',
			default: 100
		},
		dividerBottomWidthMobile: {
			type: 'number',
			default: 100
		},
		dividerBottomHeight: {
			type: 'number',
			default: 100
		},
		dividerBottomHeightTablet: {
			type: 'number',
			default: 100
		},
		dividerBottomHeightMobile: {
			type: 'number',
			default: 100
		},
		dividerBottomInvert: {
			type: 'boolean',
			default: false
		},
		hide: {
			type: 'boolean',
			default: false
		},
		hideTablet: {
			type: 'boolean',
			default: false
		},
		hideMobile: {
			type: 'boolean',
			default: false
		},
		columnsHTMLTag: {
			type: 'string',
			default: 'div'
		}
	},

	supports: {
		align: [ 'wide', 'full' ],
		html: false
	},

	save: ({
		attributes,
		className
	}) => {
		const Tag = attributes.columnsHTMLTag;

		let background, overlayBackground, borderStyle, borderRadiusStyle, boxShadowStyle;

		if ( 'color' === attributes.backgroundType ) {
			background = {
				background: attributes.backgroundColor
			};
		}

		if ( 'image' === attributes.backgroundType ) {
			background = {
				backgroundImage: `url( '${ attributes.backgroundImageURL }' )`,
				backgroundAttachment: attributes.backgroundAttachment,
				backgroundPosition: attributes.backgroundPosition,
				backgroundRepeat: attributes.backgroundRepeat,
				backgroundSize: attributes.backgroundSize
			};
		}

		if ( 'gradient' === attributes.backgroundType ) {
			let direction;

			if ( 'linear' === attributes.backgroundGradientType ) {
				direction = `${ attributes.backgroundGradientAngle }deg`;
			} else {
				direction = `at ${ attributes.backgroundGradientPosition }`;
			}

			background = {
				background: `${ attributes.backgroundGradientType }-gradient( ${ direction }, ${ attributes.backgroundGradientFirstColor || 'rgba( 0, 0, 0, 0 )' } ${ attributes.backgroundGradientFirstLocation }%, ${ attributes.backgroundGradientSecondColor || 'rgba( 0, 0, 0, 0 )' } ${ attributes.backgroundGradientSecondLocation }% )`
			};
		}

		if ( 'linked' === attributes.borderType ) {
			borderStyle = {
				borderWidth: `${ attributes.border }px`,
				borderStyle: 'solid',
				borderColor: attributes.borderColor
			};
		}

		if ( 'unlinked' === attributes.borderType ) {
			borderStyle = {
				borderTopWidth: `${ attributes.borderTop }px`,
				borderRightWidth: `${ attributes.borderRight }px`,
				borderBottomWidth: `${ attributes.borderBottom }px`,
				borderLeftWidth: `${ attributes.borderLeft }px`,
				borderStyle: 'solid',
				borderColor: attributes.borderColor
			};
		}

		if ( 'linked' === attributes.borderRadiusType ) {
			borderRadiusStyle = {
				borderRadius: `${ attributes.borderRadius }px`
			};
		}

		if ( 'unlinked' === attributes.borderRadiusType ) {
			borderRadiusStyle = {
				borderTopLeftRadius: `${ attributes.borderRadiusTop }px`,
				borderTopRightRadius: `${ attributes.borderRadiusRight }px`,
				borderBottomRightRadius: `${ attributes.borderRadiusBottom }px`,
				borderBottomLeftRadius: `${ attributes.borderRadiusLeft }px`
			};
		}

		if ( true === attributes.boxShadow ) {
			boxShadowStyle = {
				boxShadow: `${ attributes.boxShadowHorizontal }px ${ attributes.boxShadowVertical }px ${ attributes.boxShadowBlur }px ${ attributes.boxShadowSpread }px ${  hexToRgba( ( attributes.boxShadowColor ? attributes.boxShadowColor : '#000000' ), attributes.boxShadowColorOpacity ) }`
			};
		}

		const style = {
			...background,
			...borderStyle,
			...borderRadiusStyle,
			...boxShadowStyle,
			justifyContent: attributes.horizontalAlign
		};

		if ( 'color' === attributes.backgroundOverlayType ) {
			overlayBackground = {
				background: attributes.backgroundOverlayColor,
				opacity: attributes.backgroundOverlayOpacity / 100
			};
		}

		if ( 'image' === attributes.backgroundOverlayType ) {
			overlayBackground = {
				backgroundImage: `url( '${ attributes.backgroundOverlayImageURL }' )`,
				backgroundAttachment: attributes.backgroundOverlayAttachment,
				backgroundPosition: attributes.backgroundOverlayPosition,
				backgroundRepeat: attributes.backgroundOverlayRepeat,
				backgroundSize: attributes.backgroundOverlaySize,
				opacity: attributes.backgroundOverlayOpacity / 100
			};
		}

		if ( 'gradient' === attributes.backgroundOverlayType ) {
			let direction;

			if ( 'linear' === attributes.backgroundOverlayGradientType ) {
				direction = `${ attributes.backgroundOverlayGradientAngle }deg`;
			} else {
				direction = `at ${ attributes.backgroundOverlayGradientPosition }`;
			}

			overlayBackground = {
				background: `${ attributes.backgroundOverlayGradientType }-gradient( ${ direction }, ${ attributes.backgroundOverlayGradientFirstColor || 'rgba( 0, 0, 0, 0 )' } ${ attributes.backgroundOverlayGradientFirstLocation }%, ${ attributes.backgroundOverlayGradientSecondColor || 'rgba( 0, 0, 0, 0 )' } ${ attributes.backgroundOverlayGradientSecondLocation }% )`,
				opacity: attributes.backgroundOverlayOpacity / 100
			};
		}

		const overlayStyle = {
			...overlayBackground,
			mixBlendMode: attributes.backgroundOverlayBlend
		};

		let innerStyle = {};

		if ( attributes.columnsWidth ) {
			innerStyle = {
				maxWidth: attributes.columnsWidth + 'px'
			};
		}

		const desktopLayout = attributes.hide ? '' : `has-desktop-${ attributes.layout }-layout`;
		const tabletLayout = attributes.hideTablet ? '' : `has-tablet-${ attributes.layoutTablet }-layout`;
		const mobileLayout = attributes.hideMobile ? '' : `has-mobile-${ attributes.layoutMobile }-layout`;

		const classes = classnames(
			className,
			`has-${ attributes.columns }-columns`,
			desktopLayout,
			tabletLayout,
			mobileLayout,
			{ 'hide-in-desktop': attributes.hide },
			{ 'hide-in-tablet': attributes.hideTablet },
			{ 'hide-in-mobile': attributes.hideMobile },
			`has-${ attributes.columnsGap }-gap`,
			`has-vertical-${ attributes.verticalAlign }`
		);

		return (
			<Tag
				className={ classes }
				id={ attributes.id }
				style={ style }
			>
				<div
					className="wp-themeisle-block-overlay"
					style={ overlayStyle }
				>
				</div>

				<Separators
					type="top"
					front={ true }
					style={ attributes.dividerTopType }
					fill={ attributes.dividerTopColor }
					invert={ attributes.dividerTopInvert }
				/>

				<div
					className="innerblocks-wrap"
					style={ innerStyle }
				>
					<InnerBlocks.Content />
				</div>

				<Separators
					type="bottom"
					front={ true }
					style={ attributes.dividerBottomType }
					fill={ attributes.dividerBottomColor }
					invert={ attributes.dividerBottomInvert }
				/>
			</Tag>
		);
	}
} ];

export default deprecated;
