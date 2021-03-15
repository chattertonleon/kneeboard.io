var departure;
var runway;
var initialClimb;
var afterDepartureFrequency;
var squawk;


function setUpClearance(){
    departure = document.getElementById("depProc").value;
    runway = document.getElementById("runway").value;
    initialClimb = document.getElementById("initClimb").value;
    afterDepartureFrequency = document.getElementById("depFreq").value;
    squawk = document.getElementById("squawk").value;
}

function alertment(){
    alert(document.getElementById("depProc").value);
}
