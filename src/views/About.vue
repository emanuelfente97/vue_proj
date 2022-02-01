<template>
  <section class="section about-section gray-bg" id="about">
    <h3 class="title"><span id="title">About Me</span></h3>
    <div class="container">
      <div class="row align-items-center flex-row-reverse">
        <div class="col-lg-6">
          <div class="about-text go-to">
            <h6 style="color:red;font-size:25px">A learner at Life choices academy</h6>
            <p>
              I,
              <strong><span style="color: red"
                >Emanuel Fente,</span
              ></strong>
             am an aspiring  <strong><span style="color: red"
                >developer,</span
              ></strong>living in the Western Cape. I have a degree in  <strong><span style="color: red"
                >Mathematical and statistical science </span
              ></strong>from the University of the Western Cape.
            Currently, I'm enrolled at <strong><span style="color: red"
                >Life choices academy.</span
              ></strong> I choose this path because I do not envision the future with no developers. I enjoy working with people, learning new concepts 
            and I am content that I will be amongst the best developers in the future.

            </p>
            <div class="row about-list">
              <div class="col-md-6">
                <div class="media">
                  <label style="color: black">Birthday</label>
                  <p>6th March 1997</p>
                </div>
                <div class="media">
                  <label style="color: black">Phone</label>
                  <p>073 157 6799</p>
                </div>
              </div>
              <div class="col-lg-6">
                <div class="media">
                  <label style="color: black">E-mail</label>
                  <p>emanuelfente97@gmail.com</p>
                </div>

                <div class="media">
                  <label style="color: black">Address</label>
                  <p>Cape Town, South Africa</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div class="col-lg-6">
          <div class="about-pic">
            <img
              class="responsive profile"
              src="@/assets/About_pic.png"
              title=""
              alt=""
              style="width: 60%; height: 150%;"
            />
          </div>
        </div>
      </div>
    </div>
  </section>
</template>
<script></script>
<style scoped>
.section {
  padding: 60px;
}
.title {
  text-align: center;
  justify-content: center;
  position: relative;
  display: inline-block;

  border-bottom-width: 5px;
  font-size: 45px;
  width: 100%;
  height: 50px;
  margin: 0 0 6px;
  font-weight: 700;
}
h3 {
  padding-bottom: 30px;
}
#title {
  border-bottom: 3px solid red;
}
.about-text{
    padding-top:30px;
}
* {
  text-align: start;
}

@media (max-width: 767px) {
  .about-text h3 {
    font-size: 35px;
  }
}
.about-text h6 {
  font-weight: 600;
  margin-bottom: 15px;
}

@media (max-width: 767px) {
  .about-text h6 {
    font-size: 18px;
  }
}
.about-text p {
  font-size: 18px;
  max-width: 450px;
}
.about-text p mark {
  font-weight: 600;
  color: #20247b;
}

.about-list {
  padding-top: 10px;
}
.about-list .media {
  padding: 5px 0;
}
.about-list label {
  color: #20247b;
  font-weight: 600;
  width: 88px;
  margin: 0;
  position: relative;
}
.about-list label:after {
  content: "";
  position: absolute;
  top: 0;
  bottom: 0;
  right: 11px;
  width: 1px;
  height: 12px;
  background: #20247b;
  -moz-transform: rotate(15deg);
  -o-transform: rotate(15deg);
  -ms-transform: rotate(15deg);
  -webkit-transform: rotate(15deg);
  transform: rotate(15deg);
  margin: auto;
  opacity: 0.5;
}
.about-list p {
  margin: 0;
  font-size: 15px;
}

@media (max-width: 991px) {
  .about-pic {
    margin-top: 30px;
  }
}

.about-section .counter {
  padding: 22px 20px;
  background: #ffffff;
  border-radius: 10px;
  box-shadow: 0 0 30px rgba(31, 45, 61, 0.125);
}
.about-section .counter .count-data {
  margin-top: 10px;
  margin-bottom: 10px;
}
.about-section .counter .count {
  font-weight: 700;
  color: #20247b;
  margin: 0 0 5px;
}
.about-section .counter p {
  font-weight: 600;
  margin: 0;
}
mark {
  background-image: linear-gradient(
    rgba(252, 83, 86, 0.6),
    rgba(252, 83, 86, 0.6)
  );
  background-size: 100% 3px;
  background-repeat: no-repeat;
  background-position: 0 bottom;
  background-color: transparent;
  padding: 0;
  color: currentColor;
}
.theme-color {
  color: #fc5356;
}
.dark-color {
  color: #20247b;
}
</style>
