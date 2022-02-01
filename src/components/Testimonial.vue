<template>
  <section class="home-testimonial" id="Testimonials">
    <div class="container">
       <p class="skl" style="font-size: 45px">
        <span id="skl"><strong>My Skills:</strong> </span>
      </p>
      
      <div class="container testimonial-inner">
        <div class="row d-flex justify-content-center" style="row-gap: 20px">
          <div class="col-md-4">
            <div class="tour-item">
              <div class="tour-desc bg-white" style="height: 430px">
                <div class="tour-text color-grey-3 text-center">
                  “Emanuel has a very gentle personality. I am confident that he
                  will continue to be productive and always willing to learn new
                  concepts.”
                </div>
                <br />
                <div class="d-flex justify-content-center pt-2 pb-2">
                  <img class="tm-people" src="@/assets/Godwin.jpeg" alt="" />
                </div>
                <div class="link-name d-flex justify-content-center">
                  Godwin Dzapatswa
                </div>
                <div class="link-position d-flex justify-content-center">
                  Head of Curriculum and Learning
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="tour-item">
              <div class="tour-desc bg-white" style="height: 430px">
                <div class="tour-text color-grey-3 text-center">
                  "Emanuel is such an excellent collegue and a hard worker. He
                  always brings logic to the table. I recommend him to any
                  company for his perserverance and hard work"
                </div>
                <div class="d-flex justify-content-center pt-2 pb-2">
                  <img class="tm-people" src="@/assets/Jude.jpeg" alt="" />
                </div>
                <div class="link-name d-flex justify-content-center">
                  Jude Julius
                </div>
                <div class="link-position d-flex justify-content-center">
                  Collegue
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="tour-item">
              <div class="tour-desc bg-white" style="height: 430px">
                <div class="tour-text color-grey-3 text-center">
                  “Emanuel Fente is very hard-working. He is always willing to
                  assist in any way possible. I believe he will be an asset to
                  any company."
                </div>
                <br />
                <div class="d-flex justify-content-center pt-2 pb-2">
                  <img class="tm-people" src="@/assets/Reese.jpeg" alt="" />
                </div>
                <div class="link-name d-flex justify-content-center">
                  Reese Abraham
                </div>
                <div class="link-position d-flex justify-content-center">
                  Collegue
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="tour-item">
              <div class="tour-desc bg-white" style="height: 430px">
                <div class="tour-text color-grey-3 text-center">
                  "Emanuel has caring personality. He loves participating, when
                  the teacher asks questions, he is always happy to answer with
                  confidence. He will continue to improve rapidly."
                </div>
                <div class="d-flex justify-content-center pt-2 pb-2">
                  <img class="tm-people" src= "@/assets/Seth.jpeg" alt="" />
                </div>
                <div class="link-name d-flex justify-content-center">
                  Seth Kleynhans
                </div>
                <div class="link-position d-flex justify-content-center">
                  Collegue
                </div>
              </div>
            </div>
          </div>
          <div class="col-md-4">
            <div class="tour-item">
              <div class="tour-desc bg-white" style="height: 430px">
                <div class="tour-text color-grey-3 text-center">
                  “Emanuel Fente works very well with other people, he respects
                  other peoples's time and is very punctual. I bealive that he
                  will be a very discipled employee in the future"
                </div>
                <br />
                <div class="d-flex justify-content-center pt-2 pb-2">
                  <img class="tm-people" src="@/assets/Nande.jpeg" alt=" "/>
                </div>
                <div class="link-name d-flex justify-content-center">
                  Nande Bija
                </div>
                <div class="link-position d-flex justify-content-center">
                  Collegue
                </div>
              </div>
            </div>
          </div>
          <div class="col-sm-12 col-md-4">
            <div class="tour-item">
              <div class="tour-desc bg-white" style="height: 430px">
                <div class="tour-text color-grey-3 text-center">
                  "Emanuel Fente has shown optimism for every task that the
                  Academy has served his way, his workmanship shows high
                  potential in a professional space. A very committed young
                  man."
                </div>
                <div class="d-flex justify-content-center pt-2 pb-2">
                  <img class="tm-people" src="@/assets/Mkosana.jpeg" alt="" />
                </div>
                <div class="link-name d-flex justify-content-center">
                  Siyabonga Mkosana
                </div>
                <div class="link-position d-flex justify-content-center">
                  Collegue
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style>
.skl{
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
  width: 100%;
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
  height: 200%;
  row-gap: 20px;
}

.color-grey-3 {
  font-family: "Montserrat", Sans-serif;
  font-size: 14px;
  color: #6c83a2;
}

.testimonial-inner img.tm-people {
  width: 150px;
  height: 150px;
  -webkit-border-radius: 50%;
  border-radius: 50%;
  -o-object-fit: cover;
  object-fit: cover;
  max-width: none;
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
  
@media (max-width: 974px) {
  .tour-desc {
    height: 500px;
  }
}
</style>
