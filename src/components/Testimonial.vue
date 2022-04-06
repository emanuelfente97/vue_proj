<template>
  <section class="home-testimonial" id="Testimonials">
    <div class ="container">
    <!-- <div class="container"> -->
      <p class="skl" style="font-size: 45px">
        <span id="skl"><strong>Testimonials:</strong> </span>
      </p>

      <div class="container testimonial-inner" v-if="Testimonials">
        <div 
        class="row d-flex justify-content-center" style="row-gap: 20px">
          <div 
          v-for=" Testimonial in Testimonials"
          :key="Testimonial.title" 
          class=" col-sm-12 col-md-4">
            <div class="tour-item">
              <div class="tour-desc bg-white" style="height: 430px">
                <div class="tour-text color-grey-3 text-center">
                  {{Testimonial.quate}}
                </div>
                <br />
                <div class="d-flex justify-content-center pt-2 pb-2">
                  <img class="tm-people" :src= "Testimonial.image" alt="" />
                </div>
                <div class="link-name d-flex justify-content-center">
                  {{Testimonial.Name}}
                </div>
                <div class="link-position d-flex justify-content-center">{{Testimonial.title}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      </div>
    <!-- </div> -->
  </section>
</template>

<script>
export default {
  data () {
    return {
      Testimonials: null

    };
  },
    mounted(){
    fetch('https://fentes-project.herokuapp.com/testimonials')
    .then(res => res.json())
    .then(data => {
      console.log(data)
      this.Testimonials =data
    })
  }
}
</script>

<style scoped>
#skl {
  border-bottom: 3px solid red;
  color: #2c3e50;
}
.card-text {
  color: #ffffff;
}
.card-title {
  color: #ffffff;
}
.card {
  border-radius: 15px;
  border-bottom-width: 50px;
  border: purple;
}

.card-img-top {
  border-radius: 15px;
}
.home-testimonial {
  height: max-content;
  z-index: 93889729695634892684608;
  padding-bottom: 50px;
  background-color: #c9d0d3;
}

.testimonial-inner {
  position: relative;
  padding-top: 50px;
}

.testimonial-pos {
  position: relative;
  top: 24px;
}

.testimonial-inner .tour-desc {
  border-radius: 5px;
  padding: 40px;
}
.tour-item {
  row-gap: 20px;
}

.color-grey-3 {
  font-family: "Montserrat", Sans-serif;
  font-size: 14px;
  color: #6c83a2;
}
.home-testimonial[data-v-71d609c2] {
  padding-top: 60px;
}
.testimonial-inner img.tm-people {
  width: 150px;
  height: 150px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  border: 10px solid red;
  -o-object-fit: cover;
  object-fit: cover;
  max-width: none;
;    
}

.link-name {
  font-family: "Montserrat", Sans-serif;
  font-size: 14px;
  color: #6c83a2;
}

.link-position {
  font-family: "Montserrat", Sans-serif;
  font-size: 12px;
  color: #6c83a2;
}

@media screen and (max-width: 768px) {
.tour-desc {height: 560px !important;}

}
</style>
