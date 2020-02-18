<template>
  <v-toolbar fixed dense class="cyan">
    <v-toolbar-title>
      <span class="home" @click="navigateTo({name: 'root'})">
      TabTracker
      </span>
    </v-toolbar-title>
<!--     <v-toolbar-items>
      <v-btn class="cyan" text>
        Browser
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn @click="navigateTo({name: 'login'})" class="cyan" text>
        Login
      </v-btn>
      <v-btn @click="navigateTo({name: 'register'})" class="cyan" text>
        Sign Up
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
  methods: {
    navigateTo (route) {
      this.$router.push(route)
    }
  }
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only v-app-bar  -->
<style scoped>
.home{
  cursor:pointer;
}
.home:hover{
  color:#E9E;
}
</style>
