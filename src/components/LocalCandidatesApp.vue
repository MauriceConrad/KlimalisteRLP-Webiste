<template>
  <div class="locals-app" data-nav-id="Locals">
    <h2>Direktkandidat*innen und Ansprechpartner*innen</h2>

    <div class="view-main">

      <div class="map-view">
        <svg width="100%" height="100%" viewBox="0 0 452 589" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" xmlns:ev="http://www.w3.org/2001/xml-events" style="overflow: hidden; ">

          <g>
            <g v-for="(local, index) in locals" :key="index" :style="{ transform: 'translate(' + local.translate.map(value => value + 'px').join(', ') + ')' }" class="local-area" :class="{ active: localIsActive(local) }" @click="handleLocalSelect(local)">
              <polyline v-for="(points, pointsListIndex) in local.points" :key="pointsListIndex" :points="points" :style="{ 'fill': getColor(local)[1], 'stroke': getColor(local)[0] }" />
            </g>
          </g>
        </svg>
      </div>
      <div class="data-view" v-if="activeLocal">
        <div class="data-header">
          <div class="avatar" :style="{ 'background-image': `url('${ activeLocal.candidate.avatar }')`, 'background-position': 'center 0%', 'border': '5px solid ' + getColor(activeLocal)[1] }">

          </div>
          <div class="title">
            <h3>{{ activeLocal.candidate.name }}</h3>
            <span class="description">{{ activeLocal.name }}</span>
          </div>
          <div class="type-label" :style="{ 'background-color': getColor(activeLocal)[1] }">
            {{ getLocalTypeLabel(activeLocal) }}
          </div>

        </div>
        <div class="article">
          <div class="description">
            ”{{ activeLocal.description }}”
          </div>
          <div class="links">
            <div v-for="(item, index) in activeLocal.links" :key="index" class="link-item">
              <a :href="item.href" style="color:inherit" target="_blank">{{ item.label }}</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>

  .type-label {
    display: inline-block;
    margin: 10px 0;
    color: #fff;
    padding: 6px 10px;
    border-radius: 20px;
    font-size: 0.7em;
  }
  .locals-app {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
  }
  h2 {
    text-align: center;

  }

  .view-main {
    width: 100%;
    height: 510px;
    display: flex;
  }
  @media screen and (max-width: 600px) {
    .view-main {
      display: block;
      height: auto;
    }
  }
  .data-view {
    flex: none;
    box-sizing: border-box;
    padding: 0 10px;
    text-align: center;
    overflow: scroll;
  }
  .map-view {
    flex: 1;
    height: 500px;
    padding: 20px 0;
    box-sizing: border-box;

  }
  .map-view svg {

  }
  @media screen and (max-width: 600px) {
    .map-view {
      flex: 1;
      height: 400px;
    }
  }


  .map-view .local-area {
    fill: #f5f5f5;
  }
  .map-view .local-area.active {
    fill: #0b99bf;
    stroke: #0a7c9a;
  }
  .map-view .local-area.active:hover {
    fill: #0d82a1;
    stroke: #0c718c;
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
    max-width: 450px;
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

  //console.log(LocalsDataset);

  export default {
    name: 'LocalCandidatesApp',
    data() {
      return {
        locals: LocalsDataset,
        activeLocal: null
      }
    },
    methods: {
      getLocalTypeLabel(local) {
        return new Map([
          ["candidate", "Kandidat*in"],
          ["support", "Unterstützer*in"],
          [undefined, ""]
        ]).get(local?.type);
      },
      getColor(local) {
        const colorCodes = new Map([
          ["none", () => {
            return ["#dedede", "#dedede"]
          }],
          ["candidate", () => {
            return ["#40865e", this.activeLocal == local ? "#458c63" : "#5ba279"];
          }],
          ["support", () => {
            return ["#2f6c8f", "#418ab4"];
          }]
        ]);
        return colorCodes.get(local.type)();
      },
      localIsActive(local) {
        return 'candidate' in local;
      },
      handleLocalSelect(local) {
        if (this.localIsActive(local)) {
          this.activeLocal = local;
          //console.log(this.activeLocal);
        }
      }
    },
    mounted() {
      //console.log(this.locals);
    }

  }
</script>
