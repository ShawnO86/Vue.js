<template>
  <header>
    <h1>7-Day Weather Forcast</h1>
    <h2 class="location">{{ currentLocation }}</h2>
    <h3>Mounted Test data: {{ serverOutput[0] }}</h3>
  </header>
  <main>
    <section class="sideBar">
      <side-bar @location="getInput"></side-bar>
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
      weatherOutput: [
        
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
    fetch('http://localhost:8081/data')
      .then((response) => response.json())
      .then((result) => {
        this.serverOutput = result.data
        this.weatherOutput = this.serverOutput
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
  min-width: 47%;
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
