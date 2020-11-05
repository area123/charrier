<template lang="pug">
  .column
    .card
      .card-content
        .media
          template(v-if="writer")
            .media-content
              p.title.has-text-right 메세지
            .media-right
            figure.image.is-48x48
              img(src="https://fakeimg.pl/48x48")
          template(v-else)
            .media-left
              figure.image.is-48x48
                img(src="https://fakeimg.pl/48x48")
            .media-content
              p.title 메세지

</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      user_id: '유저 아이디',
    };
  },
  props: ['writer'],
});
</script>

<style lang="scss" scoped>
.column {
  padding: 0;
}
</style>
