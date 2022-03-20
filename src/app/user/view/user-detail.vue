<template>
  <div>
    <div>
      id : {{ detail.id }}
    </div>
    <div>
      name : {{ detail.name }}
    </div>
    <div>
      username : {{ detail.username }}
    </div>
    <div>
      email : {{ detail.email }}
    </div>
    <div>
      address.street : {{ detail.address.street }}
    </div>
    <div>
      address.suite : {{ detail.address.suite }}
    </div>
    <div>
      address.city : {{ detail.address.city }}
    </div>
    <div>
      address.zipcode : {{ detail.address.zipcode }}
    </div>
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

import {User}                  from '@/app/user/model/user.model';
import {userStore}             from '@/app/user/vuex/user.store';

@Component
export default class UserDetail extends Vue {
  detail: User.Response.FindOne = new User.Response.FindOne();
  store = userStore;

  created() {
    this.store.getUser(this.$route.params.id);
  }

  @Watch('store.user')
  getUser() {
    this.detail = this.store.getStateUser;
  }
}
</script>
