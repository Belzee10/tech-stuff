<template>
  <fragment>
    <v-app-bar class="px-10" app color="primary" dark dense tile>
      <router-link to="/">
        <div class="mr-2 d-flex">
          <v-img
            to="home"
            src="../../../assets/logo.png"
            height="30"
            width="30"
            contain
          />
          <v-toolbar-title>{{ appTitle }}</v-toolbar-title>
        </div>
      </router-link>

      <v-spacer></v-spacer>
      <v-btn text small>Sign in</v-btn>
      <span class="ml-1 mr-2">or</span>
      <v-btn :to="{ name: 'register' }" class="ma-2" outlined small
        >Sign up</v-btn
      >
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
  </fragment>
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

<style lang="scss" scoped>
.v-toolbar__title {
  color: white;
}
</style>
