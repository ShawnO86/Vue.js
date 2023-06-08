<template>
  <main>
    <header>
      <h1>7-Day Weather Forcast</h1>
      <h2 class="location">{{ currentLocation }}</h2>
    </header>
    <side-bar @location="getInput"></side-bar>
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
      currentLocation: ''
    }
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
