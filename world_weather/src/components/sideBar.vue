<template>
  <div class="nav">
      <button @click="toggleWeatherOpen">Weather</button>
      <button @click="toggleNewsOpen">News</button>
  </div>
  <div class="weatherSide" v-if="isWeatherOpen">
    <location-input @location="getInput"></location-input>
    <div v-if="weatherData || weatherOutput" class="weatherDisplay">
      <sub>Click on a day for more info.</sub>
      <weather-display :weatherOutput="weatherData" />
    </div>
  </div>
  <div class="newsSide" v-else-if="isNewsOpen">
    <weather-news></weather-news>
  </div>
</template>
  
  <script>
import LocationInput from './locationInput.vue'
import WeatherDisplay from './weatherDisplay.vue'
import WeatherNews from './weatherNews.vue'
export default {
  components: {
    LocationInput,
    WeatherDisplay,
    WeatherNews
  },
  emits: ['location', 'isNewsOpen', 'isWeatherOpen'],
  props: ['weatherData', 'isNewsOpen', 'isWeatherOpen'],
  data() {
    return {
      currentLocation: ''
    }
  },
  inject: ['weatherOutput'],
  methods: {
    getInput(location) {
      this.currentLocation = location
      this.$emit('location', this.currentLocation)
    },
    toggleWeatherOpen() {
      this.$emit('isWeatherOpen', this.isWeatherOpen)
    },
    toggleNewsOpen() {
      this.$emit('isNewsOpen', this.isNewsOpen)
    }
  }
}
</script>
  
  <style scoped>
.weatherDisplay {
  display: flex;
  flex-direction: column;
  width: 100%;
  padding-top: 0.5rem;
}
.nav {
  display: flex;
  justify-content: right;
  list-style: none;
  font-weight: 500;
  color: rgb(var(--text-rgb));
  width: 100%;
  margin: 1rem 0 0 0;
}
.nav button {
  width: 50%;
  text-align: center;
  padding: 0.25rem 0;
  cursor: pointer;
  background-color: rgb(var(--bg-rgb));
  border: 1px solid rgb(var(--bg-rgb));
  color: rgb(var(--text-rgb));
}
.nav button:first-of-type {
  border-right: 1px dotted rgb(var(--text-rgb));
}
.nav button:last-of-type {
  border-left: 1px dotted rgb(var(--text-rgb));
}
.nav button:hover,
.nav button:focus {
  background-color: rgba(var(--bg-rgb), 0.8);
  border: 1px solid rgb(var(--text-rgb));
}
</style>
