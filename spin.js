
//THINGS YOU ARE LEARNING:
// MORE SPECIFIC VARIABLES
var windowX=window.innerWidth;
var windowY=window.innerHeight;

var objNum=0;

var objs = []

function initImage(imgSrc,objWidth,objRatio,posX,posY,speeds,startAngle){
	
	var canvasName="canvas"+objNum;
		
	var newcontent = document.createElement('canvas'); 
	newcontent.id = canvasName;
	var scr = document.getElementById('canvases');  
	scr.parentNode.insertBefore(newcontent, scr);
	newcontent.style.position="absolute";
	newcontent.style.top="0px";
	newcontent.style.left="0px";
	
	img = new Image();
	img.src=imgSrc;
	
	objs.push({
		canvas:document.getElementById(canvasName),
		canvasName:"canvas"+objNum,
		image:img,
		width:objWidth,
		height:objWidth*objRatio,
		centerX:posX,
		centerY:posY,
		speed:speeds,
		angle:startAngle,
		
	});
	
	var obj=objs[objNum];
	
	//initializing the properties that are dependednt on already created properties

	
	//hypSquare is the length of the of the hypotonus w
	obj.hypSquare=Math.sqrt((obj.width*obj.width)+(obj.height*obj.height));
	obj.angleInSquare=Math.atan(obj.height/obj.width);
	obj.angleTotal=obj.angle+obj.angleInSquare;
	
	//offX and offY is basically how much the image needs to move to be centered
	obj.offX=(obj.hypSquare* Math.cos(obj.angleTotal))/2;
	obj.offY=(obj.hypSquare* Math.sin(obj.angleTotal))/2;
	
	//the position that will draw the image at centerX & centerY
	//needs a different offX & offY every time it is rotated
	obj.centeredX=obj.centerX-obj.offX;
	obj.centeredY=obj.centerY-obj.offY;
	
	
	obj.ctx=obj.canvas.getContext('2d');
	
	
	
	//debugging
	
	console.log(objNum);
	console.log(obj.speed);
	console.log(obj.canvas);
	console.log(obj.ctx);
	console.log(obj.width);
	console.log(obj.hypSquare);
	console.log(obj.angleInSquare);
	console.log(obj.offX);
	console.log(obj.centerX);
	console.log(obj.centeredX);
	console.log(obj.angleTotal);
	
	
	resize(objNum);
	
	//This is what starts the Image rotating.
	rotateDrawing(objNum);
	
	objNum +=1;
	
}


//This is the main Function! whichImg will define the canvas as well as image
//rotateAngle is how much the image will rotate by every time function is called (in this case 5 ms)

function rotateDrawing(whichImg){
	
	//This is the function that centers the object
	centerImg(whichImg);
	
	objs[whichImg].ctx.translate(objs[whichImg].centeredX,objs[whichImg].centeredY);
	objs[whichImg].ctx.rotate(objs[whichImg].angle);
	objs[whichImg].ctx.drawImage(objs[whichImg].image,0,0,objs[whichImg].height,objs[whichImg].width);
	
	objs[whichImg].angle+=objs[whichImg].speed;
	
	var t=setTimeout(function(){rotateDrawing(whichImg)},5);
	
	
}

//This function is was changes the position of the image so that it is centered around centerX
function centerImg(whichImg){
	objs[whichImg].angleTotal=objs[whichImg].angle+objs[whichImg].angleInSquare;
	objs[whichImg].offX=(objs[whichImg].hypSquare* Math.cos(objs[whichImg].angleTotal))/2;
	objs[whichImg].offY=(objs[whichImg].hypSquare* Math.sin(objs[whichImg].angleTotal))/2;
	objs[whichImg].centeredX=(objs[whichImg].centerX)-objs[whichImg].offX;
	objs[whichImg].centeredY=(objs[whichImg].centerY)-objs[whichImg].offY;
	clear_canvas_rectangle(whichImg);
}


//Clears the canvas each time it is called

function clear_canvas_rectangle (whichImg){
	objs[whichImg].canvas.width =objs[whichImg].canvas.width;
}
  
//resizes the canvas to the screen size, so nothing is cut off
function resize(whichImg){
 	objs[whichImg].canvas.width=window.innerWidth;
	objs[whichImg].canvas.height=window.innerHeight;
}
