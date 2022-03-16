<template>
  <section style="padding-top: 50px" class="cards" id="cards">
    <div class="container">
    <p class="skl" style="font-size: 45px">
      <span id="skl"><strong>Projects:</strong> </span>
    </p>
    <div class="container projcont mx-auto">
      <div class="row d-flex justify-content-center row" v-if="projects">
        <div
          v-for="project in projects"
          :key="project.title"
          class="col-sm-12 col-md-6 col-lg-4 my-4"
        >
          <div
            class="card mx-auto shadow-lg"
            style="width: 100%; background-color: rgb(11, 12, 22)"
          >
           <div class=pic> <img
              :src="project.image"
              class="card-img-top"
              alt="Cards"
              style="height: 150px"
            />
           </div>
            <div class="card-body">
              <h1 class="card-title text-white">
                <strong>{{ project.title }}</strong>
              </h1>
              <p class="card-text text-white">{{ project.TechStack }}</p>
            </div>

            <div class="card-body">
              <a :href="project.github" target="_blank" class="card-link"
                ><i class="bi bi-github" style="height: 50px; width: 100px"></i
              ></a>
              <a :href="project.netlifyLink" target="_blank" class="card-link"
                ><img class="net-img" 
                  :src="project.netImg"
                  style="height: 20px; width: 20px"
                  alt=""
              /></a> 
            </div>
          </div>
        </div>
      </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      projects: null,
    };
  },
  mounted() {
    fetch("https://simthe.herokuapp.com/projects")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        this.projects = data;
      });
  },
};
</script>

<style scoped>


.crds {
  padding-bottom: 50px;
  padding-left: 8%;
}
#skl {
  border-bottom: 3px solid red;
}
.pic{
  width: 200px;
  height:1000px;
  object-fit: cover;
  margin-top:20px;
  margin-left:auto ;
  margin-right:auto ; 
}
.card{
   transition: transform .2s;
    height: 340px;
    width: 100px
}
.card:hover{
  -ms-transform: scale(0.5); 
  -webkit-transform: scale(0.5); 
  transform: scale(1.1); 
  height: 350px;
  width: 50px;
}

.net-img {
  border-radius: 50%;
  background-color:blue ;
}
</style>
