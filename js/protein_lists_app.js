function renderProteins(protein_list) {
  // Sort the protein_list by ratings counts
  protein_list.sort(function (record1, record2) {
    return record2.serving - record1.serving;
  });

  // select the <tbody> element
  // you can make this more precise by using a descendant selector,
  // referring to a particular <table> by ID or Style class name
  var tbody = document.querySelector(".proteins tbody");

  //clear any existing content in the body
  tbody.textContent = "";

  // for each movie
  for (var i = 0; i < protein_list.length; i++) {
    // render the movie row
    var row = renderProtein(protein_list[i]);

    // appends it to the table
    tbody.appendChild(row);
  }
}

function renderProtein(protein) {
  //create the <tr> element
  var tr = document.createElement("tr");

  //create and append the <td> elements
  tr.appendChild(renderProteinProp(protein.name, true));
  tr.appendChild(renderProteinProp(protein.calories));
  tr.appendChild(renderProteinProp(protein.proteins));
  tr.appendChild(renderProteinProp(protein.serving));

  //return the table row to the caller
  return tr;
}

function renderProteinProp(content, nonNumeric) {
  // create the new <td> element
  var td = document.createElement("td");
  // set its text content to the provided value
  td.textContent = content;
  // if it should be formatted as numeric...
  if (nonNumeric) {
    // add the "numeric" style class
    td.classList.add("non-numeric");
  }
  // return the new element to the caller
  return td;
}

var searchInput = document.getElementById("protein-filter");

// Should this movie be in our list?
function isProteinFound(protein) {
  // Get the user input
  var userInput = searchInput.value;
  // Make the input title lower case
  var lowercaseUserInput = userInput.toLowerCase();
  // Make the movie title lowercase
  var lowercaseTitle = movie.title.toLowerCase();

  // Check if the user input is in the lowercase movie title
  if (lowercaseTitle.indexOf(lowercaseUserInput) >= 0) {
    return true;
  } else {
    return false;
  }
}

// Listen for when a user types in the filter field
searchInput.addEventListener("input", function () {
  // Find any movies that match the user input
  var filtered_proteins = PROTEINS.filter(isProteinFound);

  // Update the movie table with the new list
  renderProteins(filtered_proteins);
});
