import {Action, Module, Mutation, VuexModule} from 'vuex-class-modules';
import axios, {AxiosResponse}                 from 'axios';

import {store} from '@/store';
import {User}  from '@/app/user/model/user.model';

@Module
class UserStore extends VuexModule {
  users: User.Response.FindAll[] = [];
  user: User.Response.FindOne = new User.Response.FindOne();

  get getStateUsers() {
    return Object.assign([], this.users);
  }

  get getStateUser() {
    return this.user;
  }

  @Mutation
  setUsers(users: User.Response.FindAll[]) {
    this.users = users;
  }

  @Mutation
  setUser(user: User.Response.FindOne) {
    this.user = user;
  }

  @Action
  getUsers() {
    axios.get('https://jsonplaceholder.typicode.com/users')
      .then((response: AxiosResponse<User.Response.FindAll[]>) => {
        this.setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  @Action
  getUser(id: string) {
    axios.get(`https://jsonplaceholder.typicode.com/users/${id}`)
      .then((response: AxiosResponse<User.Response.FindOne>) => {
        this.setUser(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }
}

export const userStore = new UserStore({store, name: 'userStore'});
