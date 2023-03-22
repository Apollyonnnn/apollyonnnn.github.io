var strength = 0;

function treepunchClick(number){
    strength = strength + number;
    document.getElementById("strength").innerHTML = strength;
};

var units = 0;
var axes = 0;

function buyUnit(){
    var unitCost = Math.floor(10 * Math.pow(1.1,units));     //works out the cost of this unit
    if(strength >= unitCost){                                   //checks that the player can afford the unit
        units = units + 1;                                   //increases number of units
    	strength = strength - unitCost;                          //removes the units spent
        document.getElementById('units').innerHTML = units;  //updates the number of units for the user
        document.getElementById('strength').innerHTML = strength;  //updates the number of units for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,units));       //works out the cost of the next unit
    document.getElementById('unitCost').innerHTML = nextCost;  //updates the unit cost for the user
};

function buyAxe(){
    var axeCost = Math.floor(10 * Math.pow(1.1,axes));     //works out the cost of this axe
    if(strength >= axeCost){                                   //checks that the player can afford the axe
        axes = axes + 1;                                   //increases number of axe
    	strength = strength - axeCost;                          //removes the axe spent
        document.getElementById('axes').innerHTML = axes;  //updates the number of axe for the user
        document.getElementById('strength').innerHTML = strength;  //updates the number of axe for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,axes));       //works out the cost of the next axe
    document.getElementById('axeCost').innerHTML = nextCost;  //updates the axe cost for the user
};

window.setInterval(function(){
	
	treepunchClick(units/100);
    units = units * 10000;
    Math.round(2, units);
    units = units / 10000;
	
}, 10);