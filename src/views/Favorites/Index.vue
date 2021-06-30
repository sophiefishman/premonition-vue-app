<template>
  <div class="favorites-index">
    <h1>All Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>{{ favorite.title }}</h2>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
    };
  },
  created: function () {
    this.indexfavorites();
  },
  methods: {
    indexfavorites: function () {
      axios.get("/favorites").then((response) => {
        console.log("favorites index", response);
        this.favorites = response.data;
      });
    },
  },
};
</script>
