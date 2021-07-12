<template>
  <div class="movies">
    <section class="sm-section">
      <div class="container">
        <div class="row">
          <div class="col-lg-12">
            <aside class="search-box mb-4 pb-2 fs-14">
              <form class="position-relative" v-on:submit.prevent="searchMovies()">
                <input
                  class="form-control position-relative bg-light border rounded-pill"
                  v-model="search"
                  placeholder="Search for movies..."
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
        <!-- END SEARCHBOX ROW -->
        <div class="row">
          <div class="col-md-12">
            <div class="row">
              <div v-for="movie in movies" v-bind:key="movie.id" class="col-lg-4 col-md-6">
                <div class="product-item mt-4">
                  <router-link v-bind:to="`/movies/${movie.id}`">
                    <div class="product-img rounded position-relative">
                      <img
                        class="img-fluid"
                        v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`"
                        v-bind:alt="movie.name"
                      />
                    </div>
                  </router-link>
                  <div class="pro-content my-3">
                    <div class="d-flex align-items-center">
                      <ins class="pe-2 fs-15 fw-semibold text-decoration-none text-dark">
                        {{ movie.original_title }}
                      </ins>
                    </div>
                    <a href="javascript:void(0)">
                      <p class="text-muted fw-normal lh-base my-1">{{ movie.overview.slice(0, 200) + "..." }}</p>
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
      </div>
    </section>
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
