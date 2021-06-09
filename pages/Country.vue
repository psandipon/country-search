<template>
  <div>
    <v-text-field
      label="Search Country"
      placeholder="Search Country"
      outlined
      v-model="search"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-btn @click="fetchCountry"> Search </v-btn>
    <div v-if="load">{{ GET_ALL_COUNTRY }}</div>
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      search: "",
      allCountries: [],
      load: true
    };
  },

  computed: {
    ...mapGetters("module/country", ["GET_ALL_COUNTRY"])
  },
  methods: {
    ...mapActions("module/country", ["FETCH_ALL_COUNTRY_DATA"]),
    fetchCountry() {
      this.FETCH_ALL_COUNTRY_DATA().then(res => {});
    }
  }
};
</script>

<style lang="scss" scoped></style>
