<template>
  <v-navigation-drawer permanent>
    <v-list-item>
      <v-list-item-content>
        <v-list-item-title class="title">
          {{ appTitle }}
        </v-list-item-title>
      </v-list-item-content>
    </v-list-item>

    <v-divider></v-divider>

    <v-list dense nav>
      <v-list-item v-for="item in userOptions" :key="item.title" link>
        <v-list-item-content>
          <v-list-item-title>{{ item.title }}</v-list-item-title>
        </v-list-item-content>
      </v-list-item>
    </v-list>
  </v-navigation-drawer>
</template>

<script>
export default {
  name: 'NavigationDraw',
  props: {
    userOptions: {
      type: Array,
      default: () => []
    },
    appTitle: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
