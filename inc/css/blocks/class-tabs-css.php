<?php
/**
 * Css handling logic for blocks.
 *
 * @package ThemeIsle\GutenbergBlocks\CSS\Blocks
 */

namespace ThemeIsle\GutenbergBlocks\CSS\Blocks;

use ThemeIsle\GutenbergBlocks\Base_CSS;

use ThemeIsle\GutenbergBlocks\CSS\CSS_Utility;

/**
 * Class Progress_Bar_CSS
 */
class Tabs_CSS extends Base_CSS {

	/**
	 * The namespace under which the blocks are registered.
	 *
	 * @var string
	 */
	public $block_prefix = 'tabs';

	/**
	 * Generate Progress Bar CSS
	 *
	 * @param mixed $block Block data.
	 * @return string
	 * @since   1.3.0
	 * @access  public
	 */
	public function render_css( $block ) {

		$css = new CSS_Utility( $block );

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-header.active div',
				'properties' => array(
					array(
						'property' => 'color',
						'value'    => 'activeTitleColor',
					),
				),
			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-header',
				'properties' => array(
					array(
						'property' => 'border-width',
						'value'    => 'borderWidth',
					),
				),
			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-header.active',
				'properties' => array(
					array(
						'property' => 'background-color',
						'value'    => 'tabColor',
					),
					array(
						'property' => 'border-width',
						'value'    => 'borderWidth',
					),
					array(
						'property' => 'border-color',
						'value'    => 'borderColor',
					),
				),
			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-header.active::before',
				'properties' => array(
					array(
						'property' => 'border-width',
						'value'    => 'borderWidth',
					),
					array(
						'property' => 'border-color',
						'value'    => 'borderColor',
					),
				),
			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-header.active::after',
				'properties' => array(
					array(
						'property' => 'border-width',
						'value'    => 'borderWidth',
					),
					array(
						'property' => 'border-color',
						'value'    => 'borderColor',
					),
				),
			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-item-header',
				'properties' => array(
					array(
						'property' => 'border-width',
						'value'    => 'borderWidth',
					),
					array(
						'property' => 'border-color',
						'value'    => 'borderColor',
					),
				),
			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-item-header.active',
				'properties' => array(
					array(
						'property' => 'background-color',
						'value'    => 'tabColor',
					),
					array(
						'property' => 'color',
						'value'    => 'activeTitleColor',
					),
				),

			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-item-content',
				'properties' => array(
					array(
						'property' => 'border-width',
						'value'    => 'borderWidth',
					),
					array(
						'property' => 'border-color',
						'value'    => 'borderColor',
					),
				),
			)
		);

		$css->add_item(
			array(
				'selector'   => ' .wp-block-themeisle-blocks-tabs-item-content.active',
				'properties' => array(
					array(
						'property' => 'background-color',
						'value'    => 'tabColor',
					),
				),
			)
		);

		$style = $css->generate();

		return $style;
	}
}