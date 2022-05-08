import {Action}               from 'vuex-class-modules';
import axios, {AxiosResponse} from 'axios';

import {Album}      from '@/app/album/model/album.model';
import {albumStore} from '@/app/album/vuex/album.store';

export class AlbumAction {
  @Action
  getList() {
    axios.get('https://jsonplaceholder.typicode.com/albums')
      .then((response: AxiosResponse<Album.Response.FindAll[]>) => {
        albumStore.mutations.setList(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @Action
  getOne(id: string) {
    axios.get(`https://jsonplaceholder.typicode.com/albums/${id}`)
      .then((response: AxiosResponse<Album.Response.FindOne>) => {
        albumStore.mutations.setOne(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}
