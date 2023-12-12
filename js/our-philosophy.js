//video controls
let customControls = document.getElementById("custom-controls");
let playBtn = document.getElementById("play-btn");
let video = document.getElementById("video-section-video");
let fullScreenBtn = document.getElementById("full-screen-btn");
customControls.onclick = (e) => { 
    fullScreenBtn.classList.add("show-full-screen-btn");
    if(video.paused && e.target.id != "full-screen-btn" && e.target.id != "full-screen-icon"){
        video.play();
        playBtn.classList.add('hide-btn');
    }else if(e.target.id != "full-screen-btn" && e.target.id != "full-screen-icon"){
        video.pause();
        playBtn.classList.remove('hide-btn');

    }
}
fullScreenBtn.onclick = () => {
    video.requestFullscreen();
}