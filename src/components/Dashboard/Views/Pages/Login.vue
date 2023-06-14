<template>
  <div class="login-page">
    <app-navbar></app-navbar>
    <div class="wrapper wrapper-full-page">
      <div class="full-page login-page section-image">
        <!--   you can change the color of the filter page using: data-color="blue | azure | green | orange | red | purple" -->
        <div class="content">
          <div class="container">

            <div class="col-lg-4 col-md-6 ml-auto mr-auto">
              <form @submit.prevent="login">
                <card type="login">
                  <h3 slot="header" class="header text-center">SNPLP</h3>

                  <fg-input v-model="email" addon-left-icon="nc-icon nc-single-02" placeholder="Email"/>
                  <validation-error :errors="apiValidationErrors.email" />
                  <fg-input v-model="password" addon-left-icon="nc-icon nc-key-25" placeholder="Password" type="password"/>
                  <validation-error :errors="apiValidationErrors.password" />
                  <div slot="footer">
                    <p-button native-type="submit" slot="footer" type="success" round block class="mb-3">Log in</p-button>
                    <div class="credits ml-auto mt-4">
                      <div class="copyright">
                        <i class="fa fa-copyright" style="font-weight: 200"></i>
                        made with <i class="fa fa-heart heart"></i> by
                        <a
                          href="https://www.creative-tim.com"
                          target="_blank"
                          rel="noopener"
                          >CHED</a
                        >
                      </div>
                    </div>
                  </div>
                  
                </card>
              </form>
            </div>
          </div>
        </div>
        <app-footer></app-footer>
        <!-- <div class="full-page-background" style="background-image: url(/static/img/background/background-2.jpg) "></div> -->
      </div>
    </div>
  </div>
</template>
<script>
  import { Card, Button } from 'src/components/UIComponents';
  import AppNavbar from './Layout/AppNavbar'
  import AppFooter from './Layout/AppFooter'
  import formMixin from "@/mixins/form-mixin";
  import ValidationError from "src/components/UIComponents/ValidationError.vue";

export default {
  mixins: [formMixin],
  components: {
    Card,
    AppNavbar,
    AppFooter,
    [Button.name]: Button,
    ValidationError
  },
  data() {
    return {
      email: "",
      password: "",
    }
  },
  mounted() {
    this.checkauthentication();
  },
  methods: {
    toggleNavbar() {
      document.body.classList.toggle('nav-open')
    },
    closeMenu() {
      document.body.classList.remove('nav-open')
      document.body.classList.remove('off-canvas-sidebar')
    },
    checkauthentication() {
      console.log("check auth", this.$store.getters.getUser.isAuthenticated);
      if(this.$store.getters.getUser.isAuthenticated) {
        this.$router.push({ path: '/admin/overview' });
      }
    },
    async login() {
      axios.get('/sanctum/csrf-cookie').then((response) => {
        // handle login
        console.log("check sanctum", response);
        axios
          .post('http://snplp.chedcaraga.test/snplp-database/public/api/login', {
            email: this.email,
            password: this.password,
          })
          .then((response) => {
            console.log("check response", response);
            this.$store.commit('setAuthentication', true);
            this.$store.commit('setUser', response.data);
            this.$notify({
              message: 'Hurray! You\'re successfully logged into your account!',
              type: 'success',
            });
            this.$router.push({ path: '/admin' });
          })
          .catch((error) => {
            this.$notify({
              message: 'Incorrect email or password!',
              type: 'danger',
            });          
          });
      });
    }
  },
  beforeDestroy() {
    this.closeMenu()
  }
}
</script>
<style>
</style>
