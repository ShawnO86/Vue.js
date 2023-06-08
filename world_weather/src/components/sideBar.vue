<template>
  <section class="sideBar">
    <location-input @location="getInput"></location-input>

    <div v-if="currentLocation" class="weatherDisplay">
      <button @click="currentLocation = ''" class="backBtn">Back</button>
      <weather-display
        :weatherOutput="weatherOutput"
      ></weather-display>
    </div>
    <div v-else class="defaultLocations">
      <button @click="setCurrentLocation" class="locationBtn">Chicago, IL</button>
      <button @click="setCurrentLocation" class="locationBtn">Los Angeles, CA</button>
      <button @click="setCurrentLocation" class="locationBtn">New York, NY</button>
      <button @click="setCurrentLocation" class="locationBtn">Miami, FL</button>
    </div>
  </section>
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
  props: ['weatherOutput'],
  data() {
    return {
      currentLocation: ''
    }
  },
  methods: {
    getInput(location) {
      this.currentLocation = location
      this.$emit('location', this.currentLocation)
    },
    setCurrentLocation(e) {
      this.currentLocation = e.target.innerText
      this.$emit('location', this.currentLocation)
    }
  }
}
</script>
  
  <style scoped>
.sideBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: var(--secondary-color);
  width: 50%;
  padding: 0 0 0.5rem 0;
  overflow-y: auto;
}
.defaultLocations {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% - 4rem);
  padding: 3rem 0;
  gap: 1rem;
  border-bottom: 1px solid var(--text-color);
}
.locationBtn {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 0.5rem 0;
}
.locationBtn:hover {
  color: var(--pop-color);
}
.backBtn {
  background: none;
  border: none;
  border-bottom: 1px solid var(--text-color);
  color: var(--text-color);
  cursor: pointer;
  padding: 1rem 0;
  margin: 0 auto;
  width: calc(100% - 4rem);
}
.locationBtn:hover,
.backBtn:hover {
  color: var(--pop-color);
}
.weatherDisplay {
  display: flex;
  flex-direction: column;
  width: 100%;
}
@media screen and (max-width: 1024px) {
  .sideBar {
    width: 100%;
  }
  .defaultLocations {
    width: calc(100% - 8rem);
  }
}
</style>
