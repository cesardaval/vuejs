<template>
  <div class="template-container">
    <vs-row v-if="msg">
      <vs-col
        vs-type="flex"
        vs-justify="center"
        vs-align="center"
        vs-w="12">
        <vs-alert
          active="true"
          color="#842993">
          {{ msg }}
        </vs-alert>
      </vs-col>
    </vs-row>
    <vs-list v-else>
      <vs-list-item
        v-for="(dado, index) in myData"
        :key="index"
        :title="dado.name"
        :subtitle="dado | showArtistD | showAlbum">
        <template slot="avatar">
          <vs-avatar
            color="dark"
            icon="music_video"
            @click="test"/>
        </template>
        <vs-chip color="success">
          {{ msToMnSec(dado.duration_ms) }}
        </vs-chip>
        <vs-checkbox
          v-model="musicFavs"
          :vs-value="dado.id"
          icon="favorite"
          color="danger">
          Favoritar
        </vs-checkbox>
      </vs-list-item>
    </vs-list>
  </div>
</template>

<script>
import isEqual from 'lodash/isEqual';
import { mapState, mapActions } from 'vuex';

export default {
  name: 'Musicas',
  props: {
    favoritos: {
      default: false,
      type: Boolean,
    },
  },
  data: () => ({
    musicFavs: [],
  }),
  computed: {
    ...mapState('Musicas', {
      dados: 'musicas',
    }),
    ...mapState(['msg', 'searched']),
    myData() {
      return (this.searched.length === 0) ? this.dados : this.searched;
    },
  },
  watch: {
    musicFavs(newValues, oldValues) {
      this.setMyFavMusics(newValues);
      if (oldValues.length > 0 && !isEqual(newValues, oldValues) && this.favoritos) {
        this.$router.go(this.$router.currentRoute);
      }
    },
  },
  created() {
    if (!this.favoritos) this.getMusicas();
    this.getMyFavMusics();
  },
  methods: {
    ...mapActions('Musicas', {
      getMusicas: 'getList',
    }),
    getMyFavMusics() {
      const mf = localStorage.getItem('vueSpotifyFavorites');
      const obj = JSON.parse(mf);
      this.musicFavs = obj.tracks;
    },
    setMyFavMusics(values) {
      const mf = localStorage.getItem('vueSpotifyFavorites');
      const obj = JSON.parse(mf);
      obj.tracks = values;
      const newVal = JSON.stringify(obj);
      localStorage.setItem('vueSpotifyFavorites', newVal);
    },
  },
};
</script>
