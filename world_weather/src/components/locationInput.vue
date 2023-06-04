<template>
  <form @submit.prevent="sendInput">
    <input
      type="text"
      name="locationInput"
      v-model="locationInput"
      placeholder="Location"
    />
    <button>Get Weather</button>
  </form>
</template>

<script>
export default {
  emits: ['location'],
  data() {
    return {
      locationInput: ''
    }
  },
  methods: {
    sendInput() {
      this.$emit('location', this.locationInput);
    }
  }
}
</script>

<style scoped>
form {
  position: sticky;
  top: 0;
  padding: 1rem 0;
  border-bottom: 1px solid var(--text-color);
  text-align: right;
  width: 100%;
  background-color: black;
}

input,
button {
  padding: 0.25rem;
  margin: 0.5rem 0 0 0.5rem;
}
</style>