d3.json("albums.json").then((data) => {
  const list = [];
  const albumName = [];
  const artistName = [];
  const genre = [];
  for (let i = 0; i < data.length; i++) {
    albumName.push(data[i].albumName);
  }
  console.log(albumName);
  for (let i = 0; i < data.length; i++) {
    artistName.push(data[i].artistName);
  }
  console.log(artistName);
  for (let i = 0; i < data.length; i++) {
    genre.push(data[i].genre);
  }
  console.log(genre);
});
