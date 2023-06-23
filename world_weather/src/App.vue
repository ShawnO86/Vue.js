<template>
  <header v-if="todayWeather">
    <h1>Weather.forecast</h1>
    <current-weather :todayWeather="todayWeather" :weatherOutput="weatherOutput"></current-weather>
  </header>
  <main>
    <section class="sideBar" v-if="weatherOutput">
      <side-bar @location="getWeather" :weather-data="weatherOutput"></side-bar>
    </section>
  </main>
</template>

<script>
import SideBar from './components/sideBar.vue'
import CurrentWeather from './components/currentWeather.vue'
import { computed } from 'vue'

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
    SideBar,
    CurrentWeather
  },
  data() {
    return {
      weatherOutput: {},
      todayWeather: ''
    }
  },
  provide() {
    return {
      weatherOutput: computed(() => this.weatherOutput)
    }
  },
  mounted() {
    this.getLocation()
  },
  methods: {
    getLocation() {
      if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(this.sendLocation)
      }
    },
    sendLocation(position) {
      this.getWeather(['no', position.coords.latitude, position.coords.longitude])
    },
    async getWeather(/* params */) {
      //params are -- [city, lat, long] --
      const data = await getData('http://localhost:8081/test_data')
/*       const data = await getData(
        `http://localhost:8081/data/${params[0]}/${params[1]}/${params[2]}`
      ) */
      //const data = await getData(`https://weather-app-e871.onrender.com/data/${params[0]}/${params[1]}/${params[2]}`)
      if (!data) {
        this.weatherOutput = ''
      } else {
        this.weatherOutput = data
      }
      this.todayWeather = data.currentWeather
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
  background: linear-gradient(180deg, #007ab3 20%, #b4cfdb 110%);
  max-width: 120rem;
}
#app {
  display: flex;
  justify-content: space-around;
  height: 100vh;
  color: rgb(var(--text-rgb));
}
main {
  display: flex;
  width: 100%;
  margin: 0 clamp(1rem, 4vw, 5rem) 0 0;
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  margin: 1rem clamp(1rem, 4vw, 5rem);
}
.sideBar {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background: rgb(var(--bg-rgb), 0.8);
  overflow: auto;
  padding: 0 clamp(0.5rem, 3vw, 4rem);
}
.todayWeather {
  background: rgba(var(--bg-rgb), 0.8);
  padding: 1.5rem clamp(1rem, 3vw, 4rem);
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
  border-top: 1px dotted rgb(var(--text-rgb));
  width: 100%;
  margin: 1rem 0;
}
h1 {
  font-size: 1.5rem;
  padding: 0.5rem clamp(1rem, 3vw, 4rem);
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
    margin: 0;
  }
  header {
    padding: 0.5rem clamp(2rem, 6vw, 5rem) 0 clamp(2rem, 6vw, 5rem);
    background: rgb(var(--bg-rgb), 0.8);
    width: 95%;
    margin: auto;
  }
  .sideBar {
    padding: 0 clamp(2rem, 6vw, 5rem);
    background: rgb(var(--bg-rgb), 0.8);
    width: 95%;
    margin: auto;
  }
  .sideBar form {
    position: static;
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
  header {
    width: 100%;
  }
  .sideBar {
    width: 100%;
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
  h2 {
    font-size: 1.5rem;
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
