<template>
  <details>
    <summary class="weatherDay">
      <div class="firstGroup">
        <p>{{ day.iconDesc.icon }}</p>
        <p>{{ day.date }}</p>
      </div>
      <div class="secondGroup">
        <p>{{ day.temp }}</p>
        <p>{{ day.iconDesc.description }}</p>
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
details {
  border-top: 1px solid #071720;
  border-bottom: 1px solid #071720;
  padding: 1rem 2rem;
}
.weatherDay {
  display: flex;
  justify-content: space-between;
  cursor: pointer;
}
.weatherDay:hover,
.weatherDay:focus {
  color: var(--pop-color);
}
.firstGroup,
.secondGroup {
  display: flex;
  gap: 0 0.5rem;
}
</style>