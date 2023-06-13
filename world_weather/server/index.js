import express from "express";
import cors from 'cors';
import bodyParser from 'body-parser';
import morgan from 'morgan';
import path from 'path';
import { fileURLToPath } from 'url';
import dotenv from 'dotenv';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const app = express();
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

const port = process.env.PORT || 8081;
const iconURL = (icon) => {
  return "https://cdn.weatherbit.io/static/img/icons/" + icon + ".png";
};

app.listen(port, () => {
  console.log("Server listening on port", port);
});

//test data
const weatherData = [
  {
    datetime: "2017-04-01",
    wind_gust_spd: 16.7,
    wind_spd: 6.4,
    high_temp: 30,
    low_temp: 24.5,
    rh: 64.3,
    weather: {
      icon: iconURL("c03d"),
      code: "804",
      description: "Overcast clouds"
    }
  },
  {
    datetime: "2017-04-01",
    wind_gust_spd: 16.7,
    wind_spd: 6.4,
    high_temp: 30,
    low_temp: 24.5,
    rh: 64.3,
    weather: {
      icon: iconURL("c03d"),
      code: "804",
      description: "Overcast clouds"
    }
  },
  {
    datetime: "2017-04-01",
    wind_gust_spd: 16.7,
    wind_spd: 6.4,
    high_temp: 30,
    low_temp: 24.5,
    rh: 64.3,
    weather: {
      icon: iconURL("c03d"),
      code: "804",
      description: "Overcast clouds"
    }
  },
  {
    datetime: "2017-04-01",
    wind_gust_spd: 16.7,
    wind_spd: 6.4,
    high_temp: 30,
    low_temp: 24.5,
    rh: 64.3,
    weather: {
      icon: iconURL("c03d"),
      code: "804",
      description: "Overcast clouds"
    }
  },
  {
    datetime: "2017-04-01",
    wind_gust_spd: 16.7,
    wind_spd: 6.4,
    high_temp: 30,
    low_temp: 24.5,
    rh: 64.3,
    weather: {
      icon: iconURL("c03d"),
      code: "804",
      description: "Overcast clouds"
    }
  },
  {
    datetime: "2017-04-01",
    wind_gust_spd: 16.7,
    wind_spd: 6.4,
    high_temp: 30,
    low_temp: 24.5,
    rh: 64.3,
    weather: {
      icon: iconURL("c03d"),
      code: "804",
      description: "Overcast clouds"
    }
  },
  {
    datetime: "2017-04-01",
    wind_gust_spd: 16.7,
    wind_spd: 6.4,
    high_temp: 30,
    low_temp: 24.5,
    rh: 64.3,
    weather: {
      icon: iconURL("c03d"),
      code: "804",
      description: "Overcast clouds"
    }
  }
];

app.get('/test_data', async (req, res) => {
  try {
    res.send(weatherData);
  } catch (e) {
    console.log("error", e);
  }
});