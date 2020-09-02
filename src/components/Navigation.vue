<template>
  <nav class="nav" :class="{ hidden: scrollY <= 200 }">
    <div class="logo-area">

    </div>
    <ul>
      <li v-for="(item, index) in nav" :key="index">
        <div class="icon-main">
          <SVGIcon :src="item.icon" width="30" fill="#fff"></SVGIcon>
        </div>
        <div class="label">
          <span>
            {{ item.label }}
          </span>
        </div>
      </li>
    </ul>
  </nav>
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
  .nav ul li:hover .label {
    text-decoration: underline;
  }
  .nav ul li:before {
    width: 0;
    height: 100%;
    content: "";
    display: inline-block;
    vertical-align: middle;
  }
  .nav ul li > * {
    vertical-align: middle;
    display: inline-block;
  }
  .nav ul li .icon-main {
    margin: 0 5px;
  }
</style>

<script>
  import SVGIcon from './SVGIcon.vue';

  export default {
    name: "Navigation",
    data() {
      return {
        scrollY: 0,
        nav: [
          {
            label: "Die Liste",
            icon: 'icons/nav/team.svg',
            href: '#test1'
          },
          {
            label: "Motivation",
            icon: 'icons/nav/herbal-spa-treatment-leaves.svg',
            href: '#test2'
          },
          {
            label: "Unterstützen",
            icon: 'icons/nav/hands.svg',
            href: '#test3'
          }
        ]
      }
    },
    methods: {
      updateScroll() {
        this.scrollY = window.scrollY;
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
    },
    components: {
      SVGIcon
    }
  }
</script>
