<template>
  <v-container>
    <v-row>
      <v-col cols="4" offset="4">
        <v-form ref="form" v-model="valid" class="mt-10" lazy-validation>
          <v-text-field
            v-model="name"
            class="name"
            :rules="nameRules"
            label="Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="lastName"
            class="last-name"
            :rules="lastNameRules"
            label="Last Name"
            required
          ></v-text-field>
          <v-text-field
            v-model="email"
            class="email"
            :rules="emailRules"
            label="E-mail"
            required
          ></v-text-field>
          <v-text-field
            v-model="password"
            class="password"
            :rules="passwordRules"
            type="password"
            label="Password"
            required
          ></v-text-field>
          <v-btn :disabled="!valid" color="primary" block @click="submit">
            Sign up
          </v-btn>
        </v-form>
        <v-alert v-if="errorRegister" class="mt-5" type="error">
          An error ocurred
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignUp',
  data: () => ({
    valid: true,
    name: '',
    nameRules: [v => !!v || 'Name is required'],
    lastName: '',
    lastNameRules: [v => !!v || 'Last Name is required'],
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [v => !!v || 'Last Name is required'],
    error: false
  }),
  computed: {
    ...mapGetters(['errorRegister'])
  },
  methods: {
    ...mapActions(['register']),
    submit() {
      if (this.$refs.form.validate()) {
        this.register({
          name: this.name,
          lastName: this.lastName,
          email: this.email,
          password: this.password,
          role: 'member'
        }).then(() => this.$router.push({ name: 'home' }));
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
