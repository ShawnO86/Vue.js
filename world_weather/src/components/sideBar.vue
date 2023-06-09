<template>
  <location-input @location="getInput"></location-input>

  <div v-if="currentLocation" class="weatherDisplay">
    <div class="btnAlign">
      <button @click="currentLocation = ''" class="backBtn">&lt; Back</button>
    </div>
    <weather-display />
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
  width: calc(100% - 4rem);
  margin: 0 auto;
  text-align: right;
}
.backBtn {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 1rem 0;
}
.backBtn:hover {
  color: var(--pop-color);
}
.weatherDisplay {
  display: flex;
  flex-direction: column;
  width: 100%;
}
</style>
