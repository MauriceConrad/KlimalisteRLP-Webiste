<template>
  <div>
    <nav class="nav" :class="{ hidden: scrollY <= 200 }" ref="navMainElement">
      <div class="logo-area">

      </div>
      <ul>
        <li v-for="(item, index) in nav" :key="index">
          <a :href="item.href">
            <div class="icon-main">
              <SVGIcon :src="item.icon" width="30" fill="#fff"></SVGIcon>
            </div>
            <div class="label">

              <span>
                {{ item.label }}
              </span>
            </div>
          </a>
        </li>
        <li class="custom">
          <LangButton>
            <Language label="Deutsch" icon="icons/lang/germany.svg" default />
            <Language label="Turkish" icon="icons/lang/united-kingdom.svg" />
            <Language label="English" icon="icons/lang/spain.svg" />
          </LangButton>
        </li>
      </ul>

    </nav>
  </div>
</template>

<style scoped>


  .nav {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    position: fixed;
    background-color: rgb(28, 28, 28);
    border-bottom: 1px solid rgb(20, 20, 20);
    z-index: 5;
    display: flex;
    width: 100%;
    transition: all 0.5s;
  }
  .nav.hidden {
    opacity: 0;
    transform: translateY(-100%);
  }
  .logo-area {
    flex: 1;
  }
  .nav ul {
    flex: none;
    color: #fff;
    list-style: none;
    margin: 0;
    padding: 0;
    padding: 10px 0;
    white-space: nowrap;
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .nav ul::-webkit-scrollbar {
    display: none;
  }
  @media screen and (max-width: 600px) {
    .nav ul {
      width: 100%;
    }
  }
  .nav ul li {
    display: inline-block;
    padding: 0;
    margin: 0 10px;
    cursor: pointer;
    font-weight: 300;
    letter-spacing: 0.2px;
  }
  @media screen and (max-width: 600px) {
    .nav ul li {
      font-weight: 400;
    }
  }
  .nav ul li a {
    text-decoration: none;
    color: inherit;
    display: inline-block;
  }
  .nav ul li:hover .label {
    text-decoration: underline;
  }
  .nav ul li:not(.custom):before {
    width: 0;
    height: 100%;
    content: "";
    display: inline-block;
    vertical-align: middle;
  }
  .nav ul li a > * {
    vertical-align: middle;
    display: inline-block;
  }
  .nav ul li .icon-main {
    margin: 0 5px;
  }
</style>

<script>
  import SVGIcon from './SVGIcon.vue';

  import SmoothScroll from 'smooth-scroll';

  import LangButton from '../lang/LangButton.vue';
  import Language from '../lang/Language.vue';


  export default {
    name: "Navigation",
    data() {
      return {
        scrollY: 0,
        nav: [
          {
            label: "Die Liste",
            icon: 'icons/nav/team.svg',
            href: '#Liste'
          },
          /*{
            label: "Unterschreiben",
            icon: 'icons/nav/feather.svg',
            href: '#Unterschreiben'
          },*/
          {
            label: "Motivation",
            icon: 'icons/nav/herbal-spa-treatment-leaves.svg',
            href: '#Motivation'
          },
          {
            label: "Utopie",
            icon: 'icons/nav/tree.svg',
            href: '#Utopie'
          },
          {
            label: "Programm",
            icon: 'icons/nav/book.svg',
            href: '#Programm'
          },
          {
            label: "Unterstützen",
            icon: 'icons/nav/hands.svg',
            href: '#Unterstuetzen'
          },
          {
            label: "Spenden",
            icon: 'icons/nav/coin.svg',
            href: '#Spenden'
          },
          {
            label: "Kontakt",
            icon: 'icons/nav/mail.svg',
            href: '#Kontakt'
          }
        ]
      }
    },
    methods: {
      updateScroll() {
        this.scrollY = window.scrollY;
      },
      goToHash(hash) {
        const navId = hash.substring(1);
        const targetSelector = '[data-nav-id="' + navId + '"]';

        const target = document.querySelector(targetSelector);
        if (target) {
          setTimeout(() => {
            const navBounds = this.$refs.navMainElement.getBoundingClientRect();

            const posY = target.offsetTop - navBounds.height;

            const scroll = new SmoothScroll({
              speed: 300,
              clip: true,
              easing: 'easeInOutCubic',
              updateURL: true,
              popstate: true
            });
            scroll.animateScroll(posY);
          });

        }
      }
    },

    created() {
      window.addEventListener("scroll", () => {
        this.updateScroll();
      });
      window.addEventListener("touchstart", () => {
        this.updateScroll();
      });
      this.updateScroll();

      window.addEventListener("click", event => {
        const anchor = event.target.closest('a');
        if (anchor) {
          const href = anchor.getAttribute('href');
          if (href.search('#') == 0) {
            // Is hash!
            //event.preventDefault();
            event.stopPropagation();
            this.goToHash(href);
          }
        }
      });

      window.addEventListener("load", () => {
        this.goToHash(window.location.hash);
      });

    },
    components: {
      SVGIcon,
      LangButton,
      Language
    }
  }
</script>
