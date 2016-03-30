// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or any plugin's vendor/assets/javascripts directory can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// compiled file.
//
// Read Sprockets README (https://github.com/rails/sprockets#sprockets-directives) for details
// about supported directives.
//
//= require jquery
//= require jquery_ujs
//= require turbolinks
//= require_tree .
//= require registration
/*
var playerNum = 0;
var pId = ["player1","player2", 'player3', 'player4', 'player5', 'player6'];

function addPlayer()
{
	if (playerNum < 6) {
		playerNum++;
		var el = document.getElementById(pId[playerNum - 1]);
		el.style.display = 'block';	
	}
}

﻿var mates_num = 3;
var slideNum = 3;
function slideRefresh() {
	var picNames = ['slide1', 'slide2', 'slide3', 'slide4'];
	document.getElementById(picNames[slideNum]).style.display = 'none';
	slideNum = (slideNum + 1) % 4;
	document.getElementById(picNames[slideNum]).style.display = 'block';   
	//alert('works');
}

setInterval(slideRefresh, 3000);
*/
var playerNum, scnt = 0;

function onTimer(){
	var el = document.getElementById('welcomeSlideWrapper');
	if (!el)
		return;
	el.style.left = (-scnt*254).toString() + "px";	
	//alert((-scnt*250).toString() + "px");
	scnt = (scnt+1)%4;
	
}

function dfs(v, isReq){
	//alert('dfs');	
	if (!v)	
		return;
	//alert('before if');
	if (v.nodeName == 'input' || v.nodeName == 'INPUT'){
		//alert(v);
		v.required = isReq;	
	}
	//alert('after if');
	for (var i = 0; i < v.childNodes.length; i++)
		dfs(v.childNodes[i], isReq);
}

function refreshTeammates() {
	for (var i = 1; i <= 6; i++)
		dfs(document.getElementById('player' + i.toString()), i <= playerNum);
}

function onLoad() {
	playerNum = 3;	
	setInterval(onTimer, 3000);
	onTimer();
	if (document.getElementById('player1')) {
		refreshTeammates();	
	}
}

function playerRem(){
	if (playerNum > 3){
		document.getElementById('player' + playerNum.toString()).hidden = true;	
		playerNum--;		
		refreshTeammates();	
	}
}
function playerAdd(){
	if (playerNum >= 6)
		return;
	playerNum++;
	document.getElementById('player' + playerNum.toString()).hidden = false;	
	refreshTeammates();	
}

