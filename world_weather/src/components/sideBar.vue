<template>
  <location-input @location="getInput"></location-input>
  <div v-if="weatherData || weatherOutput" class="weatherDisplay">
    <sub>Click on a day for more info.</sub>
    <weather-display :weatherOutput="weatherData" />
  </div>
</template>
  
  <script>
import LocationInput from './locationInput.vue'
import WeatherDisplay from './weatherDisplay.vue'
export default {
  components: {
    LocationInput,
    WeatherDisplay
  },
  emits: ['location'],
  props: ['weatherData'],
  data() {
    return {
      currentLocation: '',
    }
  },
  inject: ['weatherOutput'],
  methods: {
    getInput(location) {
      this.currentLocation = location
      this.$emit('location', this.currentLocation)
    }
  }
}
</script>
  
  <style scoped>
.weatherDisplay {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
