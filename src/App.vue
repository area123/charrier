<template lang="pug">
  #app
    router-view
</template>

<script lang="ts">
import Vue from 'vue';
import Home from '@/views/Home.vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faFileUpload } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

library.add(faFileUpload);
Vue.component('font-awesome-icon', FontAwesomeIcon);

export default Vue.extend({
  components: {
    Home,
  },
});
</script>

<style lang="scss">
@import "~bulma/bulma";

</style>
