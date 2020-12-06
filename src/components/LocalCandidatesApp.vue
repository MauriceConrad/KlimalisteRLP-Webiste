<template>
  <div class="locals-app" data-nav-id="Locals">
    <h2>Wahlkreise</h2>

    <div class="view-main">

      <div class="map-view">
        <svg width="100%" height="100%" viewBox="0 0 452 589" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" style="overflow: hidden; ">

          <g>
            <g v-for="(local, index) in locals" :key="index" :style="{ transform: 'translate(' + local.translate.map(value => value + 'px').join(', ') + ')' }" class="local-area" :class="{ active: localIsActive(local), current: local == activeLocal }" @click="handleLocalSelect(local)">
              <polyline v-for="(points, pointsListIndex) in local.points" :key="pointsListIndex" :points="points" />
            </g>
          </g>
        </svg>
      </div>
      <div class="data-view" v-if="activeLocal">
        <div class="data-header">
          <div class="avatar" :style="{ 'background-image': `url('${ activeLocal.candidate.avatar }')`, 'background-position': 'center 0%' }">

          </div>
          <div class="title">
            <h3>{{ activeLocal.candidate.name }}</h3>
            <span class="description">{{ activeLocal.name }}</span>
          </div>

        </div>
        <div class="article">
          <div class="description">
            ”{{ activeLocal.description }}”
          </div>
          <div class="links">
            <div v-for="(item, index) in activeLocal.links" :key="index" class="link-item">
              <a :href="item.href" target="_blank">{{ item.label }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .locals-app {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
  }
  h2 {
    text-align: center;

  }

  .view-main {
    width: 100%;
    height: 500px;
    display: flex;
    padding: 10px 0;
  }

  @media screen and (max-width: 600px) {
    .view-main {
      display: block;
      height: auto;
    }
  }

  @media screen and (min-width: 600px) {
    .view-main {
      height: 700px;
    }
  }

  .data-view {
    flex: none;
    box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
    overflow: scroll;
  }
  .data-view {
    scrollbar-width: none;  /* Firefox */
  }
  .data-view::-webkit-scrollbar {
    display: none;
  }
  .map-view {
    flex: 1;
    height: 500px;
  }
  @media screen and (max-width: 600px) {
    .map-view {
      flex: 1;
      height: 400px;
    }
  }

  .map-view .local-area {
    cursor: pointer;
  }



  .map-view .local-area {
    fill: #e0e0e0;
  }
  .map-view .local-area.active {
    fill: #0b99bf;
    stroke: #0a7c9a;
  }
  .map-view .local-area.active:hover {
    fill: #0d82a1;
    stroke: #0c718c;
  }
  .map-view .local-area.active.current {
    fill: #0d82a1;
    stroke: #086982;
  }



  .data-view .data-header {

  }
  .data-view .data-header .avatar {
    width: 200px;
    height: 200px;
    border-radius: 50%;
    background-size: cover;
    display: inline-block;
  }
  .data-view .data-header h3 {
    margin: 0;
  }
  .data-view .article {
    max-width: 300px;
    padding: 10px 0;
    box-sizing: border-box;


  }
  .data-view .article .description {

  }
  @media screen and (max-width: 600px) {
    .data-view .article {
      max-width: 100%;


    }
  }
  .data-view .article .description {
    padding: 0 10px;
    font-size: 0.8em;
    color: rgb(20, 20, 20);
    font-size: 1.1em;
    font-weight: 200;
  }

  .data-view .article .links {
    padding: 10px 0;
    font-size: 0.9em;
  }

</style>


<script>
  import LocalsDataset from '../../data/candidates/locals.js';

  console.log(LocalsDataset);

  export default {
    name: 'LocalCandidatesApp',
    data() {
      return {
        locals: LocalsDataset,
        activeLocal: null
      }
    },
    methods: {
      localIsActive(local) {
        return 'candidate' in local;
      },
      handleLocalSelect(local) {
        if (this.localIsActive(local)) {
          this.activeLocal = local;
          console.log(this.activeLocal);
        }
      }
    },
    mounted() {
      const defaultLocal = this.locals.find(local => (local.candidate?.name || "").search('Kaycee') > -1);
      this.handleLocalSelect(defaultLocal);
      //console.log(this.locals);
    }

  }
</script>
