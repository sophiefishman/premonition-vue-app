<template>
  <div class="users-show">
    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
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
    axios.get("/users/" + this.$route.params.id).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {},
};
</script>
