<template>
  <v-dialog v-model="isOpen" persistent width="500">
    <v-card>
      <v-card-title class="headline grey lighten-2 title" primary-title>
        {{ title }}
      </v-card-title>
      <v-card-text>
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
