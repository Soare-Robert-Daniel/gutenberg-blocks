<?php
/**
 * Css handling logic for Column.
 *
 * @package ThemeIsle\GutenbergBlocks\CSS\Blocks
 */

namespace ThemeIsle\GutenbergBlocks\CSS\Blocks;

use ThemeIsle\GutenbergBlocks\Base_CSS;

/**
 * Class Advanced_Column_CSS
 */
class Advanced_Column_CSS extends Base_CSS {

	/**
	 * The namespace under which the blocks are registered.
	 *
	 * @var string
	 */
	public $block_prefix = 'advanced-column';


	/**
	 * Generate Advanced Column CSS
	 *
	 * @param mixed $block Block data.
	 * @return string
	 * @since   1.3.0
	 * @access  public
	 */
	public function render_css( $block ) {
		$attr  = $block['attrs'];
		$style = '';

		if ( isset( $attr['id'] ) ) {
			$style .= '#' . $attr['id'] . ' {' . "\n";
			if ( 'linked' === $this->get_attr_value( ( isset( $attr['paddingType'] ) ? $attr['paddingType'] : null ), 'linked' ) ) {
				$style .= '	padding: ' . $this->get_attr_value( ( isset( $attr['padding'] ) ? $attr['padding'] : null ), 20 ) . 'px;' . "\n";
			}

			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['paddingType'] ) ? $attr['paddingType'] : null ), 'linked' ) ) {
				$style .= '	padding-top: ' . $this->get_attr_value( ( isset( $attr['paddingTop'] ) ? $attr['paddingTop'] : null ), 20 ) . 'px;' . "\n";
				$style .= '	padding-right: ' . $this->get_attr_value( ( isset( $attr['paddingRight'] ) ? $attr['paddingRight'] : null ), 20 ) . 'px;' . "\n";
				$style .= '	padding-bottom: ' . $this->get_attr_value( ( isset( $attr['paddingBottom'] ) ? $attr['paddingBottom'] : null ), 20 ) . 'px;' . "\n";
				$style .= '	padding-left: ' . $this->get_attr_value( ( isset( $attr['paddingLeft'] ) ? $attr['paddingLeft'] : null ), 20 ) . 'px;' . "\n";
			}

			if ( 'linked' === $this->get_attr_value( ( isset( $attr['marginType'] ) ? $attr['marginType'] : null ), 'unlinked' ) ) {
				$style .= '	margin-top: ' . $this->get_attr_value( ( isset( $attr['margin'] ) ? $attr['margin'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['margin'] ) ) {
					$style .= '	margin-right: ' . $this->get_attr_value( ( isset( $attr['margin'] ) ? $attr['margin'] : null ), 20 ) . 'px;' . "\n";
				}
				$style .= '	margin-bottom: ' . $this->get_attr_value( ( isset( $attr['margin'] ) ? $attr['margin'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['margin'] ) ) {
					$style .= '	margin-left: ' . $this->get_attr_value( ( isset( $attr['margin'] ) ? $attr['margin'] : null ), 20 ) . 'px;' . "\n";
				}
			}

			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['marginType'] ) ? $attr['marginType'] : null ), 'unlinked' ) ) {
				$style .= '	margin-top: ' . $this->get_attr_value( ( isset( $attr['marginTop'] ) ? $attr['marginTop'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginRight'] ) ) {
					$style .= '	margin-right: ' . $this->get_attr_value( ( isset( $attr['marginRight'] ) ? $attr['marginRight'] : null ), 0 ) . 'px;' . "\n";
				}
				$style .= '	margin-bottom: ' . $this->get_attr_value( ( isset( $attr['marginBottom'] ) ? $attr['marginBottom'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginLeft'] ) ) {
					$style .= '	margin-left: ' . $this->get_attr_value( ( isset( $attr['marginLeft'] ) ? $attr['marginLeft'] : null ), 0 ) . 'px;' . "\n";
				}
			}

			if ( 'color' === $this->get_attr_value( ( isset( $attr['backgroundType'] ) ? $attr['backgroundType'] : null ), 'color' ) ) {
				if ( isset( $attr['backgroundColor'] ) ) {
					$style .= '	background: ' . $this->get_attr_value( ( isset( $attr['backgroundColor'] ) ? $attr['backgroundColor'] : null ) ) . ';' . "\n";
				}
			}

			if ( 'image' === $this->get_attr_value( ( isset( $attr['backgroundType'] ) ? $attr['backgroundType'] : null ), 'color' ) ) {
				if ( isset( $attr['backgroundImageURL'] ) ) {
					$style .= '	background-image: url( \'' . $this->get_attr_value( ( isset( $attr['backgroundImageURL'] ) ? $attr['backgroundImageURL'] : null ) ) . '\' );' . "\n";
				}

				if ( isset( $attr['backgroundAttachment'] ) ) {
					$style .= '	background-attachment: ' . $this->get_attr_value( ( isset( $attr['backgroundAttachment'] ) ? $attr['backgroundAttachment'] : null ), 'scroll' ) . ';' . "\n";
				}

				if ( isset( $attr['backgroundPosition'] ) ) {
					$style .= '	background-position: ' . $this->get_attr_value( ( isset( $attr['backgroundPosition'] ) ? $attr['backgroundPosition'] : null ), 'top left' ) . ';' . "\n";
				}

				if ( isset( $attr['backgroundRepeat'] ) ) {
					$style .= '	background-repeat: ' . $this->get_attr_value( ( isset( $attr['backgroundRepeat'] ) ? $attr['backgroundRepeat'] : null ), 'repeat' ) . ';' . "\n";
				}

				if ( isset( $attr['backgroundSize'] ) ) {
					$style .= '	background-size: ' . $this->get_attr_value( ( isset( $attr['backgroundSize'] ) ? $attr['backgroundSize'] : null ), 'auto' ) . ';' . "\n";
				}
			}

			if ( 'gradient' === $this->get_attr_value( ( isset( $attr['backgroundType'] ) ? $attr['backgroundType'] : null ), 'color' ) ) {
				$direction;

				if ( 'linear' === $this->get_attr_value( ( isset( $attr['backgroundGradientType'] ) ? $attr['backgroundGradientType'] : null ), 'linear' ) ) {
					$direction = $this->get_attr_value( ( isset( $attr['backgroundGradientAngle'] ) ? $attr['backgroundGradientAngle'] : null ), 90 ) . 'deg';
				} else {
					$direction = 'at ' . $this->get_attr_value( ( isset( $attr['backgroundGradientPosition'] ) ? $attr['backgroundGradientPosition'] : null ), 'center center' );
				}

				$style .= '	background: ' . $this->get_attr_value( ( isset( $attr['backgroundGradientType'] ) ? $attr['backgroundGradientType'] : null ), 'linear' ) . '-gradient( ' .  $direction . ', ' . $this->get_attr_value( ( isset( $attr['backgroundGradientFirstColor'] ) ? $attr['backgroundGradientFirstColor'] : null ), 'rgba( 0, 0, 0, 0 )' ) . ' '  . $this->get_attr_value( ( isset( $attr['backgroundGradientFirstLocation'] ) ? $attr['backgroundGradientFirstLocation'] : null ), 0 ) . '%, ' . $this->get_attr_value( ( isset( $attr['backgroundGradientSecondColor'] ) ? $attr['backgroundGradientSecondColor'] : null ), 'rgba( 0, 0, 0, 0 )' ) . ' '  . $this->get_attr_value( ( isset( $attr['backgroundGradientSecondLocation'] ) ? $attr['backgroundGradientSecondLocation'] : null ), 100 ) . '% );' . "\n";
			}

			if ( 'linked' === $this->get_attr_value( ( isset( $attr['borderType'] ) ? $attr['borderType'] : null ), 'linked' ) ) {
				$style .= '	border-width: ' . $this->get_attr_value( ( isset( $attr['border'] ) ? $attr['border'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-style: solid;' . "\n";
				$style .= '	border-color: ' . $this->get_attr_value( ( isset( $attr['borderColor'] ) ? $attr['borderColor'] : null ), '#000000' ) . ';' . "\n";
			}

			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['borderType'] ) ? $attr['borderType'] : null ), 'linked' ) ) {
				$style .= '	border-top-width: ' . $this->get_attr_value( ( isset( $attr['borderTop'] ) ? $attr['borderTop'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-right-width: ' . $this->get_attr_value( ( isset( $attr['borderRight'] ) ? $attr['borderRight'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-bottom-width: ' . $this->get_attr_value( ( isset( $attr['borderBottom'] ) ? $attr['borderBottom'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-left-width: ' . $this->get_attr_value( ( isset( $attr['borderLeft'] ) ? $attr['borderLeft'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-style: solid;' . "\n";
				$style .= '	border-color: ' . $this->get_attr_value( ( isset( $attr['borderColor'] ) ? $attr['borderColor'] : null ), '#000000' ) . ';' . "\n";
			}

			if ( 'linked' === $this->get_attr_value( ( isset( $attr['borderRadiusType'] ) ? $attr['borderRadiusType'] : null ), 'linked' ) ) {
				$style .= '	border-radius: ' . $this->get_attr_value( ( isset( $attr['borderRadius'] ) ? $attr['borderRadius'] : null ), 0 ) . 'px;' . "\n";
			}

			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['borderRadiusType'] ) ? $attr['borderRadiusType'] : null ), 'linked' ) ) {
				$style .= '	border-top-left-radius: ' . $this->get_attr_value( ( isset( $attr['borderRadiusTop'] ) ? $attr['borderRadiusTop'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-top-right-radius: ' . $this->get_attr_value( ( isset( $attr['borderRadiusRight'] ) ? $attr['borderRadiusRight'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-bottom-right-radius: ' . $this->get_attr_value( ( isset( $attr['borderRadiusBottom'] ) ? $attr['borderRadiusBottom'] : null ), 0 ) . 'px;' . "\n";
				$style .= '	border-bottom-left-radius: ' . $this->get_attr_value( ( isset( $attr['borderRadiusLeft'] ) ? $attr['borderRadiusLeft'] : null ), 0 ) . 'px;' . "\n";
			}

			if ( isset( $attr['boxShadow'] ) && true === $attr['boxShadow'] ) {
				$style .= '	box-shadow: ' . $this->get_attr_value( ( isset( $attr['boxShadowHorizontal'] ) ? $attr['boxShadowHorizontal'] : null ), 0 ) . 'px ' . $this->get_attr_value( ( isset( $attr['boxShadowVertical'] ) ? $attr['boxShadowVertical'] : null ), 0 ) . 'px ' . $this->get_attr_value( ( isset( $attr['boxShadowBlur'] ) ? $attr['boxShadowBlur'] : null ), 5 ) . 'px ' . $this->get_attr_value( ( isset( $attr['boxShadowSpread'] ) ? $attr['boxShadowSpread'] : null ), 1 ) . 'px ' . $this->hex2rgba( $this->get_attr_value( ( isset( $attr['boxShadowColor'] ) ? $attr['boxShadowColor'] : null ), '#000' ), $this->get_attr_value( ( isset( $attr['boxShadowColorOpacity'] ) ? $attr['boxShadowColorOpacity'] : null ), '50' ) / 100 ) . ';' . "\n";
			}
			$style .= '}' . "\n \n";

			if ( isset( $attr['columnWidth'] ) ) {
				$style         .= '@media ( min-width: 960px )  {' . "\n";
					$style     .= '	#' . $attr['id'] . ' {' . "\n";
						$style .= '		flex-basis: ' . $this->get_attr_value( floatval( $attr['columnWidth'] ) ) . '%;' . "\n";
					$style     .= '	}' . "\n \n";
				$style         .= '}' . "\n \n";
			}

			$style .= '@media ( min-width: 600px ) and ( max-width: 960px )  {' . "\n";

				$style .= '	#' . $attr['id'] . ' {' . "\n";
			if ( 'linked' === $this->get_attr_value( ( isset( $attr['paddingTypeTablet'] ) ? $attr['paddingTypeTablet'] : null ), 'linked' ) ) {
				$style .= '		padding: ' . $this->get_attr_value( ( isset( $attr['paddingTablet'] ) ? $attr['paddingTablet'] : null ), 20 ) . 'px;' . "\n";
			}
	
			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['paddingTypeTablet'] ) ? $attr['paddingTypeTablet'] : null ), 'linked' ) ) {
				$style .= '		padding-top: ' . $this->get_attr_value( ( isset( $attr['paddingTopTablet'] ) ? $attr['paddingTopTablet'] : null ), 20 ) . 'px;' . "\n";
				$style .= '		padding-right: ' . $this->get_attr_value( ( isset( $attr['paddingRightTablet'] ) ? $attr['paddingRightTablet'] : null ), 20 ) . 'px;' . "\n";
				$style .= '		padding-bottom: ' . $this->get_attr_value( ( isset( $attr['paddingBottomTablet'] ) ? $attr['paddingBottomTablet'] : null ), 20 ) . 'px;' . "\n";
				$style .= '		padding-left: ' . $this->get_attr_value( ( isset( $attr['paddingLeftTablet'] ) ? $attr['paddingLeftTablet'] : null ), 20 ) . 'px;' . "\n";
			}

			if ( 'linked' === $this->get_attr_value( ( isset( $attr['marginTypeTablet'] ) ? $attr['marginTypeTablet'] : null ), 'unlinked' ) ) {
				$style .= '		margin-top: ' . $this->get_attr_value( ( isset( $attr['marginTablet'] ) ? $attr['marginTablet'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginTablet'] ) ) {
					$style .= '		margin-right: ' . $this->get_attr_value( ( isset( $attr['marginTablet'] ) ? $attr['marginTablet'] : null ), 20 ) . 'px;' . "\n";
				}
				$style .= '		margin-bottom: ' . $this->get_attr_value( ( isset( $attr['marginTablet'] ) ? $attr['marginTablet'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginTablet'] ) ) {
					$style .= '		margin-left: ' . $this->get_attr_value( ( isset( $attr['marginTablet'] ) ? $attr['marginTablet'] : null ), 20 ) . 'px;' . "\n";
				}
			}
	
			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['marginTypeTablet'] ) ? $attr['marginTypeTablet'] : null ), 'unlinked' ) ) {
				$style .= '		margin-top: ' . $this->get_attr_value( ( isset( $attr['marginTopTablet'] ) ? $attr['marginTopTablet'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginRightTablet'] ) ) {
					$style .= '		margin-right: ' . $this->get_attr_value( ( isset( $attr['marginRightTablet'] ) ? $attr['marginRightTablet'] : null ), 0 ) . 'px;' . "\n";
				}
				$style .= '		margin-bottom: ' . $this->get_attr_value( ( isset( $attr['marginBottomTablet'] ) ? $attr['marginBottomTablet'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginLeftTablet'] ) ) {
					$style .= '		margin-left: ' . $this->get_attr_value( ( isset( $attr['marginLeftTablet'] ) ? $attr['marginLeftTablet'] : null ), 0 ) . 'px;' . "\n";
				}
			}
				$style .= '	}' . "\n \n";

			$style .= '}' . "\n \n";

			$style .= '@media ( max-width: 600px )  {' . "\n";

				$style .= '	#' . $attr['id'] . ' {' . "\n";
			if ( 'linked' === $this->get_attr_value( ( isset( $attr['paddingTypeMobile'] ) ? $attr['paddingTypeMobile'] : null ), 'linked' ) ) {
				$style .= '		padding: ' . $this->get_attr_value( ( isset( $attr['paddingMobile'] ) ? $attr['paddingMobile'] : null ), 20 ) . 'px;' . "\n";
			}
	
			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['paddingTypeMobile'] ) ? $attr['paddingTypeMobile'] : null ), 'linked' ) ) {
				$style .= '		padding-top: ' . $this->get_attr_value( ( isset( $attr['paddingTopMobile'] ) ? $attr['paddingTopMobile'] : null ), 20 ) . 'px;' . "\n";
				$style .= '		padding-right: ' . $this->get_attr_value( ( isset( $attr['paddingRightMobile'] ) ? $attr['paddingRightMobile'] : null ), 20 ) . 'px;' . "\n";
				$style .= '		padding-bottom: ' . $this->get_attr_value( ( isset( $attr['paddingBottomMobile'] ) ? $attr['paddingBottomMobile'] : null ), 20 ) . 'px;' . "\n";
				$style .= '		padding-left: ' . $this->get_attr_value( ( isset( $attr['paddingLeftMobile'] ) ? $attr['paddingLeftMobile'] : null ), 20 ) . 'px;' . "\n";
			}

			if ( 'linked' === $this->get_attr_value( ( isset( $attr['marginTypeMobile'] ) ? $attr['marginTypeMobile'] : null ), 'unlinked' ) ) {
				$style .= '		margin-top: ' . $this->get_attr_value( ( isset( $attr['marginMobile'] ) ? $attr['marginMobile'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginMobile'] ) ) {
					$style .= '		margin-right: ' . $this->get_attr_value( ( isset( $attr['marginMobile'] ) ? $attr['marginMobile'] : null ), 20 ) . 'px;' . "\n";
				}
				$style .= '		margin-bottom: ' . $this->get_attr_value( ( isset( $attr['marginMobile'] ) ? $attr['marginMobile'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginMobile'] ) ) {
					$style .= '		margin-left: ' . $this->get_attr_value( ( isset( $attr['marginMobile'] ) ? $attr['marginMobile'] : null ), 20 ) . 'px;' . "\n";
				}
			}
	
			if ( 'unlinked' === $this->get_attr_value( ( isset( $attr['marginTypeMobile'] ) ? $attr['marginTypeMobile'] : null ), 'unlinked' ) ) {
				$style .= '		margin-top: ' . $this->get_attr_value( ( isset( $attr['marginTopMobile'] ) ? $attr['marginTopMobile'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginRightMobile'] ) ) {
					$style .= '		margin-right: ' . $this->get_attr_value( ( isset( $attr['marginRightMobile'] ) ? $attr['marginRightMobile'] : null ), 0 ) . 'px;' . "\n";
				}
				$style .= '		margin-bottom: ' . $this->get_attr_value( ( isset( $attr['marginBottomMobile'] ) ? $attr['marginBottomMobile'] : null ), 20 ) . 'px;' . "\n";
				if ( isset( $attr['marginLeftMobile'] ) ) {
					$style .= '		margin-left: ' . $this->get_attr_value( ( isset( $attr['marginLeftMobile'] ) ? $attr['marginLeftMobile'] : null ), 0 ) . 'px;' . "\n";
				}
			}
				$style .= '	}' . "\n \n";

			$style .= '}' . "\n \n";
		}

		return $style;
	}
}
