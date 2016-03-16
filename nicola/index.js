var slideNum = 3;

function slideRefresh() {
	var picNames = ['slide1', 'slide2', 'slide3', 'slide4'];
	document.getElementById(picNames[slideNum]).style.display = 'none';
	slideNum = (slideNum + 1) % 4;
	document.getElementById(picNames[slideNum]).style.display = 'block';   
	//alert('works');
}

setInterval(slideRefresh, 1000);
