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
      <v-card-actions class="justify-end">
        <v-btn
          :color="confirmButton.color"
          small
          class="text-capitalize mr-1 confirm"
          @click="() => $emit('confirm')"
        >
          {{ confirmButton.label }}
        </v-btn>
        <v-btn
          :color="cancelButton.color"
          small
          class="text-capitalize cancel"
          @click="() => $emit('cancel')"
          >{{ cancelButton.label }}</v-btn
        >
      </v-card-actions>
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
    },
    confirmButton: {
      type: Object,
      default: () => ({
        color: '',
        label: ''
      })
    },
    cancelButton: {
      type: Object,
      default: () => ({
        color: '',
        label: ''
      })
    }
  }
};
</script>

<style lang="scss" scoped></style>
