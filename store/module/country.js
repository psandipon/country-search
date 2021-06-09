// import { reject, resolve } from "core-js/fn/promise"

export const state = () => ({
  allCountries: []
});

export const getters = {
  GET_ALL_COUNTRY: state => {
    return state.allCountries;
  }
};

const mutations = {
  SET_ALL_COUNTRY(state, data) {
    state.allCountries = data;
  }
};

const actions = {
  FETCH_ALL_COUNTRY_DATA({ commit }, searchParam) {
    // console.log("searchParam:~>", searchParam);
    return new Promise((resolve, reject) => {
      this.$axios
        .$get("all", {
          params: searchParam
        })
        .then(function(response) {
          // console.log(response);
          commit("SET_ALL_COUNTRY", response);
          resolve(response);
        })
        .catch(function(error) {
          //   reject(error);
        });
    });
  }
};

export default {
  state,
  getters,
  actions,
  mutations
};
