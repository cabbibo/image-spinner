
//THINGS YOU ARE LEARNING:
// MORE SPECIFIC VARIABLES
var windowX=window.innerWidth;
var windowY=window.innerHeight;


//Height and width of object drawn in  draw(); Defines the center of Rotations

var height=[];
var width=[];
var hypSquare=[];

//Used in the centering of the Rectangle
//the angle that is the center of the square to a corner (defined by vars height and width)
var angleWithinSquare=[];



//ANGLE of DRAWING
var angles =[];
/*this is the angle that includes the hypotonus. 
This is only really important  when there is user input, but not reason not to include it...
*/
var anglesTotal = [];


//this is the angle we are going to have for adding momentum
var dAngle=.01;


//These variables are used so that the image will spin around its center instead of top left corner
var offx = [];
var offy = [];

//these variables are where the center will be for the rotated object, not actually the center of the page
var centeredX=[];
var centeredY=[];

//THESE where the object will appear;
var centerX=[];
var centerY=[];

//These are the images that will be used
var	imageMatrix=[]

//These are the canvase that will be used
var canvases =[];

var speed=[];

var numOfObjects=0;



function initImage(whichImg,size,posX,posY,speeds){
	var canvasName="canvas"+numOfObjects;
	
	var newcontent = document.createElement('canvas'); 
	newcontent.id = canvasName;
	var scr = document.getElementById('canvases');  
	scr.parentNode.insertBefore(newcontent, scr);
	
	
	newcontent.style.position="absolute";
	newcontent.style.top="0px";
	newcontent.style.left="0px";
	
	  
	imageMatrix.push(whichImg);
	width.push(size);
	height.push(size);
	centerX.push(posX);
	centerY.push(posY);
	canvases.push(canvasName);
	speed.push(speeds);
	offx.push(0);
	offy.push(0);
	centeredX.push(0);
	centeredY.push(0);
	angles.push(0);
	anglesTotal.push(0);
	angleWithinSquare.push(0);
	hypSquare.push(0);
	
	resize(numOfObjects);
	
	//getting specific canvas
	var canvas = document.getElementById(canvases[numOfObjects]);
	var ctx = canvas.getContext('2d');
	
	rotateDrawing(numOfObjects, ctx);
	
	//document.getElementById("canvases").innerHTML("hello");
	
	numOfObjects +=1;
	
		
	
	
}


//This is the main Function! whichImg will define the canvas as well as image
//rotateAngle is how much the image will rotate by every time function is called (in this case 5 ms)

function rotateDrawing(whichImg, ctx){
	//defining which Img to spin
	var img = new Image();
    img.src = imageMatrix[whichImg];	
	
	centerImg(whichImg);
	
	ctx.translate(centeredX[whichImg],centeredY[whichImg]);
	ctx.rotate(angles[whichImg]);
	ctx.drawImage(img,0,0,height[whichImg],width[whichImg]);
	
	
	
	angles[whichImg]+=speed[whichImg];
	
	var t=setTimeout(function(){rotateDrawing(whichImg, ctx)},5);
	
	
}


function centerImg(whichImg){
	clear_canvas_rectangle(whichImg);
	getHype(whichImg);
	getSquareAngle(whichImg);
	getTotalAngle(whichImg);
	getOffsets(whichImg);
	getCenter(whichImg);
}

function clear_canvas_rectangle (whichImg)
{
	var canvas = document.getElementById(canvases[whichImg]);
    canvas.width = canvas.width;
	
}
  
  
function resize(whichImg){
	var canvas = document.getElementById(canvases[whichImg]);
 	canvas.width=window.innerWidth;
	canvas.height=window.innerHeight;
	
}

//Finds Hypotenus of square
function getHype(whichImg){
	hypSquare[whichImg]=Math.sqrt((width[whichImg]*width[whichImg])+(height[whichImg]*height[whichImg]));
	//alert(hypSquare[whichImg]);		
}


//gets the angle  between the width  hypotenus
function getSquareAngle(whichImg){
	angleWithinSquare[whichImg]=Math.atan(height[whichImg]/width[whichImg]);
	//alert(angleWithinSquare[whichImg]);	
}


//gets angle that suqare should be rotated to (slightly more then angle because of horizontal)
function getTotalAngle(whichImg){
	anglesTotal[whichImg]=angles[whichImg]+angleWithinSquare[whichImg];
	//alert(anglesTotal[whichImg]);
}


//Gets the offest for center of square. will change the center 
//so that object is rotated around center of square and not corner 
function getOffsets(whichImg){
	offx[whichImg]=(hypSquare[whichImg]* Math.cos(anglesTotal[whichImg]))/2;
	offy[whichImg]=(hypSquare[whichImg]* Math.sin(anglesTotal[whichImg]))/2;
	//alert("getOFFSETS");	
}


//puts center of  rotation at centerX, centerY.
function getCenter(whichImg){
	centeredX[whichImg]=(centerX[whichImg])-offx[whichImg];
	centeredY[whichImg]=(centerY[whichImg])-offy[whichImg];
	//alert("getCenters");		
	
}

