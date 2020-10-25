import Vue from "vue";
import Vuex from "vuex";

Vue.use(Vuex);

import map from "./map";
import calendar from "./calendar";

export default new Vuex.Store({
  state: {},
  mutations: {},
  actions: {},
  modules: { map, calendar }
});
