<template>
  <nav>
    <router-link to="/">Tareas</router-link> |
    <router-link to="/agregar">Agregar nueva tarea</router-link>
  </nav>
  <router-view/>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
  background-color: #213555;
  margin-bottom: 24px;
}

nav a {
  font-weight: bold;
  color: white;
  text-decoration: none;
  padding: 20px;
}

nav a.router-link-exact-active {
  color: #FED049;
  border-bottom: 2px solid #FED049;
}
body{
  margin: 0px;
}
</style>
