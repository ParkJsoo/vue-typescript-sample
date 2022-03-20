import {Action, Module, Mutation, VuexModule} from 'vuex-class-modules';
import axios, {AxiosResponse}                 from 'axios';

import {store} from '@/store';
import {Album} from '@/app/album/model/album.model';

@Module
export class AlbumStore extends VuexModule {
  albums: Album.Response.FindAll[] = [];
  album: Album.Response.FindOne = new Album.Response.FindOne();

  get getStateAlbums() {
    return Object.assign([], this.albums);
  }

  get getStateAlbum() {
    return Object.assign(Album.Response.FindOne, this.album);
  }

  @Mutation
  setAlbums(albums: Album.Response.FindAll[]) {
    this.albums = albums;
  }

  @Mutation
  setAlbum(album: Album.Response.FindOne) {
    this.album = album;
  }

  @Action
  getAlbums() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((response: AxiosResponse<Album.Response.FindAll[]>) => {
        this.setAlbums(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @Action
  getAlbum(id: string) {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response: AxiosResponse<Album.Response.FindOne>) => {
        this.setAlbum(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const albumStore = new AlbumStore({store, name: 'albumStore'});
