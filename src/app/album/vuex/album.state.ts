import {Album} from '@/app/album/model/album.model';

export default class AlbumState {
  albums: Album.Response.FindAll[] = [];
  album: Album.Response.FindOne = new Album.Response.FindOne();
}
