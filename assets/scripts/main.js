// main.js
var vol_num = document.getElementById("volume-number");
var vol_slide = document.getElementById("volume-slider");
var vol_img = document.getElementById("volume-image");
var print = document.getElementById("volume-text");
var sound_selection = document.getElementById("audio-selection");
var sound = document.getElementById("horn-sound");
var air = document.getElementById("radio-air-horn");
var car = document.getElementById("radio-car-horn");
var party = document.getElementById("radio-party-horn");
var sound_img = document.getElementById("sound-image");
var button = document.getElementById("honk-btn");

vol_num.onchange = function() {
    vol_slide.value = vol_num.value;
    var vol = vol_num.value;
    sound.volume = vol/100;
    if (vol == 0) {
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
    } else if (vol <= 33) {
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
    } else if (vol <= 66) {
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
    }

    if (vol == 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
};

vol_slide.onchange = function() {
    vol_num.value = vol_slide.value;
    var vol = vol_slide.value;
    sound.volume = vol/100;
    if (vol == 0) {
        vol_img.src = "./assets/media/icons/volume-level-0.svg";
    } else if (vol <= 33) {
        vol_img.src = "./assets/media/icons/volume-level-1.svg";
    } else if (vol <= 66) {
        vol_img.src = "./assets/media/icons/volume-level-2.svg";
    } else {
        vol_img.src = "./assets/media/icons/volume-level-3.svg";
    }

    if (vol == 0) {
        button.disabled = true;
    } else {
        button.disabled = false;
    }
}

sound_selection.onclick = function() {
    if (air.checked) {
        sound.src = "./assets/media/audio/air-horn.mp3";
        sound_img.src = "./assets/media/images/air-horn.svg";
    } else if (car.checked) {
        sound.src = "./assets/media/audio/car-horn.mp3";
        sound_img.src = "./assets/media/images/car.svg";
    } else {
        sound.src = "./assets/media/audio/party-horn.mp3";
        sound_img.src = "./assets/media/images/party-horn.svg";
    }
}

button.onclick = function(event) {
    event.preventDefault();
    sound.play();
}
