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
    <template v-else>
      <vs-row vs-justify="center">
        <vs-col
          vs-type="flex"
          vs-justify="center"
          vs-align="center">
          <vs-card>
            <div slot="media">
              <vs-row vs-justify="center">
                <vs-col
                  v-if="dados.artista"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  vs-w="12">
                  <vs-avatar
                    :src="dados.artista.imagem"
                    size="90px"/>
                  <h3>
                    {{ dados.artista.nome }}
                  </h3>
                  <vs-checkbox
                    v-model="artistsFav"
                    :vs-value="dados.artista.id"
                    icon="favorite"
                    color="danger">
                    Favoritar
                  </vs-checkbox>
                  <vs-button
                    radius
                    color="success"
                    type="filled"
                    icon="replay"
                    title="Voltar"
                    @click="$router.go(-1)"/>
                </vs-col>
              </vs-row>
              <img src="https://picsum.photos/1000/180?random">
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
      <vs-row
        vs-align="flex-start"
        vs-type="flex"
        vs-justify="center"
        vs-w="12">
        <vs-col
          v-for="(dado, index) in dados.albums"
          :key="index"
          vs-type="flex"
          vs-justify="center"
          vs-align="center"
          vs-xs="6"
          vs-sm="4"
          vs-lg="2">
          <vs-card>
            <div
              class="avatar"
              @click="enter(dados.artista.id, dado.id)">
              <img
                v-if="dado.images"
                :src="dado.images[1].url">
              <div class="middle">
                <vs-button
                  radius
                  type="filled"
                  icon="play_arrow"
                  color="dark"/>
              </div>
            </div>
            <div slot="footer">
              <vs-row>
                <vs-col
                  :title="dado.name"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center">
                  <h4 class="albumName">{{ dado.name }}</h4>
                </vs-col>
              </vs-row>
              <vs-row>
                <vs-col
                  :title="dado.artists | showArtistMA"
                  vs-type="flex"
                  vs-justify="center"
                  vs-align="center"
                  class="albumName">
                  {{ dado.artists | showArtistMA }}
                </vs-col>
              </vs-row>
            </div>
          </vs-card>
        </vs-col>
      </vs-row>
    </template>
  </div>
</template>

<script>
import { mapState, mapActions } from 'vuex';

export default {
  name: 'ArtistaPerfil',
  data: () => ({
    artistsFav: [],
  }),
  computed: {
    ...mapState('Artistas', {
      dados: 'artista_albums',
    }),
    ...mapState(['msg']),
  },
  watch: {
    artistsFav(newValues) {
      this.setMyFavArtists(newValues);
    },
  },
  created() {
    this.getAlbums(this.$route.params.id);
    this.getMyFavArtists();
  },
  methods: {
    ...mapActions('Artistas', {
      getAlbums: 'getArtistAlbums',
    }),
    enter(artista, album) {
      this.$router.push({ path: `/artista/${artista}/album/${album}` });
    },
    getMyFavArtists() {
      const mf = localStorage.getItem('vueSpotifyFavorites');
      const obj = JSON.parse(mf);
      this.artistsFav = obj.artists;
    },
    setMyFavArtists(values) {
      const mf = localStorage.getItem('vueSpotifyFavorites');
      const obj = JSON.parse(mf);
      obj.artists = values;
      const newVal = JSON.stringify(obj);
      localStorage.setItem('vueSpotifyFavorites', newVal);
    },
  },
};
</script>

<style scoped lang="scss">
.template-container /deep/ .avatar {
  position: relative;
  cursor: pointer;
  img {
    opacity: 1;
    display: block;
    width: 100%;
    height: auto;
    transition: .5s ease;
    backface-visibility: hidden;
  }
  .middle {
    transition: .5s ease;
    opacity: 0;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    -ms-transform: translate(-50%, -50%);
    text-align: center;
  }
  &:hover img {
    opacity: 0.3;
  }
  &:hover .middle {
    opacity: 1;
  }
}
.template-container /deep/ .con-vs-card {
  .vs-card--footer {
    padding: 0 10px 35px;
    margin-top: -30px;
    .albumName {
      display: block !important;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      text-align: center;
    }
  }
  .vs-card--media {
    .con-vs-avatar {
      cursor: default;
      &:hover img {
        opacity: 1;
      }
    }
  }
}
</style>
