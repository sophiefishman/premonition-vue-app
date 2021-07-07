<template>
  <div class="favorites-index">
    <h1>Favorites</h1>
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
          <input type="text" v-model="favorite.review" placeholder="notes for this movie" />
        </label>
        <input type="submit" value="Save Changes" />
        <br />
      </form>
      <button v-on:click="destroyFavorite(favorite)">Remove from Favorites</button>
      <br />
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
