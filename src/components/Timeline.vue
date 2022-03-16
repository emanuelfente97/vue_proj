<template>
  <section id="Timeline">
   <section id="resume" class="resume">
      <div class="container">
<div class= "container">
        <div class="section-title">
             <p class="skl" style="font-size: 45px">
          <span id="skl"><strong>My Resume</strong> </span>
        </p>
        </div>
    <p><em> I have an eargerness to learn, I'm determined,Resilient and I have a positive mindset.</em></p>
        <div class="row">
          <div class="col-lg-6">
            <h1 class="resume-title"><strong>Summary</strong></h1>
            <div class="resume-item pb-0">
              <h4>Emanuel Fente</h4>
              <p><em>Dedicated and motivated individual looking to secure a challenging position at a reputable company to apply and expand my knowledge and skills whilst contributing significantly in the success of the company. I work well with people and I am open to criticism.</em></p>
              <p>
              </p><ul>
                <li>2+ years of working with people,</li>
                <li>Ability to plan, organise and prioritze work,</li>
                <li>Honest</li>
              </ul>
            </div>

            <h1 class="resume-title"><strong>Education</strong></h1>
              <div class="resume-item">
              <h4>Web development</h4>
              <h5>2021 - Present</h5>
              <p><em>Life Choices Academy</em></p>
              <p>6 Months learning of fundamentals of Full stack, back-end and front-end development. The academy also provides training for professional and personal development.</p>
            </div>
            <div class="resume-item">
              <h4>Bachelor Of Mathematical &amp; Statistical Science</h4>
              <h5>2017 - 2020</h5>
              <p><em>University of the Western Cape</em></p>
              <p><em>Core Modules:</em> Mathematics including Financial Maths, Physical Sciences includig basics of Astro physics, Statistics(Major) </p>
            </div>
               <div class="resume-item">
              <h4> Matric </h4>
              <h5>2014</h5>
              <p><em>St James Senior Secondary School</em></p>
              <p><em>Core Subjects:</em> Mathematics, Life Sciences, Physical Sciences and Geography</p>
            </div>
          </div>
          
          <div class="col-lg-6">
            <h1 class="resume-title"><strong> Experience</strong></h1>
            <div class="resume-item">
              <h4>Customer Sales and Services Agent</h4>
              <h5> Jun/2021 - Sep/2021</h5>
              <p><em>Mind Pearl (Qantas)</em></p>
              <p>
              </p><ul>
                <li>Provide assistant with check-in, ticketing changes, re-booking of itineraries and special services requested by passengers. </li>
                <li>Answer telephone to provide information, resolve problems encountered by or complaints and assist as needed. </li>
                <li>Provide current and accurate fare, schedule, flight arrival and departure information, as well as answer general inquires over the telephone </li>
              </ul>
              <p></p>
            </div>
            <div class="resume-item">
              <h4>Maths Educator's Assistant</h4>
              <h5> Dec/2020 - Mar/ 2021</h5>
              <p><em>Daliwonga Senior Secondary School</em></p>
              <p>
              </p><ul>
                <li> Support teachers with technical preparations,</li>
                <li>Data Capturing</li>
                <li>Textbook issuance and record keeping.</li>
                <li>Provide after school support to learners where applicable.</li>
              </ul>
            </div>
            <div class="resume-item">
              <h4>UWC Student Assistant</h4>
              <h5> Jan/2019 - Nov/ 2019</h5>
              <p><em>University Of The Western Cape</em></p>
              <ul>
                <li> Meet with students and parents to advise on steps necessary to complete admission and financial aid forms correctly,</li>
                <li>Manage and maintain sensitive student information in physical and online files,</li>
                <li>Making Bookings (Venues, Accommodation) for organisation under the office.</li>
              </ul>
            </div>
          </div>
        </div>
        </div>

      </div>
    </section>
  </section>
</template>


<script>
export default {};
</script>

<style scoped>
    #Timeline{
      background: #c9d0d3;
      color: #2c3e50;
      padding-top:50px; 
    }
    #skl{
       border-bottom: 3px solid red;
    }
  .resume .resume-title {
  font-size: 26px;
  font-weight: 700;
  margin-top: 20px;
  margin-bottom: 20px;
  color: #fafafd;
}
.resume .resume-item {
  padding: 0 0 20px 20px;
  margin-top: -2px;
  border-left: 2px solid #82909c;
  position: relative;
  text-align: justify;
}
.resume .resume-item h4 {
  line-height: 18px;
  font-size: 16px;
  font-weight: 700;
  text-transform: uppercase;
  color: #fa0a0afa;
  margin-bottom: 10px;
}
.resume .resume-item h5 {
  font-size: 16px;
  background: #ff0909;
  padding: 5px 15px;
  display: inline-block;
  font-weight: 600;
  margin-bottom: 10px;
}
.resume .resume-item ul {
  padding-left: 20px;
}
.resume .resume-item ul li {
  padding-bottom: 10px;
}
.resume .resume-item:last-child {
  padding-bottom: 0;
}
.resume .resume-item::before {
  content: "";
  position: absolute;
  width: 16px;
  height: 16px;
  border-radius: 50px;
  left: -9px;
  top: 0;
  background: rgb(253, 59, 59);
  border: 2px solid #82909c;
}
.col-lg-6 ul li {
  list-style: none;
}
</style>
