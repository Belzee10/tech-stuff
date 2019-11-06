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
      <div class="hidden-md-and-down">
        <v-menu v-if="user" offset-y>
          <template v-slot:activator="{ on }">
            <v-btn text class="btn-user text-lowercase" v-on="on">
              {{ user.email }}
            </v-btn>
          </template>

          <v-list class="user-options">
            <v-list-item
              v-for="(item, index) in getUserOptions"
              :key="index"
              @click="() => goTo(item.link)"
            >
              <v-list-item-title>{{ item.title }}</v-list-item-title>
            </v-list-item>
            <v-divider></v-divider>
            <v-list-item class="logout" @click="handleLogout">
              <v-list-item-title>Logout</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-menu>
        <div v-else>
          <v-btn text small :to="{ name: 'login' }">Sign in</v-btn>
          <span class="ml-1 mr-2">or</span>
          <v-btn :to="{ name: 'register' }" class="ma-2" outlined small
            >Sign up</v-btn
          >
        </div>
      </div>
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

      <v-list v-if="user" dense nav>
        <v-list-item v-for="(item, index) in getUserOptions" :key="index" link>
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-divider></v-divider>
        <v-list-item class="logout" @click="handleLogout">
          <v-list-item-title>Logout</v-list-item-title>
        </v-list-item>
      </v-list>
      <v-list v-else dense nav>
        <v-list-item link :to="{ name: 'login' }">
          <v-list-item-content>
            <v-list-item-title>Sign in</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item link :to="{ name: 'register' }">
          <v-list-item-content>
            <v-list-item-title>Sign up</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>
  </fragment>
</template>

<script>
import { mapGetters, mapActions } from 'vuex';

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
    userOptions: [
      {
        title: 'My Orders',
        onlyAdmin: false,
        link: ''
      },
      {
        title: 'Manage Orders',
        onlyAdmin: true,
        link: ''
      },
      {
        title: 'Manage Categories',
        onlyAdmin: true,
        link: ''
      },
      {
        title: 'Manage Products',
        onlyAdmin: true,
        link: ''
      },
      {
        title: 'Manage Users',
        onlyAdmin: true,
        link: ''
      }
    ]
  }),
  computed: {
    ...mapGetters(['user']),
    getUserOptions() {
      return this.user.role === 'member'
        ? this.userOptions.filter(item => !item.onlyAdmin)
        : this.userOptions;
    }
  },
  methods: {
    ...mapActions(['logout']),
    toggleDraw() {
      this.showDraw = !this.showDraw;
    },
    goTo(link) {
      this.$router.push({ name: link });
    },
    handleLogout() {
      this.logout().then(() =>
        this.$router.push({ name: 'home' }).catch(() => {})
      );
    }
  }
};
</script>

<style lang="scss" scoped>
.v-toolbar__title {
  color: white;
}
</style>
