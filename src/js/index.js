var map = L.map('map').setView([-28.237851, -52.393144], 13);

L.tileLayer('https://tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(map);

L.marker([-28.237851, -52.393144]).addTo(map)
    .bindPopup('A pretty CSS3 popup.<br> Easily customizable.')
    .openPopup();

    var popup = L.popup();


const albtn = document.getElementById("aleatorio")
const btns = document.getElementById("btn-search");
const ipAddress = document.getElementById("search");

const sip = document.getElementById("IPADD");
const locations = document.getElementById("location");
const timezone = document.getElementById("timezone");
const isp = document.getElementById("ISP");



albtn.addEventListener("click", () => {

    const ipAleatoria = generarIpAleatoria();
    ipAddress.value = ipAleatoria;
    ip();
  });


btns.addEventListener("click", () => {
    ip();
  
});

async function ip() {
    const ipp = ipAddress.value;

  const url = await fetch(
    `https://geo.ipify.org/api/v2/country?apiKey=at_diXvpgkmIad5743V3LV0vp3kbJAnU&ipAddress=${ipp}`
  );
  const json = await url.json();
  console.log(json);
  let ip = json.ip;
  const loc = json.location.region
  const tim = json.location.timezone
  const issp = json.isp
 
  sip.innerHTML = ip
  locations.innerHTML = loc
  timezone.innerHTML = tim
  isp.innerHTML = issp

}
function generarIpAleatoria() {
    const octeto1 = Math.floor(Math.random() * 256);
    const octeto2 = Math.floor(Math.random() * 256);
    const octeto3 = Math.floor(Math.random() * 256);
    const octeto4 = Math.floor(Math.random() * 256);
    const ipAleatoria = `${octeto1}.${octeto2}.${octeto3}.${octeto4}`;
    return ipAleatoria;
  }
