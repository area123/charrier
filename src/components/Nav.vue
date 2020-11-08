<template lang="pug">
  nav.navbar
    .navbar-brand
      router-link.navbar-item(:to="{ name: 'Home' }") charrier
    .navbar-menu
      .navbar-end
        button.button.is-primary(@click="onClick")
          strong 로그아웃
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
  methods:{
    onClick() {
      this.$store.dispatch('user/logout');
      this.$router.push({ name: 'Home' });
    },
  }
});
</script>

<style scoped lang="scss">
.navbar-brand {
  a {
    font-weight: bold;
    font-size: 1.5rem;
  }
}

.button {
  margin: auto 1rem auto auto;
}
</style>
