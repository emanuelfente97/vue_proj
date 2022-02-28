<template>
  <section class="Skills-page" id="Skills">
    <div class="container">
      <div class="container mb-5">
        <div class="row">
          <p class="skl" style="font-size: 45px">
            <span id="skl"><strong>My Skills:</strong> </span>
          </p>
          <div class="col-lg-6 col-sm-12">
            <div class="htmlProg ProgWidth">
              <div class="p">
                <p>html</p>
                <img
                  class="img"
                  src="https://img.icons8.com/color/48/000000/html-5--v1.png"
                />
                <p>65%</p>
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
                <p>60%</p>
              </div>
              <div class="pp">
                <div class="skillDiv">
                  <span class="skillBar cssBar"></span>
                </div>
              </div>
            </div>

            <div class="NodeProg ProgWidth">
              <div class="p">
                <p>Node Js</p>
                <img
                  class="node-img"
                  src="https://iconape.com/wp-content/files/fe/83764/png/nodejs-1.png"
                />
                <p>50%</p>
              </div>
              <div class="pp">
                <div class="skillDiv">
                  <span class="skillBar NodeBar"></span>
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
                <p>50%</p>
              </div>
              <div class="pp">
                <div class="skillDiv">
                  <span class="skillBar jsBar"></span>
                </div>
              </div>
            </div>
            <div class="vueProg ProgWidth">
              <div class="p">
                <p>Vue</p>
                <img
                  class="img-vjs"
                  src="https://img.icons8.com/windows/32/000000/vuejs.png"
                />
                <p>85%</p>
              </div>
              <div class="pp">
                <div class="skillDiv">
                  <span class="skillBar vueBar"></span>
                </div>
              </div>
            </div>
          </div>
          <div class="col-lg-6 col-sm-12">
            <div class="SqlProg ProgWidth">
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
                  <span class="skillBar sqlBar"></span>
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
                  <span class="skillBar RBar"></span>
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
                  <span class="skillBar SASBar"></span>
                </div>
              </div>
            </div>
            <div class="bootsrapProg ProgWidth">
              <div class="p">
                <p>Bootstrap</p>
                <img
                  class="img-bootstrap"
                  src="https://cdn-icons-png.flaticon.com/512/5968/5968672.png"
                />
                <p>35%</p>
              </div>
              <div class="pp">
                <div class="skillDiv">
                  <span class="skillBar bootstrapBar"></span>
                </div>
              </div>
            </div>
            <div class="LatexProg ProgWidth">
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

.skillDiv {
  height: 15px;
  width: 100%;
  background-color: gray;
}
.skillBar {
  display: block;
  height: 15px;
  background-color: rgb(238, 20, 20);
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
.node-img {
  height: 50px;
  width: 50px;
  margin-right: auto;
  margin-left: auto;
}
.img-bootstrap {
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
  width: 65%;
  animation: html 3s 1s 5 forwards;
}
.cssBar {
  width: 60%;
  animation: css 3s 1s 5 forwards;
}
.NodeBar {
  width: 55%;
  animation: css 3s 1s 5 forwards;
}
.jsBar {
  width: 50%;
  animation: js 3s 1s 5 forwards;
}
.vueBar {
  width: 45%;
  animation: vue 3s 1s 5 forwards;
}
.SASBar {
  width: 45%;
  animation: SAS 3s 1s 5 forwards;
}
.LatexBar {
  width: 50%;
  animation: ccp 3s 1s 5 forwards;
}

.nodeBar {
  width: 35%;
  animation: node 3s 1s 5 forwards;
}
.bootstrapBar {
  width: 85%;
  animation: node 3s 1s 5 forwards;
}
.sqlBar {
  width: 85%;
  animation: sql 3s 1s 5 forwards;
}
.RBar {
  width: 85%;
  animation: R 3s 1s 5 forwards;
}

@keyframes html {
  0% {
    width: 0%;
  }
  100% {
    width: 65%;
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
@keyframes bootstrap {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}
@keyframes SAS {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}
@keyframes R {
  0% {
    width: 0%;
  }
  100% {
    width: 50%;
  }
}
@keyframes Latex {
  0% {
    width: 0%;
  }
  100% {
    width: 85%;
  }
}
@keyframes vue {
  0% {
    width: 0%;
  }
  100% {
    width: 45%;
  }
}
</style>
