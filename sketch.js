var database;

var drawing=[];
var currentPath=[];

function setup(){
    canvas = createCanvas(1536,1200);
    canvas.mousePressed(startPath);
    var config={
        apiKey: "AIzaSyCQQtCZTOIE6aDASUfTW9hbaiRjhmQs1V4",
    authDomain: "canvas-a61dc.firebaseapp.com",
    databaseURL: "https://canvas-a61dc.firebaseio.com",
    projectId: "canvas-a61dc",
    storageBucket: "canvas-a61dc.appspot.com",
    messagingSenderId: "325389950928",
    };
    firebase.initializeApp(config);
    database=firebase.database();
}

function startPath(){
    currentPath=[];
    drawing.push(currentPath);
}
function draw(){
    background("black");
    if(mouseIsPressed){
        var point={
            x: mouseX ,
            y: mouseY
        };
        currentPath.push(point);
    }
    stroke("white");
    strokeWeight(8);
    noFill();
    for (var i =0; i < drawing.length; i++){
     var path= drawing[i];
     beginShape();
    for(var j = 0; j< path.length; j++){
      vertex(path[j].x,path[j].y)
      }
      endShape();
    }
}