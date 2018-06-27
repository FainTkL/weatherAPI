var weather;
var api = 'http://api.openweathermap.org/data/2.5/weather?q=';
var apiKey = '&APPID=c12e9248a396e671c3a988a46ebb10f5';
var units = '&units=metric"';
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
  loadJSON(url, gotData);
  }

function gotData(data){
    weather = data;
  }
  
function draw() {
   background(0);
   
   if(weather){
     ellipse(100, 100, weather.main.temp, weather.main.temp);
     ellipse(300, 100, weather.main.humidity, weather.main.humidity);
   }
}



   
