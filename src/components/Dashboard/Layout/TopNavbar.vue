<template>
  <navbar v-model="showNavbar">
    <div class="navbar-wrapper">
      <div class="navbar-minimize">
        <button
          id="minimizeSidebar"
          class="btn btn-icon btn-round"
          @click="minimizeSidebar"
        >
          <i
            class="nc-icon nc-minimal-right text-center visible-on-sidebar-mini"
          ></i>
          <i
            class="nc-icon nc-minimal-left text-center visible-on-sidebar-regular"
          ></i>
        </button>
      </div>
      <div class="navbar-toggle">
        <navbar-toggle-button @click.native="toggleSidebar">
        </navbar-toggle-button>
      </div>
    </div>

    <template slot="navbar-menu">
      <ul class="navbar-nav">
        <drop-down
          icon="nc-icon nc-settings-gear-65"
          tag="li"
          position="right"
          direction="none"
          class="nav-item btn-rotate dropdown"
        >
          <a
            slot="title"
            slot-scope="{ isOpen }"
            class="nav-link dropdown-toggle"
            data-toggle="dropdown"
            aria-haspopup="true"
            :aria-expanded="isOpen"
          >
            <i class="nc-icon nc-settings-gear-65"></i>
            <p>
              <span class="d-lg-none d-md-block">Profile</span>
            </p>
          </a>
          <!-- <a class="dropdown-item" href="#" @click="goToProfile">Profile</a> -->
          <a class="dropdown-item" @click="logout" href="#">Log out</a>
        </drop-down>
      </ul>
    </template>
  </navbar>
</template>
<script>
import { Navbar, NavbarToggleButton } from "src/components/UIComponents";

export default {
  components: {
    Navbar,
    NavbarToggleButton,
  },
  data() {
    return {
      activeNotifications: false,
      showNavbar: false,
    };
  },
  methods: {
    goToProfile() {
      this.$router.push({ name: "User Profile" });
    },
    logout() {
        this.$store.commit('setAuthentication', false);
        this.$store.commit('setUser', null);
        this.$router.push({ name: 'Login' });
    },
    capitalizeFirstLetter(string) {
      return string.charAt(0).toUpperCase() + string.slice(1);
    },
    toggleNotificationDropDown() {
      this.activeNotifications = !this.activeNotifications;
    },
    closeDropDown() {
      this.activeNotifications = false;
    },
    toggleSidebar() {
      this.$sidebar.displaySidebar(!this.$sidebar.showSidebar);
    },
    hideSidebar() {
      this.$sidebar.displaySidebar(false);
    },
    minimizeSidebar() {
      this.$sidebar.toggleMinimize();
    },
    toggleNavbar() {
      this.showNavbar = !this.showNavbar;
    },
  },
};
</script>
<style>
#docs:hover,
#docs:active,
#docs:focus {
  background-color: #6bd098 !important;
}
#downb:hover,
#downb:active,
#downb:focus {
  background-color: #ef8157 !important;
}
</style>
