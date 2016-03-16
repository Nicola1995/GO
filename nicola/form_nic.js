var playerNum = 3;
var pId = ['player4', 'player5', 'player6'];

function addPlayer()
{
	if (playerNum < 6) {
		playerNum++;
		var el = document.getElementById(pId[playerNum - 4]);
		el.style.display = 'block';	
	}
}
