<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
import Nav from './components/Nav'
import Index from './views/Index'
import Login from './views/Login'

export default {
  name: 'app',
  components: {
    Nav,
    Index,
    Login
  }
}
</script>

<style>
*{
  margin: 0;
  padding: 0;
}

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
