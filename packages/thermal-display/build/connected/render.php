<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

 if ( !function_exists( "labir_aat_value_exists" ) ) {
	function labir_aat_value_exists( $value ) {
		return $value !== null;
	}
 }

 $t = $attributes["t"];
 $v = $attributes["v"];
 $ha = $attributes["ha"];

?>

<div <?= get_block_wrapper_attributes(); ?>>

		<connected-app
 			server-url="<?= esc_attr( $attributes["serverUrl"] ); ?>"
 			api-root="<?= esc_attr( $attributes["apiRoot"] ); ?>"
			folder-path="<?= esc_attr( $attributes["path"] ); ?>"
			<?php if ($attributes["fileName"]) : ?>file-name="<?= esc_attr( $attributes["fileName"] ); ?>"<?php endif; ?>
			palette="<?= esc_attr( $attributes["palette"] ); ?>"
			displaymode="<?= esc_attr( $attributes["displayMode"] ); ?>"
			folder-mode="<?= esc_attr( $attributes["folderMode"] ); ?>"
			grid-grouping="<?= esc_attr( $attributes["by"] ); ?>"
		></connected-app>

</div>


