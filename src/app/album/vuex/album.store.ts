import {Module, VuexModule} from 'vuex-class-modules';
import {store}              from '@/store';

import {AlbumState}    from '@/app/album/vuex/album.state';
import {AlbumGetter}   from '@/app/album/vuex/album.getter';
import {AlbumMutation} from '@/app/album/vuex/album.mutation';
import {AlbumAction}   from '@/app/album/vuex/album.action';

@Module
export class AlbumStore extends VuexModule {
  state: AlbumState = new AlbumState();
  mutations: AlbumMutation = new AlbumMutation();
  getters: AlbumGetter = new AlbumGetter();
  actions: AlbumAction = new AlbumAction();
}

export const albumStore = new AlbumStore({store, name: 'albumStore'});
