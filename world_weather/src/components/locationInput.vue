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
    <button>Get Weather</button>
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
        this.$emit('location', [this.locationInput, 'no', 'no'])
      }
    }
  }
}
</script>

<style scoped>
form {
  display: flex;
  flex-flow: wrap;
  padding: 1rem 0;
  width: 100%;
  gap: 0 1rem;
  border-bottom: 1px dotted rgb(var(--text-rgb));
}

input,
button {
  margin-top: 0.5rem;
  background-color: rgb(var(--bg-rgb));
  border: 1px solid rgb(var(--bg-rgb));
  color: rgb(var(--text-rgb));
  padding: 1rem 0;
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
  padding-left: 1rem;
}

label {
  flex: 1 100%;
  text-align: left;
  font-weight: 500;
}
</style>