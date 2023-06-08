<template>
  <main>
    <header>
      <h1>7-Day Weather Forcast</h1>
      <h2 class="location">{{ currentLocation }}</h2>
      <button @click="getData">Test</button>
      <h3>Mounted Test data: {{ serverOutput }}</h3>
      <h3>Button Test data: {{ testButton.message }}</h3>
    </header>
    <side-bar @location="getInput" :weatherOutput="weatherOutput"></side-bar>
  </main>
</template>

<script>
const localHello = 'http://localhost:8081/hello'
import SideBar from './components/sideBar.vue'
export default {
  components: {
    SideBar
  },
  data() {
    return {
      currentLocation: '',
      weatherOutput: [
        {
          name: 'Rockford',
          local: 'IL',
          forcast: [
            {
              date: 'June, 06 2023',
              temp: '90°',
              iconDesc: {
                description: 'Cloudy',
                icon: 'icon IMG'
              }
            },
            {
              date: 'June, 07 2023',
              temp: '90°',
              iconDesc: {
                description: 'Cloudy',
                icon: 'icon IMG'
              }
            },
            {
              date: 'June, 08 2023',
              temp: '90°',
              iconDesc: {
                description: 'Cloudy',
                icon: 'icon IMG'
              }
            },
            {
              date: 'June, 09 2023',
              temp: '90°',
              iconDesc: {
                description: 'Cloudy',
                icon: 'icon IMG'
              }
            },
            {
              date: 'June, 10 2023',
              temp: '90°',
              iconDesc: {
                description: 'Cloudy',
                icon: 'icon IMG'
              }
            },
            {
              date: 'June, 11 2023',
              temp: '90°',
              iconDesc: {
                description: 'Cloudy',
                icon: 'icon IMG'
              }
            },
            {
              date: 'June, 12 2023',
              temp: '90°',
              iconDesc: {
                description: 'Cloudy',
                icon: 'icon IMG'
              }
            }
          ]
        }
      ],
      serverOutput: {},
      testButton: ''
    }
  },
  mounted() {
    fetch(localHello)
      .then((response) => response.json())
      .then((result) => {
        this.serverOutput = result
      })
  },
  methods: {
    getInput(location) {
      this.currentLocation = location
    },
    async getData() {
      //calls argument url and waits for data/status
      const req = await fetch(localHello)
      try {
        //return api data in JSON
        const data = await req.json()
        this.testButton = data
      } catch (e) {
        console.log('error', e)
      }
    }
  }
}
</script>

<style>
:root {
  --bg-color: #3c6a82;
  --secondary-color: #24404f;
  --text-color: #cfe5ee;
  --pop-color: #5fa8cf;
}
*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}
body {
  display: flex;
  color: var(--text-color);
  background: var(--bg-color);
  font-family: 'Segoe UI', sans-serif;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
#app {
  width: 100vw;
  max-height: 100vw;
  margin: 0 50px;
}
main {
  display: flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;
  height: 100vh;
}
header {
  padding: 0.5rem 1rem;
}
.location {
  margin-top: 3rem;
}
@media screen and (max-width: 1024px) {
  body {
    align-items: flex-start;
  }
  #app {
    margin: 0;
  }
  main {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
