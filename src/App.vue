<template>
  <div class="main">
    <v-tabs
      bg-color="primary"
      class="v-tabs"
    >
      <div class="router-link" @click="redirectTo">
        <v-tab value="one">Register Form</v-tab>
      </div>
      <router-link to="/posts" class="router-link">
        <v-tab value="two">Posts</v-tab>
      </router-link>
      <router-link  :to="{name: 'hello', params: {id: 5}}" class="router-link">
        <v-tab value="three">Hello World</v-tab>
      </router-link>
      <router-link to="/admin-page" class="router-link">
        <v-tab value="four">Admin Panel</v-tab>
      </router-link>
      <v-tab @click="logout" style="margin-left: auto;">Logout</v-tab>
    </v-tabs>
    <!-- 3 Налаштуйте вкладені маршрути і виведіть дочірній компонент в батьківському компоненті. -->
    <RouterView />
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import Posts from './components/Posts.vue'
import Form from './components/Form.vue'

export default {
  name: 'App',
  components: {
    HelloWorld,
    Posts,
    Form,
  },
  methods: {
    redirectTo() {
      // 4 Реалізуйте програмне перенаправлення між маршрутами за допомогою this.$router.push.
      this.$router.push('/')
    },
    logout() {
      localStorage.removeItem('authToken')
      localStorage.removeItem('adminToken')

    }
  }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
.main {
  width: 1200px;
  margin: 0 auto;
}
.v-tabs {
  width: 900px;
  margin: 0 auto 30px;
}

.router-link {
  color: white;
}
</style>
