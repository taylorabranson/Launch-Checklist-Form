// Write your JavaScript code here!

/* This block of code shows how to format the HTML once you fetch some planetary JSON!
<h2>Mission Destination</h2>
<ol>
   <li>Name: ${}</li>
   <li>Diameter: ${}</li>
   <li>Star: ${}</li>
   <li>Distance from Earth: ${}</li>
   <li>Number of Moons: ${}</li>
</ol>
<img src="${}">
*/

function entryError(message) {
   alert(message);
   event.preventDefault();
}

function randomIndexFromArray(arr) {
   return Math.floor(Math.random() * arr.length);
}

function entryValidation(event, pilot, copilot, fuelLevel, cargoMass) {
   if (pilot.value === '' || copilot.value === '' || fuelLevel.value === '' || cargoMass.value === '') {
      entryError("All fields are required!");
   } else if (isNaN(pilot.value) === false) {
      entryError('Pilot name must be a string');
   } else if (isNaN(copilot.value) === false) {
      entryError('Co-pilot name must be a string');
   } else if (isNaN(fuelLevel.value) === true) {
      entryError('Fuel Level must be a number');
   } else if (isNaN(cargoMass.value) === true) {
      entryError('Cargo Mass must be a number');
   }
}

function isReadyForLaunch(fuelLevel, cargoMass) {
   if (fuelLevel < 10000 || cargoMass > 10000) {
      return false;
   } else {
      return true;
   }
}

function updateShuttleStatus(event, pilot, copilot, fuelLevel, cargoMass) {
   let launchStatus = document.getElementById("launchStatus");
   let pilotStatus = document.getElementById("pilotStatus");
   let copilotStatus = document.getElementById("copilotStatus");
   let fuelStatus = document.getElementById("fuelStatus");
   let cargoStatus = document.getElementById("cargoStatus");

   document.getElementById("faultyItems").style.visibility = 'visible';
   pilotStatus.innerHTML = `Pilot ${pilot.value} is ready`;
   copilotStatus.innerHTML = `Copilot ${copilot.value} is ready`;
   
   if (isReadyForLaunch(fuelLevel.value, cargoMass.value) === false) {
      launchStatus.innerHTML = 'Shuttle not ready for launch';
      launchStatus.style.color = 'red';
   } else {
      launchStatus.innerHTML = 'Shuttle is ready for launch';
      launchStatus.style.color = 'green';
   }
     
   if (fuelLevel.value < 10000) {
      fuelStatus.innerHTML = 'Fuel level too low for launch';
   } else {
      fuelStatus.innerHTML = 'Fuel level high enough for launch';
   }

   if (cargoMass.value > 10000) {
      cargoStatus.innerHTML = 'Cargo mass too high for launch';
   } else {
      cargoStatus.innerHTML = 'Cargo mass low enough for launch';
   }
}

function loadPlanetaryData(missionTarget) {
   fetch('https://handlers.education.launchcode.org/static/planets.json').then(function(response) {
      response.json().then(function(json) {
         let index = randomIndexFromArray(json);
         missionTarget.innerHTML = `
         <h2>Mission Destination</h2>
            <ol>
               <li>Name: ${json[index].name}</li>
               <li>Diameter: ${json[index].diameter}</li>
               <li>Star: ${json[index].star}</li>
               <li>Distance from Earth: ${json[index].distance}</li>
               <li>Number of Moons: ${json[index].moons}</li>
            </ol>
            <img src="${json[index].image}">
         `
      });
   });
}

function init() {
   let form = document.getElementById("launchForm");
   let pilot = document.getElementsByName("pilotName")[0];
   let copilot = document.getElementsByName("copilotName")[0];
   let fuelLevel = document.getElementsByName("fuelLevel")[0];
   let cargoMass = document.getElementsByName("cargoMass")[0];
   let missionTarget = document.getElementById("missionTarget");
   
   loadPlanetaryData(missionTarget);

   form.addEventListener("submit", function(event) {   
      entryValidation(event, pilot, copilot, fuelLevel, cargoMass);
      updateShuttleStatus(event, pilot, copilot, fuelLevel, cargoMass);
      event.preventDefault();
   });
}

window.addEventListener("load", function() {
   init();
});