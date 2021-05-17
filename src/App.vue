<template>
  <div id="app" style="margin: 0; padding: 0;">
    <Navigation></Navigation>
    <PageHeader :background="content.bg"></PageHeader>
  <!--   <a href="https://blog.klimalisterlp.de/lucke-wahlen-gegen-lucke-im-klimaschutz/" target="_blank">
      <div class="article-special">
        <div class="preview" :style="{ 'background-image': `url('https://blog.klimalisterlp.de/content/images/size/w1100/2021/02/image0.png')` }" />
        <div class="description">
          <h3>WIR SIND WÄHLBAR</h3>
          <div class="text">
            Als wir am Freitag, den 5.02. die ersten Wahlzettel in der Hand hielten, wurden wir stutzig. In der ersten Spalte hinter dem Kreis zum Ankreuzen steht bei allen anderen Parteien und Wählervereinigungen die fett gedruckte Abkürzung (CDU, SPD…) oder auch der volle Titel (z.B. Tierschutzpartei)...
          </div>
        </div>
      </div>
    </a> -->
    <CandidatesPreview background="rgb(249, 249, 249)"></CandidatesPreview>
    <!--<SupportTutorial></SupportTutorial>-->    
    <SupportEasy background="rgb(36, 36, 36)"></SupportEasy>
    <LocalCandidatesApp></LocalCandidatesApp>
    <Spend></Spend>
    <!-- Calendar></Calendar -->
    <Blog></Blog>
    <hr />
    <!--<SupportTutorial></SupportTutorial>-->
    <Description background="#fff"></Description>
    <Overview background="#fff"></Overview>
    <QuotesView></QuotesView>
    <hr />

    <ProgramView></ProgramView>

    <!-- <Contribute></Contribute> -->
    <Contact></Contact>
    <PageFooter></PageFooter>
  </div>
</template>

<style scoped>
  hr {
    margin: 0;
    border-top: 1px solid rgb(223, 223, 223);
  }
  a {
    color: inherit;
    text-decoration: inherit;
  }
  .article-special {
    background-color: rgb(227, 227, 227);
    width: 100%;
    max-width: 500px;
    margin: auto;
    padding: 15px;
    margin: 20px auto;
    cursor: pointer;
  }
  .article-special .preview {
    width: 100%;
    background-position: center;
    background-size: cover;

    height: 250px;
  }
  .article-special .description {
    font-family: 'Montserrat', 'Helvetica', sans-serif;
  }
  .article-special .description h3 {

  }
  .article-special .description .text {
    font-weight: 300;
  }
</style>

<script>
  import Navigation from './components/Navigation.vue';
  import PageHeader from './components/PageHeader.vue';
  import CandidatesPreview from './components/CandidatesPreview.vue';
  import Description from './components/Description.vue';
  import Overview from './components/Overview.vue';
  import SupportEasy from './components/SupportEasy.vue';
  import QuotesView from './components/QuotesView.vue';
  import ProgramView from './components/ProgramView.vue';
  //import SupportTutorial from './components/SupportTutorial.vue';
  //import Contribute from './components/Contribute.vue';
  import Contact from './components/Contact.vue';
  import PageFooter from './components/Footer.vue';
  import Blog from './components/Blog.vue';
  //import Calendar from './components/Calendar.vue';

  import Spend from './components/Spend.vue';

  import LocalCandidatesApp from './components/LocalCandidatesApp.vue';

  import BackgroundHeaderImage from '../data/images/background_header_low.jpg';

  let ROOT_PATH = 'https://klimalisterlp.de';

  export default {
    name: 'Klimaliste',
    components: {
      PageHeader,
      CandidatesPreview,
      Description,
      Overview,
      SupportEasy,
      LocalCandidatesApp,
      Navigation,
      QuotesView,
      ProgramView,
      Blog,
      Spend,
      //Calendar,
      //SupportTutorial,
      //Contribute,
      Contact,
      PageFooter,

    },
    created() {
      document.body.style.margin = 0;

    },
    data() {
      return {
        spend: {
          current: 500
        },
        content: {
          bg: BackgroundHeaderImage
        },
        logo: ROOT_PATH + require('../public/images/opengraph/image.jpg')
      }
    },
    metaInfo() {

      return {
        meta: [
            // Twitter Card
            {
              name: 'twitter:card',
              content: 'Aktivist*innen & Wissenschaftler*innen - 2021 kannst du uns uns das 1,5-Grad-Ziel in die Parlamente wählen!'
            },
            {
              name: 'twitter:title',
              content: 'Klimaliste RLP'
            },
            {
              name: 'twitter:description',
              content: 'Aktivist*innen & Wissenschaftler*innen - 2021 kannst du uns uns das 1,5-Grad-Ziel in die Parlamente wählen!'
            },
            // image must be an absolute path
            {
              name: 'twitter:image',
              content: this.logo
            },
            // Facebook OpenGraph
            {
              property: 'og:title',
              content: 'Klimaliste RLP'
            },
            {
              property: 'og:site_name',
              content: 'Klimaliste RLP'
            },
            {
              property: 'og:type',
              content: 'website'
            },
            {
              property: 'og:image',
              content:  this.logo
            },
            {
              property: 'og:description',
              content: 'Aktivist*innen & Wissenschaftler*innen - 2021 kannst du uns uns das 1,5-Grad-Ziel in die Parlamente wählen!'
            }
        ]
      }
    }
  }
</script>
