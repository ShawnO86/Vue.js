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

const iconURL = (icon) => {
  return "https://cdn.weatherbit.io/static/img/icons/" + icon + ".png";
};
// --------- test data
 const weatherData = 
  {
  long: '-87.65005',
  lat: '41.85003',
  country: 'United States',
  local: 'Illinois',
  name: 'Chicago',
  forcast: [
    {
      date: '2023-06-13',
      high_temp: 66.9,
      low_temp: 57.3,
      humidity: '75%',
      wind_speed: '11.9MPH',
      wind_gusts: '17.9MPH',
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      date: '2023-06-14',
      high_temp: 69.5,
      low_temp: 57.5,
      humidity: '78%',
      wind_speed: '7.2MPH',
      wind_gusts: '9.6MPH',
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      date: '2023-06-15',
      high_temp: 77.2,
      low_temp: 56.3,
      humidity: '71%',
      wind_speed: '8.7MPH',
      wind_gusts: '13MPH',
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      date: '2023-06-16',
      high_temp: 69.3,
      low_temp: 57.5,
      humidity: '68%',
      wind_speed: '9.6MPH',
      wind_gusts: '14.8MPH',
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      date: '2023-06-17',
      high_temp: 74.3,
      low_temp: 62.1,
      humidity: '61%',
      wind_speed: '8.3MPH',
      wind_gusts: '12.3MPH',
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      date: '2023-06-18',
      high_temp: 78.7,
      low_temp: 62.5,
      humidity: '61%',
      wind_speed: '10.5MPH',
      wind_gusts: '15.4MPH',
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    },
    {
      date: '2023-06-19',
      high_temp: 67,
      low_temp: 61.4,
      humidity: '73%',
      wind_speed: '7.6MPH',
      wind_gusts: '12.3MPH',
      iconDesc: { icon: iconURL("c04d"), description: "Overcast clouds" }
    }
  ]
};

let projectData = {};
const geoKey = process.env.geonames_key;
const weatherBitKey = process.env.weatherbit_key;


app.get('/test_data', async (req, res) => {
  try {
    res.send(weatherData);
  } catch (e) {
    console.log("error", e);
  }
});

app.get('/data/:city', async (req, res) => {
  await getGeoData(req);
  try {
    console.log(projectData)
    res.send(projectData);
  } catch (e) {
    console.log("error", e);
  }
});

const getGeoData = async (req) => {
  const city = req.params.city;
  let geoData = await fetch(`http://api.geonames.org/searchJSON?q=${city}&maxRows=1&fuzzy=0.8&username=${geoKey}`);
  try {
    const data = await geoData.json();
    //console.log("geo data:", data)
    //populate projectData object with api data
    projectData = {
      long: data.geonames[0].lng,
      lat: data.geonames[0].lat,
      country: data.geonames[0].countryName,
      local: data.geonames[0].adminName1,
      name: data.geonames[0].name
    };
    //call other APIs that require geonames data
    await getForcastArr(projectData.lat, projectData.long);
  } catch (e) {
    console.log(e);
  }
};

const getForcastArr = async (lat, long) => {
  let forcast = [];
  let weatherData = await fetch(`https://api.weatherbit.io/v2.0/forecast/daily?&lat=${lat}&lon=${long}&units=I&key=${weatherBitKey}`);
  try {
    const wData = await weatherData.json();
     if (wData.status_code == 429) {
      forcast[0] = wData.status_message;
      console.log(wData.status_message)
    } else { 
      //Loop over weatherbit api data - to extract data app uses
      wData.data.forEach(element => {
        //push the 7 days of forcast to the forcast array 
        forcast.push({
          date: element.datetime,
          high_temp: element.high_temp,
          low_temp: element.low_temp,
          humidity: element.rh + "%",
          wind_speed: element.wind_spd + "MPH",
          wind_gusts: element.wind_gust_spd + "MPH",
          rain_chance: element.pop + "%",
          clouds: element.clouds + "%",
          iconDesc: { icon: iconURL(element.weather.icon), description: element.weather.description }
        })
      });
    }
    //add forcast array to projectData
    projectData.forcast = forcast;
  } catch (e) {
    console.log("error:", e);
  }
}