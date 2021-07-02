<template>
  <div class="movies">
    <h1>All Movies</h1>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <span class="image">
        <img src="movie.poster_path" alt="" />
      </span>
      <h2>{{ movie.original_title }}</h2>
      <h3>{{ movie.overview }}</h3>
      <img v-bind:src="movie.url" v-bind:alt="movie.name" />
    </div>
  </div>
</template>

<style></style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movies: [],
      query_string: "",
    };
  },
  created: function () {
    this.indexMovies();
  },
  methods: {
    indexMovies: function () {
      axios.get("/movies?query=the conjuring").then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
