<template>
  <details>
    <summary>
      <div class="firstGroup">
        <p>{{ day.day }}, {{ day.date }}</p>
        <p class="temp">{{ day.low_temp }}&deg;F / {{ day.high_temp }}&deg;F</p>
      </div>

      <figure class="secondGroup">
        <img :src="day.iconDesc.icon" alt="weather icon" />
        <figcaption>{{ day.iconDesc.description }}</figcaption>
      </figure>
    </summary>
    <div class="weatherDetails">
      <p>
        Chance of Rain: <span>{{ day.rain_chance }}</span>
      </p>
      <p>
        Cloud Coverage: <span>{{ day.clouds }}</span>
      </p>
      <p>
        Relative Humidity: <span>{{ day.humidity }}</span>
      </p>
      <p>
        Wind Speed Avg: <span>{{ day.wind_speed }}</span>
      </p>
      <p>
        Wind Speed Max: <span>{{ day.wind_gusts }}</span>
      </p>
      <p>Wind Direction
        <span>{{ day.wind_dir }}</span>
      </p>
      <p>
        UV Index: <span>{{ day.uv }}</span>
      </p>
      <!-- add sunrise/sunset-->
      <p>
        Sunrise/Sunset:
        <span>{{ convertTimeToLocal(day.sunrise) }} / {{ convertTimeToLocal(day.sunset) }}</span>
      </p>
    </div>
  </details>
</template>
  
  <script>
export default {
  props: ['day'],
  methods: {
    convertTimeToLocal(time) {
      const localTimeZone = new Date(time)
        .toLocaleString('en', { timeZoneName: 'short' })
        .split(' ')
      return `${localTimeZone[1]} ${localTimeZone[2]}`
    }
  }
}
</script>
  
  <style scoped>
details {
  padding: 0.5rem 0 0 0;
}
summary {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: center;
  background-color: rgba(var(--bg-rgb), 0.25);
  border-top: 1px solid rgba(var(--text-rgb), 0.25);
  border-bottom: 1px solid rgba(var(--text-rgb), 0.25);
  padding: 0 clamp(0.5rem, 2.5vw, 3rem);
  cursor: pointer;
}
summary:hover,
summary:focus {
  outline: none;
  color: rgb(var(--pop-rgb));
  background-color: rgba(var(--bg-rgb), 0.5);
  border-top: 1px solid rgba(var(--pop-rgb), 0.5);
  border-bottom: 1px solid rgba(var(--pop-rgb), 0.5);
}
.firstGroup {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}
.secondGroup {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
.weatherDetails p {
  display: flex;
  justify-content: space-between;
  background: rgba(var(--secondary-rgb), 0.1);
  margin: 0.25rem 0;
  padding: 0.5rem clamp(0.5rem, 2.5vw, 3rem);
  border-top: 1px solid rgba(var(--text-rgb), 0.25);
  border-bottom: 1px solid rgba(var(--text-rgb), 0.25);
}
.weatherDetails p:last-of-type {
  margin-bottom: 0;
}
span {
  font-weight: 500;
}
</style>