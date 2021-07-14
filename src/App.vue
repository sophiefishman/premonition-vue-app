<template>
  <div id="app">
    <!-- <div id="nav">
      <router-link to="/">Home</router-link>
      <router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link>
      <router-link v-if="!isLoggedIn()" to="/login">Login</router-link>
      <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`">Profile</router-link>
      <router-link v-if="isLoggedIn()" to="/logout">Logout</router-link>
      <router-link to="/movies/">Movies</router-link>
      <router-link to="/favorites">Favorites</router-link>
    </div> -->
    <body data-bs-target=".navbar" data-bs-offset="110">
      <nav class="navbar navbar-expand-lg sticky mx-auto" id="navbar">
        <div class="container">
          <a href="index.html" class="navbar-brand me-4">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Skull-Icon.svg/2048px-Skull-Icon.svg.png"
              class="logo-dark"
              alt=""
              height="40"
            />
          </a>

          <div class="navbar-header">
            <button
              class="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbar-collapse-1"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span class="mdi mdi-menu"></span>
            </button>
          </div>

          <div class="collapse navbar-collapse" id="navbar-collapse-1">
            <ul class="nav navbar-nav">
              <li class="nav-item"><router-link class="nav-link sub-menu-item" to="/">Home</router-link></li>
              <li class="nav-item"><router-link class="nav-link sub-menu-item" to="/movies/">Movies</router-link></li>
              <li class="nav-item">
                <router-link class="nav-link sub-menu-item" to="/favorites">Favorites</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link sub-menu-item" v-if="isLoggedIn()" :to="`/users/${getUserId()}`">
                  Profile
                </router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link sub-menu-item" v-if="!isLoggedIn()" to="/login">Login</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link sub-menu-item" v-if="isLoggedIn()" to="/logout">Logout</router-link>
              </li>
              <li class="nav-item">
                <router-link class="nav-link sub-menu-item" v-if="!isLoggedIn()" to="/signup">Signup</router-link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <section class="section bg-light" id="header-color">
        <div class="container">
          <div class="row align-items-center text-center">
            <div class="col-lg-12 mt-1 pt-1" id="header-font">
              <h2>P R E M O N I T I O N</h2>
              <p>what will you watch next....</p>
            </div>
          </div>
        </div>
      </section>
    </body>
    <router-view />
  </div>
</template>
<style></style>
<script>
export default {
  methods: {
    isLoggedIn: function () {
      return localStorage.getItem("jwt");
    },
    getUserId: function () {
      return localStorage.user_id;
    },
  },
};
</script>
