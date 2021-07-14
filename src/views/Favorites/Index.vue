<template>
  <div class="favorites-index">
    <body data-bs-target=".navbar" data-bs-offset="110">
      <!-- start title -->
      <section class="section bg-light">
        <div class="container">
          <div class="row align-items-center text-center">
            <div class="col-lg-12 mt-5 pt-3">
              <h2 class="neon-text">f a v o r i t e s</h2>
            </div>
          </div>
        </div>
      </section>
      <!-- end title -->
      <section class="sm-section">
        <div v-for="favorite in favorites" v-bind:key="favorite.id" class="container">
          <div class="row">
            <div class="col-lg-12">
              <div class="row">
                <div class="col-md-5 mt-4">
                  <div class="position-relative">
                    <img
                      class="img-fluid rounded-3"
                      v-bind:src="`https://image.tmdb.org/t/p/w500${favorite.movie.poster_path}`"
                      v-bind:alt="favorite.movie.name"
                      style="vertical-align: middle; margin: 70px 0px"
                    />
                  </div>
                </div>
                <div class="col-md-7 mt-4">
                  <div class="pro-detail-content">
                    <div class="price my-3">
                      <del class="pe-2 fs-24 fw-semibold text-decoration-none text-dark">
                        {{ favorite.movie.original_title }}
                      </del>
                    </div>

                    <p class="text-muted fs-18 my-3">
                      {{ favorite.movie.overview }}
                    </p>
                    <!-- detail tab -->
                    <section class="section bg-light">
                      <div class="container">
                        <div class="row">
                          <div class="col-lg-12">
                            <nav class="pro-detail-area">
                              <div class="nav nav-tabs border-bottom detail-title" id="nav-tab" role="tablist">
                                <p class="fw-semibold text-muted fs-16">Your Movie Notes</p>
                              </div>
                            </nav>
                            <div class="tab-content py-4" id="nav-tabContent">
                              <div
                                class="tab-pane fade show active"
                                id="nav-home"
                                role="tabpanel"
                                aria-labelledby="nav-home-tab"
                              >
                                <p class="text-muted fs-16">
                                  {{ favorite.review }}
                                </p>
                              </div>
                            </div>
                            <!-- end nav -->
                            <div>
                              <p class="lh-base fw-semibold text-muted mt-4 mb-3">Update Your Notes</p>
                              <form>
                                <div class="row g-4 mb-2"></div>
                                <div class="row g-4 mb-2">
                                  <div class="col-lg-12">
                                    <div class="form-floating mb-3">
                                      <textarea
                                        class="form-control text-muted"
                                        placeholder="Your Message...."
                                        style="height: 80px"
                                        v-model="favorite.review"
                                      ></textarea>
                                    </div>
                                  </div>
                                </div>
                                <div class="row"></div>
                                <div class="row">
                                  <div class="col-lg-6 mt-3">
                                    <a
                                      href="javascript:void(0)"
                                      class="btn btn-primary"
                                      v-on:click="editReview(favorite)"
                                    >
                                      Update Notes
                                      <i class="icon-xs" data-feather="chevrons-right"></i>
                                    </a>
                                  </div>
                                  <div class="col-lg-6 mt-3">
                                    <a
                                      href="javascript:void(0)"
                                      class="btn btn-warning"
                                      v-on:click="destroyFavorite(favorite)"
                                    >
                                      Delete Favorite
                                      <i class="icon-xs" data-feather="chevrons-right"></i>
                                    </a>
                                  </div>
                                </div>
                              </form>
                            </div>
                          </div>
                        </div>
                        <!-- end row -->
                      </div>
                    </section>
                    <!-- end detail tab -->
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <!-- end pro-detail -->
    </body>
    <!-- <h1>Favorites</h1>
    <div v-for="favorite in favorites" v-bind:key="favorite.id">
      <h2>{{ favorite.movie.original_title }}</h2>
      <span class="image">
        <img
          v-bind:src="`https://image.tmdb.org/t/p/w500${favorite.movie.poster_path}`"
          v-bind:alt="favorite.movie.name"
        />
        <img :src="favorite.movie.poster_path" alt="" />
      </span>
      <p>Movie Overview: {{ favorite.movie.overview }}</p>
      <span>Your Review:</span>
      <p>{{ favorite.review }}</p>
      <form v-on:submit.prevent="editReview(favorite)">
        <label>
          <textarea type="text" rows="4" cols="50" v-model="favorite.review" placeholder="notes for this movie" />
        </label>
        <input type="submit" value="Save Changes" />
        <br />
      </form>
      <button v-on:click="destroyFavorite(favorite)">Remove from Favorites</button>
      <br />
    </div> -->
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
    // this.indexFavorites();
    axios.get("/favorites").then((response) => {
      console.log("favorites index", response);
      this.favorites = response.data;
    });
  },
  methods: {
    // indexFavorites: function () {
    //   axios.get("/favorites").then((response) => {
    //     console.log("favorites index", response);
    //     this.favorites = response.data;
    //   });
    // },
    editReview: function (favorite) {
      var params = {
        review: favorite.review,
      };
      axios.patch("/favorites/" + favorite.id, params).then((response) => {
        console.log("favorites update", response);
        this.favorites.unshift();
        // this.currentFavorite = {};
      });
    },
    destroyFavorite: function (favorite) {
      axios.delete("/favorites/" + favorite.id).then((response) => {
        console.log("favorites destroy", response);
        var index = this.favorites.indexOf(favorite);
        this.favorites.splice(index, 1);
      });
    },
  },
};
</script>
