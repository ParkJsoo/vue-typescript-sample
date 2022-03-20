<template>
  <div>
    <table>
      <thead>
      <tr>
        <th>id |</th>
        <th>name |</th>
        <th>username |</th>
        <th>email |</th>
        <th>company</th>
      </tr>
      </thead>
      <tbody>
      <tr v-for="item in users" :key="item.id" @click="onRow(item.id)">
        <td>{{ item.id }}</td>
        <td>{{ item.name }}</td>
        <td>{{ item.username }}</td>
        <td>{{ item.email }}</td>
        <td>{{ item.company.name }}</td>
      </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {User}      from '@/app/user/model/user.model';
import {userStore} from '@/app/user/vuex/user.store';

@Component
export default class UserList extends Vue {
  users: User.Response.FindAll[] = [];
  store = userStore;

  created() {
    this.store.getUsers();
  }

  onRow(id: number) {
    this.$router.push(`./user/${id}`);
  }

  @Watch('store.users')
  getUsers() {
    this.users = this.store.getStateUsers;
  }
}
</script>
