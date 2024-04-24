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

  // Set the text of each 'div' element to be the album name and artist name
  select.on("change", function () {
    const selectedGenre = d3.select(this).property("value");
    const filteredAlbums = data.filter((item) => item.genre === selectedGenre);
    const listalbum = d3.select("#albums-list");
    const listartist = d3.select("#artist-name");
    const listproductionYear = d3.select("#production-year");
    listalbum.selectAll("tr").remove();
    listartist.selectAll("tr").remove();
    listproductionYear.selectAll("tr").remove();
    listalbum
      .selectAll("#albums-list")
      .data(filteredAlbums)
      .enter()
      .append("tr")
      .text((d) => `${d.albumName} or ${d.artistName}`);

    listartist
      .selectAll("#artist-name")
      .data(filteredAlbums)
      .enter()
      .append("tr")
      .text((d) => `${d.artistName}`);

    listproductionYear
      .selectAll("#production-year")
      .data(filteredAlbums)
      .enter()
      .append("tr")
      .text((d) => `${d.productionYear}`);
  });
});
//123

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
