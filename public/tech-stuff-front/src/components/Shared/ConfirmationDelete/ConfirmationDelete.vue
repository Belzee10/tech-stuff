<template>
  <div>
    <p>{{ message }}</p>
    <div class="d-flex justify-end">
      <v-btn
        color="error"
        small
        class="text-capitalize mr-1 confirm-delete"
        @click="() => $emit('confirm-delete')"
      >
        Delete
      </v-btn>
      <v-btn
        small
        class="text-capitalize confirm-cancel"
        @click="() => $emit('confirm-cancel')"
        >Cancel</v-btn
      >
    </div>
  </div>
</template>

<script>
export default {
  name: 'ConfirmationDelete',
  props: {
    message: {
      type: String,
      default: ''
    }
  }
};
</script>

<style lang="scss" scoped></style>
