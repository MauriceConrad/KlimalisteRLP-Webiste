<template>
  <div class="support-easy" :style="{ 'background-color': background }" data-nav-id="Unterstuetzen">
    <h2>Deine Unterstützung.</h2>
    <div class="content-inner">
      <div class="support-text" v-html="content.supportText"></div>
      <ul class="support-list">
        <li v-for="(item, index) in supportItems" :key="index">
          <div class="icon-main">
            <SVGIcon :src="item.icon" width="100"></SVGIcon>
          </div>
          <div class="title">
            <h3>{{ item.title }}</h3>
          </div>
          <div class="content">
            <div class="inner" v-html="item.text"></div>
          </div>
          <div class="actions">
            <a v-for="(btn, index) in item.buttons" :key="index" :href="btn.href" :target="btn.blank ? '_blank' : '_self'" @click="__clickBtn(btn)">
              <button class="btn">
                {{ btn.label }}
              </button>
            </a>
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

  .support-easy {
    padding: 10px 0;
    box-sizing: border-box;
    text-align: center;
    color: #fff;
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
  }
  h2 {
    font-size: 2em;
    padding: 0 10px;
    box-sizing: border-box;
  }
  .content-inner {

    margin: auto;
  }
  .content-inner .support-text {
    font-weight: 200;
    max-width: 800px;
    margin: auto;
    line-height: 1.5;
    padding: 0 10px;
    box-sizing: border-box;
  }

  .support-list {
    list-style: none;
    margin: 20px 0 0;
    padding: 0;
  }
  .support-list li {
    display: inline-block;
    max-width: 270px;
    padding: 20px;
    vertical-align: top;
    box-sizing: border-box;
  }
  .support-list li .icon-main {
    margin: auto;
  }
  .support-list li .title {

  }
  .support-list li .content {
    font-weight: 300;
    line-height: 1.5;
  }

  .btn {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    font-size: 1em;
    font-weight: 600;
    padding: 10px 20px;
    background-color: #fff;
    box-shadow: 0px 1px 7px rgba(0, 0, 0, 0.5);
    border: none;
    transition: all 0.3s;
    cursor: pointer;
  }
  .btn:hover {
    transform: rotate(1deg) scale(1.05);
  }

  @media screen and (max-width: 600px) {
    .support-list li {
      max-width: 100%;
    }
  }
</style>

<script>

  import SVGIcon from './SVGIcon.vue';

  import SupportText from '../../data/content/support1.md';

  import DonateText from '../../data/content/donate1.md';
  import HelpText from '../../data/content/help1.md';
  import SignText from '../../data/content/sign1.md';
  import TalkText from '../../data/content/talk1.md';


  export default {
    name: "SupportEasy",
    props: {
      background: String
    },
    data() {
      return {
        content: {
          supportText: SupportText
        },
        supportItems: [
          {
            title: "Spenden",
            icon: 'icons/save.svg',
            text: DonateText,
            buttons: [
              {
                label: 'Crowd-Funding Kampagne',
                href: 'https://www.gofundme.com/f/klimaliste-rlp',
                blank: true
              }
            ]
          },
          {
            title: "Mitmachen",
            icon: 'icons/project.svg',
            text: HelpText,
            buttons: [
              {
                label: 'How to: Mitmachen',
                href: '#Mitmachen',
                blank: false
              }
            ]
          },
          {
            title: "Wahlteilnahme ermöglichen",
            icon: 'icons/signing-the-contract.svg',
            text: SignText,
            buttons: [
              {
                label: 'Unterschreiben',
                href: '#Unterschreiben',
                blank: false
              }
            ]
          },
          {
            title: "Erzähl von uns!",
            icon: 'icons/comment.svg',
            text: TalkText,
            buttons: [
              {
                label: 'Link teilen',
                href: null,
                method: () => {
                  this.share();
                },
                blank: false
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
