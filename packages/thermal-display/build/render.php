<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>
<p <?php echo get_block_wrapper_attributes(); ?>>
	<?php esc_html_e( 'Copyright Date Block – hello from a dynamic block!', 'copyright-date-block' ); ?>
	<?php var_dump($attributes); ?>
</p>

<div style="width: 100%;">
	<thermal-file-app url="<?= $attributes["thermal"]?>" palette=<?= $attributes["palette"]; ?> author="<?= $attributes["author"] ?>" license="<?= $attributes["license"] ?>"></thermal-file-app>
</div>
