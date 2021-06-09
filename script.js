// TODO: add code here
window.addEventListener("load", function() {
    // put DOM code here to ensure elements have been loaded
    console.log('window loaded');


    fetch("https://handlers.education.launchcode.org/static/astronauts.json").then(function(response) {
        console.log(response);
    });
});