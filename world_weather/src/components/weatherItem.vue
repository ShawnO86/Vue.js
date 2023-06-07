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
  background: rgba(255, 255, 255, 0.1);
  padding: 0.5rem;
  cursor: pointer;
}
.weatherDay:hover {
  background: rgba(255, 255, 255, 0.15);
}
.iconHolder,
.dateTemp {
  display: flex;
  gap: 0 0.5rem;
}
</style>