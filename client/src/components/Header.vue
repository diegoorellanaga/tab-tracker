<template>
  <v-toolbar fixed dense class="cyan">
    <v-toolbar-title>
      TabTracker
    </v-toolbar-title>
<!--     <v-toolbar-items>
      <v-btn class="cyan" text>
        Browser
      </v-btn>
    </v-toolbar-items> -->
    <v-spacer></v-spacer>
    <v-toolbar-items>
      <v-btn class="cyan" text>
        <router-link to="register">Sign Up</router-link>
      </v-btn>
    </v-toolbar-items>
  </v-toolbar>
</template>
<script>
export default {
}
</script>
<!-- Add "scoped" attribute to limit CSS to this component only v-app-bar  -->
<style scoped>
</style>
