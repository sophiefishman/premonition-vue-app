<template>
  <div class="movies-show">
    <h2>{{ movie.original_title }}</h2>
    <span class="image">
      <img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" v-bind:alt="movie.name" />
      <img :src="movie.poster_path" alt="" />
    </span>
    <p>Release Date: {{ movie.release_date }}</p>
    <p>Overview: {{ movie.overview }}</p>
    <hr />
    <h1>Recommended Movies</h1>
    <!-- <div v-for="result in movie.recommendations.results" v-bind:key="result.id">
      <h2>{{ result.original_title }}</h2>
      <span class="image">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" v-bind:alt="movie.name" />
        <img :src="result.poster_path" alt="" />
      </span>
      <p>Release Date: {{ esult.release_date }}</p>
      <p>Overview: {{ result.overview }}</p>
    </div> -->
    <hr />
    <router-link to="/movies">Back to search movies</router-link>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("movies show", response.data);
      this.movie = response.data;
    });
  },
  methods: {},
};
</script>
