<template>
  <div>
    <div>
      userId : {{ detail.userId }}
    </div>
    <div>
      id : {{ detail.id }}
    </div>
    <div>
      title : {{ detail.title }}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';
import {Album}                 from '../model/album.model';

@Component
export default class AlbumDetail extends Vue {
  detail: Album.Response.FindOne = new Album.Response.FindOne();

  created() {
    this.$store.dispatch('albumStore/getAlbum', this.$route.params.id);
  }

  @Watch('$store.state.albumStore.album')
  getAlbum() {
    this.detail = this.$store.getters['albumStore/getAlbum'];
  }
}
</script>
