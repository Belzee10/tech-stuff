<template>
  <v-container>
    <v-app-bar app color="primary" dark dense tile>
      <div class="mr-2">
        <v-img src="../../../assets/logo.png" height="30" width="30" contain />
      </div>
      <v-toolbar-title>{{ appTitle }}</v-toolbar-title>

      <v-spacer></v-spacer>
      <v-app-bar-nav-icon
        class="hidden-md-and-up"
        @click="toggleDraw"
      ></v-app-bar-nav-icon>
    </v-app-bar>
    <v-navigation-drawer v-model="showDraw" class="primary" dark right app>
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
  </v-container>
</template>

<script>
export default {
  name: 'Navbar',
  props: {
    appTitle: {
      type: String,
      default: ''
    }
  },
  data: () => ({
    showDraw: false,
    userOptions: []
  }),
  methods: {
    toggleDraw() {
      this.showDraw = !this.showDraw;
    }
  }
};
</script>

<style lang="scss" scoped></style>
