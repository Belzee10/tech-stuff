<template>
  <fragment>
    <v-app>
      <navbar />
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
import Navbar from '@/components/Shared/Navbar';

export default {
  name: 'App',
  components: { Navbar },
  data: () => ({
    //
  })
};
</script>
