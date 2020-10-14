const CITY = "Paris";
const API = "a53af32d6d0eefb218dd3478d2375a5c";

const app = new function(){
  
  this.container = document.querySelector('.container');
  // ----HEADER
  this.imgBackground = document.getElementById('image-background');
  this.city = document.getElementById('header-city-name');
  this.headerWeatherInfo = document.getElementById('header-weather-info');
  this.headerTemp = document.getElementById('header-temp');
  //----FIRST SECTION
  this.firstSecDay = document.getElementById('firstSection-today');
  this.maxTemp = document.getElementById('firstSectionMaxTemp');
  this.minTemp = document.getElementById('firstSectionMinTemp');
  //---SECOND SECTION
  this.actualWeatherIcon = document.getElementById('actual-weather-icon');
  this.secSectionTemp = document.getElementById('secSection-temp');
  this.secSection = document.querySelector('.sec-section');
  this.weatherDiv = document.querySelector('.weather-sec-section');
  //----THIRD SECTION

  this.getToday = function() {
    const d = new Date();
    const weekday = new Array(7);
    weekday[0] = "Sunday";
    weekday[1] = "Monday";
    weekday[2] = "Tuesday";
    weekday[3] = "Wednesday";
    weekday[4] = "Thursday";
    weekday[5] = "Friday";
    weekday[6] = "Saturday";
  
    const n = weekday[d.getDay()];
    this.firstSecDay.innerHTML = n;
  }

  this.getBackgroundImg = function(data) {
    const imgBack = document.createElement('img');
    if(data.weather[0].icon === "11d"){//thunderstorm
      imgBack.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fwallpapertag.com%2Fwallpaper%2Ffull%2Fc%2Fd%2Fe%2F814264-beautiful-thunderstorm-background-1920x1080.jpg&f=1&nofb=1"
      imgBack.classList.add('fullImg');
      this.imgBackground.appendChild(imgBack)
    } else if(data.weather[0].icon === ("09d" || "10d") ){//rain
      imgBack.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse2.mm.bing.net%2Fth%3Fid%3DOIP.UPhGPiSmca-WiHJCzRLh6QHaEK%26pid%3DApi&f=1"
      imgBack.classList.add('fullImg');
      this.imgBackground.appendChild(imgBack)
    } else if(data.weather[0].icon === "13d"){//snow
      imgBack.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fi.ytimg.com%2Fvi%2FUBNd-DGHgC0%2Fmaxresdefault.jpg&f=1&nofb=1"
      imgBack.classList.add('fullImg');
      this.imgBackground.appendChild(imgBack)
    } else if(data.weather[0].icon === "01d"){//sun
      imgBack.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Fs7d2.scene7.com%2Fis%2Fimage%2FTWCNews%2F1031_nc_sunny_weather_2-1&f=1&nofb=1"
      imgBack.classList.add('fullImg');
      this.imgBackground.appendChild(imgBack)
    } else if(data.weather[0].icon === "03d"){//cloud
      imgBack.src = "https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.ZIpI2qMTXq_OMp9hT3xXBwHaFj%26pid%3DApi&f=1"
      imgBack.classList.add('fullImg');
      this.imgBackground.appendChild(imgBack)
    }
  }

  this.fetchAll = function(){
    fetch('http://api.openweathermap.org/data/2.5/weather?q=London,uk&units=metric&lang=fr&APPID=a53af32d6d0eefb218dd3478d2375a5c')
    .then(res => res.json())
    .then(data => {
      // console.log(data);
      // ----HEADER
      this.getBackgroundImg(data);
      this.city.innerHTML = data.name;
      this.headerWeatherInfo.innerHTML = data.weather[0].description.charAt(0).toUpperCase() + data.weather[0].description.slice(1);
      this.headerTemp.innerHTML = Math.floor(data.main.temp) + '°';

      //----FIRST SECTION
      this.getToday();
      this.maxTemp.innerHTML = Math.floor(data.main.temp_max);
      this.minTemp.innerHTML = Math.floor(data.main.temp_min);
      //---SECOND SECTION
      const actualIcon = document.createElement('img');
      actualIcon.src = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
      this.actualWeatherIcon.appendChild(actualIcon);
      this.secSectionTemp.innerHTML = Math.floor(data.main.temp) + '°';
      // this.getFuturWeather();
      //----THIRD SECTION
    })
    .catch(err => console.log('Request Failed', err));
  }

  // this.getFuturWeather = function(){
  //   fetch('http://api.openweathermap.org/data/2.5/forecast?q=London,uk&units=metric&lang=fr&APPID=a53af32d6d0eefb218dd3478d2375a5c')
  //   .then(res => res.json())
  //   .then(data => {
  //     console.log(data);
  //     for(let i = 0; i < data.list.length; i++){
  //       console.log(data.list[i]);
  //       // this.weatherDiv.append(data.list[i].weather[0].description);
  //       // const actualIcon = document.createElement('img');
  //       // actualIcon.src = `http://openweathermap.org/img/wn/${data.list[i].weather[0].icon}@2x.png`;
  //       let futurDays = this.createSecSectionDiv(data.list[i].dt_txt, "Icon", Math.floor(data.list[i].main.temp));
  //       console.log('futur: ' + futurDays);
  //       this.weatherDiv.append(futurDays);
  //     }
  //   })
  //   .catch(err => console.log('Request Failed', err));
  // }

  // this.createSecSectionDiv = function(day, icon, temp){
  //   return `
  //   <div class="weather-sec-section">
  //     <div>${day}</div>
  //     <div id="actual-weather-icon">${icon}</div>
  //     <div id="secSection-temp">${temp}</div>
  //   </div>
  //   `;
  // }
}

app.fetchAll();