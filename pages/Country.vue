<template>
  <div>
    <v-row class="ma-3">
      <v-col cols="10">
        <v-text-field
          label="Search Country"
          placeholder="Search Country"
          outlined
          v-model="search"
          prepend-inner-icon="mdi-magnify"
          dense
        ></v-text-field>
      </v-col>
      <v-col cols="2" v-if="!ifPhone">
        <v-btn outlined @click="fetchCountry" block>
          Search
        </v-btn>
      </v-col>
      <v-col cols="2" v-else>
        <v-btn outlined small dark fab color="pink" @click="fetchCountry">
          <v-icon> mdi-magnify </v-icon>
        </v-btn>
      </v-col>
    </v-row>

    <v-row>
      <v-col
        v-for="(item, i) in GET_ALL_COUNTRY"
        :key="i"
        cols="12"
        lg="4"
        md="6"
        sm="12"
        xs="12"
      >
        <div>
          <v-card class="ma-3 pa-3">
            <span class="title"> {{ item.name }} </span>
            <v-img :src="item.flag"> </v-img>
          </v-card>
        </div>
      </v-col>
    </v-row>
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

  computed: {
    ...mapGetters("module/country", ["GET_ALL_COUNTRY"]),
    ifPhone() {
      return this.$vuetify.breakpoint.mobile;
    }
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
