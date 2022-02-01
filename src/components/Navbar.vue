<template>
    <section class="header" id="navbar">
      <nav class="navbar navbar-expand-lg fixed-top" >
        <div class="container-fluid">
          <a class="navbar-brand" href="#navbar" data-aos="fade-up"
            ><strong><span style="color: red; font-size: 25px">E</span>manuel<span
              style="color: red; font-size: 25px; padding-left: 5px"
            >
              F</span
            >ente</strong></a
          >
          <button
            class="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              x="0px"
              y="0px"
              width="24"
              height="24"
              viewBox="0 0 172 172"
              style="fill: #000000"
            >
              <g
                fill="none"
                fill-rule="nonzero"
                stroke="none"
                stroke-width="1"
                stroke-linecap="butt"
                stroke-linejoin="miter"
                stroke-miterlimit="10"
                stroke-dasharray=""
                stroke-dashoffset="0"
                font-family="none"
                font-weight="none"
                font-size="none"
                text-anchor="none"
                style="mix-blend-mode: normal"
              >
                <path d="M0,172v-172h172v172z" fill="none"></path>
                <g fill="#ffffff">
                  <path
                    d="M14.33333,35.83333v14.33333h143.33333v-14.33333zM14.33333,78.83333v14.33333h143.33333v-14.33333zM14.33333,121.83333v14.33333h143.33333v-14.33333z"
                  ></path>
                </g>
              </g>
            </svg>
          </button>
          <div class="collapse navbar-collapse" id="navbarSupportedContent">
            <ul class="navbar-nav mx-auto">
              <li class="nav-item">
                <a class="nav-link" aria-current="page" href="#navbar"
                  ><i class="fa fa-fw fa-home"></i>Home</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#about"
                  ><i class="fa fa-user"></i> About</a
                >
              </li>
                  <li class="nav-item">
                <a class="nav-link" href="#Skills"
                  ><i class="fa fa-user"></i> Skills</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Timeline"
                  ><i class="bi bi-pencil-square"></i> Resume</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#cards"
                  ><i class="bi bi-file-earmark-code-fill"></i> Projects</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#Testimonials"
                  ><i class="bi bi-people-fill"></i> Testimonials</a
                >
              </li>
              <li class="nav-item">
                <a class="nav-link" href="#contact"
                  ><i class="fa fa-fw fa-envelope"></i>Contacts</a
                >
              </li>
            </ul>
          </div>
        </div>
      </nav>
      <div class="text-area">
        <h5 style="font-size:2.25rem;"><strong>Hello</strong></h5>
        <h1 style="color: rgb(231, 10, 10); font-size: 4.25rem">
          <strong>I am Emanuel Fente</strong>
        </h1>
        <p style="font-size:2.25rem;"><strong>An spiring Front End Developer.</strong></p>
        <a
          style="font-size: x-large; text-align: center"
          href="#about"
          type="button"
          class="but"
          >About</a
        >
        &nbsp; &nbsp;
        <a style="font-size: x-large" href="#contact" type="button" class="but"
          >Contact me</a
        >
      </div>
    </section>
  
</template>

<style>
* {
  font-family: sans-serif;
  box-sizing: border-box;
  scroll-behavior: smooth;
}
/* #navbar {
    top: 0;
    left: 0;
    width: 100%;
    height:100px;
    position: fixed;
    z-index: 9958432;
} */
.header {
  min-height: 100vh;
  width: 100%;
  background-image: linear-gradient(rgb(172 168 168 / 60%), rgba(0, 0, 0, 0.7)),
    url("https://i.postimg.cc/MpBb6J8f/Home-Page.jpg");
  background-size: cover;
  position: relative;
  background-attachment: fixed;
}
body {
  width: 100%;
  overflow-x: hidden;
}
.navbar-brand {
  color: rgb(255, 255, 255);
  text-decoration: none;
}

.navbar {
  display: flex;
  padding: 0.4% 4%;
  justify-content: space-between;
  align-items: center;
  background-color: #253238;
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 9999999999999999;
}
.navbar {
  flex: 1;
  text-align: center;
  color: white;
}
.nav-cont ul li {
  list-style: none;
  display: inline-block;
  padding: 8px 12px;
  position: relative;
  color: #a3aab0;
}
.navbar ul li a {
  color: #ffff;
  text-decoration: none;
  font-size: 15px;
}
.navbar ul li::after {
  content: "";
  width: 0%;
  height: 2px;
  background: red;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.navbar ul li:hover::after {
  width: 100%;
  color: white;
}

.text-area {
  width: 90%;
  color: #fff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
}

.but {
  display: inline-block;
  /* padding: 10px 30px; */
  text-decoration: none;
  color: white;
  background-color:rgb(231, 10, 10);
  border: none;
  border-radius: 15px;
  font-size: 2rem;
  text-transform: uppercase;
  text-align: center;
  letter-spacing: 0.1rem;
  margin-top: 30px;
  transition: 0.3s ease background-color;
  height: 40px;
  width: 200px;
}

.but:hover {
  color: white;
  background-color: red;
}

.about {
  min-height: 100vh;
  width: 100%;
}
.section {
  padding: 100px 0;
  position: relative;
}
section {
  height: max-content;
}
.gray-bg {
  background-color: #f5f5f5;
}

img {
  vertical-align: middle;
  width: 400px;
  height: 400px;
}
</style>
