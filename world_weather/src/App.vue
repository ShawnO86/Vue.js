<template>
  <header>
    <h1>Weather.forcast</h1>
    <div class="location" v-if="todayWeather && todayWeather.iconDesc">
      <div class="frontLocation">
        <h2>
          {{ currentLocation }} - {{ todayWeather.low_temp }}&deg;F /
          {{ todayWeather.high_temp }}&deg;F
        </h2>
        <p>{{ todayWeather.day }}, {{ todayWeather.date }}</p>
      </div>
      <div class="frontWeather">
        <img :src="todayWeather.iconDesc.icon" class="frontIcon" alt="weather icon"/>
        <p>{{ todayWeather.iconDesc.description }}</p>
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
  methods: {
    async getWeather(location) {
      //const data = await getData('http://localhost:8081/test_data')
      //const data = await getData('http://localhost:8081/data/' + location)
      const data = await getData('https://weather-app-e871.onrender.com/data/' + location)
      if(data.forcast.length <= 1) {
        this.weatherOutput = ''
      } else {
        this.weatherOutput = data
      }
      this.todayWeather = data.forcast[0]
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
  justify-content: space-between;
  width: 100%;
}
.sideBar {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 clamp(0.5rem, 2.5vw, 3rem);
  background: rgb(var(--bg-rgb), 0.5);
  overflow: auto;
}
.location {
  display: flex;
  justify-content: space-between;
  margin: 3rem 0 50vh 0;
  background: rgba(var(--bg-rgb), 0.5);
  padding: 0.5rem clamp(1rem, 5vw, 3rem);
}
h1 {
  font-size: 1.5rem;
  padding: 0.5rem clamp(1rem, 5vw, 3rem);
}
h2 {
  font-size: 2rem;
}
.frontLocation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}
.frontWeather {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  margin-top: 1rem;
}
.frontIcon {
  width: 4rem;
}
img {
  width: 3rem;
  margin-bottom: -0.5rem;
}
@media screen and (max-width: 1440px) {
  .location {
    flex-direction: column;
  }
  .frontWeather {
    align-items: flex-start;
  }
}
@media screen and (max-width: 1024px) {
  body {
    background: rgb(var(--bg-rgb));
  }
  #app {
    flex-direction: column;
    height: 100%;
    background: #007ab3;
  }
  main {
    height: 100%;
  }
  header {
    padding: 0.5rem clamp(2rem, 6vw, 5rem) 0 clamp(2rem, 6vw, 5rem);
    flex: 0;
  }
  .sideBar {
    padding: 0 clamp(2rem, 6vw, 5rem);
    background: linear-gradient(180deg, #007ab3 0%, rgb(var(--bg-rgb)) 80%);
    overflow-y: auto;
  }
  h1 {
    padding: 0.25rem 0;
  }
  .location {
    margin: 0.5rem 0;
    flex-direction: row;
    padding: 0.5rem 0;
    background: none;
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
    font-size: 1rem;
  }
  img {
    width: 2.5rem;
  }
  .frontIcon {
    width: 3rem;
  }
}
@media screen and (max-width: 425px) {
  body {
    font-size: 12px;
  }
  header {
    padding: 0.25rem;
  }
  h1 {
    text-align: center;
  }
  .location {
    flex-wrap: wrap;
    justify-content: space-around;
  }
  img {
    width: 2rem;
  }
  .sideBar {
    padding: 0 0.25rem;
  }
}
</style>
