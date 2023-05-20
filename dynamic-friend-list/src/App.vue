<template>
  <section>
    <header>
      <h1>My Friends</h1>
    </header>
    <new-friend @add-contact="getInput"></new-friend>
    <ul>
      <friend-contact
        v-for="friend in friends"
        v-bind:key="friend"
        v-bind:id="friend.id"
        v-bind:name="friend.name"
        v-bind:phone-number="friend.phone"
        v-bind:email-address="friend.email"
        v-bind:is-favorite="friend.favorite"
        v-on:toggle-favorite="toggleFavoriteStatus(friend.id)"
      >
      </friend-contact>
    </ul>
  </section>
</template>

<script>
import NewFriend from './components/NewFriend.vue';
export default {
  components: { NewFriend },
  data() {
    return {
      friends: [
        {
          id: "manuel",
          name: "Manuel Lorenz",
          phone: "012 345 6789",
          email: "manuel@localhost.com",
          favorite: true
        },
        {
          id: "julie",
          name: "Julie Jones",
          phone: "012 345 6789",
          email: "julie@localhost.com",
          favorite: false
        },
      ],
    };
  },
  methods: {
    toggleFavoriteStatus(friendId) {
      const selectedFriend = this.friends.find(friend => friend.id === friendId);
      selectedFriend.favorite = !selectedFriend.favorite;
    },
    getInput(name, phone, email) {
      const newFriend = {
        id: new Date().toISOString(),
        name: name,
        phone: phone,
        email: email,
        isFavorite: false
      };
      this.friends.push(newFriend);
    }
  }
};
</script>

<style>
* {
  box-sizing: border-box;
}
html {
  font-family: "Jost", sans-serif;
}
body {
  margin: 0;
}
header {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 3rem auto;
  border-radius: 10px;
  padding: 1rem;
  background-color: #58004d;
  color: white;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app ul {
  margin: 0;
  padding: 0;
  list-style: none;
}
#app li, #app form {
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.26);
  margin: 1rem auto;
  border-radius: 10px;
  padding: 1rem;
  text-align: center;
  width: 90%;
  max-width: 40rem;
}
#app h2 {
  font-size: 2rem;
  border-bottom: 4px solid #ccc;
  color: #58004d;
  margin: 0 0 1rem 0;
}
#app button {
  font: inherit;
  cursor: pointer;
  border: 1px solid #ff0077;
  background-color: #ff0077;
  color: white;
  padding: 0.05rem 1rem;
  box-shadow: 1px 1px 2px rgba(0, 0, 0, 0.26);
}
#app button:hover,
#app button:active {
  background-color: #ec3169;
  border-color: #ec3169;
  box-shadow: 1px 1px 4px rgba(0, 0, 0, 0.26);
}
#app input {
  font: inherit;
  padding: 0.15rem;
}
#app label {
  font-weight: bold;
  margin-right: 1rem;
  width: 7rem;
  display: inline-block;
}
#app form div {
  margin: 1rem 0;
}
</style>