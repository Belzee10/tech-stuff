<template>
  <v-container>
    <v-row>
      <v-col cols="4" offset="4">
        <v-form ref="form" v-model="valid" class="mt-10" lazy-validation>
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
          <v-btn :disabled="!valid" color="secondary" block @click="submit">
            Sign in
          </v-btn>
        </v-form>
        <v-alert v-if="errorLogin" class="mt-5" type="error">
          An error ocurred
        </v-alert>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';

export default {
  name: 'SignIn',
  data: () => ({
    valid: true,
    email: '',
    emailRules: [
      v => !!v || 'E-mail is required',
      v => /.+@.+\..+/.test(v) || 'E-mail must be valid'
    ],
    password: '',
    passwordRules: [v => !!v || 'Last Name is required']
  }),
  computed: {
    ...mapGetters(['errorLogin'])
  },
  methods: {
    ...mapActions(['login']),
    submit() {
      if (this.$refs.form.validate()) {
        this.login({
          email: this.email,
          password: this.password
        }).then(() => this.$router.push({ name: 'home' }));
      }
    }
  }
};
</script>

<style lang="scss" scoped></style>
