<template>
  <section class="sideBar">
    <location-input @location="getInput"></location-input>


    <div v-if="currentLocation" class="weatherDisplay">
      <p @click="currentLocation = ''">back</p>
      <weather-display :weatherOutput="weatherOutput"></weather-display>
    </div>
    <div v-else class="defaultLocations">

      <p @click="currentLocation = 'Chicago, IL'">Chicago, IL</p>
      <p @click="currentLocation = 'Los Angeles, CA'">Los Angeles, CA</p>
      <p @click="currentLocation = 'New York, NY'">New York, NY</p>
      <p @click="currentLocation = 'Miami, FL'">Miami, FL</p>
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
      ]
    }
  },
  methods: {
    getInput(location) {
      this.currentLocation = location
    }
  }
}
</script>
  
  <style scoped>
.sideBar {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  width: 50%;
  padding: 0 0 0.5rem 0;
  overflow-y: auto;
}
.defaultLocations {
  display: flex;
  flex-direction: column;
  width: calc(100% - 4rem);
  padding: 3rem 0;
  gap: 1.25rem;
  border-bottom: 1px solid var(--text-color);
}
.weatherDisplay {
  width: 100%;
}
.weatherOption {
  background: rgba(255, 255, 255, 0.1);
  width: 50%;
  text-align: center;
  padding: 0.5rem;
  cursor: pointer;
}
.weatherOption:hover {
  background: rgba(255, 255, 255, 0.15);
}
.weatherOption:active {
  background: rgba(0, 0, 0, 0.1);
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
