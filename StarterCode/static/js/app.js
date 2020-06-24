// // from data.js
// var tableData = data;
// var tbody = d3.select("tbody");
// console.log(data);

// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//    });

// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
//   });



//   });


// data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
  
//     Object.entries(ufoReport).forEach(function([key, value]) {
//       console.log(key, value);
//       var cell = row.append("td");
//     });
//   });

//   data.forEach(function(ufoReport) {
//     console.log(ufoReport);
//     var row = tbody.append("tr");
//     Object.entries(ufoReport).forEach(function([key, value]) {
//       console.log(key, value);
//       var cell = row.append("td");
//       cell.text(value);
//     });
//   });




  // Select the button
  var button = d3.select("#button");
  
  button.on("click", function() {
    // Select the input element and get the raw HTML node
    var inputElement = d3.select("#datetime");
    // Get the value property of the input element
    var inputValue = inputElement.property("value");
    console.log(inputValue);
    var filterData = tableData.filter(ufoSighting=> ufoSighting.datetime === inputValue);
    console.log(filterData);

    var tbody = d3.select("tbody");

    filterData.forEach(ufoSighting=> {
      var row = tbody.append("tr");
      Object.entries(ufoSighting).forEach(([key, value])=>row.append('td').text(value));
      });

    })