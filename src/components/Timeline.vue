<template>
  <section id="Timeline">
    <div class="container">
      <p class="skl" style="font-size: 45px">
        <span id="skl"><strong>Resume </strong> </span>
      </p>
      <br />

      <div class="timeline">
        <div class="containerp left timeline-cont">
          <div class="contentq animate__animated animate__slideInLeft">
            <h2 style="color: black">2021</h2>
            <h3 style="color: black">Web Development</h3>
            <p style="color: black"><b>Life choices Academy</b></p>
            <p style="color: black"><strong>Learner</strong></p>
          </div>
        </div>
        <div class="containerp right timeline-cont">
          <div
            class="contentq animate__animated animate__slideInRight"
          >
            <h2 style="color: black">2021</h2>
            <h3 style="color: black">Customer Sales and Services Agent</h3>
            <p style="color: black"><b>Mind Pearl</b></p>
            <p style="color: black"><strong>Call center</strong></p>
          </div>
        </div>
        <div class="containerp left timeline-cont">
          <div class="contentq animate__animated animate__slideInLeft">
            <h2 style="color: black">2020</h2>
            <h3 style="color: black">
              BSc in Mathematical And Statistical Science
            </h3>
            <p style="color: black"><b>University Of the Western Cape</b></p>
            <p style="color: black"><strong>Undergraduate</strong></p>
          </div>
        </div>
        <div class="containerp right timeline-cont">
          <div class="contentq animate__animated animate__slideInRight">
            <h2 style="color: black">2020</h2>
            <h3 style="color: black">Mathematics Teacher Assistant</h3>
            <p style="color: black"><b>Daliwonga S.S.S</b></p>
            <p style="color: black"><strong>Teacher Assistant </strong></p>
          </div>
        </div>
        <div class="containerp left timeline-cont">
          <div class="contentq">
            <h2 style="color: black">2019</h2>
            <h3 style="color: black">Student Assistant</h3>
            <p style="color: black"><b>University Of The Western cape</b></p>
            <p style="color: black"><strong>Administration</strong></p>
            <!-- </div> -->
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {};
</script>

<style scoped>
#skl {
  border-bottom: 3px solid red;
  color: #2c3e50;
}
#Timeline {
  padding: 60px;
  background-color: #c9d0d3;
  color: #a3aab0;
  max-height: 100%;
  max-width: 100%;
  overflow-x: hidden;
}

/* The actual timeline (the vertical ruler) */
.timeline {
  position: relative;
  max-width: 1200px;
  margin: 0 auto;
}

/* The actual timeline (the vertical ruler) */
.timeline::after {
  content: "";
  position: absolute;
  width: 6px;
  background-color: white;
  top: 0;
  bottom: 0;
  left: 50%;
  margin-left: -3px;
}

/* Container around content */
.containerp {
  padding: 10px 40px;
  position: relative;
  background-color: inherit;
  width: 50%;
}

/* The circles on the timeline */
.containerp::after {
  content: "";
  position: absolute;
  width: 25px;
  height: 25px;
  right: -17px;
  background-color: white;
  border: 4px solid red;
  top: 15px;
  border-radius: 50%;
  z-index: 1;
}

/* Place the container to the left */
.left {
  left: 0;
}

/* Place the container to the right */
.right {
  left: 50%;
}

/* Add arrows to the left container (pointing right) */
.left::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  right: 30px;
  border: medium solid white;
  border-width: 10px 0 10px 10px;
  border-color: transparent transparent transparent white;
}

/* Add arrows to the right container (pointing left) */
.right::before {
  content: " ";
  height: 0;
  position: absolute;
  top: 22px;
  width: 0;
  z-index: 1;
  left: 30px;
  border: medium solid white;
  border-width: 10px 10px 10px 0;
  border-color: transparent white transparent transparent;
}

/* Fix the circle for containers on the right side */
.right::after {
  left: -16px;
}

/* The actual content */
.contentq {
  padding: 20px 30px;
  background-color: white;
  position: relative;
  border-radius: 6px;
  animation-name: slide-in-left;
  animation-iteration-count: 1;
  animation-duration: 1s;
}

/* Media queries - Responsive timeline on screens less than 600px wide */
@media screen and (max-width: 600px) {
  /* Place the timelime to the left */
  .timeline::after {
    left: 31px;
  }

  /* Full-width containers */
  .containerp {
    width: 100%;
    padding-left: 70px;
    padding-right: 25px;
  }

  /* Make sure that all arrows are pointing leftwards */
  .containerp::before {
    left: 60px;
    border: medium solid white;
    border-width: 10px 10px 10px 0;
    border-color: transparent white transparent transparent;
  }

  /* Make sure all circles are at the same spot */
  .left::after,
  .right::after {
    left: 15px;
  }

  /* Make all right containers behave like the left ones */
  .right {
    left: 0%;
  }
}
</style>
