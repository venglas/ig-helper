<template>
  <v-container class="app">
        <v-navigation-drawer
          :permanent="true"
          :expand-on-hover="true"
          absolute
          dark
        >
          <v-list
            dense
            nav
            class="py-0"
          >
            <v-list-item two-line>
              <v-icon>mdi-instagram</v-icon>
  
              <v-list-item-content class="space-item">
                <v-list-item-title>Instagram Helper Tool</v-list-item-title>
                <v-list-item-subtitle>Easly get a lot of followers</v-list-item-subtitle>
              </v-list-item-content>
            </v-list-item>
  
            <v-divider></v-divider>
  
            <v-list-item
              v-for="route in $router.options.routes"
              :key="route.name"
              link
            >
              <v-list-item-icon>
                <v-icon>{{ route.menuIcon }}</v-icon>
              </v-list-item-icon>
  
              <v-list-item-content class="space-item" @click="$router.push(route.path)">
                <v-list-item-title>{{ route.name }}</v-list-item-title>
              </v-list-item-content>
            </v-list-item>
          </v-list>
        </v-navigation-drawer>
        
        <transition name="slide-x-transition">
          <router-view style="margin-left: 56px; position: absolute"/>
        </transition>
  </v-container>
</template>

<script>
export default {
  name: 'App',
  components: {},
  data: () => ({}),
  created(){console.log(this.$router)}
};
</script>

<style lang="scss" scoped>
  .app {
    min-width: 450px;
    min-height: 400px;
    .space-item {
      margin: 0 .5rem;
    }
  }
</style>