// Load the JSON data from the 'albums.json' file
d3.json("albums.json").then((data) => {
  // Create a Set from the genres in the data to get unique genres
  const genreSet = new Set(data.map((item) => item.genre));
  // Convert the Set back to an Array
  const genres = Array.from(genreSet);

  // Select the dropdown list with id 'genre-select'
  const select = d3.select("#genre-select");
  // Bind the genres data to the 'option' elements of the dropdown list
  select
    .selectAll("option")
    .data(genres)
    .enter() // Create new 'option' elements for each item in the data that doesn't already have an associated 'option' element
    .append("option") // Append the new 'option' elements to the dropdown list
    .text((d) => d); // Set the text of each 'option' element to be the genre

  // Add a 'change' event listener to the dropdown list
  select.on("change", function () {
    // Get the genre that was selected
    const selectedGenre = d3.select(this).property("value");
    // Filter the data to get the albums that have the selected genre
    const filteredAlbums = data.filter((item) => item.genre === selectedGenre);

    // Select the div with id 'albums-list'
    const list = d3.select("#albums-list");
    // Bind the filtered albums data to the 'div' elements of the list
    list
      .selectAll("th")
      .data(filteredAlbums)
      .enter() // Create new 'div' elements for each item in the data that doesn't already have an associated 'div' element
      .append("th") // Append the new 'div' elements to the list
      .text((d) => `${d.albumName} by ${d.artistName}`); // Set the text of each 'div' element to be the album name and artist name
  });
});

// d3.json("albums.json").then((data) => {
//   const albums = data.map((item) => {
//     return {
//       albumName: item.albumName,
//       artistName: item.artistName,
//       genre: item.genre,
//       productionYear: item.productionYear,
//     };
//   });

//   console.log(albums);
// });
