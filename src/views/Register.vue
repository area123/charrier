<template lang="pug">
  section.hero.is-fullheight
    .hero-body
      .container.has-text-centered
        .column.is-8.is-offset-2
          .box
            form(v-on:submit.prevent="onSubmit")
              h3.title.has-text-black.has-text-centered 회원가입
              .field.is-horizontal
                .field-label.is-normal
                  label.label 이메일
                .field-body
                  .field.has-addons
                    p.control.is-expanded
                      input.input.is-primary(v-model="email" type="email" placeholder="아이디" required)
                    .control
                      button.button.is-primary.is-outlined() 아이디 확인
              .field.is-horizontal
                .field-label.is-normal
                  label.label 비밀번호
                .field-body
                  .field
                    p.control
                      input.input.is-primary(v-model="password" type="password" placeholder="비밀번호" required)
              .field.is-horizontal
                .field-label.is-normal
                  label.label 이름
                .field-body
                  .field
                    p.control
                      input.input.is-primary(v-model="name" type="text" placeholder="이름")
              .field.is-horizontal
                .field-label.is-normal
                  label.label 썸네일
                .field-body
                  .file
                    label.file-label
                      input.file-input(type="file", ref="file" @change="onChange")
                      span.file-cta
                        span.file-icon
                          font-awesome-icon(icon="file-upload")
                        span.file-label 썸네일을 골라주세요.
                      span.file-name {{ file_text }}
              .field.is-horizontal
                .field-label.is-normal
                  label.label
                .field-body
                  .field
                    button.button.is-primary.is-fullwidth.is-outlined(type="submit") 회원가입
</template>

<script lang="ts">
import Vue from 'vue';

export default Vue.extend({
  data() {
    return {
      email: '',
      password: '',
      name: '',
      file_text: '아바타를 업로드 하지 않았습니다.',
    };
  },
  methods: {
    onSubmit() {
      const data: FormData = new FormData();
      data.append('email', this.email);
      data.append('password', this.password);
      data.append('name', this.name);
      data.append('avatar', this.$refs.file.files[0]);
      this.$store.dispatch('user/register', data);
    },
    onChange() {
      this.file_text = this.$refs.file.files[0].name;
    },
  },
});
</script>

<style scoped lang="scss">
.temp {
  flex-grow: 1;
  flex-shrink: 0;
  box-sizing: inherit;
}
</style>
