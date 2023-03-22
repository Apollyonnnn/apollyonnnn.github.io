var gold = 0;

function click(number){
    gold = gold + number;
    document.getElementById("gold").innerHTML = gold;
};

var fames = 0;
var efficiencys = 0;

function buyFame(){
    var fameCost = Math.floor(10 * Math.pow(1.1,fames));     //works out the cost of this fame
    if(gold >= fameCost){                                   //checks that the player can afford the fame
        fames = fames + 1;                                   //increases number of fames
    	gold = gold - fameCost;                          //removes the fames spent
        document.getElementById('fames').innerHTML = fames;  //updates the number of fames for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of fames for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,fames));       //works out the cost of the next fame
    document.getElementById('fameCost').innerHTML = nextCost;  //updates the fame cost for the user
};

function buyEfficiency(){
    var efficiencyCost = Math.floor(10 * Math.pow(1.1,efficiencys));     //works out the cost of this efficiency
    if(gold >= efficiencyCost){                                   //checks that the player can afford the efficiency
        efficiencys = efficiencys + 1;                                   //increases number of efficiency
    	gold = gold - efficiencyCost;                          //removes the efficiency spent
        document.getElementById('efficiencys').innerHTML = efficiencys;  //updates the number of efficiency for the user
        document.getElementById('gold').innerHTML = gold;  //updates the number of efficiency for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,efficiencys));       //works out the cost of the next efficiency
    document.getElementById('efficiencyCost').innerHTML = nextCost;  //updates the efficiency cost for the user
};

window.setInterval(function(){
	
	click(fames);
	
}, 1000);