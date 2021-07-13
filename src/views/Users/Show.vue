<template>
  <div class="users-show">
    <body data-bs-target=".navbar" data-bs-offset="110">
      <section class="section">
        <div class="container">
          <div class="row align-items-center">
            <div class="col-lg-12">
              <div class="d-flex align-items-center py-3"></div>

              <div class="row align-items-center border-top py-4">
                <div class="col-sm-4 py-sm-0 py-3">
                  <h5>Hey there, {{ user.name }}!</h5>
                </div>
              </div>
              <div class="col-lg-12 mt-4">
                <form v-on:submit.prevent="updateUser(user)">
                  <span id="error-msg"></span>
                  <div class="row g-3">
                    <div class="col-lg-6">
                      <div class="form-floating mb-3">
                        <input type="text" class="form-control" id="name" placeholder="Your name" v-model="user.name" />
                        <label class="text-muted" for="name">Your name</label>
                      </div>
                    </div>
                    <div class="col-lg-6">
                      <div class="form-floating mb-3">
                        <input
                          type="email"
                          class="form-control"
                          placeholder="Your email"
                          id="email"
                          v-model="user.email"
                        />
                        <label class="text-muted" for="email">Email address</label>
                      </div>
                    </div>
                  </div>

                  <div class="row">
                    <div class="col-lg-6">
                      <input
                        type="submit"
                        id="submit"
                        name="send"
                        class="submitBnt btn btn-primary rounded"
                        value="Update User Info"
                      />
                    </div>
                    <div class="col-lg-6">
                      <input
                        v-on:click="destroyUser(user)"
                        class="submitBnt btn btn-primary rounded"
                        value="Delete Profile"
                      />
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <!-- end container -->
      </section>
    </body>
    <h2>{{ user.name }}</h2>
    <p>Email: {{ user.email }}</p>
    <p>
      Name:
      <input type="text" v-model="user.name" />
    </p>
    <p>
      Email:
      <input type="text" v-model="user.email" />
    </p>
    <button v-on:click="updateUser(user)">Update Info</button>
    <button v-on:click="destroyUser(user)">Delete Profile</button>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data: function () {
    return {
      user: {},
    };
  },
  created: function () {
    axios.get(`/users/${this.$parent.getUserId()}`).then((response) => {
      console.log("users show", response);
      this.user = response.data;
    });
  },
  methods: {
    updateUser: function (user) {
      var params = {
        name: user.name,
        email: user.email,
      };
      axios
        .patch("/users/" + user.id, params)
        .then((response) => {
          console.log("users update", response);
          this.user = response.data;
        })
        .catch((error) => {
          console.log("users update error", error.response);
        });
    },
    destroyUser: function (user) {
      axios.delete("/users/" + user.id).then((response) => {
        console.log("users destroy", response);
        var index = this.users.indexOf(user);
        this.users.splice(index, 1);
      });
    },
  },
};
</script>
