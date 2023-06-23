<template>
  <div class="todayWeather" v-if="todayWeather && todayWeather.iconDesc && !weatherOutput.status">
    <div class="location">
      <div class="frontLocation">
        <div>
          <h2>
            {{ currentLocation }}
          </h2>
          <h3>{{ weatherOutput.forcast[0].day }}, {{ weatherOutput.forcast[0].date }}</h3>
        </div>
        <div>
          <p>
            Current: <span class="bold">{{ todayWeather.temp }}&deg; F</span>
          </p>
          <p>
            Feels Like: <span class="bold">{{ todayWeather.feelsLike }}&deg; F</span>
          </p>
        </div>
      </div>
      <div class="frontWeather">
        <figure>
          <img :src="todayWeather.iconDesc.icon" class="frontIcon" alt="weather icon" />
          <figcaption>{{ todayWeather.iconDesc.description }}</figcaption>
        </figure>
      </div>
    </div>
    <div class="extraWeather_holder">
      <div class="location_border"></div>
      <div class="extraWeather_data">
        <div class="extraWeather_firstSet">
          <p>
            Chance of Rain: <span class="bold">{{ todayWeather.rain_chance }}</span>
          </p>
          <p>
            Wind:
            <span class="bold">{{ todayWeather.wind_speed }} - {{ todayWeather.wind_dir }}</span>
          </p>
          <p>
            UV Index: <span class="bold">{{ todayWeather.uv }}</span>
          </p>
        </div>
        <div class="extraWeather_secondSet">
          <p>
            Humidity: <span class="bold">{{ todayWeather.humidity }}</span>
          </p>
          <p>
            Cloud Cover: <span class="bold">{{ todayWeather.clouds }}</span>
          </p>
          <p>
            Air Quality Index: <span class="bold">{{ todayWeather.air }}</span>
          </p>
        </div>
      </div>
      <div class="extraWeather_alerts">
        <div class="location_border"></div>
        <h4>Weather Alerts:</h4>
        {{ todayWeather.alerts }}
        <div class="location_border"></div>
        <p>Last Updated: {{ convertTimeToLocal(todayWeather.observedTime) }}</p>
      </div>
    </div>
  </div>
  <div class="todayWeather" v-else-if="weatherOutput.status">{{ weatherOutput.status }}</div>
</template>

<script>
export default {
  props: ['todayWeather', 'weatherOutput'],
  computed: {
    currentLocation() {
      return this.weatherOutput.name + ', ' + this.weatherOutput.local
    }
  },
  methods: {
    convertTimeToLocal(time) {
      const localTimeZone = new Date(time)
        .toLocaleString('en', { timeZoneName: 'short' })
        .split(' ')
      localTimeZone[1] = localTimeZone[1].split(':')
      localTimeZone[1] = [localTimeZone[1][0], localTimeZone[1][1]]
      return `${localTimeZone[1].join(':')} ${localTimeZone[2]}`
    }
  }
}
</script>

<style scoped>
.location {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
}
.extraWeather_holder {
  display: flex;
  flex-direction: column;
}
.extraWeather_data {
  display: flex;
  justify-content: space-between;
}
.extraWeather_secondSet {
  text-align: right;
}
.location_border {
  border-top: 1px dotted rgb(var(--text-rgb));
  width: 100%;
  margin: 1rem 0;
}
.frontLocation {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 0.5rem;
}
.frontWeather,
.frontWeather figure {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  justify-content: center;
}
.bold {
  font-weight: 700;
}
.frontIcon {
  width: clamp(3rem, 5vw, 5rem);
}
</style>