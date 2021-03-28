<template>
  <div class="calendar-container" data-nav-id="Veranstaltungen">
    <h3>Veranstaltungs-Kalender</h3>

    <div class="date-items">
      <ul>
        <li v-for="(eventItem, index) in calendar" :key="index">
          <div class="date-symbol">
            <div class="date-label">
              {{ getDateStr(eventItem.date).join(".") }}.
            </div>
            <div class="time-label">
              {{ getTimeStr(eventItem.date).join(":") }}
            </div>
          </div>
          <div class="event-description">
            <h4>{{ eventItem.title }}</h4>
            <div class="event-location">
              <div class="location-icon">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                  <g>
                    <path d="M256,0C161.896,0,85.333,76.563,85.333,170.667c0,28.25,7.063,56.26,20.49,81.104L246.667,506.5 c1.875,3.396,5.448,5.5,9.333,5.5s7.458-2.104,9.333-5.5l140.896-254.813c13.375-24.76,20.438-52.771,20.438-81.021 C426.667,76.563,350.104,0,256,0z M256,256c-47.052,0-85.333-38.281-85.333-85.333c0-47.052,38.281-85.333,85.333-85.333 s85.333,38.281,85.333,85.333C341.333,217.719,303.052,256,256,256z"/>
                  </g>
                </svg>
              </div>
              <div class="location-label">
                {{ eventItem.location }}
              </div>
            </div>
            <div class="event-article">
              {{ eventItem.description }}
            </div>
            <div class="actions" v-for="(link, index) in eventItem.actionLink" :key="index" >
              <a :href="link.href">
                {{ link.label }}
              </a>
            </div>
          </div>

        </li>
      </ul>
    </div>
    <div class="challange-description">
      <h3>Escape Room</h3>
      <p>
        Spitzenduo der Klimaliste RLP entführt und Klimaplan gelöscht! Wer kann das gewesen sein?
        <br>
        <a href="https://blog.klimalisterlp.de/spitzenduo-der-klimaliste-rlp-entfuhrt-wer-kann-sie-finden/" target="_blank">Was ist passiert?</a>
      </p>
      <div class="">
        <a href="https://tatortklimaplan.de/" target="_blank">
          <button class="btn">
            "Tatort Klimaplan"
          </button>
        </a>
      </div>
    </div>
  </div>
</template>

<style scoped>
  .challange-description {
  max-width: 800px;
  margin: 50px auto;
  text-align: center;
  }
  .btn {
  background-color: #4f9f76;
  color: #fff;
  border: none;
  border-radius: 4px;
  padding: 7px 15px;
  font-size: 1.2rem;
  }
</style>

<style scoped>
  .calendar-container {
    font-family: 'Montserrat', 'Helvetica Neue', 'Helvetica', sans-serif;
    color: #222;
    padding: 20px 0;
    background-color: rgb(252, 252, 252);
    border-top: 1px solid rgb(242, 242, 242);
  }
  h3 {
    text-align: center;
    font-size: 2.5em;
    margin: 5px 0 25px;
  }
  .date-items {

  }
  .date-items > ul {
    list-style: none;
    margin: 0;
    padding: 0;
    text-align: center;
  }
  .date-items > ul > li {
    display: inline-block;
    width: 250px;
    vertical-align: top;
  }
  .date-items > ul > li + li .event-description {
    border-left: 1px solid rgb(230, 230, 230);
  }
  @media screen and (max-width: 600px) {
    .date-items > ul > li {
      display: block;
      padding: 30px 0;
      width: 100%;
    }
    .date-items > ul > li + li .event-description {
      border-left: none;
    }
    .date-items > ul > li + li {
      border-top: 1px solid rgb(230, 230, 230);
    }
  }
  .date-items > ul > li .date-symbol {
    text-align: center;
    border: 1px solid #242424;
    border-radius: 50%;
    height: 160px;
    width: 160px;
    position: relative;
    margin: auto;
  }
  .date-items > ul > li .date-symbol .date-label  {
    font-weight: 700;
    font-size: 2.5em;
    position: absolute;
    left: 50%;
    top: 20%;
    transform: translateX(-50%);
  }
  .date-items > ul > li .date-symbol .time-label {
    font-size: 1.6em;
    font-weight: 200;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    bottom: 20%;
  }


  .event-description {
    padding: 0 15px;
  }

  .event-description > h4 {
    font-size: 1.2em;
    margin: 15px 0 0;
  }
  .event-description .event-location {
    margin: 20px 0;
    font-size: 0.9em;

  }
  .event-description .event-location .location-icon {
    display: inline-block;
    width: 20px;
    height: 20px;
    vertical-align: middle;
  }
  .event-description .event-location .location-label {

  }
  .event-description .event-location:before {
    vertical-align: middle;
    content: "";
    display: inline-block;
    width: 0;
    height: 100%;
  }
  .event-description .event-location .location-label {
    display: inline-block;
    vertical-align: middle;
  }
  .event-description .event-article {
    font-size: 0.9em;
    font-weight: 300;
  }
  .actions {
    margin: 10px 0 0;
    font-size: 0.9em;
  }
  .actions a {
    color: inherit;
    font-weight: 400;
    display: inline-block;

  }
</style>

<script>


  export default {
    name: "Calendar",
    data() {
      return {
        calendar: [
        ]
      }
    },
    methods: {
      getDateStr(date) {
        return [
          String(date.getDate()).padStart(2, '0'),
          ["01", "02", "03", "04", "05", "06", "07", "08", "09", "10", "11", "12"][date.getMonth()]
          //["Jan", "Feb", "Mär", "Apr", "Mai", "Jun", "Jul", "Aug", "Sep", "Okt", "Nov", "Dez"][date.getMonth()]
        ];
      },
      getTimeStr(date) {
        return [
          String(date.getHours()).padStart(2, '0'),
          String(date.getMinutes()).padStart(2, '0')
        ];
      }
    }
  }
</script>
