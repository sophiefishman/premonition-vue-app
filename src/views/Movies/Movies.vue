<template>
  <div class="movies">
    <h1>Movies</h1>
    <div>
      <form v-on:submit.prevent="searchMovies()">
        <input type="text" v-model="search" placeholder="search movies" />
        <input type="submit" value="Search" />
      </form>
    </div>
    <br />
    <div v-for="movie in movies" v-bind:key="movie.id">
      <span class="image">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" v-bind:alt="movie.name" />
        <img :src="movie.poster_path" alt="" />
      </span>
      <h2>{{ movie.original_title }}</h2>
      <p>Release Date: {{ movie.release_date }}</p>
      <p>{{ movie.overview }}</p>
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
      search: "",
    };
  },
  created: function () {
    this.searchMovies();
  },
  methods: {
    searchMovies: function () {
      axios.get(`/movies?query=${this.search}`).then((response) => {
        console.log("movies index", response);
        this.movies = response.data;
      });
    },
  },
};
</script>
