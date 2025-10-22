<?php
$videoURL = $attributes['videoURL'] ?? null;
$poster = $attributes['posterURL'] ?? '';

if ($videoURL) {?>
    <div class="video-background">
        <div class="video-background__content-container">
            <?php echo $content; ?>
        </div>
        <video style="max-width: 100%;" muted autoPlay loop playsinline webkit-playsinline poster="<?php echo esc_url($poster); ?>">
              <source src="<?php echo esc_url($videoURL); ?>" type="video/mp4" />
                Your browser does not support HTML5 video.
        </video>
    </div>
<?php } ?>
