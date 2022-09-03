noseX=0;
noseY=0;
difference = 0;
rightwristX = 0;
leftwristX = 0;

function setup(){
    video = createCapture(VIDEO);
    video.size(550, 500);

    canvas= createCanvas(550, 500);
    canvas.position(660,250);

    poseNet = ml5.poseNet(video, modelLoaded);

    poseNet.on('pose', gotPoses);
}

function draw(){

    background('#3EB489');
    fill('#89cff0');
    stroke('#89cff0');
    textSize(difference);
    text('kashish', noseX, noseY);
    document.getElementById("square_side").innerHTML="font size ="+ difference + "px";

}

function modelLoaded(){
    console.log('posenet is initinalized!');
}

function gotPoses(results){
    if (results.length > 0){
   console.log (results);

   noseX = results[0].pose.nose.x;
   noseY = results[0].pose.nose.y;

   console.log("noseX=" + noseX + "noseY="+ noseY);
   leftWristX = results[0].pose.leftWrist.x;
   rightWristX = results[0].pose.rightWrist.x;   
   difference = floor(leftWristX - rightWristX);

   console.log("leftwristX=" + leftWristX + "rightwristX=" + rightWristX + "difference=" + difference);



    }
}





