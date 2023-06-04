<template>
  <section class="weatherDisplay">
    <location-input @location="getInput"></location-input>
    <h2>Weather Details</h2>
    <div v-if="currentLocation" class="weatherItemsHolder">
      <h3>{{ weatherOutput.name }}, {{ weatherOutput.local }}</h3>
      <sub>Click a day for more info</sub>
      <div v-for="(item, index) in weatherOutput.forcast" :key="index" class="weatherItems">
        <details>
          <summary>{{ item.date }}</summary>
          <h4>{{ item.iconDesc.description }}</h4>
          <img :src="iconPrefix(item.iconDesc.icon)" />
        </details>
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
      weatherOutput: [{}]
    }
  },
  methods: {
    iconPrefix(iconName) {
      return `https://www.weatherbit.io/static/img/icons/${iconName}.png`
    },
    getInput(location) {
      this.currentLocation = location
      this.getData(`https://weather-app-api-v5vu.onrender.com/data/${this.currentLocation}`)
    },
    async getData(url = '') {
      //calls argument url and waits for data/status
      const req = await fetch(url)
      let data = {}
      try {
        //return api data in JSON
        data = await req.json()
      } catch (e) {
        console.log('error', e)
      } finally {
        console.log(data)
        this.weatherOutput = data
      }
    }
  }
}
</script>

<style scoped>
.weatherDisplay {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  background: black;
  width: 40%;
  padding: 0 1rem 0.5rem 1rem;
  text-align: right;
  overflow-y: auto;
}

h2 {
  border-bottom: 1px solid var(--text-color);
  margin: 3rem 0 1rem 0;
  padding-bottom: 1rem;
  width: 100%;
}

.weatherItemsHolder {
  width: 100%;
}

.weatherItems {
  margin: 1rem 0 1rem 0;
  padding: 0.25rem 0;
  background-color: var(--pop-color);
}

summary {
  cursor: pointer;
  width: 100%;
  background-color: rgba(0, 174, 255, 0.75);
  color: black;
  padding: 0.25rem 1rem;
}

summary:hover {
  background-color: rgba(0, 174, 255, 1);
}

@media screen and (max-width: 1024px) {
  .weatherDisplay {
    width: 100%;
  }
}
</style>