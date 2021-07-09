<template>
  <div class="favorites-index">
    <h1>Favorites</h1>
    <!-- <div v-for="favorite in favorites" v-bind:key="favorite.id">
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
    <section class="section">
      <div v-for="favorite in favorites" v-bind:key="favorite.id">
        <div class="container">
          <div class="row">
            <div class="col-lg-8 mt-4">
              <!-- Post-->
              <article class="post position-relative">
                <div class="post-preview mb-4">
                  <img
                    class="img-fluid rounded"
                    v-bind:src="`https://image.tmdb.org/t/p/w500${favorite.movie.poster_path}`"
                    v-bind:alt="favorite.movie.name"
                  />
                  <img :src="favorite.movie.poster_path" alt="" />
                </div>

                <!-- comment start -->
                <h6 class="fs-22 fw-semibold border-bottom pb-3 mt-5">Personal Movie Notes</h6>
                <ul class="ps-0 pt-3 mt-3">
                  <div class="d-sm-flex align-items-top">
                    <div class="flex-grow-1 ms-sm-3">
                      <p class="text-muted fs-15">
                        {{ favorite.review }}
                      </p>
                    </div>
                    <a class="text-muted me-3" href="javascript:void(0)">
                      <i class="icon-xs" data-feather="message-square"></i>
                    </a>
                  </div>
                </ul>
                <ul class="ps-0 pt-3 mt-4">
                  <div class="d-sm-flex align-items-top">
                    <a class="text-muted me-3" href="javascript:void(0)">
                      <i class="icon-xs" data-feather="message-square"></i>
                    </a>
                  </div>
                </ul>
                <div class="row">
                  <div class="col-lg-12">
                    <div class="form-floating mb-3">
                      <textarea
                        class="form-control"
                        placeholder="Your Movie Notes..."
                        style="height: 100px"
                        id="comments"
                      ></textarea>
                      <label class="text-muted" for="comments">make some movie notes...</label>
                    </div>
                  </div>
                </div>
                <div class="row">
                  <div class="col-lg-12">
                    <input
                      type="submit"
                      v-on:submit.prevent="editReview(favorite)"
                      id="submit"
                      name="send"
                      class="submitBnt btn btn-primary rounded"
                      value="Save Notes"
                    />
                  </div>
                </div>

                <!-- end comment -->
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
