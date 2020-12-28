window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');
   //taking off 
    let takeoff = document.getElementById("takeoff");
    takeoff.addEventListener("click", function (event) {
        alert("Confirm that the shuttle is ready for takeoff.");
        document.getElementById("flightStatus").innerHTML = "Shuttle in flight.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'blue';
        document.getElementById("spaceShuttleHeight").innerHTML = '10000';

    });

   //Land 
    let land= document.getElementById("landing");
    land.addEventListener("click", function (event) {
        alert("The shuttle is landing. Landing gear engaged.");
        document.getElementById("flightStatus").innerHTML = "The shuttle has landed.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = '0';

    });

    //Abort Mission 
    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
        alert("Confirm that you want to abort the mission.");
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = '0';

    });
    

    let abort = document.getElementById("missionAbort");
    abort.addEventListener("click", function (event) {
        alert("Confirm that you want to abort the mission.");
        document.getElementById("flightStatus").innerHTML = "Mission aborted.";
        document.getElementById("shuttleBackground").style.backgroundColor = 'green';
        document.getElementById("spaceShuttleHeight").innerHTML = '0';

    });

});