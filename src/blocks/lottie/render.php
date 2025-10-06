<?php
$src = esc_url( $attributes['src'] ?? '' );
$autoplay = ! empty( $attributes['isTapToPlay'] ) ? '' : 'autoplay';
$loop = ! empty( $attributes['isTapToPlay'] ) ? '' : 'loop';
$tapToPlay = ! empty( $attributes['isTapToPlay'] ) ? 'isTapToPlay="true"' : '';
$pointer = ! empty( $attributes['isTapToPlay'] ) ? 'style="cursor: pointer;"' : '';

?>
<?php if ( $src ) : ?>
<lottie-player
  src="<?php echo $src; ?>"
  background="transparent"
  speed="1"
  <?php echo $autoplay; ?>
  <?php echo $loop; ?>
  <?php echo $tapToPlay; ?>
  <?php echo $pointer; ?>
  >
</lottie-player>
<?php endif; ?>