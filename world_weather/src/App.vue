<template>
  <main>
    <header><h1>Current and 7-Day Weather Forcast</h1></header>
    <weather-display></weather-display>
  </main>
</template>

<script>
import WeatherDisplay from './components/weatherDisplay.vue'
export default {
  components: {
    WeatherDisplay
  }
}
</script>

<style>
:root {
  --bg-color: #0F5B86;
  --text-color: #f8f8f8;
  --pop-color: rgba(0, 174, 255, 0.589);
}

*,
*::before,
*::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-weight: normal;
}

body {
  display: flex;
  color: var(--text-color);
  background: var(--bg-color);
  line-height: 1.6;
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

@media screen and (max-width: 1024px) {
  body {
    align-items: flex-start;
  }

  #app {
  width: 100vw;
  max-height: 100vw;
  margin: 0;
}

  main {
    flex-direction: column;
    justify-content: flex-start;
  }
}
</style>
