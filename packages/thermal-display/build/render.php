<?php
/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */
?>

<?php if ( $attributes["thermal"] ): ?>

<div <?= get_block_wrapper_attributes(); ?>>
	

		<thermal-desktop-app 
			url="<?= $attributes["thermal"]?>" 
			palette=<?= $attributes["palette"]; ?> 
			author="<?= $attributes["author"] ?>" 
			license="<?= $attributes["license"] ?>"
			label="<?= $attributes["label"] ?>"
			description="<?= $attributes["description"] ?>"
			<?php if ( $attributes["from"] && $attributes["to"] ): ?>
				from="<?= $attributes["from"] ?>"
				to="<?= $attributes["to"]; ?>"
			<?php endif; ?>
		></thermal-desktop-app>

</div>

<?php endif; ?>

