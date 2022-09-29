const video = document.getElementById("video")[0].track;

// Position the cue at the top
video.activeCues[0].line = 0;

// Position the cue at the bottom (default)
video.activeCues[0].line = -1;

// Move the cue up 3 lines to make room for video controls
video.activeCues[0].line = -4;