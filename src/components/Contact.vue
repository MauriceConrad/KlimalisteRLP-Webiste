<template>
  <div class="contact-view" data-nav-id="Kontakt">
    <h2>Kontakt</h2>
    <div class="contact-inner">
      <span class="mail-label">
        Mail:
        <a href="mailto:presse@klimalisterlp.de" target="_blank">presse@klimalisterlp.de</a>
      </span>
      <div class="contact-items">
        <div class="contact-item">
          <input type="text" placeholder="Anna Musterfrau" v-model="name">
        </div>
        <div class="contact-item">
          <input type="mail" placeholder="anna@muster.de" v-model="mail">
        </div>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <input type="text" placeholder="Ich will mehr wissen!" v-model="subject">
        </div>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <textarea class="input-msg" placeholder="Hey Ihr!" v-model="message"></textarea>
        </div>
      </div>
      <div class="contact-items">
        <div class="contact-item">
          <button class="btn btn-send" @click="send">Senden</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .contact-view {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    color: #222;
    padding: 20px 0;
    background-color: rgb(247, 247, 247);
  }
  .contact-view h2 {
    margin: 0 0 20px;
    font-size: 2.5em;
    text-align: center;
  }
  .contact-inner {
    max-width: 1000px;
    margin: auto;
  }
  .contact-inner .contact-items {
    display: flex;
    padding: 5px 0;

  }
  .contact-inner .contact-items .contact-item {
    flex: 1;
    box-sizing: border-box;
    padding: 0 5px;
  }
  .contact-inner .contact-items .contact-item > input,
  .contact-inner .contact-items .contact-item > textarea {
    width: 100%;
    box-sizing: border-box;
    border: none;
    padding: 8px 12px;
    outline: none;
    font-size: 1rem;
    font-weight: 300;
    border: 1px solid rgb(241, 241, 241);
  }
  .contact-inner .contact-items .contact-item > input:focus,
  .contact-inner .contact-items .contact-item > textarea:focus {
    border: 1px solid rgb(51, 51, 51);
  }
  .contact-inner .contact-items .contact-item .input-msg {
    height: 150px;
  }
  .btn {
    background-color: #1f1f1f;
    color: #fff;
    cursor: pointer;
    padding: 10px 10px;
    font-size: 1.1rem;
    font-weight: 300;
    border: none;
    width: 100%;
  }
  .mail-label {
    text-align: center;
    display: block;
    padding: 0px 0 20px;
  }
  .mail-label a {
    color: inherit;
  }
</style>

<script>
  //https://dev.klimalisterlp.de/klimalisterlp-php-server/contact.php?name=Maurice&mail=conr&subject=Hahaha&message=Hey

  export default {
    name: 'Contact',
    data() {
      return {
        name: '',
        subject: '',
        mail: '',
        message: ''
      }
    },
    methods: {
      async send() {
        const { name, mail, subject, message } = this;

        const valid = (() => {
          return name.match(/(.){2,}/) &&
                 mail.match(/(.){1,}@(.){2,}\.[a-z]{2,}/) &&
                 subject.match(/(.){2,}/) &&
                 message.match(/(.){10,}/);

        })();

        if (valid) {
          const result = await fetch('https://dev.klimalisterlp.de/klimalisterlp-php-server/contact.php?' + (params => {
            return Object.entries(params).map(paramArray => paramArray.join('=')).join('&');
          })({
            name,
            mail,
            subject,
            message
          }));
          console.log(result);
          alert("Danke für deine Nachricht!");
        }
        else {
          alert("Da stimmt was nicht.");
        }
      }
    }
  }

</script>
