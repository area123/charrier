<template lang="pug">
  section.hero.is-fullheight
    .hero-body
      .container.has-text-centered
        .column.is-4.is-offset-4
          .box
            form(method="post")
              h3.title.has-text-black 로그인
              .field
                .control
                  input.input.is-large.is-primary(placeholder="이메일을 입력해주세요")
              .field
                .control
                  input.input.is-large.is-primary(placeholder="비밀번호를 입력해주세요")
              button.button.is-primary.is-large.is-fullwidth.is-outlined 로그인
          p.has-text-primary
            router-link(to="/signup") 회원가입 &nbsp;·&nbsp;
            a 비밀번호 찾기
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {};
  },
});
</script>
