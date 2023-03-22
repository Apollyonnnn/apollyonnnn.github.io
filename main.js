var strength = 0;

function treepunchClick(number){
    strength = strength + number;
    document.getElementById("strength").innerHTML = strength;
};

var axes = 0;

function buyAxe(){
    var axeCost = Math.floor(10 * Math.pow(1.1,axes));     //works out the cost of this axe
    if(strength >= axeCost){                                   //checks that the player can afford the axe
        axes = axes + 1;                                   //increases number of axes
    	strength = strength - axeCost;                          //removes the axes spent
        document.getElementById('axes').innerHTML = axes;  //updates the number of axes for the user
        document.getElementById('strength').innerHTML = strength;  //updates the number of axes for the user
    };
    var nextCost = Math.floor(10 * Math.pow(1.1,axes));       //works out the cost of the next axe
    document.getElementById('axeCost').innerHTML = nextCost;  //updates the axe cost for the user
};

window.setInterval(function(){
	
	treepunchClick(axes);
	
}, 10);