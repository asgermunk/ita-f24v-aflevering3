// Function to update the table with the given data
function updateTable(data) {
  // Select the table with id 'albums-list' save it to the const list
  const list = d3.select("#albums-list");
  
  // Remove all existing rows in the table
  list.selectAll("tr").remove();

  // Bind the data to new rows in the table
  const rows = list
    .selectAll("tr")
    .data(data)
    .enter()
    .append("tr");

  // Add cells to the rows for the album name, artist name, and production year
  rows.append("td").text((d) => d.albumName);
  rows.append("td").text((d) => d.artistName);
  rows.append("td").text((d) => d.productionYear);
}

// Load the JSON data from the 'albums.json' file
d3.json("albums.json").then((data) => {
  // Create a Set from the genres in the data to get unique genres
  const genreSet = new Set(data.map((item) => item.genre));
  // Convert the Set back to an Array
  const genres = Array.from(genreSet);

  // Select the dropdown list with the id 'genre-select'
  const select = d3.select("#genre-select");
  // Bind the genres data to the 'option' elements of the dropdown list
  select
    .selectAll("option")
    .data(genres)
    .enter() // Create new 'option' elements for each item in the data that doesn't already have an associated 'option' element
    .append("option")// Append the new 'option' elements to the dropdown list
    .text((d) => d); // Set the text of each 'option' element to be the genre

  // Populate the table with all the data
  updateTable(data);

  // Event listener for when the dropdown selection changes
  select.on("change", function () {
    // Get the currently selected genre
    const selectedGenre = d3.select(this).property("value");
    // Filter the data to only include albums of the selected genre
    const filteredAlbums = data.filter((item) => item.genre === selectedGenre);
    // Update the table with the filtered data
    updateTable(filteredAlbums);
  });
});