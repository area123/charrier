<template lang="pug">
  #app
    router-view
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '@/views/Home.vue';

export default Vue.extend({
  components: {
    Home,
  },
});
</script>

<style lang="scss">
@import "~bulma/bulma";

</style>
