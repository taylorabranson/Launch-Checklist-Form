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

function init() {
   let form = document.getElementById("launchForm");
   form.addEventListener("submit", function(event) {
      let pilot = document.querySelector("input[name=pilotName");
      let copilot = document.querySelector("input[name=copilotName");
      let fuelLevel = document.querySelector("input[name=fuelLevel");
      let cargoMass = document.querySelector("input[name=cargoMass");
      // alert("Pilot Name: " + pilot.value);
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
   });
};



window.onload = init;