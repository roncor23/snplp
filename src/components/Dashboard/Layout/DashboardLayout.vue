<template>
  <div class="wrapper">
    <side-bar
      :active-color="activeColor"
      :background-color="backgroundColor"
      type="sidebar"
    >
      <user-menu></user-menu>
      <template slot-scope="props" slot="links">
        <sidebar-item
          :link="{
            name: 'Dashboard',
            icon: 'nc-icon nc-bank',
            path: '/admin/overview',
          }"
        >
        </sidebar-item>
        <sidebar-item
          opened
          class="example"
          :link="{ name: 'Beneficiaries', icon: 'nc-icon nc-bullet-list-67' }"
        >
          <sidebar-item
            :link="{
              name: 'list',
              path: '/snplp/beneficiaries',
            }"
          />
        </sidebar-item>
      </template>
    </side-bar>
    <sidebar-share
      :background-color.sync="backgroundColor"
      :active-color.sync="activeColor"
    >
    </sidebar-share>

    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click.native="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import UserMenu from "src/components/UIComponents/SidebarPlugin/UserMenu.vue";
import SidebarItem from "../../UIComponents/SidebarPlugin/SidebarItem.vue";
import SidebarShare from "./SidebarSharePlugin";

export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    UserMenu,
    SidebarItem,
    SidebarShare,
  },
  data() {
    return {
      backgroundColor: "black",
      activeColor: "success",
    };
  },
  mounted() {
    this.checkauthentication();
  },
  methods: {
    checkauthentication() {
      console.log("check auth", this.$store.getters.getUser.isAuthenticated);
      if(this.$store.getters.getUser.isAuthenticated) {
        if (this.$route.path !== '/admin/overview') {
          this.$router.push({ path: '/admin/overview' }).catch(() => {});
        }
      } else {
        if (this.$route.path !== '/login') {
          this.$router.push({ path: '/login' }).catch(() => {});
        }
      }
    },
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },

    
  },
};
</script>
