song = "";

function preload()
{
song = loadSound('music.mp3');
}

leftWristX='0';
leftWristY='0';
rightWristX='0';
rightWristY='0';



function setup(){
    canvas = creatCanvas(600,500);
    canvas.center();

    video = createCapture(VIDEO);
    video.hide();

    poseNet=ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function modelLoaded(){
    console.log('PoseNet is Initialized')};

    function gotPoses(results){
        if(results.legnth > 0){
            console.log(results);
            leftWristX = results[0].pose.leftWristX.x;
            leftWristY = results[0].pose.leftWristX.y;
            console.log("leftWristX =" + leftWristX + "leftWristY =" + leftWristY);
    
           rightWristX = results[0].pose.rightWristX.x;
            rightWristY = results[0].pose.rightWristX.y;
            console.log("rightWristX =" + rightWristX + "rightWristY =" + rightWristY);
        }
    }

function draw(){
    image(video, 0, 0, 600, 500);
}

function play(){
    song.play();
    song.setVolume(1);
    song.rate(1);
}




