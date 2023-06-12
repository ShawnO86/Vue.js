<template>
  <details>
    <summary class="weatherDay">
      <div class="firstGroup">
        <p>{{ day.datetime }}</p>
      </div>
      <div class="secondGroup">
        <img src="https://cdn.weatherbit.io/static/img/icons/c03d.png" />
      </div>
    </summary>
    <p>Detailed weather info for the day, Detailed weather info for the day</p>
    <p>Detailed weather info for the day</p>
    <p>Detailed weather info for the day</p>
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
  border-top: 1px solid rgb(var(--text-rgb), 0.25);
  border-bottom: 1px solid rgb(var(--text-rgb), 0.25);
}
.weatherDay {
  display: flex;
  justify-content: space-between;
  padding: 1rem 0;
  cursor: pointer;
}
.weatherDay:hover,
.weatherDay:focus {
  color: rgb(var(--pop-rgb));
}
.firstGroup,
.secondGroup {
  display: flex;
  gap: 0 0.5rem;
}
</style>