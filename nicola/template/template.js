function setDesktopStyle(w,  h)
{
	var el = document.getElementById('divTL');
	el.style.height = '150px';
	el.style.width = '34%';
	el.style.float = 'left';
	el = document.getElementById('divTR');
	el.style.height = '150px';
	el.style.marginLeft = '35%';
	el = document.getElementById('divBL');
	el.style.height = (h-150).toString() + 'px';
	el.style.float = 'left';
	el.style.width = '34%';
	el.style.display = 'inline';	
	el = document.getElementById('divBR');
	el.style.height = (h-150).toString() + 'px';
	el.style.marginLeft = '35%';
}
function setMobileStyle(scale, h)
{
	var el = document.getElementById('divTL');
	el.style.height = '130px';
	el.style.width = '100%';
	el.style.float = 'none';
	el = document.getElementById('divTR');
	el.style.height = '70px';
	el.style.marginLeft = '0%';
	el.style.width = '100%';
	el = document.getElementById('divBL');
	el.style.display = 'none';
	el.style.float = 'none';
	el = document.getElementById('divBR');
	el.style.height = (h-250).toString() + 'px';
	el.style.width = '100%';	
	el.style.marginLeft = 0;
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


