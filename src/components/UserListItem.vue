<template lang="pug">
  .column
    .card
      .card-content
        .media
          .media-left
            figure.image.is-48x48
              img(src="https://fakeimg.pl/48x48")
          .media-content
            p.title.is-4 유저 아이디
            p.subtitle.is-6 마지막 대사
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      user_id: '유저 아이디',
    };
  },
});
</script>

<style lang="scss" scoped>
.column {
  padding: 0;
}
</style>
