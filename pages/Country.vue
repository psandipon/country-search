<template>
  <div>
    <v-text-field
      label="Search Country"
      placeholder="Search Country"
      outlined
      v-model="search"
      prepend-inner-icon="mdi-magnify"
    ></v-text-field>
    <v-btn @click="FETCH_ALL_COUNTRY_DATA"> Search </v-btn>

    -- --- {{ allCountries }} ---
  </div>
</template>

<script>
import { mapGetters, mapActions } from "vuex";
export default {
  data() {
    return {
      search: "",
      allCountries: []
    };
  },
  mounted() {
    // this.FETCH_ALL_COUNTRY_DATA();
  },
  computed: {
    ...mapGetters("module/country", ["GET_ALL_COUNTRY"])
  },
  methods: {
    ...mapActions("module/country", ["FETCH_ALL_COUNTRY_DATA"]),
    fetchCountry() {
      this.FETCH_ALL_COUNTRY_DATA().then(res => {
        console.log(">>>.", res);
        this.allCountries = res;
      });
    }
  }
};
</script>

<style lang="scss" scoped></style>
