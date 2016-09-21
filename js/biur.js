var canvaswidth = 800;
var canvasheight = 600;
var canvas = document.getElementById('canvas');
var context = canvas.getContext('2d');
canvas.width = canvaswidth;
canvas.height = canvasheight;
var radius = 50;
var image = new Image();
var clippingRegin = {x:400 , y:200 , r:50} ;
image.src = "img/ee.jpg";
image.onload = function(e){
	inintCanvas();
};

function inintCanvas()
{	
	clippingRegin = {x:Math.random()*700 +50, y:Math.random()*500 +50, r:radius} ;
	draw(image);
}
function setClippingRegion()
{
	context.beginPath();
	context.arc(clippingRegin.x,clippingRegin.y , clippingRegin.r , 0 ,Math.PI*2 ,false);
	context.clip();
}
function draw(image)
{
	context.clearRect(0,0,canvas.width,canvas.height);
	context.save();
	setClippingRegion( clippingRegin);
	context.drawImage(image,0,0,800,600);
	context.restore();
}
function show()
{
//	clippingRegin.r = 1000;
//	draw(image,clippingRegin);
	 var setid = setInterval(
		function(){
			clippingRegin.r +=20;
			if (clippingRegin.r > 1000) {
				clearInterval(setid );
			}
			draw(image ,clippingRegin);
		},
		30
	)
}
function reset()
{
	
	inintCanvas();
}
