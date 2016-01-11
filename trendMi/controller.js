//get the points i.e coordinates
var polline=document.getElementById("polyline1");
var points=polline.points;

//define some constanst
var height=550;
//init
for(var i=0;i<points.length;i++){
    points[i].y=height-Math.round(Math.random()*height);
    console.log(points[i].y);
    }
//edit
setInterval(function(){
    for(var i=0;i<points.length-1;i++){
        //push forward
        points[i].y=points[i+1].y
        console.log(points[i].y);
    }
    //initiate the last one
    points[points.length-1].y=height-Math.round(Math.random()*height);
},1000);