<template>
<Home />
<About/>
<Skills />
<Timeline />
<projects />
<Testimonial />
<Contact />

<Footer />

</template>
<script>
import Home from "./views/Home.vue"
import About from "@/views/About.vue"
import Skills from "@/components/Skills.vue"
import Timeline from "@/components/Timeline.vue"
import Contact from "@/components/Contact.vue"
import projects from '@/components/projects.vue'
import Testimonial from '@/components/Testimonial.vue'
import Footer from "@/components/Footer.vue"

// import footer from './components/footer.vue'





export default {
  components: {
     Home,
    Contact,
    About,
    Home,
    Skills,
    Timeline,
    projects,
    Testimonial,
    Footer,
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
