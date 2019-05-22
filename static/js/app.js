
// select element to work on
var tbody = d3.select("#ufo-table").select("tbody");
var tableData = data;
// console.log(tableData);

// Create the table for first page load - load all data in the table
//Loop through the data for each sighting
function renderData(data){
    tbody.text("")
    data.forEach((sighting)=> {
    // console.log(sighting);
    var row = tbody.append("tr");
    Object.entries(sighting).forEach(([key,value]) => {
        // console.log(key,value);
        var cell = tbody.append("td");
        cell.text(value);
        });
    });
    // tbody.text("No data available for this date! Try something in between 1/1/2010 to 1/13/2010")
};

renderData(tableData)
var submit = d3.select("#filter-btn")


submit.on("click", function() {
    // Prevent the page from refreshing
    d3.event.preventDefault();

    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");

    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    // console.log(inputValue);
    var filteredData = tableData.filter(observation => observation.datetime === inputValue);
    renderData(filteredData)
});