<template>
  <div class="movies-show">
    <!-- <h2>{{ movie.original_title }}</h2>
    <span class="image">
      <img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" v-bind:alt="movie.name" />
      <img :src="movie.poster_path" alt="" />
    </span>
    <p>Release Date: {{ movie.release_date }}</p>
    <p>Overview: {{ movie.overview }}</p>
    <button v-on:click="addFavorite()">Add to Favorites</button>
    <hr />
    <h1>Recommended Movies</h1>
    <div v-for="result in movie.recommendations.results" v-bind:key="result.id">
      <h2>{{ result.original_title }}</h2>
      <span class="image">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" v-bind:alt="movie.name" />
        <img :src="result.poster_path" alt="" />
      </span>
      <p>Release Date: {{ result.release_date }}</p>
      <p>Overview: {{ result.overview }}</p>
    </div>
    <hr />
    <router-link to="/movies">Back to search movies</router-link> -->
    <section class="section">
      <div v-for="movie in movies" v-bind:key="movie.id">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mt-4">
              <!-- Post-->
              <article class="post position-relative">
                <div class="post-preview mb-4">
                  <img
                    class="img-fluid rounded"
                    v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                    v-bind:alt="movie.name"
                  />
                  <img :src="movie.poster_path" alt="" />
                </div>
                <h2>{{ movie.original_title }}</h2>
                <p>Release Date: {{ movie.release_date }}</p>
                <p>{{ movie.overview }}</p>
                <button v-on:click="addFavorite()">Add to Favorites</button>
                <router-link to="/movies">Back to search movies</router-link>
                <h1>Recommended Movies</h1>
                <div v-for="result in movie.recommendations.results" v-bind:key="result.id">
                  <h2>{{ result.original_title }}</h2>
                  <span class="image">
                    <img v-bind:src="`https://image.tmdb.org/t/p/w500${result.poster_path}`" v-bind:alt="movie.name" />
                    <img :src="result.poster_path" alt="" />
                  </span>
                  <p>Release Date: {{ result.release_date }}</p>
                  <p>Overview: {{ result.overview }}</p>
                </div>
              </article>
              <!-- Post end-->
            </div>
            <div class="col-lg-4 col-md-6"></div>
          </div>
          <!-- end row -->
        </div>
      </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      movie: {},
      newMovieParam: {},
    };
  },
  created: function () {
    axios.get(`/movies/${this.$route.params.id}`).then((response) => {
      console.log("movies show", response.data);
      this.movie = response.data;
    });
  },
  methods: {
    addFavorite: function () {
      this.newMovieParam.tmdb_api_id = this.$route.params.id;
      axios.post("/favorites", this.newMovieParam).then((response) => {
        console.log("Added to Favorites", response.data);
        this.$router.push("/favorites");
      });
    },
  },
};
</script>
