<template>
  <location-input @location="getInput"></location-input>
  <div v-if="weatherData" class="weatherDisplay">
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
}
</style>
