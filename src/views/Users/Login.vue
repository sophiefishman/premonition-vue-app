<template>
  <div class="login">
    <form v-on:submit.prevent="submit()">
      <h1>Login</h1>
      <ul>
        <li v-for="error in errors" v-bind:key="error">{{ error }}</li>
      </ul>
      <div>
        <label>Email:</label>
        <input type="email" v-model="email" />
      </div>
      <div>
        <label>Password:</label>
        <input type="password" v-model="password" />
      </div>
      <input type="submit" value="Submit" />
    </form>
    <!-- <body style="max-width: 100%">
      <section
        class="user-page d-flex align-items-center vh-100 align-self-center position-relative"
        style="background: url(images/login-bg.jpg) center center"
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
              <div class="bg-light shadow rounded-3 p-4">
                <div class="text-center">
                  <a href="index.html" class="d-inline-block my-4">
                    <img src="images/logo-icon.png" class="logo-dark" alt="" height="60" />
                  </a>
                  <h4 class="fw-bold mb-2">Welcome to Premonition...</h4>
                  <p class="text-muted fs-15 mb-0">Login to see what to watch next...</p>
                </div>

                <div class="col-lg-12 mt-4">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-floating mb-3">
                          <input type="email" class="form-control" placeholder="Your email" id="email" />
                          <label class="text-muted" for="email">
                            <i class="icon-xxs icon sw-1.5 me-2" data-feather="mail"></i>
                            Email address
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-floating mb-3">
                          <input type="password" class="form-control" placeholder="Subject" id="password" />
                          <label class="text-muted" for="password">
                            <i class="icon-xxs icon sw-1.5 me-2" data-feather="lock"></i>
                            Password
                          </label>
                        </div>
                      </div>
                    </div>
                    <div class="row">
                      <div class="col-lg-12 d-grid mb-4">
                        <input
                          type="submit"
                          id="submit"
                          name="send"
                          class="submitBnt btn btn-primary rounded text-uppercase"
                          value="Log In"
                        />
                      </div>
                    </div>
                    <p class="text-muted text-center fs-15">
                      Don't have an account?
                      <a class="text-primary fw-semibold text-decoration-underline" href="signup.html">Creat New One</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section> -->

    <!-- Javascript -->
    <!-- <script src="js/bootstrap.bundle.min.js"></script> -->

    <!-- feather icon -->
    <!-- <script src="js/feather.js"></script> -->

    <!-- app js -->
    <!-- <script src="js/app.js"></script> -->
    <!-- </body> -->
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      email: "",
      password: "",
      errors: [],
    };
  },
  methods: {
    submit: function () {
      var params = {
        email: this.email,
        password: this.password,
      };
      axios
        .post("/sessions", params)
        .then((response) => {
          axios.defaults.headers.common["Authorization"] = "Bearer " + response.data.jwt;
          localStorage.setItem("jwt", response.data.jwt);
          localStorage.setItem("user_id", response.data.user_id);
          this.$parent.flashMessage = "Successfully logged in!";
          this.$router.push(`/users/${this.$parent.getUserId()}`);
        })
        .catch((error) => {
          console.log(error.response);
          this.errors = ["Invalid email or password."];
          this.email = "";
          this.password = "";
        });
    },
  },
};
</script>
