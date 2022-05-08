import {Album}      from '@/app/album/model/album.model';
import {albumStore} from '@/app/album/vuex/album.store';

export class AlbumGetter {
  getList() {
    return Object.assign([], albumStore.state.list);
  }

  getOne() {
    return Object.assign(Album.Response.FindOne, albumStore.state.one);
  }
}
