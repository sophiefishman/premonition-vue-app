<template>
  <div class="signup">
    <body style="max-width: 100%">
      <!-- light-dark mode button -->

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
                  <p class="text-muted fs-15 mb-0">Sign up to keep track of your favorite movies</p>
                  <p class="text-muted fs-15">and find what to watch next</p>
                </div>
                <div class="col-lg-12 mt-4">
                  <form>
                    <div class="row">
                      <div class="col-lg-12">
                        <div class="form-floating mb-3">
                          <input type="name" class="form-control" placeholder="Your email" id="name" />
                          <label class="text-muted" for="name">
                            <i class="icon-xxs icon sw-1.5 me-2" data-feather="user"></i>
                            Enter name
                          </label>
                        </div>
                      </div>
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
                          value="Register"
                        />
                      </div>
                    </div>
                    <p class="text-muted text-center fs-15">
                      Alaready have an account?
                      <a class="text-primary fw-semibold text-decoration-underline" href="login.html">Log In</a>
                    </p>
                  </form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </body>
    <!-- <form v-on:submit.prevent="submit()">
      <h1>Signup</h1>
      <ul>
        <li class="text-danger" v-for="error in errors" v-bind:key="error">
          {{ error }}
        </li>
      </ul>
      <div class="form-group">
        <label>Name:</label>
        <input type="text" class="form-control" v-model="newUserParams.name" />
        <br />
        <small>{{ 25 - newUserParams.name.length }} characters remaining</small>
      </div>
      <br />
      <div class="form-group">
        <label>Email:</label>
        <input type="email" class="form-control" v-model="newUserParams.email" />
      </div>
      <br />
      <div class="form-group">
        <label>Password:</label>
        <input type="password" class="form-control" v-model="newUserParams.password" />
        <br />
        <small v-if="newUserParams.password.length > 0 && newUserParams.password.length < 6" class="text-danger">
          Must be at least 6 characters
        </small>
        <small v-if="newUserParams.password.length > 20" class="text-danger">
          Password cannot exceed 20 characters
        </small>
      </div>
      <br />
      <div class="form-group">
        <label>Password confirmation:</label>
        <input type="password" class="form-control" v-model="newUserParams.password_confirmation" />
        <br />
        <small v-if="newUserParams.password !== newUserParams.password_confirmation" class="text-danger">
          Must match password
        </small>
      </div>
      <br />
      <input
        v-if="
          newUserParams.name.length < 2 ||
          newUserParams.name.length > 25 ||
          newUserParams.password.length < 6 ||
          newUserParams.password.length > 20 ||
          newUserParams.password !== newUserParams.password_confirmation
        "
        type="submit"
        disabled
        class="btn btn-primary"
        value="Submit"
      />
      <input v-else type="submit" class="btn btn-primary" value="Submit" />
    </form> -->
    <!-- newUserParams: {{ newUserParams }} -->
  </div>
</template>

<style scoped>
.text-danger {
  color: red;
}
</style>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      newUserParams: {
        name: "",
        password: "",
        password_confirmation: "",
      },
      errors: [],
    };
  },
  methods: {
    submit: function () {
      axios
        .post("/users", this.newUserParams)
        .then((response) => {
          console.log(response.data);
          this.$parent.flashMessage = "Successfully signed up!";
          this.$router.push("/login");
        })
        .catch((error) => {
          this.errors = error.response.data.errors;
        });
    },
  },
};
</script>
