<template>
  <header>
    <h1>Weather.forcast</h1>
    <div class="todayWeather" v-if="todayWeather && todayWeather.iconDesc">
      <div class="location">
        <div class="frontLocation">
          <div>
            <h2>
              {{ currentLocation }}
            </h2>
            <h3>{{ weatherOutput.forcast[0].day }}, {{ weatherOutput.forcast[0].date }}</h3>
          </div>
          <div>
            <p>
              Current: <span class="bold">{{ todayWeather.temp }}&deg; F</span>
            </p>
            <p>
              Feels Like: <span class="bold">{{ todayWeather.feelsLike }}&deg; F</span>
            </p>
          </div>
        </div>
        <div class="frontWeather">
          <figure>
            <img :src="todayWeather.iconDesc.icon" class="frontIcon" alt="weather icon" />
            <figcaption>{{ todayWeather.iconDesc.description }}</figcaption>
          </figure>
        </div>
      </div>
      <div class="extraWeather_holder">
        <div class="location_border"></div>
        <div class="extraWeather_data">
          <div class="extraWeather_firstSet">
            <p>
              Chance of Rain: <span class="bold">{{ todayWeather.rain_chance }}</span>
            </p>
            <p>
              Wind:
              <span class="bold">{{ todayWeather.wind_speed }} - {{ todayWeather.wind_dir }}</span>
            </p>
            <p>
              UV Index: <span class="bold">{{ todayWeather.uv }}</span>
            </p>
          </div>
          <div class="extraWeather_secondSet">
            <p>
              Humidity: <span class="bold">{{ todayWeather.humidity }}</span>
            </p>
            <p>
              Cloud Cover: <span class="bold">{{ todayWeather.clouds }}</span>
            </p>
            <p>
              Air Quality Index: <span class="bold">{{ todayWeather.air }}</span>
            </p>
          </div>
        </div>
        <div class="extraWeather_alerts">
          <div class="location_border"></div>
          <h4>Weather Alerts:</h4>
          {{ todayWeather.alerts }}
          <div class="location_border"></div>
          <p>Last Updated: {{ convertTimeToLocal(todayWeather.observedTime) }}</p>
        </div>
      </div>
    </div>
    <div class="location" v-else-if="todayWeather">{{ todayWeather }}</div>
  </header>
  <main>
    <section class="sideBar">
      <side-bar @location="getWeather" :weather-data="weatherOutput"></side-bar>
    </section>
  </main>
</template>

<script>
import SideBar from './components/sideBar.vue'

const getData = async (url = '') => {
  //calls argument url and waits for data/status
  const req = await fetch(url)
  try {
    //return api data in JSON
    const data = await req.json()
    return data
  } catch (e) {
    console.log('error', e)
  }
}

export default {
  components: {
    SideBar
  },
  data() {
    return {
      weatherOutput: {},
      todayWeather: ''
    }
  },
  provide() {
    return {
      weatherOutput: this.weatherOutput
    }
  },
  computed: {
    currentLocation() {
      return this.weatherOutput.name + ', ' + this.weatherOutput.local
    }
  },
  mounted() {
    this.getWeather('Chicago, IL')
  },
  methods: {
    async getWeather(location) {
      //const data = await getData('http://localhost:8081/test_data')
      //const data = await getData('http://localhost:8081/data/' + location)
      const data = await getData('https://weather-app-e871.onrender.com/data/' + location)
      if (data.forcast.length <= 1) {
        this.weatherOutput = ''
      } else {
        this.weatherOutput = data
      }
      this.todayWeather = data.currentWeather
    },
    convertTimeToLocal(time) {
      const localTimeZone = new Date(time)
        .toLocaleString('en', { timeZoneName: 'short' })
        .split(' ')
      localTimeZone[1] = localTimeZone[1].split(':')
      localTimeZone[1] = [localTimeZone[1][0], localTimeZone[1][1]]
      return `${localTimeZone[1].join(':')} ${localTimeZone[2]}`
    }
  }
}
</script>

<style>
:root {
  --bg-rgb: 5, 42, 59;
  --secondary-rgb: 0, 122, 179;
  --text-rgb: 207, 229, 238;
  --pop-rgb: 0, 174, 255;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  font-family: 'Segoe UI', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  line-height: 1.6;
}
#app {
  display: flex;
  justify-content: space-between;
  height: 100vh;
  color: rgb(var(--text-rgb));
  background: linear-gradient(180deg, #007ab3 20%, #b4cfdb 110%);
}
main {
  display: flex;
  min-width: 44vw;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;

}
.sideBar {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgb(var(--bg-rgb), 0.5);
  overflow: auto;
  padding: 0 clamp(0.5rem, 2.5vw, 3rem);
}
.todayWeather {
  background: rgba(var(--bg-rgb), 0.5);
  padding: 1.5rem clamp(1rem, 2.5vw, 3rem);
  margin: 0 clamp(0.25rem, 1.5vw, 2rem);
  border-radius: 0.5rem;
  overflow-y: auto;
}
.location {
  display: flex;
  justify-content: space-between;
}
.extraWeather_holder {
  display: flex;
  flex-direction: column;
}
.extraWeather_data {
  display: flex;
  justify-content: space-between;
}
.extraWeather_secondSet {
  text-align: right;
}
.location_border {
  border-top: 1px solid rgb(var(--text-rgb));
  width: 100%;
  margin: 1rem 0;
}
h1 {
  font-size: 1.5rem;
  padding: 0 clamp(1.25rem, 4vw, 5rem);
}
h2 {
  font-size: 2rem;
}
.frontLocation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}
.frontWeather,
.frontWeather figure {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.bold {
  font-weight: 700;
}
.frontIcon {
  width: clamp(3rem, 5vw, 5rem);
}
img {
  width: 3rem;
  margin-bottom: -0.5rem;
}
@media screen and (max-width: 1024px) {
  #app {
    flex-direction: column;
    height: 100%;
  }
  main {
    height: 100%;
  }
  header {
    padding: 0.5rem clamp(2rem, 6vw, 5rem) 0 clamp(2rem, 6vw, 5rem);
    background: rgb(var(--bg-rgb), 0.8);
  }
  .sideBar {
    padding: 0 clamp(2rem, 6vw, 5rem);
    background: rgb(var(--bg-rgb), 0.8);
  }
  .sideBar form {
  position:static;
  background: none;
}
  h1 {
    padding: 0.25rem 0;
  }
  .todayWeather {
  background: none;
  padding: 0;
  margin: 0;
}
  .location {
    margin: 0.5rem 0;
    flex-direction: row;
    background: none;
    height: fit-content;
  }
  .frontWeather {
    align-items: flex-end;
  }
  .frontLocation {
    justify-content: center;
  }
}
@media screen and (max-width: 768px) {
  h2 {
    font-size: 1.5rem;
  }
  img {
    width: 2.5rem;
  }
}
@media screen and (max-width: 500px) {
  body {
    font-size: 14px;
  }
  header {
    padding: 0.25rem;
  }
  h1 {
    text-align: center;
  }
  .location {
    flex-wrap: wrap;
  }
  img {
    width: 2rem;
  }
  .sideBar {
    padding: 0 0.25rem;
  }
}
</style>
