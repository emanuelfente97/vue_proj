<template>
  <section id="Contact">
    <div class="container">
      <div class="container">
        <div class="container">
          <div class="wrapper">
            <div class="my-info">
              <h3>Find me here</h3>
              <ul>
                <li><i class="fa fa-road"></i>Cape Town, Western Cape</li>
                <br />
                <li><i class="fa fa-phone"></i> (+27) 731576799</li>
                <br />
                <li><i class="fa fa-envelope"></i> emanuelfente97@gmail.com</li>
              </ul>
            </div>
            <!-- CONTACT FORM -->
            <div class="contact">
              <h3>Contact me</h3>
              <form @submit.prevent="handleSubmit">
                <p>
                  <label>Name</label>
                  <input
                    type="text"
                    name="name"
                    id="name"
                    v-model="name"
                    required
                  />
                </p>
                <p>
                  <label>Surname</label>
                  <input
                    type="text"
                    name="surname"
                    v-model="surname"
                    id="surname"
                  />
                </p>
                <p>
                  <label>E-mail Address</label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    v-model="email"
                    required
                  />
                </p>
                <p>
                  <label>Phone Number</label>
                  <input type="text" name="phone" v-model="phone" id="phone" />
                </p>
                <p class="full">
                  <label>Leave a Message</label>
                  <textarea
                    name="message"
                    v-model="message"
                    required
                    rows="5"
                    id="message"
                  ></textarea>
                </p>
                <p class="full">
                  <button type="submit">Submit</button>
                </p>
              </form>
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
      name: "",
      surname: "",
      phone: "",
      message: "",
    };
  },
  methods: {
    handleSubmit() {
      (this.name, this.surname, this.email, this.phone, this.message),
        fetch("http://localhost:9000/contact", {
          method: "POST",
          body: JSON.stringify({
            name: this.name,
            surname: this.surname,
            email: this.email,
            message: this.message,
            headers: { "Content-type": "application/json; charset=UTF-8" },
          }),
        })
          .then((response) => response.json())
          .then((json) => console.log(json.msg))
          .catch((err) => console.log(err.msg));
    },
  },
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Yantramanav:100,300");

* {
  box-sizing: border-box;
}

body {
  background: #3952a3;
  color: #485e74;
  line-height: 1.6;
  font-family: "Yantramanav", sans-serif;
  padding: 1em;
  /* height:90vh */
}

.container {
  max-width: 1170px;
  margin-left: auto;
  margin-right: auto;
  padding: 1em;
  margin-bottom: 20px;
}

ul {
  list-style: none;
  padding: 0;
}

.brand {
  text-align: center;
  font-weight: 300;
  text-transform: uppercase;
  letter-spacing: 0.1em;
}

.brand span {
  color: #ffffff;
}

.wrapper {
  box-shadow: 0 0 20px 0 rgba(57, 82, 163, 0.7);
}

.wrapper > * {
  padding: 1em;
}
.my-info {
  background: #c3c9dd;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.my-info h3,
.my-info ul {
  text-align: center;
  margin: 0 0 1rem 0;
}

.contact {
  background: #dcdfea;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
  height: 90vh;
}

.contact form {
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-gap: 20px;
}

.contact form label {
  display: block;
}

.contact form p {
  margin: 0;
}

.contact form .full {
  grid-column: 1 / 3;
}

.contact form button,
.contact form input,
.contact form textarea {
  width: 100%;
  padding: 1em;
  border: solid 1px #627edc;
  border-radius: 4px;
}

.contact form textarea {
  resize: none;
}

.contact form button {
  background: #627edc;
  border: 0;
  color: #e4e4e4;
  text-transform: uppercase;
  font-size: 14px;
  font-weight: bold;
}

.contact form button:hover,
.contact form button:focus {
  background: #3952a3;
  color: #ffffff;
  outline: 0;
  transition: background-color 2s ease-out;
}

@media only screen and (min-width: 700px) {
  .wrapper {
    display: grid;
    grid-template-columns: 1fr 2fr;
  }

  .wrapper > * {
    padding: 2em;
  }

  .my-info {
    border-radius: 4px 0 0 4px;
  }

  .contact {
    border-radius: 0 4px 4px 0;
  }

  .my-info h3,
  .my-info ul,
  .brand {
    text-align: left;
  }
}
</style>
