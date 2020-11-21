<template lang="pug">
  div(v-if='loading')
    Nav
    .columns
      aside.column.is-12
        .columns.is-block
          template(v-for="message in messages")
            UserListItem(:message="message")
</template>

<script>
import UserListItem from "@/components/UserListItem";
import Nav from "@/components/Nav";
import MessageListItem from "@/components/MessageListItem";

export default {
  computed: {
    loading: function() {
      return this.$store.state.chatting.isLoading;
    },
    messages: function() {
      return this.$store.state.chatting.message;
    }
  },
  name: "Chatting",
  components: { Nav, UserListItem, MessageListItem },
  created() {
    this.$store.dispatch("chatting/list");
  }
};
</script>

<style lang="scss" scoped>

</style>
