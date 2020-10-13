<template>
  <div class="contributing-view" data-nav-id="Mitmachen">
    <h2>How to: Mitmachen</h2>
    <div class="contribute-list">
      <ul>
        <li v-for="(topic, index) in topics" :key="index">
          <div class="icon-main">
            <SVGIcon :src="topic.icon" width="100" height="100" fill="#fff"></SVGIcon>
          </div>

          <div class="topic-content">
            <h3>{{ topic.title }}</h3>
            <div class="content-inner" v-html="topic.content"></div>
          </div>
          <div class="topic-btns">
            <ul class="btns-list">
              <li v-for="(btn, btnIndex) in topic.buttons" :key="btnIndex">
                <a :href="btn.href" @click="__clickBtn(btn)" :target="btn.blank ? '_blank' : '_self'">
                  <button class="btn">
                    {{ btn.label }}
                  </button>
                </a>
                <span v-if="btn.description" class="btn-description-label">{{ btn.description }}</span>
              </li>
            </ul>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
  .contributing-view {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    background-color: rgb(46, 130, 97);
    color: #fff;
    padding: 20px 0;
  }
  h2 {
    text-align: center;
    font-size: 2.5em;
    font-weight: 800;
    margin: 0;
  }
  .contribute-list {
    text-align: center;
    margin: 30px 0 0;
  }
  .contribute-list ul {
    list-style: none;
    margin: 0;
    padding: 0;
  }
  .contribute-list ul li {
    display: inline-block;
    max-width: 300px;
    vertical-align: top;
    padding: 0 30px;
  }
  .contribute-list ul li .icon-main {

  }
  .contribute-list ul li .topic-content {
    text-align: left;
    font-weight: 200;
    line-height: 1.5;
  }
  @media screen and (max-width: 600px) {
    .contribute-list ul li {
      max-width: 100%;
      display: block;
      padding: 0 10px;
    }
    .contribute-list ul li .topic-content {
      font-weight: 300;
    }
  }
  .contribute-list ul li .topic-content h3 {
    text-align: center;
  }
  .contribute-list ul li .topic-btns {
    padding: 20px 0;
  }
  .contribute-list ul li .topic-btns a {

    display: block;
    cursor: pointer;
  }
  .contribute-list ul li .topic-btns .btn {
    background-color: rgb(25, 94, 67);
    border: none;
    font-size: 1em;
    color: #fff;
    padding: 8px 15px;
    margin: 7px 0;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.2);
    transition: all 0.25s;
    cursor: pointer;
  }
  .contribute-list ul li .topic-btns .btn:hover {
    transform: rotate(2deg);
  }
  @media screen and (max-width: 600px) {
    .contribute-list ul li .topic-btns .btn {
      font-size: 1.3em;
    }
  }
  .btn-description-label {
    text-decoration: underline;
    font-weight: 300;
  }
</style>


<script>
  import ContentInteresting from '../../data/content/contributing/interesting.md';
  import ContentScience from '../../data/content/contributing/science.md';
  import ContentCandidate from '../../data/content/contributing/candidate.md';

  import SVGIcon from './SVGIcon.vue';

  export default {
    name: "Contributing",
    data() {
      return {
        topics: [
          {
            title: 'Als Interessent*in',
            icon: 'icons/contribute/heart.svg',
            content: ContentInteresting,
            buttons: [
              {
                label: 'Seite teilen',
                method: () => {
                  this.share();
                }
              },
              {
                label: 'Jetzt spenden!',
                href: '#support'
              },
              {
                label: 'Mitglied werden',
                href: 'files/Beitrittsformular.pdf',
                blank: true
              }
            ]
          },
          {
            title: 'Als Wissenschaftler*, Klimaschützer* oder Helfer*in',
            icon: 'icons/contribute/science.svg',
            content: ContentScience,
            buttons: [
              {
                label: 'Mitglied werden',
                href: 'files/Beitrittsformular.pdf',
                blank: true
              },
              {
                label: 'Schreib uns eine Mail',
                href: 'mailto:info@klimalisterlp.de',
                description: 'info@klimalisterlp.de'
              }
            ]
          },
          {
            title: 'Als potentielle*r Kandidat*in',
            icon: 'icons/contribute/rlp.svg',
            content: ContentCandidate,
            buttons: [
              {
                label: 'Schreib uns eine Mail',
                href: 'mailto:info@klimalisterlp.de',
                description: 'info@klimalisterlp.de'
              },
              {
                label: 'WhatsApp',
                href: 'https://chat.whatsapp.com/G10K76QnJI0BaDgK6rwxHs',
                blank: true
              }
            ]
          }
        ]
      }
    },
    methods: {
      __clickBtn(btn) {
        if (btn.method) {
          btn.method();
        }
      },
      share() {
        if (navigator.share) {
          navigator.share({
            title: 'Klimaliste RLP',
            url: 'https://klimalisterlp.de'
          }).then(() => {
            console.log('Thanks for sharing!');
          }).catch(() => {
            console.error("No sharing");
          });
        }
      }
    },
    components: {
      SVGIcon
    }
  }
</script>
