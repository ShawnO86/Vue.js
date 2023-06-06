<template>
  <section class="weatherDisplay">
    <location-input @location="getInput"></location-input>
    <h2>Weather Details</h2>
    <div v-if="currentLocation" class="weatherItemsHolder">
      <h3>{{ weatherOutput[0].name }}, {{ weatherOutput[0].local }}</h3>
      <sub>Click a day for more info</sub>
      <div v-for="(item, index) in weatherOutput" :key="index" class="weatherItems">
        <div v-for="(day, index) in item.forcast" :key="index">
          <!-- Turn into own component -- prop == {{ day }} -->
          <details>
            <summary class="weatherDay">
              <div class="dateTemp">
                <p>{{ day.date }}</p>
                <p>{{ day.temp }}</p>
              </div>
              <div class="iconHolder">
                <p>{{ day.iconDesc.description }}</p>
                <p>{{ day.iconDesc.icon }}</p>
              </div>
            </summary>
            <p>Detailed weather info for the day</p>
          </details>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import LocationInput from './locationInput.vue'
export default {
  components: {
    LocationInput
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
.weatherDisplay {
  display: flex;
  flex-direction: column;
  align-items: center;
  background: rgba(0, 0, 0, 0.1);
  width: 40%;
  padding: 0 0 0.5rem 0;
  text-align: right;
  overflow-y: auto;
}

h2 {
  border-bottom: 1px solid var(--text-color);
  margin: 3rem 0 1rem 0;
  padding: 1rem;
  width: 100%;
}

.weatherItemsHolder {
  width: 100%;
  padding: 1rem;
}

.weatherItems {
  display: flex;
  flex-direction: column;
  gap: 1rem;
  margin: 1rem 0 1rem 0;
  padding: 0.25rem 0;
}

.weatherDay {
  display: flex;
  justify-content: space-between;
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  border-radius: 0.5rem;
}

.iconHolder,
.dateTemp {
  display: flex;
  gap: 0 0.5rem;
}

@media screen and (max-width: 1024px) {
  .weatherDisplay {
    width: 100%;
  }
}
</style>