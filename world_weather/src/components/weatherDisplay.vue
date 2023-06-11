<template>
  <div class="weatherItemsHolder">
    <sub>Click a day for more info</sub>
    <div v-for="(item, index) in weatherOutput" :key="index" class="weatherItems">
      <div v-for="(day, index) in item" :key="index">
        <weather-item :day="day"></weather-item>
      </div>
    </div>
  </div>
</template>

<script>
import weatherItem from './weatherItem.vue'
export default {
  components: { weatherItem },
  props: ['weatherOutput']
}
</script>

<style scoped>
.weatherItems {
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
  width: 100%;
  gap: 0.5rem;
}
.weatherItemsHolder {
  width: 100%;
  margin: 0 auto;
}
sub {
  margin-left: 2rem;
}
</style>