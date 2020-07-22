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
   if (isReadyForLaunch(fuelLevel.value, cargoMass.value) === false) {
      document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready`;
      document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready`;
      if (fuelLevel.value < 10000) {
         document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
      }
      if (cargoMass.value > 10000) {
         document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
      }
   }
   document.getElementById("faultyItems").style.visibility = 'visible';
}

function init() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName");
      let copilot = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");

      entryValidation(event, pilot, copilot, fuelLevel, cargoMass);
      // updateShuttleStatus(event, pilot, copilot, fuelLevel, cargoMass);
      if (isReadyForLaunch(fuelLevel.value, cargoMass.value) === false) {
         document.getElementById("pilotStatus").innerHTML = `Pilot ${pilot.value} is ready`;
         document.getElementById("copilotStatus").innerHTML = `Copilot ${copilot.value} is ready`;
         if (fuelLevel.value < 10000) {
            document.getElementById("fuelStatus").innerHTML = `Fuel level too low for launch`;
         }
         if (cargoMass.value > 10000) {
            document.getElementById("cargoStatus").innerHTML = `Cargo mass too high for launch`;
         }
         document.getElementById("faultyItems").style.visibility = 'visible';
         
      }
   });
};

window.onload = init;