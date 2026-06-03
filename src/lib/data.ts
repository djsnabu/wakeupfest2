import type { Speaker, Artist, Workshop, Partner, NavLink, FaqItem } from '@/types'

export const ticketInfo = {
  bilettiEventUrl: 'https://biletti.fi/e/wake-up-fest-tampere',
  headline: 'Maksa mitä jaksat -liput',
  description:
    'Liput myydään Biletin kautta. Maksa mitä jaksat — kaikki tuotto menee tapahtuman kulujen kattamiseen ja kehittämiseen.',
}

export const venue = {
  nameEn: 'Southern Park',
  nameFi: 'Eteläpuisto',
  address: 'Eteläpuisto, 33200 Tampere, Finland',
  /** Short label for nav, footer, metadata */
  short: 'Eteläpuisto, 33200 Tampere',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2!2d23.7618!3d61.4932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf70e8b5e375%3A0x4e1b9f5ad4b7f9b6!2sEtel%C3%A4puisto%2C%2033200%20Tampere!5e0!3m2!1sfi!2sfi!4v1700000000000',
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Etusivu' },
  { href: '/puhujat', label: 'Puhujat' },
  { href: '/artistit', label: 'Artistit' },
  { href: '/workshopit', label: 'Workshopit' },
  { href: '/tapahtumatiedot', label: 'Tapahtumainfo' },
  { href: '/kumppanuudet', label: 'Yhteistyökumppanuus' },
  { href: '/vapaaehtoiset', label: 'Vapaaehtoiset' },
  { href: '/turvallisuus', label: 'Turvallisuus' },
]

export const speakers: Speaker[] = [
  {
    id: 'annuska',
    name: 'Annuska Dal Maso',
    topic: 'Haittojen vähentäminen',
    image: '/speakers/annuska-dal-maso.jpg',
    description:
      'Annuska on haittojen vähentämisen ja huumepolitiikan uudistamisen puolestapuhuja. Hän käy rohkeaa ja tärkeää keskustelua päihdepolitiikasta ja huumeiden aiheuttamien haittojen ehkäisemisestä Suomessa.',
  },
  {
    id: 'tomi',
    name: 'Tomi Långstedt',
    topic: 'Vankina Thaimaassa',
    image: '/speakers/tomi-langstedt.jpg',
    imagePosition: '50% 32%',
    description:
      'Tomi Långstedtin omaelämäkerta "Vankina Thaimaassa" oli Suomen toiseksi myydyin kirja vuonna 2024. Hän joutui thaimaalaiseen vankilaan huumausaineiden hallussapidosta ja jakaa nyt tarinansa auttaakseen muita.',
  },
  {
    id: 'tuomo',
    name: 'Tuomo Kasanen "Veli Koo"',
    topic: 'Suomalainen miehuus & muutos',
    image: '/speakers/tuomo-kasanen.jpg',
    description:
      'Tuomo Kasanen, tunnettu nimellä Veli Koo, on suomalaisen miehuuden äänitorvi. Hän osoittaa omalla esimerkillään, kuinka haastavasta lähtökohdasta voi muuttua toisten inspiraatioksi.',
  },
  {
    id: 'anna',
    name: 'Anna Lindfors',
    topic: 'Aito yhteys toisiin ihmisiin',
    image: '/speakers/anna-lindfors.jpg',
    description:
      'Anna Lindfors on kansainvälinen psykologi ja seksuologi, joka tutkii ihmisten välistä yhteyttä hyvin erilaisissa ympäristöissä. Hän pohtii, miksi aito yhteys toiseen ihmiseen tuntuu nykypäivänä niin vaikealta.',
  },
  {
    id: 'tomas',
    name: 'Tomas Jouhilampi',
    topic: 'Väkivallan ehkäisy',
    image: '/speakers/tomas-jouhilampi.jpg',
    imagePosition: '50% 38%',
    description:
      'Tomas Jouhilampi on sanoSTOPväkivallalle-liikkeen perustaja. Hän sai vakavan aivovamman 15-vuotiaana ja toimii nyt väkivallattomuuden puolesta kasvattajana ja vaikuttajana.',
  },
  {
    id: 'lucy',
    name: 'Lucy Kautto',
    topic: 'Tarinankertoja & kokemusasiantuntija',
    image: '/speakers/lucy.jpg',
    description: `Lucy Kautto – tarinankertoja, artisti ja kokemusasiantuntija, joka toimii myös kokemusasiantuntijana ja ammattilaisena lastensuojelun parissa.

Lucy yhdistää musiikin ja puheen vahvaksi tarinalliseksi kokonaisuudeksi, jossa käsitellään muun muassa lastensuojelua, rikoksia, päihteitä ja ihmismieltä. Hän avaa myös vaikeita teemoja, kuten narsismia, psykopatiaa ja yliseksuaalisuutta – rehellisesti, mutta nuorille ymmärrettävällä tavalla.

Hänen tarinansa ei ole siloteltu tai kaunisteltu. Se on sensuroimaton kuvaus elämästä, mutta samalla kertomus kuntoutumisesta, kasvusta ja suunnan muuttamisesta. Lucy elää nykyään päihteetöntä elämää ja tuo sekä omakohtaisen että ammatillisen näkökulmansa työhönsä nuorten kanssa.

Tämä esitys herättää ajatuksia, tunteita ja keskustelua – ja ennen kaikkea näyttää, että muutos on mahdollinen.`,
  },
  {
    id: 'viivi-back',
    name: 'Viivi Bäck',
    topic: 'Itsekunnioituksen avaimet',
    image: '/speakers/viivi-back.jpg',
    description:
      'Viivi Bäck on Suomen Terveysratkaisut Oy:n perustaja, holistisen hyvinvoinnin asiantuntija, valmentaja ja puhuja. Hän auttaa ihmisiä vahvistamaan itsetuntemustaan ja elämänhallintaansa sekä vapautumaan traumoista. WakeUpfestissä hän pitää luennon itsekunnioituksen avaimista.',
  },
]

export const artists: Artist[] = [
  {
    id: 'mansesteri',
    name: 'Mansesteri',
    origin: 'Tampere',
    genre: 'Indie Hip-Hop',
    image: '/artists/mansesteri.jpg',
    description:
      'Tamperelainen indie hip-hop -yhtye, joka koostuu kokeneiden räppäreiden MC Manen ja Vainisin sekä DJ Kalun muodostamasta triosta. Yksi Suomen lahjakkaimmista omakustanneyhtyeistä.',
  },
  {
    id: 'nupe',
    name: 'Nupe',
    origin: 'Helsinki',
    genre: 'Hip-Hop / Melodinen räp',
    image: '/artists/nupe.jpg',
    description:
      'Nouseva helsinkiläisartisti, jonka melodinen sound ja vahvat räppi-verseet ovat voittaneet faneja koko Suomessa. Tunnetaan tarttuvista kertosäkeistä ja tunteikkaasta ilmaisusta.',
  },
  {
    id: 'roman',
    name: 'Roman Aliev',
    origin: 'Suomi',
    genre: 'Pop',
    image: '/artists/roman-aliev.jpg',
    imagePosition: '50% 22%',
    description:
      'Roman Aliev julkaisee suomen- ja venäjänkielistä poppia. Vuoden 2025 kappale "Milaja Moja" nousi suureen suosioon. Hän on myös aktiivinen TikTok- ja Instagram-vaikuttaja.',
  },
]

export const workshops: Workshop[] = [
  {
    id: 'jooga',
    title: 'Jooga',
    titleFi: 'Jooga – Keholle ja mielelle',
    facilitator: 'Irina Attias',
    image: '/workshops/jooga-irina-attias.jpg',
    imageFit: 'cover',
    imagePosition: '50% 28%',
    description:
      'Irina Attias on joogaopettaja ja yrittäjä, jolle jooga on fyysisen harjoituksen lisäksi ollut tärkeä itsetuntemuksen väline. Hän opettaa joogaa tällä hetkellä Vantaalla, Hämeenlinnassa ja Tampereella. Opettajana Irina on kiinnostunut erityisesti jokaisen yksilön oman kehon reaktiosta harjoitukseen. Irina on lempeä ohjaaja – auttaen oivaltamaan ja ymmärtämään hermoston toimintaa ja tilaa. Työpaja soveltuu kaiken ikäisille ja tasoisille!',
    icon: 'Wind',
  },
  {
    id: 'nyrkkeily',
    title: 'Nyrkkeily',
    titleFi: 'Nyrkkeily – Voima & itsekuri',
    facilitator: 'Janne Rantanen',
    image: '/workshops/janne-rantanen.jpg',
    imageFit: 'cover',
    imagePosition: '50% 22%',
    description:
      'Janne Rantanen on entinen ammattinyrkkeilijä ja vapaaottelija, jolla on kaiken kaikkiaan 29 vuoden kokemus eri kamppailulajeista, mm. Sin moo hapkidosta, Brasilian jujutsusta, lukkopainista, vapaaottelusta sekä ammattinyrkkeilystä. Kilpailutaustaa näissä lajeissa 26 vuoden ajalta. Janne lopetti kilpauransa noin kolme vuotta sitten ja nykyään harjoittelee omaksi ilokseen sekä valmentaa muita. "Liike on lääke, sekä mielelle että kropalle." Työpajaan voit osallistua ilman aiempaa taustaa nyrkkeilystä!',
    icon: 'Zap',
  },
  {
    id: 'kamppailulajit',
    title: 'Kamppailulajit',
    titleFi: 'Kamppailulajit – Thainyrkkeilytalli',
    facilitator: 'Chitalada Finland',
    image: '/workshops/chitalada-finland.jpg',
    imageFit: 'contain',
    imageBg: 'bg-[#0f1a4d]',
    description:
      'Chitalada Finland on perinteinen kamppailu-urheiluseura, joka on toiminut Tampereella yli 45 vuoden ajan. Seuran lajitarjontaan sisältyy Thainyrkkeily (Muaythai), potkunyrkkeily, Krav Maga (itsepuolustus). Työpajaan voit osallistua ilman aiempaa taustaa kamppailulajeista!',
    icon: 'Shield',
  },
]

export const partners: Partner[] = [
  {
    id: 'worknow',
    name: 'Worknow',
    image: '/partners/worknow.png',
    alt: 'Worknow-logo',
    url: 'https://worknow.fi/',
    variant: 'light',
  },
  {
    id: 'sj-saumaus',
    name: 'SJ-Saumaus Oy',
    image: '/partners/sj-saumaus.png',
    alt: 'SJ-Saumaus Oy -logo',
    variant: 'light',
  },
  {
    id: 'chitalada-finland',
    name: 'Chitalada Finland',
    image: '/partners/chitalada-finland.jpg',
    alt: 'Chitalada Finland -logo',
    variant: 'light',
  },
  {
    id: 'fiksupinta',
    name: 'Fiksupinta',
    image: '/partners/fiksupinta.png',
    alt: 'Fiksupinta-logo',
    url: 'https://fiksupinta.fi/',
    variant: 'light',
  },
  {
    id: 'biletti',
    name: 'Biletti.fi',
    image: '/partners/biletti.png',
    alt: 'Biletti.fi -logo',
    url: 'https://biletti.fi',
    variant: 'light',
  },
  {
    id: 'nice-events',
    name: 'Nice Events',
    image: '/partners/nice-events.png',
    alt: 'Nice Events -logo',
    url: 'https://www.niceevents.fi',
    variant: 'light',
  },
]

export const prohibitedItems = [
  'Alkoholituotteet ja muut huumaavat aineet',
  'Polkupyörät, skeittilaudat, potkulaudat',
  'Ampuma-, terä- ja lyömäaseet, monitoimityökalut',
  'Räjähteet, ilotulitteet, soihdut, laserit',
  'Lemmikit',
  'Lasipullot',
]

export const faqItems: FaqItem[] = [
  {
    id: 'when-where',
    question: 'Missä ja milloin Wake Up fest järjestetään?',
    answer: `Wake Up fest järjestetään 28.7.2026 tiistaina klo 15–22. Paikkana ${venue.nameEn} (${venue.nameFi}), ${venue.address}.`,
  },
  {
    id: 'tickets',
    question: 'Milloin lipunmyynti alkaa ja mistä lippuja voi ostaa?',
    answer: `${ticketInfo.description}`,
    externalHref: ticketInfo.bilettiEventUrl,
    externalLabel: 'Hanki liput Biletti.fi',
  },
  {
    id: 'age',
    question: 'Onko tapahtumaan ikäraja?',
    answer:
      'Wake Up fest on ikärajaton, kohderyhmänä erityisesti nuoret ja aikuiset.',
  },
  {
    id: 'lost-found',
    question: 'Mitä jos hukkaan tapahtumassa jotain?',
    answer:
      'Tapahtuman jälkeen löytötavarat toimitetaan Pirkanmaan löytötavaratoimistoon. Suvantokatu 10, 33100 Tampere. Ovet avoinna: Ma–Ke, Pe 11–17. Puhelinpalvelu: Ma 9–17, Ti–Ke, Pe 10–17.',
    externalHref: 'https://www.plt.fi/',
    externalLabel: 'www.plt.fi',
  },
  {
    id: 're-entry',
    question: 'Voiko alueelta poistua / palata takaisin kesken kaiken?',
    answer: 'Kyllä voi.',
  },
  {
    id: 'prohibited',
    question: 'Mitä en saa tuoda tapahtuma-alueelle?',
    answer: 'Kaikki turvallisuuteen liittyvä info löytyy täältä:',
    linkHref: '/turvallisuus',
    linkLabel: 'Turvallisuus',
  },
]

export const contacts = {
  tiina: { name: 'Tiina Kulo', email: 'kulotiina@gmail.com' },
  jonna: { name: 'Jonna Pihlajamäki', email: 'pihlajamakijonna@gmail.com' },
  instagram: '@wakeupfest_finland',
  instagramUrl: 'https://www.instagram.com/wakeupfest_finland',
}
