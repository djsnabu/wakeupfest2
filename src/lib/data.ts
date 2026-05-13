import type { Speaker, Artist, Workshop, NavLink } from '@/types'

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
    description:
      'Annuska on haittojen vähentämisen ja huumepolitiikan uudistamisen puolestapuhuja. Hän käy rohkeaa ja tärkeää keskustelua päihdepolitiikasta ja huumeiden aiheuttamien haittojen ehkäisemisestä Suomessa.',
  },
  {
    id: 'heidi-sarina',
    name: 'Heidi & Sarina',
    handle: '@siskostentarina',
    topic: 'Kasvaminen päihteiden varjossa',
    description:
      'Heidi ja Sarina ovat sisaruksia, jotka kasvoivat päihderiippuvaisen vanhemman kanssa. He jakavat tarinansa siitä, kuinka haastavista lapsuuden kokemuksista voi rakentaa täyttä elämää.',
  },
  {
    id: 'tomi',
    name: 'Tomi Långstedt',
    topic: 'Vankina Thaimaassa',
    description:
      'Tomi Långstedtin omaelämäkerta "Vankina Thaimaassa" oli Suomen toiseksi myydyin kirja vuonna 2024. Hän joutui thaimaalaiseen vankilaan huumausaineiden hallussapidosta ja jakaa nyt tarinansa auttaakseen muita.',
  },
  {
    id: 'tuomo',
    name: 'Tuomo Kasanen "Veli Koo"',
    topic: 'Suomalainen miehuus & muutos',
    description:
      'Tuomo Kasanen, tunnettu nimellä Veli Koo, on suomalaisen miehuuden äänitorvi. Hän osoittaa omalla esimerkillään, kuinka haastavasta lähtökohdasta voi muuttua toisten inspiraatioksi.',
  },
  {
    id: 'anna',
    name: 'Anna Lindfors',
    topic: 'Aito yhteys toisiin ihmisiin',
    description:
      'Anna Lindfors on kansainvälinen psykologi ja seksuologi, joka tutkii ihmisten välistä yhteyttä hyvin erilaisissa ympäristöissä. Hän pohtii, miksi aito yhteys toiseen ihmiseen tuntuu nykypäivänä niin vaikealta.',
  },
  {
    id: 'tomas',
    name: 'Tomas Jouhilampi',
    topic: 'Väkivallan ehkäisy',
    description:
      'Tomas Jouhilampi on sanoSTOPväkivallalle-liikkeen perustaja. Hän sai vakavan aivovamman 15-vuotiaana ja toimii nyt väkivallattomuuden puolesta kasvattajana ja vaikuttajana.',
  },
]

export const artists: Artist[] = [
  {
    id: 'mansesteri',
    name: 'Mansesteri',
    origin: 'Tampere',
    genre: 'Indie Hip-Hop',
    description:
      'Tamperelainen indie hip-hop -yhtye, joka koostuu kokeneiden räppäreiden MC Manen ja Vainisin sekä DJ Kalun muodostamasta triosta. Yksi Suomen lahjakkaimmista omakustanneyhtyeistä.',
  },
  {
    id: 'nupe',
    name: 'Nupe',
    origin: 'Helsinki',
    genre: 'Hip-Hop / Melodinen räp',
    description:
      'Nouseva helsinkiläisartisti, jonka melodinen sound ja vahvat räppi-verseet ovat voittaneet faneja koko Suomessa. Tunnetaan tarttuvista kertosäkeistä ja tunteikkaasta ilmaisusta.',
  },
  {
    id: 'roman',
    name: 'Roman Aliev',
    origin: 'Suomi',
    genre: 'Pop',
    description:
      'Roman Aliev julkaisee suomen- ja venäjänkielistä poppia. Vuoden 2025 kappale "Milaja Moja" nousi suureen suosioon. Hän on myös aktiivinen TikTok- ja Instagram-vaikuttaja.',
  },
  {
    id: 'headliner',
    name: '???',
    origin: '',
    genre: '',
    description: 'Pääesiintyjä paljastetaan myöhemmin. Seuraa @wakeupfest_finland Instagramissa pysyäksesi ajan tasalla!',
    isHeadliner: true,
  },
]

export const workshops: Workshop[] = [
  {
    id: 'taide',
    title: 'Taidepaja',
    titleFi: 'Taidepaja – Luova ilmaisu',
    facilitator: 'Nea Ahlroth',
    description:
      'Luovuusfasilitaattori ja reiki-harjoittaja Nea Ahlroth johdattaa sinut luovan ilmaisun maailmaan. Meissä jokaisessa on jotain ainutlaatuista – taidepaja auttaa sen löytämisessä. Ei vaadi aiempaa kokemusta.',
    icon: 'Palette',
  },
  {
    id: 'jooga',
    title: 'Jooga',
    titleFi: 'Jooga – Keholle ja mielelle',
    facilitator: 'Irina Attias',
    description:
      'Irina Attias opettaa joogaa sekä fyysisenä harjoituksena että itseymmärryksen välineenä. Tunnit sopivat kaikille ikäryhmille ja kuntotasoille. Ei aiempaa kokemusta tarvita.',
    icon: 'Wind',
  },
  {
    id: 'nyrkkeily',
    title: 'Nyrkkeily',
    titleFi: 'Nyrkkeily – Voima & itsekuri',
    facilitator: 'Janne Rantanen',
    description:
      'Entinen ammattilaisnyrkkeiljä ja MMA-taistelija Janne Rantanen johtaa harjoituksen 29 vuoden kokemuksella. "Liike on lääke, sekä mielelle että keholle." Aloittelijat erityisen tervetulleita.',
    icon: 'Zap',
  },
  {
    id: 'kamppailulajit',
    title: 'Kamppailulajit',
    titleFi: 'Kamppailulajit – Thainyrkkeilytalli',
    facilitator: 'Chitalada Finland',
    description:
      'Chitalada Finland on yli 45 vuotta toiminut tamperelainen thainyrkkeilytalli. Tutustumisharjoitus sisältää thainyrkkeilyä, potkunyrkkeilyä ja Krav Magaa. Kaikki ovat tervetulleita.',
    icon: 'Shield',
  },
]

export const prohibitedItems = [
  'Kaikki päihteet',
  'Polkupyörät, skootterit ja rullalaudat',
  'Aseet (tuliaseet, terä-aseet, monikäyttövälineet)',
  'Räjähteet, ilotulitteet, soihdut ja laserit',
  'Lemmikkieläimet',
  'Lasipullot',
]

export const contacts = {
  tiina: { name: 'Tiina Kulo', email: 'kulotiina@gmail.com' },
  jonna: { name: 'Jonna Pihlajamäki', email: 'pihlajamakijonna@gmail.com' },
  instagram: '@wakeupfest_finland',
  instagramUrl: 'https://www.instagram.com/wakeupfest_finland',
}
