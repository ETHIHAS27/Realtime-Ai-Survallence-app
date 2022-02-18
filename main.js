video = "";
status="";

function preload(){

 video = createVideo('video.mp4')
 video.hide()
}

function draw(){

image(video,0,0,480,380)

}

function setup(){

    canvas = createCanvas(480,380);
    canvas.center();

}

function start(){

    objectDetector = ml5.objectDetector('cocossd',modelLoaded);

    document.getElementById('status').innerHTML == "Status: Detecting"

}

function modelLoaded(){
    console.log("model loaded!")
    status - true;

    video.loop();
    video.volume(1);
    video.speed(1);
}