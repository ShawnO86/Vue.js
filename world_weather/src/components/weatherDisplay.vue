<template>
  <div class="weatherItemsHolder">
    <sub>Click on a day for more info.</sub>
    <div v-for="(item, index) in weatherOutput.forcast" :key="index" class="weatherItems">
      <weather-item :day="item"></weather-item>
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
  margin: 0.5rem 0;
  width: 100%;
}
.weatherItemsHolder {
  width: 100%;
  margin: 1rem auto 0 auto;
  overflow-y: auto;
}
</style>