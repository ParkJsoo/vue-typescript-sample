<template>
  <div class="about">
    <h1>This is an about page</h1>
    count : {{ str }}
  </div>
</template>

<script lang="ts">
import {Component, Vue, Watch} from 'vue-property-decorator';

@Component
export default class About extends Vue {
  str = '';

  created() {
    this.$store.dispatch('aboutStore/increment');
  }

  @Watch('$store.state.aboutStore.count')
  getCount() {
    this.str = this.$store.getters['aboutStore/getCount'];
  }
}
</script>
