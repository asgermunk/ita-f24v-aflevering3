const w = 500;
const h = 500;
const padding = 20;

d3.json("albums.json").then((data) => {
  const list = [];
  for (let i = 0; i < data.length; i++) {
    list.push(data[i].value);
  }
  console.log(list);
});
