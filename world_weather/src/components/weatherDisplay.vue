<template>
  <div class="weatherItemsHolder">
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
  margin: 0.5rem 0;
  width: 100%;
}
.weatherItemsHolder {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  margin: 2.5rem auto 0 auto;
}
</style>