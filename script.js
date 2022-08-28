// Write your JavaScript code here!






window.addEventListener("load", function() {
    let form = document.querySelector("form")
    let button = document.getElementById("formSubmit")
   // let list = document.getElementById("faultyItems")

form.addEventListener("submit",function(event){
    //event.preventDefault()
    let list = document.getElementById("faultyItems").value
    let pilot = document.querySelector("input[name=pilotName]").value
    let copilot = document.querySelector("input[name=copilotName]").value
    let fuelLevel = document.querySelector("input[name=fuelLevel]").value
    let cargoMass = document.querySelector("input[name=cargoMass]").value
  formSubmission(document,list,pilot,copilot,fuelLevel,cargoMass)
  event.preventDefault();

})

   let listedPlanets;
   // Set listedPlanetsResponse equal to the value returned by calling myFetch()
   let listedPlanetsResponse = myFetch()
   listedPlanetsResponse.then(function (result) {
       listedPlanets = result;
       console.log(listedPlanets);
   }).then(function () {
       console.log(listedPlanets);
       // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
       let randomP =pickPlanet(listedPlanets)
       addDestinationInfo(document,randomP.name,randomP.diameter,randomP.star,randomP.distance,randomP.moons,randomP.image)
       console.log(randomP)
    })
   
});