// This script uses spin.js to create more complex objects that are randomly generated

//GLOBAL VARIABLES
var shapeRandom;
var widthRandom;
var xRandom;
var yRandom;
var speedRandom;
var rightSpin;

//Each object defined is one that can be called upon by 
SacGeo1={
	
	shapes:[
	//innerShapes
	"img/sacGeo1/innerShape1.png",
	"img/sacGeo1/innerShape2.png",

	//fullShapes
	"img/sacGeo1/fullShape1.png",
	"img/sacGeo1/fullShape2.png",
	"img/sacGeo1/fullShape3.png",
	
	//outerRings
	"img/sacGeo1/outerRing1.png",
	"img/sacGeo1/outerRing2.png",
	"img/sacGeo1/outerRing3.png",
	"img/sacGeo1/outerRing4.png",
	
	//hexSquare
	"img/sacGeo1/hexSquare1.png",
	
	//spike
	"img/sacGeo1/spike11.png",
	"img/sacGeo1/spike21.png",
	"img/sacGeo1/spike31.png",
	
	//sacGeo1
	"img/sacGeo1/sacGeo11.png",
	"img/sacGeo1/sacGeo12.png"
	
	],
	
	
	ratio:1
};
	
	
//will get a random shape, from the array of shapes you have created
function getRandomShape(shape){
    var rand= Math.ceil(Math.random()*shape.shapes.length);
	shapeRandom= shape.shapes[rand-1];
	
};

//Gets a random width that is within the range
function getRandWidth(greatest,smallest){
	var rangeRand=(greatest-smallest)*Math.random();
	
	widthRandom=greatest-rangeRand;
}


//gets a random position, that lies somewhere within the screen
function getRandPos(){
	xRandom=windowX*Math.random();
	yRandom=windowY*Math.random();
}


//gets a random speed of rotation, in Radians.
//lies within a specific range.
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


//creates an Item of multiple spinning images. 
//Each image will will be smaller then the one before it
//number defines how many images are part of the Item.
//random width, which is less then the greatest width
//and larger the smallest Width
//random position
function createItem(object,number,greatestWidth,smallestWidth){
	
	getRandWidth(greatestWidth,smallestWidth);
	getRandPos();
	
	for (var i=0;i<number;i++){
		
		getRandomShape(object);
		getRandSpeed();
		initImage(shapeRandom,widthRandom/((i+5)/5),object.ratio,xRandom,yRandom,speedRandom,0);
		
	}
	
}

//creates an Item of multiple spinning images. 
//Each image will will be smaller then the one before it
//number defines how many images are part of the Item.
//defined width and position
function createDefItem(object,number,posX,posY,startWidth){
	
	widthRandom=startWidth;
	for (var i=0;i<number;i++){
		
		getRandomShape(object);
		getRandSpeed();
		initImage(shapeRandom,widthRandom/((i+5)/5),object.ratio,posX,posY,speedRandom,0);
		
	}
	
}


//creates a random world using the functionality of createItem
function createWorld(object,numOfObjects,complexity,greatestWidth,smallestWidth){
	for (var i=0;i<numOfObjects;i++){
		createItem(object,complexity,greatestWidth,smallestWidth);
	}
}


