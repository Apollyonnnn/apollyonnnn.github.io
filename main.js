var kills = 0;

function enemyClick(number){
    kills = kills + number;
    document.getElementById("kills").innerHTML = kills;
};

var swords = 0;

function buySword(){
    var swordCost = Math.floor(10 * Math.pow(1.1,swords));     //works out the cost of this sword
    if(kills >= swordCost){                                   //checks that the player can afford the sword
        swords = swords + 1;                                   //increases number of swords
    	kills = kills - swordCost;                          //removes the swords spent
        document.getElementById('swords').innerHTML = swords;  //updates the number of swords for the user
        document.getElementById('kills').innerHTML = kills;  //updates the number of swords for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,swords));       //works out the cost of the next sword
    document.getElementById('swordCost').innerHTML = nextCost;  //updates the sword cost for the user
};

window.setInterval(function(){
	
	enemyClick(swords);
	
}, 1000);