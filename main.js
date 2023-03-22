var kills = 0;

function enemyClick(number){
    kills = kills + number;
    document.getElementById("kills").innerHTML = kills;
};