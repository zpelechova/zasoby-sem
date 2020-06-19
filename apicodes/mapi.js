let main = document.querySelector("#map");
let center = SMap.Coords.fromWGS84(14.41790, 50.12655);
let map = new SMap(main, center, 10);
map.addDefaultLayer(SMap.DEF_BASE).enable();
map.addDefaultControls();

// map.addControl(new SMap.Control.Zoom(), { left: "8px", top: "9px" });
// map.addControl(new SMap.Control.Mouse());

window.addEventListener("resize", () => map.syncPort());
let layer = new SMap.Layer.Marker()
map.addLayer(layer)
layer.enable()

let isoAddress = "";

//hledani souradnic
function odpoved(response) {
  let results = response.getResults()[0].results
  const cordX = results[0].coords.x;
  const cordY = results[0].coords.y;
  isoAddress = results[0].label;
  let center = SMap.Coords.fromWGS84(cordX, cordY);
  map.setCenterZoom(center, 14);
  let marker = new SMap.Marker(center)
  layer.addMarker(marker)
  console.log("Adresa je " + isoAddress)
}

const kliknuto = () => {
  const street = document.querySelector('#street').value;
  const city = document.querySelector('#city').value;
  const address = `${street}, ${city}`
  new SMap.Geocoder(address, odpoved);

}

document.querySelector('button').addEventListener('click', kliknuto);
