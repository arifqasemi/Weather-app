var input = document.querySelector('.input');
var city = document.querySelector('.name');
var temp = document.querySelector('.temp');
var desc = document.querySelector('.desc');
var tempIcon = document.querySelector('.tempIcon');
var button= document.querySelector('button');
var hour =document.querySelector('.hour');
var minut =document.querySelector('.minute');
var second =document.querySelector('.second');
var ampm = document.querySelector('.ampm');



var weekday = document.querySelector('.weekday');
var tanggal = document.querySelector('.tanggal');
var bulan = document.querySelector('.bulan');
var year = document.querySelector('.year');
var rightnow = document.querySelector('.today');
var details = document.querySelector('.details');




/////arays////

const days = ['Sunday','Monday','Tuesday','Wednesday','Thursday','Friday','Saturday'];
const months = ['January', 'Feberuary','March','April','May','Jun','July','August','September','October','November','December']
////// Set Time //////

setInterval(() =>{
  const time = new Date();
  const month = time.getMonth();
  const date = time.getDate();
  const day = time.getDay();
  const hr = time.getHours()
  const mt = time.getMinutes();
  const yr = time.getFullYear();
  const sec = time.getSeconds();
  
  

  hour.innerHTML = hr +":";
  minut.innerHTML = mt  +":";
  second.innerHTML = sec;
  weekday.innerHTML = days[day] ;
  tanggal.innerHTML = date ;
  bulan.innerHTML = months[month];
  year.innerHTML = yr;


  if(hr>=12){
  ampm.innerHTML = 'PM';
  }else{
    ampm.innerHTML = 'AM';
  }
},1000)







window.addEventListener('load', myFunction);


button.addEventListener('click', function(name){
 
  myFunction();
fetch('https://api.openweathermap.org/data/2.5/forecast?q='+input.value+'&appid=efd600985169e28cc8cf68b2bdce453c')
.then(response => response.json())
.then(data => {

 

  console.log(data);
  for(i = 0; i<5; i++){
    document.querySelector(".temp" + (i+1) ).innerHTML =  + Number(data.list[i].main.temp - 273.15).toFixed(1)+ "°";
   
}


for(i = 0; i<5; i++){
  document.querySelector(".tempIcon" + (i+1)).src = "http://openweathermap.org/img/wn/"+
  data.list[i].weather[0].icon
  +"@4x.png";
}

document.querySelector(".windValue").innerHTML =  +   Number(data.list[i].wind.speed).toFixed(1)+"Kp/h";
document.querySelector(".humidityValue").innerHTML =  +   Number(data.list[i].main.humidity).toFixed(1)+"%";
document.querySelector(".pressureValue").innerHTML =  +   Number(data.list[i].main.pressure).toFixed(1);


  city.innerHTML =input.value;
  input.value ="";

})


.catch(err => alert("Wrong city name!"));

})





//Getting and displaying the text for the upcoming five days of the week
var d = new Date();
var weekday = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday",];

//Function to get the correct integer for the index of the days array
function myFunction() {
  var d = new Date();
  var weekday=new Array(7);
  weekday[0]="Sun";
  weekday[1]="Mon";
  weekday[2]="Tue";
  weekday[3]="Wedn";
  weekday[4]="Thu";
  weekday[5]="Fri";
  weekday[6]="Sat";
 

  
  for(i = 0; i<5; i++){
  var day5 = document.querySelector(".name"+ (i+1));
  day5.innerHTML=weekday[CheckDay(i)];
  }
}


function CheckDay(day){
  if(day + d.getDay() > 6){
      return day + d.getDay() - 7;
  }
  else{
      return day + d.getDay();
  }
}
  




// var API_KEY = "efd600985169e28cc8cf68b2bdce453c"

// window.addEventListener('load', getWeatherData);
//     function getWeatherData () {
//       navigator.geolocation.getCurrentPosition((success) => {
          
//           let {latitude, longitude } = success.coords;
  
//           fetch(`https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${API_KEY}`)
//           .then(res => res.json())
//           .then(data => {
  
//           console.log(data)
          
//           })
  
//       })
//   }