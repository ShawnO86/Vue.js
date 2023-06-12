<template>
  <location-input @location="getInput"></location-input>

  <div v-if="currentLocation" class="weatherDisplay">
    <div class="btnAlign">
      <button @click="currentLocation = ''" class="backBtn">&lt; Back</button>
    </div>
    <weather-display :weatherOutput="weatherData" />
  </div>
  <default-locations v-else @location="getInput"></default-locations>
</template>
  
  <script>
import LocationInput from './locationInput.vue'
import WeatherDisplay from './weatherDisplay.vue'
import defaultLocations from './defaultLocations.vue'
export default {
  components: {
    LocationInput,
    WeatherDisplay,
    defaultLocations
  },
  emits: ['location'],
  props: ['weatherData'],
  data() {
    return {
      currentLocation: ''
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
.btnAlign {
  width: 100%;
}
.backBtn {
  padding: 0.75rem 1.75rem;
  margin-top: 0.5rem;
  background-color: rgb(var(--bg-rgb));
  border-radius: 0.5rem;
  border: 1px solid rgb(var(--bg-rgb));
  color: var(--text-color);
}
.backBtn:hover,
.backBtn:focus {
  border: 1px solid rgb(var(--text-rgb));
}
.weatherDisplay {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
