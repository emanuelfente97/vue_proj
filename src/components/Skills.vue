<template>
  <section class="Skills-page" id="Skills">
    <div class="container">
      <p class="skl" style="font-size: 45px">
        <span id="skl"><strong>My Skills:</strong> </span>
      </p>
      <div class="skills">
        <div class="htmlProg ProgWidth">
          <div class="p">
            <p>html</p>
            <img
              class="img"
              src="https://img.icons8.com/color/48/000000/html-5--v1.png"
            />
            <p>95%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar htmlBar"></span>
            </div>
          </div>
        </div>
        <div class="cssProg ProgWidth">
          <div class="p">
            <p>Css</p>
            <img
              class="css-img"
              src="https://img.icons8.com/color/48/000000/css3.png"
            />
            <p>70%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar cssBar"></span>
            </div>
          </div>
        </div>
        <div class="jsProg ProgWidth">
          <div class="p">
            <p>JavaScript</p>
            <img
              class="img-js"
              src="https://img.icons8.com/color/48/000000/javascript--v1.png"
            />
            <p>75%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar jsBar"></span>
            </div>
          </div>
        </div>
        <div class="VueProg ProgWidth">
          <div class="p">
            <p>VueJs</p>
            <img
              class="img-vjs"
              src="https://img.icons8.com/windows/32/000000/vuejs.png"
            />
            <p>85%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar javaBar"></span>
            </div>
          </div>
        </div>
        <div class="mySqlProg ProgWidth">
          <div class="p">
            <p>mySQL</p>
            <img
              class="img-mysql"
              src="https://img.icons8.com/ios-filled/50/000000/database.png"
            />
            <p>80%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar ccpBar"></span>
            </div>
          </div>
        </div>
        <div class="RProg ProgWidth">
          <div class="p">
            <p>R-Programing</p>
            <img
              class="img-r"
              src="https://img.icons8.com/external-becris-lineal-color-becris/64/000000/external-r-data-science-becris-lineal-color-becris.png"
            />
            <p>70%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar reactBar"></span>
            </div>
          </div>
        </div>
        <div class="SASProg ProgWidth">
          <div class="p">
            <p>SAS</p>
            <img class="img-r" src="@/assets/SAS.png" />
            <p>35%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar nodeBar"></span>
            </div>
          </div>
        </div>
        <div class="LtxProg ProgWidth">
          <div class="p">
            <p>Latex</p>
            <img
              class="ltx-img"
              src="https://img.icons8.com/color/48/000000/latex.png"
            />
            <p>85%</p>
          </div>
          <div class="pp">
            <div class="skillDiv">
              <span class="skillBar sqlBar"></span>
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

<style scoped>
html {
  font-family: sans-serif;
  color: white;
}

body {
  background: #0e1425;
  margin: 0;
}
.Skills-page {
  /* padding-bottom:50px; */
  padding-top: 50px;
}
.skills {
  display: grid;
  grid-gap: 5px;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, 70px);
  margin: 20px;
}
#skl {
  border-bottom: 3px solid red;
  color: #2c3e50;
}
.htmlProg{
  margin-right: 10px;
}
.jsProg {
  margin-right:10px;
}
.cssProg{
  margin-left: 10px;
}
.mySqlProg {

margin-right:10px;
}
.SASProg {
  margin-right: 10px;
}
.RProg{
  margin-left:10px;
}
.VueProg{
  margin-left:10px;
}
.LtxProg {
  margin-left:10px;
}
.skillDiv {
  height: 15px;
  width: 100%;
  background-color: gray;
}
.skillBar {
  display: block;
  height: 15px;
  background-color: rgb(231, 10, 10);
}
.img {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.css-img {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.img-js {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.img-vjs {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.img-mysql {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.img-r {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.img-Sas {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.ltx-img {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.p {
  display: flex;
  justify-content: space-between;
}

.htmlBar {
  width: 70%;
  animation: html 3s 1s 5 forwards;
}
.cssBar {
  width: 70%;
  animation: css 3s 1s 5 forwards;
}
.jsBar {
  width: 75%;
  animation: js 3s 1s 5 forwards;
}

.javaBar {
  width: 85%;
  animation: java 3s 1s 5 forwards;
}
.ccpBar {
  width: 80%;
  animation: ccp 3s 1s 5 forwards;
}
.reactBar {
  width: 10%;
  animation: react 3s 1s 5 forwards;
}
.nodeBar {
  width: 35%;
  animation: node 3s 1s 5 forwards;
}
.sqlBar {
  width: 85%;
  animation: sql 3s 1s 5 forwards;
}

@keyframes html {
  0% {
    width: 0%;
  }
  100% {
    width: 95%;
  }
}
@keyframes css {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}
@keyframes js {
  0% {
    width: 0%;
  }
  100% {
    width: 75%;
  }
}
@keyframes java {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}
@keyframes ccp {
  0% {
    width: 0%;
  }
  100% {
    width: 80%;
  }
}
@keyframes react {
  0% {
    width: 0%;
  }
  100% {
    width: 70%;
  }
}
@keyframes node {
  0% {
    width: 0%;
  }
  100% {
    width: 35%;
  }
}

@keyframes sql {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}
</style>
