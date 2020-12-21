const { parse } = require('node-html-parser');
const pretty = require('pretty');
const fs = require('fs');

const meta = [
  {
    name: 'twitter:title',
    content: 'Klimaliste RLP'
  },
  {
    name: 'twitter:description',
    content: 'Klimaschützer*innen & Wissenschaftler*innen - 2021 kannst du uns und das 1,5°C-Ziel in den Landtag wählen!'
  },
  {
    name: 'twitter:image',
    content: 'https://klimalisterlp.de/images/opengraph/image.jpg'
  },
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
    content: 'https://klimalisterlp.de/images/opengraph/image.jpg'
  },
  {
    property: 'og:description',
    content: 'Klimaschützer*innen & Wissenschaftler*innen - 2021 kannst du uns und das 1,5°C-Ziel in den Landtag wählen!'
  },
];

function htmlEntities(str) {
  return String(str).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');
}

const targetFile = __dirname + '/dist/index.html';


fs.readFile(targetFile, 'utf8', (err, contents) => {
  if (err) return console.error(err);

  const root = parse(contents);
  const head = root.querySelector('head');

  for (let metaDescriptor of meta) {
    const newMetaElement = parse('<meta ' + Object.entries(metaDescriptor).map(entry => entry[0] + '="' + htmlEntities(entry[1]) + '"').join(' ') + '>').childNodes[0];
    head.appendChild(newMetaElement);
  }

  const newHtmlStr = root.toString();
  const strPrettified = pretty(newHtmlStr);

  fs.writeFile(targetFile, strPrettified, function(err) {
    if (err) return console.error(err);
    console.log("Successfully inserted meta tag!");
  });

});
