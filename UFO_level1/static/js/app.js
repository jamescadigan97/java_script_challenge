// from data.js
var ufo = data;

//Select button and form
var form = d3.select("form")
var button = d3.select("button")

//Create event
button.on("click", filter_data);
form.on("submit", filter_data);

//Define function
function filter_data(){

    //Prevent refresh
    d3.event.preventDefault();
    
    //Select input value
    var inputElement = d3.select("input")
    var inputValue = inputElement.property("value");

        //Filter input by date
        ufo_filtered = ufo.filter(ufo => ufo.datetime === inputValue);
  
        //Show array in console
        console.log(ufo_filtered);

        //Remove any tables
        d3.select("tbody").html("")
    
        //Define function for iterating over new arry
        ufo_filtered.forEach((ufo_data) => {

            //Select location for new table
            var row = d3.select("tbody").append("tr")
            
            //Iterate over entries
            Object.entries(ufo_data).forEach(([key,value]) => {

            //Add entries to a new table
            var cell = row.append("td")
            cell.text(value)
            });
        });
    
};