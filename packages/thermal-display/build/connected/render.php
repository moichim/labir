<?php

/**
 * @see https://github.com/WordPress/gutenberg/blob/trunk/docs/reference-guides/block-api/block-metadata.md#render
 */

// Vytvoř manažera
$manager = new WallManager(true);

$authUrl = $manager->getAuthUrl();
$authToken = $manager->getAuthToken();


// Eventuálně procesuj formulář

// Připrav si údaje pro vykreslení
$isLoggedIn = $manager->isLoggedIn();


?>

<div <?= get_block_wrapper_attributes(); ?>>

	<connected-app
		server-url="<?= esc_attr($attributes["serverUrl"]); ?>"
		api-root="<?= esc_attr($attributes["apiRoot"]); ?>"
		folder-path="<?= esc_attr($attributes["path"]); ?>"
		<?php if ($attributes["fileName"]) : ?>file-name="<?= esc_attr($attributes["fileName"]); ?>" <?php endif; ?>
		palette="<?= esc_attr($attributes["palette"]); ?>"
		displaymode="<?= esc_attr($attributes["displayMode"]); ?>"
		folder-mode="<?= esc_attr($attributes["folderMode"]); ?>"
		grid-grouping="<?= esc_attr($attributes["by"]); ?>"
		<?= $authUrl && $authToken ? 'auth-url="' . esc_attr($authUrl) . '" auth-token="' . esc_attr($authToken) . '"' : "" ?>
		<?= $attributes["disableLogging"] ? 'disable-logging="true"' : "" ?>
	></connected-app>

</div>