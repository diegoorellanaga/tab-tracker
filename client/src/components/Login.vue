<template>
  <!-- <v-app> -->
  <v-container>
    <v-layout text-xs-center wrap>
      <v-flex xs12>
      <div class="white elevation-4">
        <v-app-bar blue dense color="blue" primary class="cyan" dark>
          <v-toolbar-title>Login</v-toolbar-title>
        </v-app-bar>
        <div class="pl-4 pr-4 pt-2 pb-2">
          <v-row justify='space-around'>
          <v-col cols="6" sm="6" md="3" align="center">
         <v-text-field
        type="email"
        name="email"
        v-model="email"
        placeholder="email">
         </v-text-field>
        </v-col>
      </v-row>
      <v-row justify='space-around'>
        <v-col cols="6" sm="6" md="3">
        <v-text-field
        type="password"
        name="password"
        v-model="password"
        placeholder="password">
        </v-text-field>
        </v-col>
        </v-row>
        <div class="error" v-html="error"/>
        <br>
        <v-btn
        small
        class="cyan"
        @click="login">
        Login
        </v-btn>
        </div>
        </div>
      </v-flex>
    </v-layout>
  </v-container>
<!-- </v-app> -->
</template>

<script>
import AuthenticationService from '@/services/AuthenticationService'
export default {
  name: 'Login',
  data () {
    return {
      email: '',
      password: '',
      error: null
    }
  },
  watch: {
    email (value) {
      console.log('email has changed', value)
    }
  },
  methods: {
    async login () {
      try {
        await AuthenticationService.login({
          email: this.email,
          password: this.password
        })
      } catch (error) {
        this.error = error.response.data.error
      }
    }
  }
}

</script>
<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.error{
  color: red;
}
</style>
