import {Mutation} from 'vuex-class-modules';

import {Album}       from '@/app/album/model/album.model';
import {albumStore}  from '@/app/album/vuex/album.store';

export class AlbumMutation {
  @Mutation
  setList(list: Album.Response.FindAll[]) {
    albumStore.state.list = list;
  }

  @Mutation
  setOne(one: Album.Response.FindOne) {
    albumStore.state.one = one;
  }
}
