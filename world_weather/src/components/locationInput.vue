<template>
  <form @submit.prevent="sendInput">
    <label for="locationInput">Location Search</label>
    <input
      type="text"
      name="locationInput"
      id="locationInput"
      v-model="locationInput"
      placeholder="(City, State) or Zipcode"
    />
    <button>Go</button>
  </form>
  <p v-if="locationError">{{ locationError }}</p>
</template>

<script>
export default {
  emits: ['location'],
  data() {
    return {
      locationInput: '',
      locationError: ''
    }
  },
  methods: {
    sendInput() {
      if (!this.locationInput) {
        this.locationError = 'Must input (City, State) or Zipcode!'
        setTimeout(() => {
          this.locationError = ''
        }, 4000)
      } else {
        this.locationError = ''
        this.$emit('location', this.locationInput)
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-flow: row wrap;
  padding: 1rem 0;
  width: 100%;
  gap: 0 1rem;
  border-bottom: 1px solid rgb(var(--text-rgb), 0.7);
}

input,
button {
  padding: 0.75rem;
  margin-top: 0.5rem;
  background-color: rgb(var(--bg-rgb));
  border-radius: 0.5rem;
  border: 1px solid rgb(var(--bg-rgb));
  color: var(--text-color);
}

input:focus,
button:hover {
  border: 1px solid rgb(var(--text-rgb));
}

input {
  flex: 3;
}

button {
  flex: 1;
  cursor: pointer;
}

input::placeholder {
  color: rgb(var(--text-rgb), 0.7);
}

label {
  flex: 1 100%;
  text-align: left;
}
</style>