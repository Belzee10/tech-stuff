<template>
  <v-form ref="form" v-model="valid">
    <v-container>
      <v-row>
        <v-col cols="12">
          <v-text-field
            v-model="value.name"
            class="name"
            label="Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="value.lastName"
            class="last-name"
            label="Last Name"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="value.email"
            class="email"
            label="Email"
            type="email"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-text-field
            v-model="value.password"
            class="password"
            label="Password"
            type="password"
          ></v-text-field>
        </v-col>
        <v-col cols="12">
          <v-select
            v-model="value.role"
            class="role"
            :items="['member', 'admin']"
            label="Role"
          ></v-select>
        </v-col>
        <v-col cols="12" class="d-flex justify-end">
          <v-btn
            :disabled="!valid"
            small
            class="submit text-capitalize primary"
            @click="submit"
            >Submit</v-btn
          >
          <v-btn small class="cancel text-capitalize ml-2" @click="cancel"
            >Cancel</v-btn
          >
        </v-col>
      </v-row>
    </v-container>
  </v-form>
</template>

<script>
export default {
  name: 'UserForm',
  props: {
    isEditable: {
      type: Boolean,
      default: false
    },
    populateWith: {
      type: Object,
      default: () => null
    }
  },
  data: () => ({
    valid: true,
    value: {
      name: '',
      lastName: '',
      email: '',
      password: '',
      role: ''
    }
  }),
  methods: {
    submit() {
      if (this.$refs.form.validate()) this.$emit('submit', this.value);
    },
    cancel() {
      this.$emit('cancel');
    }
  }
};
</script>

<style lang="scss" scoped></style>
