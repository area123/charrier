<template lang="pug">
  div
    Nav
    .columns
      aside.column.is-3
        .columns.is-block
          UserListItem(v-for="n in 20")
      aside.column.is-9
        .columns.is-block
          MessageListItem(v-for="n in 10" v-bind:writer="true")
</template>

<script>
import UserListItem from '@/components/UserListItem';
import Nav from '@/components/Nav';
import MessageListItem from '@/components/MessageListItem';

export default {
  name: 'Chatting',
  components: { Nav, UserListItem, MessageListItem },
};
</script>

<style lang="scss" scoped>

</style>
