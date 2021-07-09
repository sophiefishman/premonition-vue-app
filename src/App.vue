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
      <nav class="navbar navbar-expand-lg fixed-top sticky mx-auto" id="navbar">
        <div class="container">
          <a href="index.html" class="navbar-brand me-4">
            <!-- <img src="images/logo-light.png" class="logo-light" alt="" height="40" />
          <img src="images/logo-icon.png" class="logo-dark" alt="" height="40" /> -->
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
              <li class="nav-item"><router-link to="/">Home</router-link></li>
              <li class="nav-item"><router-link to="/movies/">Movies</router-link></li>
              <li class="nav-item"><router-link to="/favorites">Favorites</router-link></li>
              <li class="nav-item">
                <router-link v-if="isLoggedIn()" :to="`/users/${getUserId()}`">Profile</router-link>
              </li>
              <li class="nav-item"><router-link v-if="!isLoggedIn()" to="/login">Login</router-link></li>
              <li class="nav-item"><router-link v-if="isLoggedIn()" to="/logout">Logout</router-link></li>
              <li class="nav-item"><router-link v-if="!isLoggedIn()" to="/signup">Signup</router-link></li>
            </ul>
          </div>
        </div>
      </nav>

      <section class="section bg-light">
        <div class="container">
          <div class="row align-items-center text-center">
            <div class="col-lg-12 mt-5 pt-3">
              <h2 class="fw-bold">P R E M O N I T I O N</h2>
              <h2 class="fw-bold">what will you watch next....</h2>
            </div>
          </div>
        </div>
      </section>
      <!-- shuffle portfolio -->
      <section class="section">
        <div class="container">
          <div id="grid" class="row">
            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["branding"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/work/img-1.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="http://www.limitedruns.com/media/cache/28/b7/28b75bec59d9511b93e9205a36701c33.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["designing"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-2.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://www.grayflannelsuit.net/blog/wp-content/uploads/2012/12/the-brain-eaters_vintage-science-fiction-movie-poster.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["photography"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-3.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://i.pinimg.com/originals/ef/a6/c4/efa6c4e1326403ddb3a30827477a4757.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["development"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-4.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://i.pinimg.com/originals/85/e1/53/85e153eeb54c15d41974df0f7384d9f8.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["branding"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-5.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://images-na.ssl-images-amazon.com/images/I/91TYB8gep%2BL._AC_SL1500_.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["branding"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-6.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://alternativemovieposters.com/wp-content/uploads/2018/07/vance_element.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["designing"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-7.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://i.pinimg.com/originals/10/64/46/10644611f5a7fc48d557e0fae01b6379.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["development"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-8.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://i.pinimg.com/originals/c5/02/e5/c502e55dd4b6a1af83b1eabce1299416.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["development"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-9.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://posterspy.com/wp-content/uploads/2019/08/Invasion_Hemphill_Jpg.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["development"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-1.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://cdn.traileraddict.com/content/20th-century-fox/bad-times-at-el-royale-9.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["branding"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-3.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://i.pinimg.com/736x/5f/ef/e8/5fefe8cb134bcfd37d1c6d5e0de7f3c7.jpg"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->

            <div class="col-lg-4 col-md-6 col-12 spacing picture-item" data-groups='["designing"]'>
              <div class="card border-0 work-container work-grid position-relative d-block overflow-hidden rounded">
                <div class="card-body p-0">
                  <a
                    href="javascript:void(0)"
                    data-src="images/works/img-6.jpg"
                    data-gallery="myGal"
                    class="mfp-image d-inline-block"
                    title=""
                  >
                    <img
                      src="https://posterspy.com/wp-content/uploads/2020/02/El-hoyo2-1500x2348.png"
                      class="img-fluid rounded"
                      alt="work-image"
                    />
                  </a>
                </div>
              </div>
            </div>
            <!--end col-->
          </div>
          <!--end row-->
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
