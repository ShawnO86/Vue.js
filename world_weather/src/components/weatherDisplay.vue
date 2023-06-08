<template>
  <div class="weatherItemsHolder">
    <sub>Click a day for more info</sub>

    <div v-for="(item, index) in weatherOutput" :key="index" class="weatherItems">
      <div v-for="(day, index) in item.forcast" :key="index">
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
  gap: 1rem;
  margin: 1rem 0;
  padding: 0.25rem 0;
  width: 100%;
}
.weatherItemsHolder {
  width: calc(100% - 4rem);
  margin: 3rem auto 0 auto;
}
@media screen and (max-width: 1024px) {
  .weatherItemsHolder {
    width: calc(100% - 8rem);
  }
}
</style>