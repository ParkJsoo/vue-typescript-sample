import {Album} from '@/app/album/model/album.model';

export class AlbumState {
  list: Album.Response.FindAll[] = [];
  one: Album.Response.FindOne = new Album.Response.FindOne();
}
