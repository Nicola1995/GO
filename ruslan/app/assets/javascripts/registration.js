var pids['player1', 'player2', 'player3', 'player4', 'player5', 'player6']
var pNum;

function regOnLoad(){
	alert("onLoad");	
	pNum = 3;
	for (var i = pNum; i < 6; i++)
		document.getElementById(pids[i]).hidden = true;
}

function playerAdd() {
	alert('works');
}
