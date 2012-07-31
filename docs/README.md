Lightweight Script to spin images, and examples on how to use it.
Works best in chrome, and although it functions in other canvas enabled browsers, 
it tends to be prohibatively slow.

To use the most basic functionality, simply call: initImage(imgSrc,objWidth,objRatio,posX,posY,speeds,startAngle) whenever you want to initialize the object.
To see

Included as well is creator.js which adds functionality to initImage, in order to randomly generate shapes. 
There are a few options in this script:

createDefItem(object,number,posX,posY,startWidth) will create a single Item with as many images as defined by "number". Its center will be located at (posX,posY) and the largest image will have a width of startWidth. The images will be chosen by object, which needs to be created, preferably in a separate js file.
To see this in action, check out shape3.html

object will have two properties: shapes and ratio.
object.shape should be an array of path names that you want the object to pull from when it chooses random images. The ratio is the Width to Height ratio.

createWorld(object,numOfObjects,complexity,greatestWidth,smallestWidth) uses this same object to populate a "world" of spinning Items. The amount of these Items is defined by numOfObjects, where as the amount of images that makes up each Item is defined by complexity. The greatestWidth and smallestWidth are used to define the range of widths that these Items will be. 
To see this in action check out shape1.html

MIT License, see more in license.md

If you use this code, please let me know, so I can feel warm inside.

Feedback is GREATLY appreciated.

Cabbibo
http://cabbibo.com
isaaclandoncohen@gmail.com
