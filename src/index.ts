import VueScrollShadow from "./components/VueScrollShadow.vue";

export default {
  install: (app: any) => {
    app.component("vue-scroll-shadow", VueScrollShadow);
  },
};
