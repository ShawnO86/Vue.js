<template>
  <details>
    <summary>
      <div class="firstGroup">
        <p>{{ day.datetime }}</p>
      </div>
      <div class="secondGroup">
        <img src="https://cdn.weatherbit.io/static/img/icons/c03d.png" />
      </div>
    </summary>
    <div class="weatherDetails">
    <p>Detailed weather info for the day, Detailed weather info for the day</p>
    <p>Detailed weather info for the day</p>
    <p>Detailed weather info for the day</p>
    <p>Detailed weather info for the day</p>
  </div>
  </details>
</template>
  
  <script>
export default {
  props: ['day']
}
</script>
  
  <style scoped>
details {
  padding: 0.5rem 0;
  cursor: pointer;
}
.weatherDetails{
  padding: 1rem 0;
}
summary {
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: rgba(var(--text-rgb), 0.15);
  border-radius: 0.5rem;
  padding: 0 0.5rem;
}
summary:hover,
summary:focus {
  outline: none;
  color: rgb(var(--pop-rgb));
  background-color: rgba(var(--bg-rgb), 0.25);
}
.firstGroup,
.secondGroup {
  display: flex;
  gap: 0 0.5rem;
}
</style>