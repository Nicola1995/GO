function setDesktopStyle(w,  h)
{
	return;
}
function setMobileStyle(scale, h)
{
	var b = document.getElementById('myBody');
	b.style.backgroundSize = (100*scale).toString() + '%';
	b.style.backgroundPosition = "0 0";
}

function onResize()
{
	var H = document.documentElement.clientHeight;
	var W = document.documentElement.clientWidth;
	if (W >= 700)
		setDesktopStyle(W, H);
	var imgW = 800.0;	
	var imgH = 788.0;	
	var scaleX = W / imgW;
	var scaleY = H / imgH;
	var scale = 1.0;	
	if (scaleY > scaleX)
		scale = scaleY / scaleX;
	if (W < 700)
		return setMobileStyle(scale, H);
	var b = document.getElementById('myBody');
	var sdvig = -240 * scaleX/scale  + 100.0/scale; 	
	b.style.backgroundSize = (100.0 * scale).toString() + "%";	
	b.style.backgroundPosition = "center "+sdvig.toString()+"px";
}
