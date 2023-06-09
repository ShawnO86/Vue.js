<template>
  <header>
    <h1>7-Day Weather Forcast</h1>
    <h2 class="location">{{ currentLocation }}</h2>
    <button @click="getData">Test</button>
    <h3>Mounted Test data: {{ serverOutput }}</h3>
    <h3>Button Test data: {{ testButton.message }}</h3>
  </header>
  <main>
    <section class="sideBar">
      <side-bar @location="getInput"></side-bar>
    </section>
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
  provide() {
    return {
      weatherOutput: this.weatherOutput
    }
  },
  mounted() {
    fetch(localHello)
      .then((response) => response.json())
      .then((result) => {
        this.serverOutput = result.message
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
  display: flex;
  justify-content: space-between;
  width: 100vw;
  height: 100vh;
  margin: 0 50px;
}
main {
  display: flex;
  justify-content: right;
  width: 50%;
  margin: 0;
  padding: 0;
}
header {
  padding: 0.5rem 1rem;
}
.sideBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--secondary-color);
  width: 100%;
  padding: 0 0 0.5rem 0;
  overflow-y: auto;
  height: 100%;
}
.location {
  margin-top: 3rem;
}
@media screen and (max-width: 1024px) {
  body {
    align-items: flex-start;
  }
  #app {
    flex-direction: column;
    margin: 0;
  }
  main {
    width: 100%;
    height: 100%;
    justify-content: flex-start;
  }
  header {
    padding: 0.5rem 4rem;
  }
  .sideBar {
    padding: 0 2rem 1rem 2rem;
  }
}
</style>
