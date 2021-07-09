<template>
  <div class="movies">
    <h1>Movies</h1>
    <div>
      <!-- <form v-on:submit.prevent="searchMovies()">
        <input type="text" v-model="search" placeholder="search movies" />
        <input type="submit" value="Search" />
      </form> -->
      <section class="mt-4 pt-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 my-3">
              <aside class="search-box mb-4 pb-2 fs-14">
                <form class="position-relative" v-on:submit.prevent="searchMovies()">
                  <input
                    class="form-control position-relative bg-light border rounded-pill"
                    v-model="search"
                    placeholder="Search..."
                  />
                  <button
                    class="
                      search-button
                      border-0
                      bg-transparent
                      position-absolute
                      top-50
                      end-0
                      translate-middle-y
                      fs-20
                      me-2
                    "
                    type="submit"
                  >
                    <span data-feather="search" class="icon-xs text-muted"></span>
                  </button>
                </form>
              </aside>
            </div>
          </div>
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
              </div>
              <!-- end row -->
            </div>
          </div>
        </div>
        <!-- end container -->
      </section>
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
      <router-link v-bind:to="`/movies/${movie.id}`">More Info</router-link>
      <br />
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
