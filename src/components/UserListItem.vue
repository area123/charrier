<template lang="pug">
  .column
    .card
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(src="https://fakeimg.pl/48x48")
          .media-content
            p.title.is-4 {{ user }}
            p.subtitle.is-6 {{ message }}
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  props: ["message"],
  computed: {
    user: function() {
      // @ts-ignore
      return this.$store.state.user.id.email;
    }
  }
});
</script>

<style lang="scss" scoped>
.column {
  padding: 0;
}
</style>
