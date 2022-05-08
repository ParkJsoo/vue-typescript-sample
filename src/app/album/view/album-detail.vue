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

import {Album}      from '@/app/album/model/album.model';
import {albumStore} from '@/app/album/vuex/album.store';

@Component
export default class AlbumDetail extends Vue {
  detail: Album.Response.FindOne = new Album.Response.FindOne();
  store = albumStore;

  created() {
    this.store.actions.getOne(this.$route.params.id);
  }

  @Watch('store.state.one')
  getAlbum() {
    this.detail = this.store.getters.getOne();
  }
}
</script>
