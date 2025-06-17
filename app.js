// script.js

// Play/Pause button
console.log("JavaScript is working!");

const playBtn = document.querySelector('.player-control-icon:nth-child(3)');
let isPlaying = false;

playBtn.addEventListener('click', () => {
    isPlaying = !isPlaying;
    if (isPlaying) {
        playBtn.style.opacity = '1';
        console.log("Playing music...");
        // Replace with audio play logic if you add audio
    } else {
        playBtn.style.opacity = '0.7';
        console.log("Paused music...");
        // Replace with audio pause logic
    }
});

// Progress Bar functionality
const progressBar = document.querySelector('.progress-bar');
const currentTime = document.querySelector('.curr-time');
const totalTime = document.querySelector('.tot-time');

// Simulate progress for now
let progress = 0;
setInterval(() => {
    if (isPlaying && progress < 100) {
        progress++;
        progressBar.value = progress;
        currentTime.textContent = `00:${progress.toString().padStart(2, '0')}`;
    }
}, 1000);

// Volume Control
const volumeBar = document.querySelector('.vol-bar');

volumeBar.addEventListener('input', (e) => {
    const volume = e.target.value;
    console.log(`Volume: ${volume}`);
    // You can use this to adjust audio volume if you add audio
});

// Album info change example
const albumTitle = document.querySelector('.album-para-a');
const albumArtist = document.querySelector('.album-para-b');

document.querySelector('.card').addEventListener('click', () => {
    albumTitle.textContent = "Top 50 - Global";
    albumArtist.textContent = "Spotify Charts";
    console.log("Changed song info");
});
