<template>
  <header>
    <h1 v-if="weatherOpen">Weather.forecast</h1>
    <h1 v-else-if="todayNews && newsOpen">Weather.news</h1>
  </header>
  <main v-if="weatherOpen">
    <section class="currentWeather">
      <current-weather
        :todayWeather="todayWeather"
        :weatherOutput="weatherOutput"
        :locationMsg="locationMsg"
      ></current-weather>
    </section>
    <section class="sideBar" v-if="weatherOutput">
      <side-bar
        @location="getWeather"
        @isWeatherOpen="toggleWeatherOpen"
        @isNewsOpen="toggleNewsOpen"
        :weather-data="weatherOutput"
        :is-news-open="newsOpen"
        :is-weather-open="weatherOpen"
      ></side-bar>
    </section>
  </main>
  <main v-else-if="todayNews && newsOpen">
    <section class="sideBar" v-if="weatherOutput">
      <side-bar
        @location="getWeather"
        @isWeatherOpen="toggleWeatherOpen"
        @isNewsOpen="toggleNewsOpen"
        :weather-data="weatherOutput"
        :is-news-open="newsOpen"
        :is-weather-open="weatherOpen"
      ></side-bar>
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
      todayWeather: '',
      todayNews: 'abc',
      newsOpen: false,
      weatherOpen: true,
      locationMsg: ''
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
        navigator.geolocation.getCurrentPosition(this.sendLocation, this.locationError)
      }
    },
    sendLocation(position) {

      this.getWeather(['no', position.coords.latitude, position.coords.longitude])
    },
    locationError(code) {
      this.locationMsg = code.message
    },
    async getWeather(/* params */) {
      //params are -- [city, lat, long] --
      const data = await getData('http://localhost:8081/test_data')
/*       const data = await getData(
        `http://localhost:8081/data/${params[0]}/${params[1]}/${params[2]}`
      ) */
/*       const data = await getData(`https://weather-app-e871.onrender.com/data/${params[0]}/${params[1]}/${params[2]}`) */
      if (!data) {
        this.weatherOutput = ''
      } else {
        this.weatherOutput = data
      }
      this.todayWeather = data.currentWeather
    },
    toggleWeatherOpen() {
      this.weatherOpen = true
      this.newsOpen = false
    },
    toggleNewsOpen() {
      this.newsOpen = true
      this.weatherOpen = false
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
  background: linear-gradient(180deg, rgb(var(--pop-rgb)) 20%, rgb(var(--text-rgb)) 110%);
}
#app {
  margin: auto;
  max-width: 90rem;
  min-height: 100vh;
  color: rgb(var(--text-rgb));
}
header {
  display: flex;
  justify-content: space-between;
  align-items: baseline;
  margin-bottom: -0.8rem;
  padding: 0.5rem clamp(1rem, 3vw, 4rem) 0 clamp(1rem, 3vw, 4rem);
}
main {
  display: flex;
  gap: clamp(0.5rem, 3vw, 4rem);
  margin: 0 clamp(1rem, 3vw, 4rem) clamp(1rem, 3vw, 4rem) clamp(1rem, 3vw, 4rem);
}
.currentWeather {
  flex: 4;
}
.sideBar {
  flex: 3;
  display: flex;
  flex-direction: column;
  background: rgb(var(--bg-rgb), 0.8);
  padding: 0 clamp(0.5rem, 2vw, 2rem);
  border-radius: 0.5rem;
  min-height: 60vh;
}
.todayWeather {
  position: sticky;
  top: 2.8rem;
  background: rgba(var(--bg-rgb), 0.8);
  padding: 1.5rem clamp(1rem, 2vw, 2rem);
  border-radius: 0.5rem;
}
h1 {
  color: rgba(var(--bg-rgb), 0.8);
}
img {
  width: 3rem;
  margin-bottom: -0.5rem;
}
@media screen and (max-width: 1024px) {
  main {
    flex-direction: column;
  }
  .sideBar {
    margin-bottom: 2rem;
  }
}
@media screen and (max-width: 768px) {
  body {
    background: rgb(var(--pop-rgb));
  }
  header {
    padding: 0.5rem clamp(0.5rem, 2vw, 2rem) 0 clamp(0.5rem, 2vw, 2rem);
  }
  main {
    margin: 0;
  }
  .sideBar {
    margin-bottom: 1rem;
  }
  .sideBar,
  .todayWeather {
    border-radius: 0;
  }
}
@media screen and (max-width: 425px) {
  body {
    line-height: 1.5;
  }
  header {
    text-align: center;
    padding: 0.5rem 0 0 0.2rem;
    margin-bottom: -0.6rem;
  }
  h1 {
    font-size: 1.75rem;
  }
  .sideBar {
    padding: 0 0.2rem;
    margin-bottom: 1rem;
  }
  .todayWeather {
    padding: 1rem 0.2rem;
  }
}
</style>
