<template>
  <div class="defaultLocations">
    <button @click="setCurrentLocation" class="locationBtn">Chicago, IL</button>
    <button @click="setCurrentLocation" class="locationBtn">Los Angeles, CA</button>
    <button @click="setCurrentLocation" class="locationBtn">New York, NY</button>
    <button @click="setCurrentLocation" class="locationBtn">Miami, FL</button>
  </div>
</template>

<script>
export default {
  emits: ['location'],
  methods: {
    setCurrentLocation(e) {
      this.$emit('location', e.target.innerText)
    }
  }
}
</script>
<style scoped>
.defaultLocations {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: calc(100% - 4rem);
  padding: 3rem 0;
  gap: 1rem;
  border-bottom: 1px solid var(--text-color);
}
.locationBtn {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 0.5rem 0;
}
.locationBtn:hover {
  color: var(--pop-color);
}
</style>