<template>
  <details>
    <summary>
      <div class="firstGroup">
        <p>{{ day.day }}</p>
        <p>{{ day.date }}</p>
      </div>
      <p>{{ day.low_temp }}&deg;F / {{ day.high_temp }}&deg;F</p>
      <figure class="secondGroup">
        <img :src="day.iconDesc.icon" alt="weather icon" />
        <figcaption>{{ day.iconDesc.description }}</figcaption>
      </figure>
    </summary>
    <div class="weatherDetails">
      <p>Chance of Rain: <span>{{ day.rain_chance }}</span></p>
      <p>Cloud Coverage: <span>{{ day.clouds }}</span></p>
      <p>
        Relative Humidity: <span>{{ day.humidity }}</span>
      </p>
      <!-- add wind direction -->
      <p>
        Wind Speeds: <span>{{ day.wind_speed }} / {{ day.wind_gusts }} {{ day.wind_dir }}</span>
      </p>
      <!-- add uv index -->
      <p>UV Index: <span>N</span></p>
      <!-- add sunrise/sunset-->
      <p>Sunrise/Sunset: <span>rise/set</span></p>
    </div>
  </details>
</template>
  
  <script>
export default {
  props: ['day'],
}
</script>
  
  <style scoped>
details {
  padding: 0.5rem 0;
}
.weatherDetails {
  padding: 1rem 0;
}
summary {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  gap: 0.25rem;
  align-items: center;
  background-color: rgba(var(--bg-rgb), 0.25);
  border: 1px solid rgba(var(--text-rgb), 0.25);
  border-radius: 0.5rem;
  padding: 0 0.75rem;
  cursor: pointer;
}
summary:hover {
  outline: none;
  color: rgb(var(--pop-rgb));
  background-color: rgba(var(--bg-rgb), 0.25);
  border: 1px solid rgba(var(--pop-rgb), 0.25);
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
.weatherDetails {
  padding: 0.5rem 0;
}
.weatherDetails p {
  display: flex;
  justify-content: space-between;
  background: rgba(var(--bg-rgb), 0.15);
  margin-bottom: 0.25rem;
  padding: 0.25rem 0.75rem;
  border-radius: 0.25rem;
}
</style>