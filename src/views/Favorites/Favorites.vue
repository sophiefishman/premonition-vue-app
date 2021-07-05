<template>
  <div class="favorites-index">
    <h1>Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>{{ favorite.movie.original_title }}</h2>
      <img v-bind:src="favorite.movie.poster_path" v-bind:alt="favorite.movie.original_title" />
      <p>{{ favorite.movie.overview }}</p>
      <span>Review:</span>
      <p style="white-space: pre-line">{{ review }}</p>
      <br />
      <textarea v-model="review" placeholder="notes for this movie"></textarea>
    </div>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      favorites: [],
      review: "",
    };
  },
  created: function () {
    this.indexFavorites();
  },
  methods: {
    indexFavorites: function () {
      axios.get("/favorites").then((response) => {
        console.log("favorites index", response);
        this.favorites = response.data;
      });
    },
  },
};
</script>
