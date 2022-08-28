// Write your helper functions here!
require('isomorphic-fetch');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
   // Here is the HTML formatting for our mission target div.
   /*
                <h2>Mission Destination</h2>
                <ol>
                    <li>Name: </li>
                    <li>Diameter: </li>
                    <li>Star: ${star}</li>
                    <li>Distance from Earth: </li>
                    <li>Number of Moons: </li>
                </ol>
                <img src="">
   */
let div = document.getElementById("missionTarget")
const head = document.createElement("h2")
head.innerHTML = "Mission Destination"
div.appendChild(head)

const ol = document.createElement("ol")
div.appendChild(ol)
 let arr = [`Name: ${name}`,`Diameter: ${diameter}`, `Star: ${star}`, `Distance from Earth: ${distance}`,`moon: ${moons}`]
for(i=0;i<=arr.length-1;i++){
    let li = document.createElement("li")
li.innerHTML = arr[i]
ol.appendChild(li)
}
const img = document.createElement("img")
img.src = imageUrl
div.appendChild(img)
}

function validateInput(testInput) {
    if(testInput === ""){
        return "Empty"
    }
    if(isNaN(testInput)){
        return "Not a Number"
    }else{
        return "Is a Number"
    }
   console.log(typeof testInput)
console.log(typeof Number("testInput"))
}

function formSubmission(document, list, pilot, copilot, fuelLevel, cargoLevel) {
   if(validateInput(pilot) === "Empty" || validateInput(copilot) === "Empty" || validateInput(fuelLevel) === "Empty" || validateInput(cargoLevel) === "Empty"){
    alert("all fields are required")
   }
   if(fuelLevel < 10000){
    document.querySelector("#faultyItems").style.visibility = "visible"
    document.querySelector("#launchStatus").style.color = "red"
    document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch"
    document.querySelector("#fuelStatus").innerHTML = "Fuel level is too low for launch"
   }
   if(cargoLevel > 10000){
    document.querySelector("#faultyItems").style.visibility = "visible"
    document.querySelector("#launchStatus").style.color = "red"
    document.querySelector("#launchStatus").innerHTML = "Shuttle not ready for launch"
    document.querySelector("#cargoStatus").innerHTML = "Cargo mass to high enough for launch"

   }
   if(cargoLevel < 10000 && fuelLevel > 10000) {
    document.querySelector("#launchStatus").style.color = "green"
    document.querySelector("#launchStatus").innerHTML = "Shuttle is ready for launch"
   }

   if((validateInput(pilot) === "Is a Number") || (validateInput(copilot) === "Is a Number") || (validateInput(fuelLevel) === "Not a Number") || (validateInput(cargoLevel) === "Not a Number")){
    alert("make sure to enter the valid information for each")
   }
}

 async function myFetch() {
    let planetsReturned;

    planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
        return response.json()
        });

    return planetsReturned;
}

function pickPlanet(planets) {
    console.log(planets)
    let randomPlanet;
       i =  Math.floor(Math.random()*planets.length)
    return planets[i]
}



module.exports.addDestinationInfo = addDestinationInfo;
module.exports.validateInput = validateInput;
module.exports.formSubmission = formSubmission;
module.exports.pickPlanet = pickPlanet; 
module.exports.myFetch = myFetch;
