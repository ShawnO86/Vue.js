import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';
const fetch = (...args) =>
  import('node-fetch').then(({ default: fetch }) => fetch(...args));

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
const port = process.env.PORT || 8081;

dotenv.config();
app.use(morgan('tiny'));
app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(express.static(__dirname + '/dist'));

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/dist/index.html');
});

app.get("/hello", (_req, res) => {
  res.json({ message: "Hello, world!" });
});

app.listen(port, () => {
  console.log("Server listening on port", port);
});

const projectData = {};
const geoKey = process.env.geonames_key;
const weatherBitKey = process.env.weatherbit_key;
//const newsapiKey = process.env.newsapi_key;
const iconURL = (icon) => {
  return "https://cdn.weatherbit.io/static/img/icons/" + icon + ".png";
};

const currentDayTime = new Date();
const now = currentDayTime.getHours();
const m = currentDayTime.getMinutes();

const currentDay = (date) => {
  const dayValue = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const d = new Date(`${date}, ${now}:${m}`);
  return dayValue[d.getDay()];
};

const dayMonth = (date) => {
  const monthValue = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
  const d = new Date(`${date}, ${now}:${m}`)
  return `${monthValue[d.getMonth()]} ${d.getDate()}`;
}

const timeStampToReadable = (timestamp) => {
  const ts = new Date(timestamp * 1000);
  return ts;
}

// --------- test data
const weatherData =
{
  long: '-87.65005',
  lat: '41.85003',
  country: 'United States',
  local: 'Illinois',
  name: 'Chicago',
  status: '',
  currentWeather: {
    alerts: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    temp: 87,
    feelsLike: 92,
    air: 82,
    clouds: 0 + "%",
    observedTime: timeStampToReadable(1687375800),
    humidity: 35 + "%",
    wind_speed: 9.2 + "MPH",
    wind_dir: "ENE",
    rain_chance: 0 + "%",
    uv: Math.round(9.774478 * 10) / 10,
    iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
  },
  forcast: [
    {
      day: currentDay('2023-06-14'),
      date: dayMonth('2023-06-14'),
      high_temp: 66.9,
      low_temp: 57.3,
      humidity: '75%',
      wind_speed: '11.9MPH',
      wind_gusts: '17.9MPH',
      rain_chance: "25%",
      clouds: "41%",
      wind_dir: "NE",
      uv: 7.5,
      sunrise: timeStampToReadable('1530321260'),
      sunset: timeStampToReadable('1530391260'),
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      day: currentDay('2023-06-15'),
      date: dayMonth('2023-06-15'),
      high_temp: 69.5,
      low_temp: 57.5,
      humidity: '78%',
      wind_speed: '7.2MPH',
      wind_gusts: '9.6MPH',
      rain_chance: "25%",
      clouds: "41%",
      wind_dir: "NE",
      uv: 7.5,
      sunrise: timeStampToReadable('1530321260'),
      sunset: timeStampToReadable('1530391260'),
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      day: currentDay('2023-06-16'),
      date: dayMonth('2023-06-16'),
      high_temp: 77.2,
      low_temp: 56.3,
      humidity: '71%',
      wind_speed: '8.7MPH',
      wind_gusts: '13MPH',
      rain_chance: "25%",
      clouds: "41%",
      wind_dir: "NE",
      uv: 7.5,
      sunrise: timeStampToReadable('1530321260'),
      sunset: timeStampToReadable('1530391260'),
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      day: currentDay('2023-06-17'),
      date: dayMonth('2023-06-17'),
      high_temp: 69.3,
      low_temp: 57.5,
      humidity: '68%',
      wind_speed: '9.6MPH',
      wind_gusts: '14.8MPH',
      rain_chance: "25%",
      clouds: "41%",
      wind_dir: "NE",
      uv: 7.5,
      sunrise: timeStampToReadable('1530321260'),
      sunset: timeStampToReadable('1530391260'),
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      day: currentDay('2023-06-18'),
      date: dayMonth('2023-06-18'),
      high_temp: 74.3,
      low_temp: 62.1,
      humidity: '61%',
      wind_speed: '8.3MPH',
      wind_gusts: '12.3MPH',
      rain_chance: "25%",
      clouds: "41%",
      wind_dir: "NE",
      uv: 7.5,
      sunrise: timeStampToReadable('1530321260'),
      sunset: timeStampToReadable('1530391260'),
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      day: currentDay('2023-06-19'),
      date: dayMonth('2023-06-19'),
      high_temp: 78.7,
      low_temp: 62.5,
      humidity: '61%',
      wind_speed: '10.5MPH',
      wind_gusts: '15.4MPH',
      rain_chance: "25%",
      clouds: "41%",
      wind_dir: "NE",
      uv: 7.5,
      sunrise: timeStampToReadable('1530321260'),
      sunset: timeStampToReadable('1530391260'),
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      day: currentDay('2023-06-20'),
      date: dayMonth('2023-06-20'),
      high_temp: 67,
      low_temp: 61.4,
      humidity: '73%',
      wind_speed: '7.6MPH',
      wind_gusts: '12.3MPH',
      rain_chance: "25%",
      clouds: "41%",
      wind_dir: "NE",
      uv: 7.5,
      sunrise: timeStampToReadable('1530321260'),
      sunset: timeStampToReadable('1530391260'),
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    }
  ]
};

app.get('/test_data', async (req, res) => {
  try {
    console.log(weatherData)
    res.send(weatherData);
  } catch (e) {
    console.log("error", e);
  }
});
//change to POST to recieve weather city/geolocation
//set up another POST for news category
//then use get for sending weather data and news data seperate 
app.get('/data/:city?/:lat?/:long?', async (req, res) => {
  await getGeoData(req);
  try {
    res.send(projectData);
  } catch (e) {
    console.log("Main Data error", e);
  }
});

const getGeoData = async (req) => {
  let geoData = ''
  if (req.params.city !== 'no') {
    geoData = await fetch(`http://api.geonames.org/searchJSON?q=${req.params.city}&maxRows=1&username=${geoKey}`);
    try {
      const data = await geoData.json();
      //populate projectData with api data
      projectData.long = data.geonames[0].lng
      projectData.lat = data.geonames[0].lat
      projectData.country = data.geonames[0].countryName
      projectData.local = data.geonames[0].adminName1
      projectData.name = data.geonames[0].name
      //call other APIs that require geonames data
      await getForcastArr(projectData.lat, projectData.long);
      await getCurrentWeather(projectData.lat, projectData.long);
    } catch (e) {
      console.log("Geo search data error", e);
    }
  }
  else if (req.params.lat !== 'no' && req.params.long !== 'no') {
    geoData = await fetch(`http://api.geonames.org/findNearbyPostalCodesJSON?lat=${req.params.lat}&lng=${req.params.long}&maxRows=1&username=${geoKey}`)
    try {
      const data = await geoData.json();
      //populate projectData with api data
      projectData.long = data.postalCodes[0].lng
      projectData.lat = data.postalCodes[0].lat
      projectData.country = data.postalCodes[0].countryCode
      projectData.local = data.postalCodes[0].adminName1
      projectData.name = data.postalCodes[0].placeName
      //call other APIs that require geonames data
      await getForcastArr(projectData.lat, projectData.long);
      await getCurrentWeather(projectData.lat, projectData.long);
    } catch (e) {
      console.log("Geo postal data error", e);
    }
  }
};

const getForcastArr = async (lat, long) => {
  let forcast = [];
  let weatherData = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${long}&units=I&key=${weatherBitKey}`);
  try {
    const wData = await weatherData.json();
    if (wData.status_code == 429) {
      projectData.status = wData.status_message;
      console.log(wData.status_message)
    } else {
      //Loop over weatherbit api data - to extract data app uses
      wData.data.forEach(element => {
        //push the 7 days of forcast to the forcast array 
        forcast.push({
          day: currentDay(element.datetime),
          date: dayMonth(element.datetime),
          high_temp: element.high_temp,
          low_temp: element.low_temp,
          humidity: element.rh + "%",
          wind_speed: element.wind_spd + "MPH",
          wind_gusts: element.wind_gust_spd + "MPH",
          wind_dir: element.wind_cdir,
          rain_chance: element.pop + "%",
          clouds: element.clouds + "%",
          uv: element.uv,
          sunrise: timeStampToReadable(element.sunrise_ts),
          sunset: timeStampToReadable(element.sunset_ts),
          iconDesc: { icon: iconURL(element.weather.icon), description: element.weather.description }
        })
      });
    }
    //add forcast array to projectData
    projectData.forcast = forcast;
    projectData.status = '';
  } catch (e) {
    console.log("forecast weather error:", e);
  }
}

const getCurrentWeather = async (lat, long) => {
  let weatherData = await fetch(`https://api.weatherbit.io/v2.0/current?lat=${lat}&lon=${long}&key=${weatherBitKey}&include=minutely,alerts&units=I`)
  let currentWeather = {}
  try {
    const wData = await weatherData.json();
    if (wData.status_code == 429) {
      projectData.status = wData.status_message;
      console.log(wData.status_message)
    } else {
      const data = wData.data[0];
      currentWeather = {
        alerts: !wData.alerts[0] ? "No alerts at this time" : wData.alerts[0].description,
        temp: data.temp,
        feelsLike: data.app_temp,
        air: data.aqi,
        clouds: data.clouds + "%",
        observedTime: timeStampToReadable(data.ts),
        humidity: data.rh + "%",
        wind_speed: data.wind_spd + "MPH",
        wind_dir: data.wind_cdir,
        rain_chance: data.precip + "%",
        uv: Math.round(data.uv * 10) / 10,
        iconDesc: { icon: iconURL(data.weather.icon), description: data.weather.description }
      };
      projectData.currentWeather = currentWeather;
      projectData.status = '';
    }
  } catch (e) {
    console.log("current weather error:", e);
  }
}

//newsapi endpoint im going to be using
/* const getNews = async (category) => {
  let newsData = await fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${newsapiKey}&category=${category}`)
  try {
    const data = await newsData.json()
  } catch(e) {
    console.log("news data error: ", e)
  }
} */