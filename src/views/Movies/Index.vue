<template>
  <div class="movies">
    <h1>Movies</h1>
    <div>
      <!-- <form v-on:submit.prevent="searchMovies()">
        <input type="text" v-model="search" placeholder="search movies" />
        <input type="submit" value="Search" />
      </form> -->
      <section class="mt-4 pt-2">
        <div class="container">
          <div class="row">
            <div class="col-lg-12 my-3">
              <aside class="search-box mb-4 pb-2 fs-14">
                <form class="position-relative" v-on:submit.prevent="searchMovies()">
                  <input
                    class="form-control position-relative bg-light border rounded-pill"
                    v-model="search"
                    placeholder="Search..."
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
          <div class="row">
            <div class="col-lg-8">
              <div class="row">
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
                <div class="col-lg-6"></div>
              </div>
              <!-- end row -->
            </div>
          </div>
        </div>
        <!-- end container -->
      </section>
    </div>
    <br />
    <section class="section">
      <div class="container">
        <div class="row">
          <div class="col-lg-8 mt-4">
            <!-- Post-->
            <article class="post position-relative">
              <div class="date-box rounded-3 shadow text-center bg-light position-absolute top-0 start-0 p-2 ms-3 mt-3">
                <h6 class="fs-14 fw-medium mb-0">16-11-2021</h6>
              </div>
              <div class="post-preview mb-4">
                <a href="blog-single.html"><img src="images/blog/blog-2.jpg" alt="" class="img-fluid rounded" /></a>
              </div>
              <div class="post">
                <div class="d-flex align-items-center gap-3">
                  <p class="fs-15 text-muted mb-0">
                    <i data-feather="message-square" class="icon-xs me-1"></i>
                    <a href="javascript:void(0)" class="text-muted">897</a>
                  </p>
                  <p class="fs-15 text-muted mb-0">
                    <i data-feather="eye" class="icon-xs me-1"></i>
                    <a href="javascript:void(0)" class="text-muted">99.2 K</a>
                  </p>
                </div>
                <h6 class="fs-22 fw-semibold my-3 post-title">
                  <a href="single-post.html">What makes the best co-working space?</a>
                </h6>
                <p class="text-muted">
                  Whether an identity or campaign, we make your brand visible, relevant and effective by placing the
                  digital at the center of its ecosystem, without underestimating the power of traditional media.
                  Whether an identity or campaign, we make your brand visible.
                </p>
                <p class="text-muted">
                  Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium,
                  totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta
                  sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia
                  consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui
                  dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora
                  incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam
                </p>
                <p class="text-muted">
                  vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                  atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                  similique sunt in culpa qui.
                </p>

                <div class="col-lg-12 my-4">
                  <div class="section-title border-start border-primary position-relative">
                    <i class="mdi mdi-format-quote-open-outline fs-3 text-primary"></i>
                    <h5 class="fw-medium lh-1">We Are Awesome.</h5>
                    <p class="text-muted mb-0">
                      A business consulting agency is involved in the planning, implementation, and education of
                      businesses. We work directly.
                    </p>
                  </div>
                </div>
                <p class="text-muted">
                  vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti
                  atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident,
                  similique sunt in culpa qui.
                </p>
              </div>

              <!-- comment start -->
              <h6 class="fs-22 fw-semibold border-bottom pb-3 mt-5">Comments</h6>
              <ul class="ps-0 pt-3 mt-3">
                <div class="d-sm-flex align-items-top">
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-circle img-thumbnail"
                      src="images/clients/client-1.jpg"
                      alt="img"
                      style="width: 65px; height: 65px"
                    />
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <h6 class="mt-sm-0 mt-3 fs-16">Michelle Durant</h6>
                    <p class="text-muted">Jun 23, 2021, 11:45 am</p>

                    <p class="text-muted fs-15">
                      vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum
                      deleniti atque corrupti quos dolores
                    </p>
                  </div>
                  <a class="text-muted me-3" href="javascript:void(0)">
                    <i class="icon-xs" data-feather="message-square"></i>
                  </a>
                </div>
              </ul>
              <ul class="ps-0 pt-3 mt-4">
                <div class="d-sm-flex align-items-top">
                  <div class="flex-shrink-0">
                    <img
                      class="rounded-circle img-thumbnail"
                      src="images/clients/client-2.jpg"
                      alt="img"
                      style="width: 65px; height: 65px"
                    />
                  </div>
                  <div class="flex-grow-1 ms-sm-3">
                    <h6 class="mt-sm-0 mt-3 fs-16">Steven Billups</h6>
                    <p class="text-muted">Jun 24, 2021, 10:05 am</p>

                    <p class="text-muted fs-15">
                      It is a long established fact that a reader will be distracted by the readable content of a page
                      when looking at its layout
                    </p>

                    <div class="d-sm-flex align-items-top mt-4">
                      <div class="flex-shrink-0">
                        <img
                          class="rounded-circle img-thumbnail"
                          src="images/clients/client-3.jpg"
                          alt="img"
                          style="width: 65px; height: 65px"
                        />
                      </div>
                      <div class="flex-grow-1 ms-sm-3">
                        <h6 class="mt-sm-0 mt-3 fs-16">Harriet Townsend</h6>
                        <p class="text-muted">Jun 26, 2021, 01:25 pm</p>

                        <p class="text-muted fs-15">
                          variations of passages of Lorem Ipsum available, but the majority have suffered alteration
                        </p>
                      </div>
                    </div>
                  </div>
                  <a class="text-muted me-3" href="javascript:void(0)">
                    <i class="icon-xs" data-feather="message-square"></i>
                  </a>
                </div>
              </ul>

              <!-- end comment -->

              <ul class="list-unstyled share-link list-inline mt-5 border-bottom py-3">
                <li class="list-inline-item">
                  <h6 class="fw-medium fs-14 text-uppercase me-2">Share :</h6>
                </li>
                <li class="list-inline-item border-end pe-3"><a href="javascript:void(0)">Facebook</a></li>
                <li class="list-inline-item border-end pe-3"><a href="javascript:void(0)">Twitter</a></li>
                <li class="list-inline-item border-end pe-3"><a href="javascript:void(0)">Linked In</a></li>
                <li class="list-inline-item"><a href="javascript:void(0)">Instagram</a></li>
              </ul>
              <div class="row">
                <div class="col-lg-12">
                  <nav aria-label="Page navigation example">
                    <ul class="pagination">
                      <li class="page-item">
                        <a class="page-link" href="javascript:void(0)" aria-label="Previous">
                          <span aria-hidden="true">&laquo;</span>
                        </a>
                      </li>
                      <li class="page-item"><a class="page-link active" href="javascript:void(0)">1</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0)">2</a></li>
                      <li class="page-item"><a class="page-link" href="javascript:void(0)">3</a></li>
                      <li class="page-item">
                        <a class="page-link" href="javascript:void(0)" aria-label="Next">
                          <span aria-hidden="true">&raquo;</span>
                        </a>
                      </li>
                    </ul>
                  </nav>
                </div>
              </div>
            </article>
            <!-- Post end-->
          </div>
          <div class="col-lg-4 col-md-6">
            <div class="sidebar shadow rounded-3 mt-4">
              <!-- Categories widget-->
              <div>
                <div class="p-3 bg-light">
                  <h6 class="mb-0">Categories</h6>
                </div>
                <div class="ms-3 my-3">
                  <div class="form-check mb-2">
                    <input class="form-check-input fs-16" type="checkbox" value="" id="flexCheckDefault" />
                    <label class="form-check-label text-dark ms-2" for="flexCheckDefault">Accessories</label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input fs-16" type="checkbox" value="" id="flexCheckChecked1" checked />
                    <label class="form-check-label text-dark ms-2" for="flexCheckChecked1">Bag</label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input fs-16" type="checkbox" value="" id="flexCheckChecked2" />
                    <label class="form-check-label text-dark ms-2" for="flexCheckChecked2">Clothing</label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input fs-16" type="checkbox" value="" id="flexCheckChecked3" />
                    <label class="form-check-label text-dark ms-2" for="flexCheckChecked3">Decore</label>
                  </div>
                  <div class="form-check mb-2">
                    <input class="form-check-input fs-16" type="checkbox" value="" id="flexCheckChecked4" />
                    <label class="form-check-label text-dark ms-2" for="flexCheckChecked4">Coffee Pots</label>
                  </div>
                  <a class="fw-normal text-primary" href="javascript:void(0)">& More Products</a>
                </div>
              </div>

              <div class="mt-4">
                <div class="p-3 bg-light">
                  <h6 class="mb-0">Popular Post</h6>
                </div>
                <ul class="list-unstyled ms-3 my-3">
                  <li class="d-flex mb-3 pb-3 border-bottom">
                    <a class="w-25 me-3" href="javascript:void(0)">
                      <img src="images/works/img1.jpg" alt="" class="img-fluid rounded" />
                    </a>
                    <div class="flex-1">
                      <a href="javascript:void(0)" class="text-dark">Beautiful Day With Friends..</a>
                      <span class="d-block text-muted">Jun 15, 2021</span>
                    </div>
                  </li>
                  <li class="d-flex mb-3 pb-3 border-bottom">
                    <a class="w-25 me-3" href="javascript:void(0)">
                      <img src="images/works/img2.jpg" alt="" class="img-fluid rounded" />
                    </a>
                    <div class="flex-1">
                      <a href="javascript:void(0)" class="text-dark">Nature valley with cooling..</a>
                      <span class="d-block text-muted">Jun 10, 2021</span>
                    </div>
                  </li>
                  <li class="d-flex mb-3">
                    <a class="w-25 me-3" href="javascript:void(0)">
                      <img src="images/works/img3.jpg" alt="" class="img-fluid rounded" />
                    </a>
                    <div class="flex-1">
                      <a href="javascript:void(0)" class="text-dark">Beautiful Day With Friends..</a>
                      <span class="d-block text-muted">Jun 8, 2021</span>
                    </div>
                  </li>
                </ul>
              </div>

              <div class="mt-4">
                <div class="p-3 bg-light">
                  <h6 class="mb-0">Text Widget</h6>
                </div>
                <p class="mx-3 my-3 text-muted">
                  Exercitation photo booth stumptown tote bag Banksy, elit small batch freegan sed. Craft beer elit
                  seitan exercitation, photo booth et 8-bit kale chips proident chillwave deep v laborum. Aliquip veniam
                  delectus, Marfa eiusmod Pinterest in do umami readymade swag.
                </p>
              </div>

              <div class="mt-4">
                <div class="p-3 bg-light">
                  <h6 class="mb-0">Archives</h6>
                </div>
                <ul class="list-unstyled ms-3 my-3">
                  <li class="py-1 text-dark">
                    <a class="me-2 text-muted" href="javascript:void(0)">March 2021</a>
                    (40)
                  </li>
                  <li class="py-1 text-dark">
                    <a class="me-2 text-muted" href="javascript:void(0)">April 2021</a>
                    (08)
                  </li>
                  <li class="py-1 text-dark">
                    <a class="me-2 text-muted" href="javascript:void(0)">May 2021</a>
                    (11)
                  </li>
                  <li class="py-1 text-dark">
                    <a class="me-2 text-muted" href="javascript:void(0)">Jun 2021</a>
                    (21)
                  </li>
                </ul>
              </div>

              <div class="mt-4">
                <div class="p-3 bg-light">
                  <h6 class="mb-0">Tags</h6>
                </div>
                <div class="tagcloud ms-3 py-3">
                  <a class="rounded d-inline-block fs-13 fw-medium mx-1 my-1 px-2 py-1" href="javascript:void(0)">
                    logo
                  </a>
                  <a class="rounded d-inline-block fs-13 fw-medium mx-1 my-1 px-2 py-1" href="javascript:void(0)">
                    business
                  </a>
                  <a class="rounded d-inline-block fs-13 fw-medium mx-1 my-1 px-2 py-1" href="javascript:void(0)">
                    corporate
                  </a>
                  <a class="rounded d-inline-block fs-13 fw-medium mx-1 my-1 px-2 py-1" href="javascript:void(0)">
                    e-commerce
                  </a>
                  <a class="rounded d-inline-block fs-13 fw-medium mx-1 my-1 px-2 py-1" href="javascript:void(0)">
                    agency
                  </a>
                  <a class="rounded d-inline-block fs-13 fw-medium mx-1 my-1 px-2 py-1" href="javascript:void(0)">
                    responsive
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        <!-- end row -->
      </div>
    </section>
    <div v-for="movie in movies" v-bind:key="movie.id">
      <span class="image">
        <img v-bind:src="`https://image.tmdb.org/t/p/w500${movie.poster_path}`" v-bind:alt="movie.name" />
        <img :src="movie.poster_path" alt="" />
      </span>
      <h2>{{ movie.original_title }}</h2>
      <p>Release Date: {{ movie.release_date }}</p>
      <p>{{ movie.overview }}</p>
      <router-link v-bind:to="`/movies/${movie.id}`">More Info</router-link>
      <br />
    </div>
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
