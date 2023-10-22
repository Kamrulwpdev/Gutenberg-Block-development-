<?php


defined('ABSPATH') || exit;

function basic_block_editor_assets() {
  wp_enqueue_script(
    'block-service',
    plugins_url('block.build.js', __FILE__ ),
        array('wp-blocks', 'wp-editor', 'wp-components', 'wp-i18n', 'wp-element'),
    filemtime( plugin_dir_path(__FILE__) . 'block.build.js')
  );
}
add_action('enqueue_block_editor_assets', 'basic_block_editor_assets');


?>