var button = document.querySelector('.button')
var inputValue = document.getElementById('inputValue')
var city = document.querySelector('.city')
var desc = document.querySelector('.desc')
var temp = document.querySelector('.temp')
var feels = document.querySelector('.feels')
var hum = document.querySelector('.humidity')
var press = document.querySelector('.pressure')
var visibility = document.querySelector('.visibility')
var wind = document.querySelector('.wind')
var icon = document.querySelector('.icon')



button.addEventListener('click', function() {

fetch('https://api.openweathermap.org/data/2.5/weather?q='+inputValue.value+'&appid=08f359c797396138358eec9b41e88536&lang=fr')
.then(response => response.json())
.then(data => {

    console.log(data);
    

        var cityValue = data['name'];
        var tempValue = "la temperature est d'environ " + (Math.round((data['main']['temp']) - 273.15)) + " C°";
        var descValue = `Le temps à ${inputValue.value} est ` + data['weather'][0]['description'];
        var humValue = "il y a " + data['main']['humidity'] + " % d'humidité";
        var feelsValue = "mais le ressenti est de " + (Math.round((data['main']['feels_like']) - 273.15)) + " C°";
        var pressValue = "la pression atmosphérique est de "  + data['main']['pressure'] + " hPa";
        var visValue = "la visibilité est de " + data['visibility'];
        var windValue = "et le vent va à une vitesse de " + (Math.round(data['wind']['speed']) * 3.6) + " km/h";
        var iconValue = data['weather'][0]['icon'];
        var idValue = data['weather'][0]['id'];

        console.log(idValue);
        city.innerHTML = cityValue;
        temp.innerHTML = tempValue;
        feels.innerHTML = feelsValue;
        desc.innerHTML = descValue;
        hum.innerHTML = humValue;
        press.innerHTML = pressValue;
        visibility.innerHTML = visValue;
        wind.innerHTML = windValue;
        document.getElementById('image').src = 'http://openweathermap.org/img/wn/'+iconValue+'@2x.png';

        background(idValue);

 })

.catch(err => alert("Le nom de la ville est incorrect!"));

 e.preventDefault();
})

        const background = (idValue) => {
  if (idValue === 801 || idValue === 802 || idValue === 803 ||idValue === 804) {
    document.querySelector('body').style.backgroundImage = 'url(./img/cloud.jpg)';
} else if (idValue === 800) {
  document.querySelector('body').style.backgroundImage = 'url(./img/sun.jpg)';
} else if (idValue === 701 || idValue === 711 || idValue === 721 || idValue === 731 || idValue === 741 || idValue === 751 || idValue === 761 || idValue === 762 || idValue === 771 || idValue === 781) {
  document.querySelector('body').style.backgroundImage = 'url(./img/mist.jpg)';
} else if (idValue === 600 || idValue === 601 || idValue === 602 || idValue === 611 || idValue === 612 || idValue === 613 || idValue === 615 || idValue === 616 || idValue === 620 || idValue === 621 || idValue === 622) {
  document.querySelector('body').style.backgroundImage = 'url(./img/snow.jpg)';
} else if (idValue === 300 || idValue === 301 || idValue === 302 || idValue === 310 || idValue === 311 || idValue === 312 || idValue === 313 || idValue === 314 || idValue === 321 || idValue === 500 || idValue === 501 || idValue === 502 || idValue === 503 || idValue === 504 || idValue === 511 || idValue === 520 || idValue === 521 || idValue === 522 || idValue === 531) {
  document.querySelector('body').style.backgroundImage = 'url(./img/rain.jpg)';
} else if (idValue === 200 || idValue === 201 || idValue === 202 || idValue === 210 || idValue === 211 || idValue === 212 || idValue === 221 || idValue === 230 ||  idValue === 231 || idValue === 232) {
  document.querySelector('body').style.backgroundImage = 'url(./img/thunder.jpg)';
} else {
  document.querySelector('body').style.background = 'white';
}
        };


var geoloc = document.getElementById('geoloc')


geoloc.addEventListener('click', function(){
  if(navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position){
      console.log(position);
      fetch('https://api.openweathermap.org/data/2.5/weather?lat='+ position.coords.latitude + '&lon=' + position.coords.longitude +'&appid=08f359c797396138358eec9b41e88536&lang=fr')
      .then(response => response.json())
      .then(data => {
        console.log(data)
        geolocValue = data['name'];

        console.log(geolocValue)
        document.querySelector('.local').innerHTML = geolocValue
        console.log(inputValue)

      })
    })
      } else {
    console.log("Geolocation is not supported");
      }
})