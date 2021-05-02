difference = 0;
leftWristX = 0;
rightWristX = 0;

function setup(){
    canvas = createCanvas(600, 600);
    canvas.center();

    video = createCapture(VIDEO);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose', gotPoses);
}

function draw(){
    background('#ff9933');
    document.getElementById("font_size").innerHTML = "Font size will be = " + difference + "px";
    textSize(difference);
    fill('#128754');
    text('Reynaldo', 50, 400);
}

function modelLoaded(){
    console.log('PoseNet is Initialized!!!!!!');
}

function gotPoses(results){
    if(results.length > 0)
    {
     console.log(results);
     rightWristX = results[0].pose.rightWrist.x;
     leftWristX = results[0].pose.leftWrist.x;
     difference = floor(leftWristX - rightWristX);
     console.log("leftWristX = " + leftWristX + "rightWristX = " + rightWristX + "difference = " + difference);
    }
}