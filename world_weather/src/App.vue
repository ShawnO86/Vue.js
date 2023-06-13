<template>
  <header>
    <h1>Weather.forcast</h1>
    <div class="location" v-if="todayWeather.weather && currentLocation">
      <div class="frontLocation">
        <h2>
          {{ currentLocation }} - {{ todayWeather.high_temp }}&deg;H /
          {{ todayWeather.low_temp }}&deg;L
        </h2>
        <p>{{ todayWeather.datetime }}</p>
      </div>
      <div class="frontWeather">
        <img :src="todayWeather.weather.icon" />
        <p>{{ todayWeather.weather.description }}</p>
      </div>
    </div>
  </header>
  <main>
    <section class="sideBar">
      <side-bar @location="getInput" :weather-data="weatherOutput"></side-bar>
    </section>
  </main>
</template>

<script>
import SideBar from './components/sideBar.vue'
export default {
  components: {
    SideBar
  },
  data() {
    return {
      currentLocation: '',
      weatherOutput: [],
      todayWeather: {}
    }
  },
  provide() {
    return {
      weatherOutput: this.weatherOutput
    }
  },
  mounted() {
    fetch('http://localhost:8081/test_data')
      .then((response) => response.json())
      .then((result) => {
        this.weatherOutput = result
        this.todayWeather = this.weatherOutput[0]
      })
  },
  methods: {
    getInput(location) {
      this.currentLocation = location
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
  min-width: 45%;
  background: rgb(var(--bg-rgb), 0.7);
}
header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  width: 100%;
  padding: 0.5rem clamp(1rem, 5vw, 3rem);
}
.sideBar {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 clamp(0.5rem, 2.5vw, 3rem);
  overflow: auto;
}
.location {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  margin: 3rem 0 50vh 0;
}
h1 {
  font-size: 1.5rem;
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
  margin-top: 1rem;
}
img {
  width: 3rem;
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
    padding: 0.5rem clamp(2rem, 6vw, 5rem);
  }
  .sideBar {
    padding: 0 clamp(2rem, 6vw, 5rem);
    background: linear-gradient(180deg, #007ab3 20%, rgb(var(--bg-rgb)) 100%);
  }
  .location {
    margin: 1rem 0;
    flex-direction: row;
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
}
@media screen and (max-width: 425px) {
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

  .sideBar {
    padding: 0 0.25rem;
  }
}
</style>
