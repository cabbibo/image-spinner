// JavaScript Document
var shapeRandom;
var widthRandom;
var xRandom;
var yRandom;
var speedRandom;



var rightSpin;

//Some of the Shapes
SacGeo1={
	 //Total 17
	//innerShapes 
	shapes:["img/brokeShape/innerShape1.png",
	"img/brokeShape/innerShape2.png",

	
	
	//fullShapes
	"img/brokeShape/fullShape1.png",
	"img/brokeShape/fullShape2.png",
	"img/brokeShape/fullShape3.png",
	
	//outerRings
	"img/brokeShape/outerRing1.png",
	"img/brokeShape/outerRing2.png",
	"img/brokeShape/outerRing3.png",
	"img/brokeShape/outerRing4.png",
	
	//hexSquare
	"img/hexSquare/hexSquare1.png",
	
	//spike
	"img/spike/spike11.png",
	"img/spike/spike21.png",
	"img/spike/spike31.png",
	
	//sacGeo1
	"img/sacGeo1/sacGeo11.png",
	"img/sacGeo1/sacGeo12.png"
	
	],
	
	
	ratio:1
};
	
function getRandomShape(shape){
    var rand= Math.ceil(Math.random()*shape.shapes.length);
	shapeRandom= shape.shapes[rand-1];
	
};

function getRandWidth(){
	widthRandom=windowY*Math.random();
}

function getRandPos(){
	xRandom=windowX*Math.random();
	yRandom=windowY*Math.random();
}

function getRandSpeed(){
	var randomSpeed = (Math.random()*.01);
	if (randomSpeed<=.001){
		randomSpeed=.001;
	}
	console.log(randomSpeed);
	if (rightSpin==0){
		speedRandom=randomSpeed;
		rightSpin=1;
	}else{
		speedRandom=-randomSpeed;
		rightSpin=0;
	}
}

function createItem(object,number){
	
	getRandWidth();
	getRandPos();
	
	for (var i=0;i<number;i++){
		
		getRandomShape(object);
		getRandSpeed();
		initImage(shapeRandom,widthRandom/((i+5)/5),object.ratio,xRandom,yRandom,speedRandom,0);
		
	}
	
}


function createDefItem(object,number,posX,posY,startWidth){
	
	widthRandom=startWidth;
	for (var i=0;i<number;i++){
		
		getRandomShape(object);
		getRandSpeed();
		initImage(shapeRandom,widthRandom/((i+5)/5),object.ratio,posX,posY,speedRandom,0);
		
	}
	
}


function createWorld(object,numOfObjects,complexity){
	for (var i=0;i<numOfObjects;i++){
		createItem(object,complexity);
	}
}

function createDefWorld(object,numOfObjects,complexity,posX,posY,startWidth){
	
	for (var i=0;i<numOfObjects;i++){
		createDefItem(object,complexity,posX,posY,startWidth);
	}
}
//initImage(imgSrc,objWidth,objRatio,posX,posY,speeds,startAngle)
	
function Creator(){
	this.randomPos = createItem(object,number);
	this.definedPos=createPosItem(object,number,posX,posY);
	this.multipleRandom=createWorld(object,numOfObjects,complexity);
}
	

