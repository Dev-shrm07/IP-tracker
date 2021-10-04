//28.6448
//77.216721
var mymap;
function maakemap(id, lat, lng) {
  document.getElementById(id).innerHTML = "";
  let xyz = L.map(id);
  mymap = xyz.setView([lat, lng], 13);
  L.tileLayer(
    "https://api.mapbox.com/styles/v1/{id}/tiles/{z}/{x}/{y}?access_token={accessToken}",
    {
      attribution:
        'Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
      maxZoom: 18,
      id: "mapbox/streets-v11",
      tileSize: 512,
      zoomOffset: -1,
      accessToken:
        "pk.eyJ1IjoiZGV2c2hybTAyIiwiYSI6ImNrcXFqbGtnMDBmYnMyb3EzdjB6OWtzY2wifQ.5LVvkzPmmKhvHZoX9F2Uyw",
    }
  ).addTo(mymap);
}
window.addEventListener("load", () => {
  maakemap("map", 28.6448, 77.216721);
});
var dataf = null;
function getip() {
  let ip = document.getElementById("inp").value;
  var api_key = "at_e4AS3LX5KBjmNIN7Oc4XLW0OQcn71";
  $(function () {
    $.ajax({
      url: "https://geo.ipify.org/api/v1",
      data: { apiKey: api_key, ipAddress: ip },
      success: function (data) {
        console.log(data);
        document.getElementById("ip").innerHTML = data.ip;
        document.getElementById("timezone").innerHTML = data.location.timezone;
        document.getElementById("isp").innerHTML = data.isp;
        document.getElementById("location").innerHTML =
          data.location.city + " " + data.location.country;
        // let latt = await data.location.lat;
        // let long = await data.location.lng;
        // map.panto(L.latlng[data.location.latt, data.location.long])
        //maakemap("map", data.location.lat, data.location.lng);
        mymap.panTo([data.location.lat, data.location.lng]);
        L.marker([data.location.lat, data.location.lng]).addTo(mymap);
      },
    });
  });
}

// function getipfromapi(){
//   let ip = document.getElementById("inp").value;
//   if(ip!=null && ip !=""){
//     getip(ip);
//     location = dataf.location.city + dataf.location.country;
//     timezone = dataf.location.timezone;
//     lat = dataf.location.lat;
//     long = dataf.location.lng;
//     isp = dataf.isp;
//     let mymap1 = L.map("map").setView([lat, long], 13);
//     let marker1 = L.marker([lat, long]).addTo(mymap1);
//     document.getElementById("ip").innerHTML = ip;
//     document.getElementById("location").innerHTML = location;
//     document.getElementById("timezone").innerHTML = timezone;
//     document.getElementById("isp").innerHTML = isp;
//   }
//   else{
//     alert('enter a valid api');
//   }

// }
