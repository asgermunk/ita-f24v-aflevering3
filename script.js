fetchData("/albums.json").then((data) => {});

async function fetchData(url) {
  let request = await fetch(url);
  let json = await request.json();
  return json;
}
