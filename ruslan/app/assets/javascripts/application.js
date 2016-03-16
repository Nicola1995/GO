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


function getXmlHttp() {
    var xmlhttp;
    try {
      xmlhttp = new ActiveXObject("Msxml2.XMLHTTP");
    } catch (e) {
    try {
      xmlhttp = new ActiveXObject("Microsoft.XMLHTTP");
    } catch (E) {
      xmlhttp = false;
    }
    }
    if (!xmlhttp && typeof XMLHttpRequest!='undefined') {
      xmlhttp = new XMLHttpRequest();
    }
    return xmlhttp;
}

function post(path, params, method) {
    method = method || "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

    for(var key in params) {
        if(params.hasOwnProperty(key)) {
            var hiddenField = document.createElement("input");
            hiddenField.setAttribute("type", "hidden");
            hiddenField.setAttribute("name", key);
            hiddenField.setAttribute("value", params[key]);

            form.appendChild(hiddenField);
         }
    }

    document.body.appendChild(form);
    form.submit();
}

function myPost(path, param) {
    var method = "post"; // Set method to post by default if not specified.

    // The rest of this code assumes you are not using a library.
    // It can be made less wordy if you use one.
    var form = document.createElement("form");
    form.setAttribute("method", method);
    form.setAttribute("action", path);

  
    var hiddenField = document.createElement("input");
    hiddenField.setAttribute("hidden", "true");
    hiddenField.setAttribute("name", "team");
    hiddenField.setAttribute("value", param);
	form.appendChild(hiddenField);
    document.body.appendChild(form);
    form.submit();
}

function onClick()
{
	
	//alert('works');
	var dataSet = {};
	dataSet.team_name = document.getElementById('team_name').value;
	var tm_id = ['team_mate1', 'team_mate2', 'team_mate3', 'team_mate4', 'team_mate5', 'team_mate6'];
	dataSet.teammates = [];
	tm_id.forEach(function (item, i, arr) {
		dataSet.teammates.push({});
		dataSet.teammates[i].name = document.getElementById(item).getElementsByTagName('input')[0].value;
	});
	//alert(JSON.stringify(dataSet));
	myPost("create", JSON.stringify(dataSet));
	
	/*
	alert('works');
	var xmlhttp = getXmlHttp(); // Создаём объект XMLHTTP
    xmlhttp.open('POST', '#', true); // Открываем асинхронное соединение
    xmlhttp.setRequestHeader('Content-Type', 'application/x-www-form-urlencoded'); // Отправляем кодировку
    
	xmlhttp.send(JSON.stringify); // Отправляем POST-запрос
    xmlhttp.onreadystatechange = function() { // Ждём ответа от сервера
      if (xmlhttp.readyState == 4) { // Ответ пришёл
        if(xmlhttp.status == 200) { // Сервер вернул код 200 (что хорошо)
          document.getElementById("response").innerHTML = xmlhttp.responseText; // Выводим ответ сервера
        }
      }
    };
	//document.getElementById("response").innerHTML = "okke";
	*/
}



function addPlayer()
{
	if (mates_num < 6) {
		mates_num++;
		var bind_objects = [{id:'team_mate4', num:4}, {id:'team_mate5', num:5}, {id:'team_mate6', num:6}];
		bind_objects.forEach(function (item, i, arr) {
			document.getElementById(item.id).hidden = mates_num < item.num;
		});
	}
	else
		alert("В команде не может быть больше шести игроков.");
}

