// from data.js
var ufo = data;

// Select elements
var form = d3.select("form")
var button = d3.select("button")

//Set event
button.on("click", filter_data);
form.on("submit", filter_data);

//Define function 
function filter_data(){

//Prevent refreshing
    d3.event.preventDefault();

// Filter by  Date    
    //Select first the value from the first input box
    var inputElement = d3.select("#datetime")
    var inputValue = inputElement.property("value");

    //Filter by Date if there is a value
    if (inputValue.length > 0 ) {
        ufo_filtered = ufo.filter(ufo => ufo.datetime === inputValue);
    }
    //Define unfo_unfiltered even if there is no date
    else {
        ufo_filtered = ufo.filter(ufo => ufo);
    }

//Filter by City
    //Select first the value from the second input box
    var inputElement2 = d3.select("#city_label")
    var inputValue2 = inputElement2.property("value");

    //Filter by City if there is a value
    if (inputValue2.length > 0 ) {
        ufo_filtered = ufo_filtered.filter(ufo => ufo.city === inputValue2);
    }

//Filter by State
    //Select the value from the third input box
    var inputElement3 = d3.select("#state")
    var inputValue3 = inputElement3.property("value");

    //Filter by State if there is a value
    if (inputValue3.length > 0 ) {
        ufo_filtered = ufo_filtered.filter(ufo => ufo.state === inputValue3);
    }

//Filter by Country
    //Select the value from the fourth input box  
    var inputElement4 = d3.select("#country")
    var inputValue4 = inputElement4.property("value");

    //Filter by Country if there is a value
    if (inputValue4.length > 0 ) {
    ufo_filtered = ufo_filtered.filter(ufo => ufo.country === inputValue4);
    }

//Filter by Shape
    //Select the value from the fifth input box
    var inputElement5 = d3.select("#shape")
    var inputValue5 = inputElement5.property("value");

    //Filter by Date if there is a value
    if (inputValue5.length > 0 ) {
    ufo_filtered = ufo_filtered.filter(ufo => ufo.shape === inputValue5);
    }
    
    //Show array in console
    console.log(ufo_filtered);

    //Clear previous array
    d3.select("tbody").html("")

        // Interate through the Arry
        ufo_filtered.forEach((ufo_data) => {

            //Select location for object 
            var row = d3.select("tbody").append("tr")

            //Get the entries of the array
            Object.entries(ufo_data).forEach(([key,value]) => {
            var cell = row.append("td")

            //Add text to HTML elements
            cell.text(value)
            });
        });
};
