import {ActionTree, GetterTree, Module, MutationTree} from 'vuex';
import axios, {AxiosResponse}                         from 'axios';

import AlbumState from '@/app/album/vuex/album.state';
import {Album}    from '@/app/album/model/album.model';

const getters: GetterTree<AlbumState, any> = {
  getAlbums(state: AlbumState) {
    return Object.assign([], state.albums);
  },
  getAlbum(state: AlbumState) {
    return Object.assign(Album.Response.FindOne, state.album);
  }
};

const mutations: MutationTree<AlbumState> = {
  setAlbums(state: AlbumState, albums: Album.Response.FindAll[]) {
    state.albums = albums;
  },
  setAlbum(state: AlbumState, album: Album.Response.FindOne) {
    state.album = album;
  }
};

const actions: ActionTree<AlbumState, any> = {
  getAlbums({commit}) {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((response: AxiosResponse<Album.Response.FindAll[]>) => {
        commit('setAlbums', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  },
  getAlbum({commit}, id: number) {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response: AxiosResponse<Album.Response.FindOne>) => {
        commit('setAlbum', response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
};

const albumStore: Module<AlbumState, any> = {
  namespaced: true,
  state     : new AlbumState(),
  getters,
  mutations,
  actions
};

export default albumStore;
