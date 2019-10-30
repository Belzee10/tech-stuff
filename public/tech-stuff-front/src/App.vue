<template>
  <fragment>
    <v-app>
      <navbar app-title="TechStuff" />
      <v-content>
        <v-container>
          <router-view></router-view>
        </v-container>
      </v-content>
      <Footer />
    </v-app>
  </fragment>
</template>

<script>
import Navbar from '@/components/Shared/Navbar';
import Footer from '@/components/Shared/Footer';

export default {
  name: 'App',
  components: { Navbar, Footer },
  data: () => ({
    //
  })
};
</script>
