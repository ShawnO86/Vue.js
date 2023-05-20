<template>
  <form @submit.prevent="submitForm">
    <h2>Add New Friend</h2>
    <div>
      <label>Name:</label>
      <input type="text" v-model="inputName"/>
    </div>
    <div>
      <label>Phone:</label>
      <input type="text" v-model="inputPhone"/>
    </div>
    <div>
      <label>E-mail:</label>
      <input type="text" v-model="inputEmail"/>
    </div>
    <button>Add Contact</button>
  </form>
</template>

<script>
export default {
  emits: ['add-contact'],
  data() {
    return {
      inputName: '',
      inputPhone: '',
      inputEmail: '',
    };
  },
  methods: {
    submitForm() {
        this.$emit('add-contact', this.inputName, this.inputPhone, this.inputEmail);
    }
  }
};
</script>