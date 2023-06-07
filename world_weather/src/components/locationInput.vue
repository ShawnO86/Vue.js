<template>
  <form @submit.prevent="sendInput">
    <label for="locationInput">Location Search</label>
    <input
      type="text"
      name="locationInput"
      id="locationInput"
      v-model="locationInput"
      placeholder="City, State, or Zipcode"
    />
    <button>Go</button>
  </form>
</template>

<script>
export default {
  emits: ['location'],
  data() {
    return {
      locationInput: '',
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
  display: flex;
  flex-flow: row wrap;
  padding: 1rem 0 2rem 0;
  width: calc(100% - 4rem); 
  gap: 0 1rem;
  border-bottom: 1px solid var(--text-color);
}

input,
button {
  padding: 0.75rem;
  margin-top: 0.5rem;
  background-color: rgba(255, 255, 255, 0.25);
  border-radius: 0.5rem;
  border: none;
  color: var(--text-color);
}

input {
 flex: 3;
}

button {
  flex: 1;
}

input::placeholder {
  color: var(--text-color);
}

label {
  flex: 1 100%;
  text-align: left;
}
@media screen and (max-width: 1024px) {
  form {
    width: calc(100% - 8rem);
  }
}
</style>