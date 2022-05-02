noseX=0;
noseY=0;
difference = 0;
rightWristX = 0;
leftWristX = 0;

function setup(){
    canvas = createCanvas(400, 500);
    canvas.position(550,150);

    video = createCapture(VIDEO);
    video.size(550,500);

    poseNet = ml5.poseNet(video, modelLoaded);
    poseNet.on('pose',gotPoses);
}

function draw() {
    background('#969A97');
    document.getElementById("text_side").innerHTML = "Width and Height of a text will be = " + difference + "px";
    fill('blue');
    stroke('blue');
    text("HELLO WORLD",noseX,noseY,difference);
}

function modelLoaded() {
    console.log('PoseNet is Initialized!');
}

function gotPoses(results)
{
    if(results.length > 0)
    {
        console.log(results);
        noseX = results[0].pose.nose.x;
        noseY = results[0].pose.nose.y;
        console.log("noseX = " +" noseY = " + noseY);

        leftWristX = results[0].pose.leftWrist.x;
        rightWristX = results[0].pose.rightWrist.x;
        difference = floor(leftWristX - rightWristX);

        console.log("leftWrist =" + leftWristX + "rightWristX = "+ rightWristX + "difference = " + difference);
    }
    }