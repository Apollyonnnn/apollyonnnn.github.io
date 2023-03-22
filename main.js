var kills = 0;

function enemyClick(number){
    kills = kills + number;
    document.getElementById("Kills").innerHTML = kills;
};