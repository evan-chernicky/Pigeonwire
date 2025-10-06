document.addEventListener('DOMContentLoaded', function() {
    const lotties = document.querySelectorAll('lottie-player')

    // Add tap to play functionality if isTapToPlay attribute is true
    lotties.forEach(player => {
        const isTapToPlay = player.getAttribute('isTapToPlay');
        if (isTapToPlay === 'true') {
            let isPlaying = false;
            player.addEventListener('click', () => {
                if (!isPlaying) {
                    isPlaying = true;
                    player.stop();      // ensure starts from frame 0
                    player.play();      // start playback
                }
            })
            player.addEventListener("complete", () => {
                isPlaying = false;
                player.stop();        // resets to the first frame
            });
        }
    })
})