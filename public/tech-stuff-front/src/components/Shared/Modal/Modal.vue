<template>
  <v-dialog v-model="isOpen" persistent width="500">
    <v-card>
      <v-card-title class="headline title" primary-title>
        {{ title }}
      </v-card-title>
      <v-divider></v-divider>
      <v-card-text class="pa-4">
        <slot></slot>
      </v-card-text>
    </v-card>
  </v-dialog>
</template>

<script>
export default {
  name: 'Modal',
  props: {
    isOpen: {
      type: Boolean,
      default: false
    },
    title: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
