<template>
  <div class="users-show">
    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>
      Name:
      <input type="text" v-model="user.name" />
    </p>
    <p>
      Email:
      <input type="text" v-model="user.email" />
    </p>
    <button v-on:click="updateUser(user)">Update Info</button>
    <button v-on:click="destroyUser(user)">Delete Profile</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    axios.get(`/users/${this.$parent.getUserId()}`).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      var params = {
        name: user.name,
        email: user.email,
      };
      axios
        .patch("/users/" + user.id, params)
        .then((response) => {
          console.log("users update", response);
          this.currentuser = {};
        })
        .catch((error) => {
          console.log("users update error", error.response);
        });
    },
    destroyUser: function (user) {
      axios.delete("/users/" + user.id).then((response) => {
        console.log("users destroy", response);
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>
