var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=c12e9248a396e671c3a988a46ebb10f5';
var units = '&units=metric';
var input;

function setup() {
  createCanvas(400, 200);
  
  var button = select('#submit');
  button.mousePressed(weatherAsk);
  
  input = select('#city');
  
 
  //api.openweathermap.org/data/2.5/weather?q=London&APPID=c12e9248a396e671c3a988a46ebb10f5&units=metric
  
}

 function weatherAsk(){
  var url = api + input.value() + apiKey + units;
  loadJSON(url, gotData, 'jsonp');
  }

function gotData(data){
    weather = data;
  }
  
function draw() {
   background(0);
   
   if(weather){
   dynamicWeather = "humidity:" + weather.main.humidity + " temp:" + weather.main.temp + "C wind Speed:" + weather.wind.speed;
    document.getElementById('display').innerHTML = dynamicWeather;

  //   //grab the display div from html
  //   var weatherIs = document.querySelector("#display");
  //   console.log(weatherIs);
  //   //create paragraph
  //   var para = document.createElement("p");

  //   var temps = document.createTextNode(weather.main.temp);
  //   var humiditys = document.createTextNode(weather.main.humidity);

    
  //   para.appendChild(humiditys);
  //   para.appendChild(temps);

  //  weatherIs.innerHTML += para;
  //   // console.log(weather.main.temp);
  //   // console.log(weather.main.humidity);
  //   console.log(para);


    ellipse(100, 100, weather.main.temp, weather.main.temp);
    ellipse(300, 100, weather.main.humidity, weather.main.humidity);

    
   }
}



   
