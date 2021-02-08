<template>
  <div class="candidates-preview" ref="mainContainer" :style="{ 'background-color': background }" data-nav-id="Liste">
    <h2>Eine Liste für unsere Zukunft.</h2>
    <div class="intro-container">
      <div class="intro-text" v-html="content.intro"></div>
    </div>
    <h3>Unsere Listenkandidat*innen</h3>
    <div class="candidates-list">
      <ul>
        <li v-for="(item, index) in candidates" :key="index" ref="candidateItems" :class="{ active: index == activeCandidateIndex }" @click="selectCandidate(index)">
          <div class="avatar">
            <div class="avatar-image" :style="{ 'background-image': `url('${ item.avatar }')`, 'background-position': item.pos.join(' ') }"></div>
          </div>
          <div class="label">
            <span class="candidate-name">{{ item.name }}</span>
            <span class="candidate-description-text">{{ item.description }}</span>
            <span class="candidate-job-text">{{ item.job }}</span>
          </div>

        </li>
      </ul>
    </div>
    <div class="candidates-view" v-if="activeCandidate">
      <div class="content-inner" :style="{ 'clip-path': arrowClipPath }">
        <div class="bg-container" :style="{ 'filter': 'blur(' + activeCandidate.bgBlur + ')' }">
          <div class="bg-element" :style="{ 'background-image': `url('${ activeCandidate.bg }')`, 'background-position': activeCandidate.bgPos }"></div>
        </div>
        <article class="about-article" v-html="activeCandidate.about"></article>
      </div>
    </div>
    <div class="more-container">
      <a href="files/Landesliste.pdf" target="_blank">Vollständige Landesliste + Direktkandidat*innen</a>
    </div>
    <div class="info-box">
      <span class="label"><h3>Höre den <strong>Klimaplan</strong> als Podcast</h3></span>
      <ul class="podcast-links">
        <li v-for="(platform, index) in podcast" :key="index">
          <a :href="platform.href" :target="platform.blank ? '__blank' : '__self'">
            <div class="icon">
              <img :src="platform.icon" alt="Link Image">
            </div>
          </a>
        </li>
      </ul>
    </div>
    <div class="some-list">
      <h3>Folge uns auf Social Media!</h3>
      <ul class="some-links">
        <li v-for="(platform, index) in socialMedia" :key="index">
          <a :href="platform.href" :target="platform.blank ? '__blank' : '__self'">
            <div class="icon">
              <img :src="platform.icon" alt="Link Image">
            </div>
          </a>
        </li>
      </ul>
    </div>
  </div>
</template>

<style scoped>

  .info-box {
    margin: 10px 0;
  }
  .info-box h3 {
    margin: 0;
  }
  .info-box .label {

  }
  .info-box .podcast-links {
    list-style: none;
    margin: 10px 0px;
    padding: 0;
  }
  .info-box .podcast-links li {
    display: inline-block;
    width: 55px;
    height: 55px;
    margin: 0px 10px;
  }

  h2 {

    margin: 0;
    padding: 0px 40px 10px;

    color: #222;
    text-align: center;
    display: inline-block;
    border-bottom: 1px solid #333;
    font-size: 2em;

    max-width: 70%;
  }
  .candidates-preview {
    padding: 40px 0 0;
    text-align: center;
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    width: 100%;
  }
  h3 {
    margin: 30px 0 10px;
    font-size: 1.5em;
    font-weight: 600;
  }
  .candidates-list {
    padding: 0 0;
    max-width: 100%;
  }
  .candidates-list ul {
    list-style: none;
    font-size: 0;
    padding: 0;
    margin: 0;
    white-space: nowrap;
    max-width: 100%;
    overflow: scroll;
    -ms-overflow-style: none;  /* IE and Edge */
    scrollbar-width: none;  /* Firefox */
  }
  .candidates-list ul::-webkit-scrollbar {
    display: none;
  }
  .candidates-list ul li {
    display: inline-block;
    font-size: 1rem;
    margin: 0 0px;
    cursor: pointer;
    padding: 0 10px;
  }
  .candidates-list ul li .avatar {
    border-radius: 50%;
    padding: 20px;
    transition: all 0s;
    background-color: transparent;
  }
  .candidates-list ul li:hover .avatar {
    background-color: rgb(241, 241, 241);
  }

  .candidates-list ul li .avatar .avatar-image {
    width: 180px;
    height: 180px;
    background-size: cover;
    background-position: center;
    border-radius: 50%;
    transition: all 0.5s;
  }
  .candidates-list ul li:hover  .avatar .avatar-image {
    transform: scale(1);
  }
  .candidates-list ul li .label {
    padding: 3px 0 0;
  }
  .candidates-list ul li .label > span {
    display: block;
  }
  .candidates-list ul li .label .candidate-name {
    font-weight: 600;
    font-size: 1.3em;
  }
  .candidates-list ul li .label .candidate-description-text {
    font-size: 0.95em;
    font-weight: 300;
    margin: 2px 0 0;
  }
  .candidates-list ul li .label .candidate-job-text {
    font-size: 0.8em;
    color: #555;
    display: block;
    font-weight: 300;
  }
  .candidates-list ul li .actions {
    text-align: center;
    margin: 6px 0 0;
  }
  .candidates-list ul li .actions .btn-more {
    width: 50px;
    height: 25px;
    display: inline-block;
  }
  .candidates-list ul li .actions .btn-more svg line {
    stroke: #333;
    stroke-width: 3px;
    transition: all 0.3s;
  }
  .candidates-list ul li .actions .btn-more svg line:nth-child(1) {
    transform-origin: 27.5px 25px;
    transform: rotate(80deg);
  }
  .candidates-list ul li .actions .btn-more svg line:nth-child(2) {
    transform-origin: 72.5px 25px;
    transform: rotate(-80deg);
  }
  .candidates-list ul li.active .actions .btn-more svg line:nth-child(1) {
    transform: rotate(0deg);
  }
  .candidates-list ul li.active .actions .btn-more svg line:nth-child(2) {
    transform: rotate(0deg);
  }

  .about-article a {
    color: inherit;
  }

  .candidates-view {
    animation: showCandidatesView 0.5s;
    position: relative;
    filter: drop-shadow(0px -1px 7px rgba(0, 0, 0, 0.2));
  }
  @keyframes showCandidatesView {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }
  .candidates-view .bg-image {
    position: absolute;
    left: 0;
    top: 0;
  }
  .candidates-view .bg-image img {
    width: 100%;

  }
  .candidates-view .content-symbols {
    font-size: 0;
    position: relative;
    top: 1px;
  }

  .candidates-view .content-symbols .symbol-arrow {
    width: 80px;
    height: 40px;
    position: relative;
    display: inline-block;
    transition: all 0.5s;
    position: relative;
    z-index: 3;
    transform-origin: center top;
    animation: showArrow .5s;
    animation-timing-function: cubic-bezier(.17,.67,.65,1.16);

  }
  @keyframes showArrow {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }
  .candidates-view .content-symbols .symbol-arrow path {
    fill: rgb(91, 91, 91);

    stroke: rgb(52, 52, 52);
    stroke-width: calc(1px * (100 / 80));
  }
  .candidates-view .content-inner {
    padding: 40px 10px 0;
    box-sizing: border-box;
    color: #fff;
    border-top: 1px solid rgb(52, 52, 52);
    border-bottom: 1px solid rgb(52, 52, 52);
    background-color: rgb(159, 92, 92);
    animation: showContents .5s;
    z-index: 1;
    transition: all 0.5s;
    animation-timing-function: cubic-bezier(.17,.67,.65,1.16);
    position: relative;

  }
  @keyframes showContents {
    from {
      transform: translateY(-40px);
    }
    to {
      transform: translateY(0);
    }
  }
  .candidates-view .content-inner .bg-container {
    position: absolute;
    left: 0;
    top: 0;
    width: 100%;
    z-index: 1;
    background-color: #222;
    height: 100%;
    width: 100%;
    filter: blur(20px);
  }
  .candidates-view .content-inner .bg-container .bg-element {
    width: 100%;
    height: 100%;
    background-position: center;
    background-size: cover;
  }
  .candidates-view .content-inner .about-article {
    padding: 10px 0;
    max-width: 800px;
    margin: auto;
    transform-origin: center top;
    animation: showContentsInner .5s;
    animation-timing-function: cubic-bezier(.17,.67,.65,1.16);
    position: relative;
    z-index: 2;
    text-shadow: 0px 0px 7px rgba(0, 0, 0, 0.5);
  }
  @keyframes showContentsInner {
    from {
      transform: scale(0);
    }
    to {
      transform: scale(1);
    }
  }

  .intro-container {

  }
  .intro-container .intro-text {
    max-width: 800px;
    margin: auto;
    font-weight: 300;
    line-height: 1.5;
    padding: 0 15px;
    box-sizing: border-box;
  }



  .more-container {
    padding: 10px 0 20px;
  }
  .more-container a {
    display: inline-block;
    color: inherit;
    background-color: #209958;

    padding: 10px 16px 10px;
    text-decoration: none;
    color: #fff !important;
  }

  .some-list {
    margin: 0;
    padding: 0 0 10px;
  }
  .some-list h3 {
    margin: 0;
  }
  .some-links {
    list-style: none;
    margin: 10px 0;
    padding: 0;
  }
  .some-links li {
    display: inline-block;
    margin: 0 10px;

  }
  .some-links li .icon {
    width: 70px;
    height: 70px;
  }
</style>

<script>
  import candidates from '../../data/candidates.js';

  import ContentIntro from '../../data/content/intro1.md';
  import ContentAbout1 from '../../data/content/about1.md';

  export default {
    name: "CandidatesPreview",
    props: {
      background: String
    },
    data() {
      return {
        candidates,
        activeCandidateIndex: -1,
        content: {
          about: ContentAbout1,
          intro: ContentIntro
        },
        socialMedia: [
          {
            icon: 'icons/socialmedia/youtube.svg',
            href: 'https://www.youtube.com/channel/UC8Rg4hF5OfDKSaBW0kSqXzw?sub_confirmation=1',
            blank: true
          },
          {
            icon: 'icons/socialmedia/twitter.svg',
            href: 'https://twitter.com/KlimalisteRLP',
            blank: true
          },
          {
            icon: 'icons/socialmedia/instagram.svg',
            href: 'https://www.instagram.com/klimalisterlp',
            blank: true
          },
          {
            icon: 'icons/socialmedia/facebook.svg',
            href: 'https://www.facebook.com/klimalisterlp',
            blank: true
          },
          {
            icon: 'icons/socialmedia/whatsapp.svg',
            href: 'https://chat.whatsapp.com/G10K76QnJI0BaDgK6rwxHs',
            blank: true
          }
        ],
        podcast: [
          {
            icon: 'icons/podcast/spotify.svg',
            href: 'https://open.spotify.com/show/2nRVt9cFPbc5E2YslznsY5',
            blank: true
          },
          {
            icon: 'icons/podcast/apple.svg',
            href: 'https://podcasts.apple.com/us/podcast/klimaplan/id1549893019?uo=4',
            blank: true
          },
          {
            icon: 'icons/podcast/amazon.svg',
            href: 'https://music.amazon.de/podcasts/6ca7ddce-a550-4820-9c16-66f49299fcac/Klimaplan',
            blank: true
          },
          {
            icon: 'icons/podcast/google.svg',
            href: 'https://podcasts.google.com/feed/aHR0cHM6Ly9tczNvdXoucG9kY2FzdGVyLmRlL2tsaW1hbGlzdGVybHAucnNz',
            blank: true
          },
          {
            icon: 'icons/podcast/deezer-logo.svg',
            href: 'https://www.deezer.com/de/show/2199812',
            blank: true
          },
          {
            icon: 'icons/podcast/podcastde.svg',
            href: 'https://www.podcast.de/podcast/940508/',
            blank: true
          }
        ]
      }
    },
    computed: {
      arrowMaskSVGImage() {
        return `data:image/svg+xml;base64,` + btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" version="1.1">
            <circle cx="50" cy="50" r="50" style="fill: #000;"/>
          </svg>
          `);
      },
      arrowClipPath() {
        const arrowBounds = {
          width: 100,
          height: 50
        };
        const polygon = `polygon(0% 40px, ${ (this.arrowPos - arrowBounds.width / 2) }px 40px, ${ this.arrowPos }px 0%, ${ (this.arrowPos + arrowBounds.width / 2) }px 40px, 100% 40px, 100% 100%, 0% 100%)`;

        const arrow = `url('data:image/svg+xml;base64,${ btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" width="100%" height="100%" viewBox="0 0 100 100" version="1.1">
            <circle cx="50" cy="50" r="50" style="fill: #000;"/>
          </svg>
        `) }')`;
        arrow;

        return polygon;
      },
      activeCandidate() {
        return this.activeCandidateIndex >= 0 ? this.candidates[this.activeCandidateIndex] : null;
      },
      activeCandidateListItem() {
        return this.$refs.candidateItems[this.activeCandidateIndex];
      },
      arrowPos() {
        const li = this.activeCandidateListItem;
        if (li) {
          const bounds = li.getBoundingClientRect();
          const pos = bounds.x + bounds.width / 2;


          //const boundsMainContainer = this.$refs.mainContainer.getBoundingClientRect();
          //const centerSymbols = boundsMainContainer.x + boundsMainContainer.width / 2;

          return pos;

        }
        else {
          return 0;
        }
      }
    },
    methods: {
      blurImage(url) {
        /*const dataURI = `data:image/svg+xml;base64,${ btoa(`
          <svg xmlns="http://www.w3.org/200/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1" width="100%" height="100%">
            <image xlink:href="${ url }" x="0" y="0" height="100%" width="100%"/>
          </svg>
        `) }`;*/
        const dataURI = `data:image/svg+xml;base64,${ btoa(`
          <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" version="1.1">
            <image xlink:href="${ url }" x="0" y="0" height="100%" width="100%"/>
          </svg>
        `) }`;
        return dataURI;
      },
      selectCandidate(i) {
        if (this.activeCandidateIndex == i) {
          this.activeCandidateIndex = -1;
        }
        else {
          this.activeCandidateIndex = i;
        }
      },
      forceRerender() {
        // Remove my-component from the DOM
        this.renderComponent = false;

        this.$nextTick(() => {
          // Add the component back in
          this.renderComponent = true;
        });
      }
    },
    created() {

    },
    watch: {
      activeCandidateIndex() {

      }
    }
  }



</script>
