<template>
  <div class="login">
    <body style="max-width: 100%">
      <section
        class="user-page d-flex align-items-center vh-100 align-self-center position-relative"
        style="
          background: url(https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/2eddd3ac-be22-4ebd-83e4-1d9305397920/ddnwcqr-45ca5d82-8251-427b-a7cb-fbb377bafbdf.jpg/v1/fill/w_1280,h_635,q_75,strp/cyberpunk_city_2__blade_runner_by_feliksovich_ddnwcqr-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9NjM1IiwicGF0aCI6IlwvZlwvMmVkZGQzYWMtYmUyMi00ZWJkLTgzZTQtMWQ5MzA1Mzk3OTIwXC9kZG53Y3FyLTQ1Y2E1ZDgyLTgyNTEtNDI3Yi1hN2NiLWZiYjM3N2JhZmJkZi5qcGciLCJ3aWR0aCI6Ijw9MTI4MCJ9XV0sImF1ZCI6WyJ1cm46c2VydmljZTppbWFnZS5vcGVyYXRpb25zIl19.8cBVD6lrB_6xT-KG6fn-FINPKVXrxvs4MtoFuZJmb4Y)
            center center;
        "
      >
        <div class="bg-overlay"></div>
        <div class="container">
          <div class="row justify-content-center">
            <div class="col-lg-6 col-md-8">
              <div class="bg-light shadow rounded-3 p-4">
                <div class="text-center">
                  <a href="index.html" class="d-inline-block my-4">
                    <img
                      src="https://upload.wikimedia.org/wikipedia/commons/thumb/e/e3/Skull-Icon.svg/2048px-Skull-Icon.svg.png"
                      class="logo-dark"
                      alt=""
                      height="60"
                    />
                  </a>
                  <h4 class="fw-bold mb-2">Welcome to Premonition</h4>
                  <p class="text-muted fs-15 mb-0">login to your account</p>
                </div>

                <div class="col-lg-12 mt-4">
                  <form v-on:submit.prevent="submit()">
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-floating mb-3">
                          <input
                            type="email"
                            class="form-control"
                            placeholder="Your email"
                            id="email"
                            v-model="email"
                          />
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
                          <input
                            type="password"
                            class="form-control"
                            placeholder="Subject"
                            id="password"
                            v-model="password"
                          />
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
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
    <!-- <form v-on:submit.prevent="submit()">
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
    </form> -->
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
