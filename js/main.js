document.addEventListener('DOMContentLoaded', () => {
    const vinyl = document.getElementById('vinyl');
    const audioPlayer = document.getElementById('audioPlayer');

    if (!vinyl || !audioPlayer) {
        console.error('Vinyl or audio player not found');
        return;
    }

    vinyl.addEventListener('click', () => {
        if (audioPlayer.paused) {
            audioPlayer.play();
            console.log('Audio playing');
        } else {
            audioPlayer.pause();
            console.log('Audio paused');
        }
    });
});