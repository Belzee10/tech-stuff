<template>
  <fragment>
    <h4 class="title">Manage Users</h4>
    <user-list />
  </fragment>
</template>

<script>
import UserList from '@/components/Users/UserList';

export default {
  name: 'Users',
  components: { UserList }
};
</script>

<style lang="scss" scoped></style>
