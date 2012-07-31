var setupFps = function() {
	var lastTime = Date.now();
	var hits = 0;
	var fps = 'Waiting';
	var hit = function() {
		hits++;
		var nowTime = Date.now();
		if (nowTime.getTime() - lastTime.getTime() > 1000) {
			var dt = nowTime.getTime() - lastTime.getTime();
			fps = '' + Math.round(hits * 1000 / dt);
			hits = 0;
			lastTime = nowTime;
		}
		return fps;
	};
	
	return hit;
};



var hit = setupFps();

var render = function(){

ctx.fillStyle = '#333333';
ctx.beginPath();
ctx.rect(0, 0, width, height);
ctx.closePath();
ctx.fill();
ctx.fillStyle = '#ffffff';
ctx.fillText(hit(), 30, 30);
};