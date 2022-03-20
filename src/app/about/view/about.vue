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
    this.$store.dispatch('increment');
  }

  @Watch('$store.state.count')
  getCount() {
    this.str = this.$store.getters.getCount;
  }
}
</script>
