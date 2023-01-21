// battleship


var randomLoc = Math.floor(Math.random() * 5);
var location1 = randomLoc;
var location2 = location1 + 1;
var location3 = location2 + 1;
var guess;
var hits = 0;
var guesses = 0;
var isSunk = false;

while (isSunk == false) 
{
	guess = prompt("Целься! (введи число от 0 до 6):");
	if (guess < 0 || guess > 6) 
	{
		alert("Пожайлуста, выбери число от 0 до 6!");
	} 
	else 
		{
		guesses = guesses + 1;
			if (guess == location1 || guess == location2 || guess == location3) 
			{
				alert("Попадание!");
				hits = hits + 1;
				if (hits == 3) 	
				{
				isSunk = true;
				alert("Вы победили!");
				}
			}
			 	else
			 	{
				alert("Промах, на Вас наводятся торпеды!");
			 	}
		}
}
	

var stats = "Вы стреляли " + guesses + " " + "раз и потопили линкор, " + "Ваша точность " + (3/guesses*100) + " " + "процентов ";
alert(stats);