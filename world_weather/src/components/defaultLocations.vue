<template>
  <h4>Default Locations</h4>
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
h4 {
  width: 100%;
  margin-top: 2rem;
}
.defaultLocations {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  width: 100%;
  padding: 3rem 0;
  gap: 1rem;
  border-bottom: 1px solid rgb(var(--text-rgb), 0.7);
}
.locationBtn {
  background: none;
  border: none;
  color: var(--text-color);
  cursor: pointer;
  padding: 0.5rem 0;
}
.locationBtn:hover {
  color: rgb(var(--pop-rgb));
}
</style>