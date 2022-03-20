<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>userId</th>
        <th>id</th>
        <th>title</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in albums" v-bind:key="item.id" @click="onRow(item.id)">
        <td>{{ item.userId }}</td>
        <td>{{ item.id }}</td>
        <td>{{ item.title }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {Album}    from '@/app/album/model/album.model';

@Component
export default class AlbumList extends Vue {
  albums: Album.Response.FindAll[] = [];

  created() {
    this.$store.dispatch('albumStore/getAlbums');
  }

  onRow(id: number) {
    this.$router.push(`./album/${id}`);
  }

  @Watch('$store.state.albumStore.albums')
  getAlbums() {
    this.albums = this.$store.getters['albumStore/getAlbums'];
  }
}
</script>
