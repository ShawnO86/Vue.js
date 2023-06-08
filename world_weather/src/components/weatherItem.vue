<template>
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
</template>
  
  <script>
export default {
  props: ['day']
}
</script>
  
  <style scoped>
.weatherDay {
  display: flex;
  justify-content: space-between;
  padding: 0.5rem 0;
  cursor: pointer;
}
.weatherDay:hover,
.weatherDay:focus {
  color: var(--pop-color);
}
.iconHolder,
.dateTemp {
  display: flex;
  gap: 0 0.5rem;
}
</style>