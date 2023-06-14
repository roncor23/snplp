<template>
  <div class="fixed-plugin" v-click-outside="closeDropDown">
    <div class="dropdown show-dropdown" :class="{ show: isOpen }">
      <a data-toggle="dropdown">
        <i
          style="cursor: pointer"
          class="fa fa-cog fa-2x"
          @click="toggleDropDown"
        >
        </i>
      </a>
      <ul class="dropdown-menu" :class="{ show: isOpen }">
        <li class="header-title">Sidebar Background</li>
        <li class="adjustments-line text-center">
          <a class="switch-trigger background-color">
            <span
              v-for="item in sidebarColors"
              :key="item.color"
              class="badge filter"
              :class="[`badge-${item.color}`, { active: item.active }]"
              :data-color="item.color"
              @click="changeSidebarBackground(item)"
            ></span>
          </a>
        </li>

        <li class="header-title">Sidebar Active Color</li>
        <li class="adjustments-line text-center">
          <a class="switch-trigger active-color">
            <span
              v-for="item in sidebarTextColors"
              :key="item.color"
              class="badge filter"
              :class="[`badge-${item.color}`, { active: item.active }]"
              :data-color="item.color"
              @click="changeSidebarLinkColor(item)"
            ></span>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
import Vue from "vue";
import VueGitHubButtons from "vue-github-buttons";
import "vue-github-buttons/dist/vue-github-buttons.css";
import SocialSharing from "vue-social-sharing";

const VueSelect = {
  install(Vue, options) {
    Vue.component("SocialSharing", SocialSharing);
  },
};
Vue.use(VueSelect);
Vue.use(VueGitHubButtons, { useCache: true });

export default {
  props: {
    backgroundColor: String,
    activeColor: String,
  },
  data() {
    return {
      shareUrl:
        "https://www.creative-tim.com/product/vue-paper-dashboard-laravel",
      isOpen: false,
      sidebarColors: [
        { color: "white", active: false },
        { color: "black", active: true },
        { color: "darkblue", active: false },
      ],
      sidebarTextColors: [
        { color: "primary", active: false },
        { color: "info", active: false },
        { color: "success", active: true },
        { color: "warning", active: false },
        { color: "danger", active: false },
      ],
    };
  },
  methods: {
    toggleDropDown() {
      this.isOpen = !this.isOpen;
    },
    closeDropDown() {
      this.isOpen = false;
    },
    toggleList(list, itemToActivate) {
      list.forEach((listItem) => {
        listItem.active = false;
      });
      itemToActivate.active = true;
    },
    changeSidebarBackground(item) {
      this.$emit("update:backgroundColor", item.color);
      this.toggleList(this.sidebarColors, item);
    },
    changeSidebarLinkColor(item) {
      this.$emit("update:activeColor", item.color);
      this.toggleList(this.sidebarTextColors, item);
    },
  },
};
</script>
