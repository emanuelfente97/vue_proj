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
//       Testimonials :[
//         { 
//         Name: "Godwin Dzaba",
//         title : "Head of Curriculum and Learning",
//         image:"https://i.postimg.cc/NfN9D8Nm/Godwin.jpg",
//         quate :'"Emanuel has a very gentle personality. He is always willing to learn new concepts. I am confident that he will continue to be productive and grow rapidly."',},


//         {
//         Name: "Jude Julius",
//         title : "Collegue",
//         image:"https://i.postimg.cc/Fs0jNCxv/Jude.jpg",
//         quate :'"Emanuel is such an excellent collegue and a hard worker. He always brings logic to the table. I recommend him to any company for his perserverance and hard work"'
//         },
//   {
//         Name: "Reese Abraham",
//         title : "Collegue",
//         image:"https://i.postimg.cc/J4tzQsG2/Reese.jpg",
//         quate :'"Emanuel Fente is very hard-working. He is always willing to assist in any way possible, and he works well with other people. I believe he will be an asset to any company."'
//         },
// {
//         Name: "Seth Kleynhans",
//         title : "Collegue",
//         image:"https://i.postimg.cc/v80WBxJq/Seth.jpg",
//         quate :'  "Emanuel has caring personality. He loves participating, when the teacher asks questions, he is always happy to answer with confidence. He will continue to improve rapidly."'
//         },
// {
//         Name : " Nande Bija",
//         title: "Collegue",
//         image: "https://i.postimg.cc/JzZxG4cs/Nande.jpg",
//         quate : '“Emanuel Fente works very well with other people, he respects other peoples time and is very punctual. I bealive that he will be a very discipled employee in the future"'
// },
// {
//         Name : "Siyabonga Mkosana",
//         title: "Collegue",
//         image: "https://i.postimg.cc/hPrxwzrb/Mkosana.jpg",
//         quate : '"Emanuel Fente has shown optimism for every task that the Academy has served his way, his workmanship shows high potential in a professional space. A very committed young man."'
// },
//       ]
//       }
//     }
// }
    };
  },
    mounted(){
    fetch('https://simthe.herokuapp.com/testimonials')
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

@media (max-height: 1024px) {
  .tour-desc {
    height: 500px;
  }
}
</style>
