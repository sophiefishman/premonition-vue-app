<template>
  <div class="movies-show">
    <body data-bs-target=".navbar" data-bs-offset="110">
      <section class="section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-6">
              <img
                v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                v-bind:alt="movie.name"
                class="img-fluid rounded-3"
              />
            </div>
            <div class="col-lg-6">
              <div class="d-flex align-items-center py-3">
                <h6>
                  <div class="col-sm-4 py-sm-0 py-3">
                    <h5>{{ movie.original_title }}</h5>
                  </div>
                </h6>
              </div>

              <div class="row align-items-center border-top py-4">
                <div class="col-sm-4 py-sm-0 py-3">
                  <span class="fw-normal text-muted ms-1">{{ movie.release_date }}</span>
                </div>
              </div>
              <p class="text-muted fs-15">
                {{ movie.overview }}
              </p>

              <a href="javascript:void(0)" class="btn btn-primary mt-3" v-on:click="addFavorite()">
                Add to Favorites
                <i class="icon-xs" data-feather="chevrons-right"></i>
              </a>
            </div>
          </div>
        </div>
        <!-- end container -->
        <br />
        <hr />
        <section class="sm-section">
          <div class="container">
            <div class="row">
              <div class="col-md-12">
                <div class="row">
                  <h5>You might also like ...</h5>
                  <div v-for="result in movie.recommendations.results" v-bind:key="result.id" class="col-lg-4 col-md-6">
                    <div class="product-item mt-4">
                      <div class="product-img rounded position-relative">
                        <img
                          class="img-fluid"
                          v-bind:src="`https://image.tmdb.org/t/p/w500${result.poster_path}`"
                          v-bind:alt="movie.name"
                        />
                      </div>
                      <div class="pro-content my-3">
                        <div class="d-flex align-items-center">
                          <ins class="pe-2 fs-15 fw-semibold text-decoration-none text-dark">
                            {{ result.original_title }}
                          </ins>
                          <p class="text-muted fw-normal lh-base my-1">{{ result.release_date }}</p>
                        </div>
                        <a href="javascript:void(0)">
                          <p class="text-muted fw-normal lh-base my-1">{{ result.overview.slice(0, 200) + "..." }}</p>
                        </a>
                      </div>
                    </div>
                  </div>
                  <!-- end col -->
                </div>
                <!-- end row -->
              </div>
            </div>
            <!-- END ROW -->
            <router-link to="/movies">
              <a href="javascript:void(0)" class="btn btn-primary mt-3">
                Back to search movies
                <i class="icon-xs" data-feather="chevrons-right"></i>
              </a>
            </router-link>
          </div>
        </section>
      </section>
    </body>
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
