<template>
  <div class="calendar-container">
    <h3>Kalender</h3>

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
  </div>
</template>

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
          {
            title: 'Interkulturelle Gesellschaft - Vielfalt leben!',
            location: 'Livestream',
            date: new Date('2021-02-12T18:00:00'),
            description: `Gemeinsam mit Menschen unterschiedlicher Herkunft und Kultur wollen wir über die Chancen und Herausforderungen einer interkulturellen Gesellschaft reden. Welche Herausforderungen galt es zu bewältigen und was waren besonders positive Erlebnisse von Wertschätzung? Jeder ist willkommen auf YouTube, Twitch oder Facebook mitzudiskutieren.`,
            actionLink: [{
              href: 'https://www.youtube.com/watch?v=NJ1TOVJaWlQ',
              label: 'YouTube LiveStream'
            },
            {
              href: 'https://www.twitch.tv/klimalisterlp',
              label: 'Twitch LiveStream'
            }]
          },
          {
            title: 'Landwirtschaft von morgen: der Schlüssel zu Klima- & Artenschutz?',
            location: 'Livestream',
            date: new Date('2021-02-15T18:00:00'),
            description: `Die Land-, Wein- & Forstwirtschaft sind die größten Leittragenden des Klimawandels. Gleichzeitig haben sie ein enormes Potential zur Lösung der Klimakrise und des Artensterbens beizutragen. Gemeinsam mit Joachim Böttcher, Vorsitzendem der Stiftung Lebensraum, und Franz Botens, Vorsitzendem des Imkerverbands, wollen wir über die Möglichkeiten und neue Formen der regenerativen Landwirtschaft sprechen.`,
            actionLink: [{
              href: 'https://www.youtube.com/watch?v=aW7FYgktQT0',
              label: 'YouTube LiveStream'
            },
            {
              href: 'https://www.twitch.tv/klimalisterlp',
              label: 'Twitch LiveStream'
            }]
          },
          {
            title: 'Offenes Bürger*innengespräch',
            location: 'Online Meeting',
            date: new Date('2021-02-16T19:00:00'),
            description: `Wieso haben wir uns gegründet? Was sind unsere Ziele? Was sagt die Wissenschaft zur Klimakrise? Sie haben Fragen oder Wünsche? Kommen Sie gerne auf uns zu!`,
            actionLink: [{
              href: 'https://zoom.us/j/95950134486?pwd=TEhnT3VNNDg0WFRwZE5TUW4rcUxzUT09',
              label: 'Anmeldung'
            }]
          },
          {
            title: 'Kreislaufwirtschaft im Bausektor',
            location: 'Livestream',
            date: new Date('2021-02-19T18:00:00'),
            description: `Der Bausektor verursacht einen hohen Ressourcenverbrauch und emittiert große Mengen an CO2. Mit Expert*innen aus Wissenschaft und Wirtschaft spricht unser Landtagskandidat Benjamin Kraff über Kreislaufwirtschaft und die Ökobilanzierung bei Bauprozessen.`,
            actionLink: [{
              href: 'https://www.youtube.com/watch?v=NhHHjtm_jCA',
              label: 'YouTube LiveStream'
            },
            {
              href: 'https://www.twitch.tv/klimalisterlp',
              label: 'Twitch LiveStream'
            }]
          },
          {
            title: 'Klimawandel in Rheinland-Pfalz - Auswirkungen und Chancen',
            location: 'Livestream',
            date: new Date('2021-02-22T18:00:00'),
            description: `Klimawandel bekämpfen? Wer bitte soll denn das bezahlen? Manche macht dieser Gedanke mutlos, doch es gibt Lösungen.  Unser Gast Ralf Wein berät Kommunen und Privatpersonen dabei klimaneutraler zu werden. Kurt Hähn, Landwirt und Inhaber des Bauernhofs „Scheidterhof“ berichtet über Änderungen auf dem Land. Ihn hat dies bewegt neue Wege zu gehen um die Zukunft positiv mitzugestalten.`,
            actionLink: [{
              href: 'https://www.youtube.com/channel/UC8Rg4hF5OfDKSaBW0kSqXzw',
              label: 'YouTube LiveStream'
            },
            {
              href: 'https://www.twitch.tv/klimalisterlp',
              label: 'Twitch LiveStream'
            }]
          },
          {
            title: 'Gesunde & inklusive Stadt?',
            location: 'Livestream',
            date: new Date('2021-02-26T18:00:00'),
            description: `Zu Gast: Landschafts-Archichtekt Dirk Schelhorn. Gemeinsam mit Benajmin Kraff und Mikio Weiß sprechen wir über Gesundheit, Klimaresilienz und die Frage: wie schaffen wir kühle Städte und verhindern Hitzetote?`,
            actionLink: [{
              href: 'https://www.youtube.com/watch?v=TtTnAySrZGU',
              label: 'YouTube LiveStream'
            },
            {
              href: 'https://www.twitch.tv/klimalisterlp',
              label: 'Twitch LiveStream'
            }]
          },/*
          {
            title: 'Transformation der Energiewirtschaft',
            location: 'Livestream',
            date: new Date('2021-03-01T18:00:00'),
            description: `Zu Gast: Prof. Claudia Kempfert Dt. Institut für Wirt.-forschung & LUL. Gemeinsam mit der Klimaliste BaWü sprechen wir über die Zukunft der Energie und welche Veränderungen es dringend braucht.`,
            actionLink: [{
              href: 'https://www.youtube.com/channel/UC8Rg4hF5OfDKSaBW0kSqXzw',
              label: 'YouTube'
            },
            {
              href: 'https://www.twitch.tv/klimalisterlp',
              label: 'Twitch LiveStream'
            }]
          },
          {
            title: 'Gute Zukunft für alle - Klimagerechtigkeit!',
            location: 'Livestream',
            date: new Date('2021-03-05T18:00:00'),
            description: `Zu Gast: Prof. Claudia Kempfert Dt. Institut für Wirt.-forschung & LUL. Gemeinsam mit unserer Landtagskandidatin Greta Waltenberg sprechen wir über Klimagerechtigkeit und die Frage, wie wir verschiedene soziale Kämpfe im Kampf gegen den Klimawandel vereinen.`,
            actionLink: [{
              href: 'https://www.youtube.com/channel/UC8Rg4hF5OfDKSaBW0kSqXzw',
              label: 'YouTube'
            },
            {
              href: 'https://www.twitch.tv/klimalisterlp',
              label: 'Twitch LiveStream'
            }]
          }*/
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
