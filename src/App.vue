<template>
<Navbar />
<About/>
<Skills />
<Timeline />
<projects />
<Testimonial />

<Contact />
<Home />
<footer />

</template>
<script>
import Navbar from "./components/Navbar.vue"
import About from "./views/About.vue"
import Skills from "./components/Skills.vue"
import Timeline from "./components/Timeline.vue"
import Contact from "./components/Contact.vue"
import projects from './components/projects.vue'
import Testimonial from './components/Testimonial.vue'
import Home from "./views/Home.vue"

import footer from './components/footer.vue'





export default {
  components: {
     Navbar,
    Contact,
    About,
    Home,
    Skills,
    Timeline,
    projects,
    Testimonial,
    footer,
  }
}

</script>
<style>
/* #body{
  overflow-x: hidden;
  overflow-y: hidden;
} */
#app {
  font-family: "Montserrat",sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  
}

#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
