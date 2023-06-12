<template>
  <header>
    <h1>Weather.forcast</h1>
    <div class="location">
      <div>
        <h2>{{ currentLocation }}</h2>
        <p>{{ todayWeather.datetime }}</p>
      </div>
      <div class="frontWeather">
        <img src="https://cdn.weatherbit.io/static/img/icons/c03d.png" />
        <p>Cloudy</p>
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
    fetch('http://localhost:8081/data')
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
  min-width: 50%;
  background: rgb(var(--bg-rgb), 0.7);
}
header {
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 100%;
  padding: 0.5rem clamp(1rem, 5vw, 3rem);
}
.sideBar {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding: 0 clamp(0.5rem, 2.5vw, 3rem);
}
.location {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  align-items: baseline;
  margin: 3rem 0 5rem 0;
}
img {
  width: 3rem;
  padding: 0;
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
  }
}
@media screen and (max-width: 425px) {
  header {
    padding: 0.25rem;
  }
  .sideBar {
    padding: 0 0.25rem;
  }
}
</style>
