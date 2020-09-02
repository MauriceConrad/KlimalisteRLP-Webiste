<template>
  <div id="app" style="margin: 0; padding: 0;">
    <Navigation></Navigation>
    <PageHeader :background="content.bg"></PageHeader>
    <CandidatesPreview background="rgb(249, 249, 249)"></CandidatesPreview>
    <hr />
    <Description background="#fff"></Description>
    <Overview background="#fff"></Overview>
    <SupportEasy background="rgb(36, 36, 36)"></SupportEasy>
    <QuotesView></QuotesView>
    <ProgramView></ProgramView>
    <SupportTutorial></SupportTutorial>
    <Contribute></Contribute>
    <Contact></Contact>
  </div>
</template>

<style>
  hr {
    margin: 0;
    border-top: 1px solid rgb(223, 223, 223);
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
  import SupportTutorial from './components/SupportTutorial.vue';
  import Contribute from './components/Contribute.vue';
  import Contact from './components/Contact.vue';

  import BackgroundHeaderImage from '../data/images/background_header_low.jpg';

  export default {
    name: 'Klimaliste',
    components: {
      PageHeader,
      CandidatesPreview,
      Description,
      Overview,
      SupportEasy,
      Navigation,
      QuotesView,
      ProgramView,
      SupportTutorial,
      Contribute,
      Contact
    },
    created() {
      document.body.style.margin = 0;

    },
    data() {
      return {
        content: {
          bg: BackgroundHeaderImage
        }
      }
    }
  }
</script>
