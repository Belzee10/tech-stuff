<template>
  <fragment>
    <v-app>
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
    </v-app>
    <v-footer app> </v-footer>
  </fragment>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({
    //
  })
};
</script>
