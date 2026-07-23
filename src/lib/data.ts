import type { Speaker, Artist, Workshop, Partner, NavLink, FaqItem } from '@/types'

export const ticketInfo = {
  bilettiEventUrl: 'https://biletti.fi/e/wake-up-fest-tampere',
  headline: 'Maksa mitä jaksat -liput',
  description:
    'Liput myydään Biletin kautta. Maksa mitä jaksat — kaikki tuotto menee tapahtuman kulujen kattamiseen ja kehittämiseen.',
}

export const venue = {
  name: 'Eteläpuisto',
  address: 'Eteläpuisto, 33200 Tampere',
  /** Short label for nav, footer, metadata */
  short: 'Eteläpuisto, 33200 Tampere',
  mapsEmbedSrc:
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3964.2!2d23.7618!3d61.4932!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x468edf70e8b5e375%3A0x4e1b9f5ad4b7f9b6!2sEtel%C3%A4puisto%2C%2033200%20Tampere!5e0!3m2!1sfi!2sfi!4v1700000000000',
}

export const navLinks: NavLink[] = [
  { href: '/', label: 'Etusivu' },
  { href: '/puhujat', label: 'Puhujat' },
  { href: '/artistit', label: 'Esiintyjät' },
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
    imagePosition: '72% 28%',
    description:
      'Annuska on tuonut esiin laajasti näkemyksiään päihdepolitiikasta, huumeisiin liittyvien haittojen ehkäisemisestä ja sosiaalisen tuen merkityksestä, sekä ollut mm. edistämässä kansalaisaloitetta käyttöhuoneista.\n\nDal Manson kaunistelematon työ on saanut usein huomiota myös mediassa, eri artikkeleissa.',
  },
  {
    id: 'tomi',
    name: 'Tomi Långstedt',
    topic: 'Vankina Thaimaassa',
    image: '/speakers/tomi-langstedt.jpg',
    imagePosition: '50% 32%',
    description:
      'Tomi on mielenterveys- ja päihdealalla työskentelevä lähihoitaja, suora ja rehellinen puhuja – joka toivoo tarinansa kautta voivansa auttaa edes yhtä ihmistä välttämään rikollisen elämän.\n\nLångstedt jäi vuonna 2014 Thaimaassa kiinni huumausaineiden hallussapidosta ja istui vuosia maan pahamaineisissa vankiloissa.\n\nVankina Thaimaassa (WSOY, 2024) oli vuoden 2024 toiseksi myydyin kirja Suomessa.',
  },
  {
    id: 'tuomo',
    name: 'Tuomo Kasanen "Veli Koo"',
    topic: 'Suomalainen miehuus & muutos',
    image: '/speakers/tuomo-kasanen.jpg',
    imagePosition: '50% top',
    description:
      'Tuomo "Veli Koo" Kasanen on suomalaisen miehuuden äänitorvi ja tabujen murskaamisen pioneeri. Kasanen on näyttänyt, että rosoinen katujätkä voi kasvaa elämässään täyteen potentiaaliin ja inspiroida muitakin matkalla muutokseen.',
  },
  {
    id: 'anna',
    name: 'Anna Lindfors',
    topic: 'Aito yhteys toisiin ihmisiin',
    image: '/speakers/anna-lindfors.jpg',
    description:
      'Lindfors on kansainvälisesti tunnustettu psykologi ja seksologi, joka on tutkinut yhteyden ja erillisyyden biologiaa ääriolosuhteissa — Brasilian vankiloista San Franciscon tekoälyeliitin huippupiireihin ja Stanfordin lavoille. Ja joka paikassa hän on törmännyt samaan ilmiöön: ihmiset ovat mestareita suorittamaan elämää, mutta vieraantuneita siitä, mitä he oikeasti tarvitsevat.\n\nAnna puhuu siitä, mistä harvoin uskalletaan puhua ääneen: miksi aito yhteys toiseen ihmiseen tuntuu niin vaikealta, mitä digimaailma tekee hermostollemme ja kyvyllemme kohdata toinen — ja ennen kaikkea, miten muutos alkaa.\n\nLindfors ei jätä sinua pohtimaan ongelmaa — hän jättää sinut uskomaan, että ratkaisu on jo sinussa.',
  },
  {
    id: 'tomas',
    name: 'Tomas Jouhilampi',
    topic: 'Väkivallan ehkäisy',
    image: '/speakers/tomas-jouhilampi.jpg',
    imagePosition: '50% 38%',
    description:
      'Tomas Jouhilammen tarina pysäyttää ja toimii esimerkkinä siitä, miten yksikin lyönti on liikaa.\n\nTomas oli vilkas lapsi – ja jo ala-asteella päihdeongelmainen. Hän hakeutui tappeluihin ja etsi konflikteja – pelkäämättä antaa osumaa saati ottaa sitä vastaan.\n\nOllessaan vasta 15-vuotias, Jouhilampi sai iskun, jota seurasi aivoverenvuoto, vaikea aivovamma ja toivottomat vuodet.\n\nNykyään Tomas puhuu väkivallattomuuden puolesta ja kiertää kertomassa tarinaansa kouluissa, yrityksissä ja tilaisuuksissa. Hän on myös sanoSTOPväkivallalle-liikkeen perustaja.',
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
    id: 'bilerumpali',
    name: 'Bilerumpali',
    handle: '@bilerumpali',
    profileUrl: 'https://www.instagram.com/bilerumpali/',
    origin: 'Suomi',
    genre: 'Live-rumpushow',
    image: '/artists/bilerumpali.jpg',
    imageFit: 'cover',
    imagePosition: '50% 20%',
    description:
      'Someilmiöksi noussut Bilerumpali saapuu Wake up festeille! Nyt olisikin tarjolla perinteisen DJ:n sijaan jotain kovempaa: BILERUMPALI – Armottomien bilettäjien märkä päiväuni.\n\nParin vuoden ajan yksityistilaisuuksissa huippuunsa hiottu konsepti kiertää livekeikoilla Suomen suvessa. Bilerumpali tekee keikasta elämyksen, jota et unohda. Kiihkeä liverummutus, käsittämätön groove ja tarttuvat hittibiisit.\n\nKaikki tämä yhdessä karismaattisen esiintymisen ja eläimellisen energian kanssa iskee niin, että yleisö laulaa, reivaa ja tanssii täysillä.\n\nOhjelmisto koostuu moderneista hiteistä ja rakastetuimmista klassikoista. Setissä soi sopivassa suhteessa pop, rap ja rock, jotta jokainen löytää tiensä tanssilattialle. Keikkaan sisältyy myös osio, jossa yleisö pääsee toivomaan Bilerumpalilta biisejä. Edes artisti itse ei voi tietää, mitä tuleman pitää.\n\nSomessa Bilerumpalin videot ovat keränneet parhaimmillaan yli miljoonaa näyttökertaa.',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/bilerumpali/' },
    ],
  },
  {
    id: 'mansesteri',
    name: 'Mansesteri',
    handle: '@mansesteriofficial',
    origin: 'Tampere',
    genre: 'Indie Hip-Hop',
    image: '/artists/mansesteri.jpg',
    imageFit: 'contain',
    imageBg: 'bg-gray-900',
    description:
      'Voiko olla tapahtumaa Tampereella ilman Mansesteria, eli tamperelaista – täysin itsenäistä hip-hop-yhtyettä?\n\nKonkariräppärit Mc Mane ja Vainis, sekä heidän virallinen keikka-DJ DJ Kalu tuovat vuosi toisensa jälkeen faneilleen uutta herkuteltavaa ja tie yhdeksi maamme kirkkaimmista omakustanneartisteista on ollut lähes tauottoman nousujohteista.',
  },
  {
    id: 'nupe',
    name: 'Nupe',
    origin: 'Helsinki',
    genre: 'Hip-Hop / Melodinen räp',
    image: '/artists/nupe.jpg',
    description:
      'Nupe on helsinkiläinen nouseva tähti, joka yhdistää melodisen soundin ja vahvat räppiverset. Kappaleissa korostuu tarttuvat kertosäkeet, vahva tunneilmaisu ja taitava dynamiikan hallinta, jotka nostavat hänet esille nykyräpin joukosta.\n\nNupe nousi laajempaan suosioon erityisesti kappaleillaan, jotka käsittelevät elämää Helsingin itäisissä kaupunginosissa.\n\n"Tunteeton" on yksi artistin striimatuimmista teoksista.',
  },
  {
    id: 'gold-t',
    name: 'Gold T',
    origin: 'Tampere / Akaa',
    genre: 'Melodinen trap / rap',
    image: '/artists/gold-t.jpg',
    imageFit: 'cover',
    imagePosition: '50% 50%',
    description: `Gold T on Tampereelta ja Akaasta ponnistanut artisti, jonka soundi liikkuu melodisen trapin ja rapin rajapinnalla. Tummasävytteistä, latautunutta musiikkia, jolla on selkeä suunta.

Tampere nostaa päätään suomalaisella musiikkikentällä ja Gold T on osa sitä aaltoa. Hän kääntää musiikissaan selkänsä sille väkivalta- ja huumekuvaston ihannoinnille, johon räpissä usein nojataan.

Juuri julkaistu Level Up EP on esimerkki siitä, mitä tason nostaminen hänelle tarkoittaa: millaisissa pöydissä istut ja millaisen puheen äärellä. Artisti on todennut: “Olen huomannut, että kyllä se on aika pirunmoinen level up olla puhumassa omasta tai kavereiden liiketoiminnasta kuin istua pöydässä missä jauhetaan paljonko pussiin laitetaan tai kuka on kuollut tai saanut turpaansa.”

Gold T:n kappaleet ammentavat aidoista elämäntarinoista ja livenä niiden energia kasvaa koko yleisön yhteiseksi kokemukseksi.`,
  },
  {
    id: 'roman',
    name: 'Roman Aliev',
    origin: 'Suomi',
    genre: 'Pop',
    image: '/artists/roman-aliev.jpg',
    imagePosition: '50% 22%',
    description:
      'Roman on nouseva artisti, joka julkaisee suomen- ja venäjänkielistä poppia, joista 2025 julkaistu "Milaja Moja" on saavuttanut huomattavaa suosiota.\n\nHän on myös somevaikuttaja & sisällöntuottaja – joka on aktiivinen etenkin TikTokissa ja Instagramissa.\n\nAliev on erityisesti nuorten suosiossa – tuottaen energistä, positiivista ja helposti lähestyttävää sisältöä.',
  },
  {
    id: 'lucy',
    name: 'Lucy Kautto',
    handle: '@naziawanjiru',
    origin: 'Suomi',
    genre: 'Tarinankertoja & artisti',
    image: '/speakers/lucy.jpg',
    description:
      'Lucy on tarinankertoja, artisti ja kokemusasiantuntija – joka toimii ammattilaisena lastensuojelun parissa.\n\nLucy yhdistää musiikin ja puheen vahvaksi tarinalliseksi kokonaisuudeksi, jossa käsitellään mm. lastensuojelua, rikoksia, päihteitä ja ihmismieltä. Hän avaa vaikeita teemoja, kuten narsismia, psykopatiaa ja yliseksuaalisuutta – rehellisesti, mutta nuorille ymmärrettävällä tavalla.\n\nLucyn tarina on sensuroimaton kuvaus elämästä, mutta samalla kertomus kuntoutumisesta, kasvusta ja suunnan muuttamisesta. Lucy elää nykyään päihteetöntä elämää ja tuo sekä omakohtaisen että ammatillisen näkökulmansa työhönsä nuorten kanssa. Tämä esitys herättää ajatuksia, tunteita ja keskustelua – ja ennen kaikkea näyttää muutoksen olevan mahdollista.',
  },
  {
    id: 'pike',
    name: 'DJ Justin Case / PIKE',
    handle: '@justpikee',
    profileUrl: 'https://lnk.bio/justpikee',
    origin: 'Sin City',
    genre: 'DJ & hybridiesitys',
    image: '/artists/pike.png',
    imagePosition: '72% 40%',
    description:
      'DJ Justin Case / PIKE on Sin Citystä tuttu DJ- ja esiintyjähahmo, joka tuo WakeUp Festiin DJ-vetoisen hybridiesityksen. Show rakentuu DJ-setin ympärille: mukana on klubienergiaa, omaa materiaalia, hostausta ja yleisön kanssa hetkessä elävää energiaa.\n\nYli 15 vuoden lavakokemus klubeilta, festareilta ja tapahtumista näkyy tavassa lukea yleisöä ja pitää ilta liikkeessä. Pike tunnetaan energisestä ja yleisön mukana elävästä keikkaotteesta: setti rakentuu yleisön kanssa. PIKE-artistipuoli tuo kokonaisuuteen oman äänen, omaa musiikkia ja suomenkielisen popin tarttumapinnan.\n\nKaikki sosiaalisen median kanavat löytyvät tunnisteella @justpikee.',
    links: [
      { label: 'Instagram', url: 'https://www.instagram.com/justpikee/' },
      { label: 'TikTok', url: 'https://www.tiktok.com/@justpikee' },
      { label: 'YouTube', url: 'https://www.youtube.com/@justpikee' },
      { label: 'Spotify', url: 'https://open.spotify.com/track/0uLSHFf36s9wUKA1yRY82H' },
      { label: 'Kaikki linkit', url: 'https://lnk.bio/justpikee' },
    ],
  },
  {
    id: 'sampo-joenvuori',
    name: 'Sampo Joenvuori',
    origin: '',
    genre: 'Improtanssi / katutanssi',
    image: '/artists/sampo-joenvuori.png',
    imageFit: 'cover',
    imagePosition: '50% 50%',
    description: `Sampo Joenvuori on ainutlaatuinen improtanssija, joka tuo tapahtuma-alueelle vahvaa läsnäoloa, tunnetta ja hetkessä syntyvää liikettä. Hänen erikoisosaamisensa on tanssia täysin vapaasti – mihin tahansa musiikkiin, tunnelmaan tai teemaan mukautuen.

WakeUp Festissä Sampo tanssii yleisesti alueella ja pitää rentoa workshop-henkistä tekemistä – ei virallisena workshopina, vaan vapaana kohtaamisena liikkeen kautta.

Jokainen esitys on uniikki. Sampo ei toista valmiita koreografioita, vaan luo liikkeen suoraan hetkestä, musiikista ja yleisön energiasta. Tämä tekee esityksistä eläviä, koskettavia ja unohtumattomia.`,
  },
]

export const workshops: Workshop[] = [
  {
    id: 'jooga',
    title: 'Jooga',
    titleFi: 'Jooga',
    facilitator: 'Irina Attias',
    image: '/workshops/jooga-irina-attias.jpg',
    imageFit: 'cover',
    imagePosition: '50% 28%',
    description:
      'on joogaopettaja ja yrittäjä, jolle jooga on fyysisen harjoituksen lisäksi ollut tärkeä itsetuntemuksen väline. Irina opettaa joogaa tällä hetkellä Vantaalla, Hämeenlinnassa ja Tampereella.\n\nOpettajana Irina on kiinnostunut erityisesti jokaisen yksilön oman kehon reaktiosta harjoitukseen.\n\nIrina on lempeä ohjaaja - auttaen oivaltamaan & ymmärtämään hermoston toimintaa ja tilaa.\n\nTyöpaja soveltuu kaiken ikäisille ja tasoisille!',
    icon: 'Wind',
  },
  {
    id: 'nyrkkeily',
    title: 'Nyrkkeily',
    titleFi: 'Nyrkkeily',
    facilitator: 'Janne Rantanen',
    image: '/workshops/janne-rantanen.jpg',
    imageFit: 'cover',
    imagePosition: '50% 22%',
    description:
      'on entinen ammattinyrkkeilijä ja vapaaottelija, jolla on kaiken kaikkiaan 29 vuoden kokemus eri kamppailulajeista, mm. Sin moo hapkidosta, Brasilian jujutsusta, lukkopainista, vapaaottelusta sekä ammattinyrkkeilystä.\n\nKilpailutaustaa näissä lajeissa 26 vuoden ajalta. Janne lopetti kilpauransa noin kolme vuotta sitten ja nykyään harjoittelee omaksi ilokseen, sekä valmentaa muita.\n\n"Liike on lääke, sekä mielelle että kropalle"\n\nTyöpajaan voit osallistua ilman aiempaa taustaa nyrkkeilystä!',
    icon: 'Zap',
  },
  {
    id: 'kamppailulajit',
    title: 'Kamppailulajit',
    titleFi: 'Kamppailulajit',
    facilitator: 'Chitalada Finland',
    image: '/workshops/chitalada-finland.jpg',
    imageFit: 'contain',
    imageBg: 'bg-[#0f1a4d]',
    description:
      'on perinteinen tamperelainen kamppailu-urheiluseura, joka on toiminut menestyksekkäästi jo yli 48 vuoden ajan.\n\nSeuran lajitarjontaan sisältyy thainyrkkeily (Muaythai), potkunyrkkeily, Krav Maga (itsepuolustus), Naisten Kuntothai ja Junnuthai.\n\nChitalada Finland on tunnettu laadukkaasta sekä monipuolisesta opetuksesta ja harjoittelusta.\n\nSeuran kilpailijat ovat voittaneet sekä amatööreissä että ammattilaisissa mm. useita maailmanmestaruuksia, Euroopan mestaruuksia, Pohjoismaiden mestaruuksia ja Suomen mestaruuksia. Lisäksi myös mm. Thaimaan stadionien mestaruuksia ja World Combat Games -kultaa.\n\nSuurin osa seuran harrastajista on mukana kuitenkin pelkästään kuntoilumielellä, ja harjoittelu sopiikin erinomaisesti kaikille ikään ja sukupuoleen katsomatta.\n\nAmmattitaitoinen opetus takaa jokaiselle harrastajalle turvallisen ja mukavan harjoittelun!\n\nLisätiedot: www.chitalada.com\n\nTyöpajaan voit osallistua ilman aiempaa taustaa kamppailulajeista!',
    icon: 'Shield',
  },
  {
    id: 'valona-wellness',
    title: 'Liikuntaa ja hyvää fiilistä',
    titleFi: 'Liikuntaa ja hyvää fiilistä',
    facilitator: 'Valona Wellness',
    url: 'https://valonawellness.fi/',
    image: '/workshops/valona-wellness.png',
    imageFit: 'contain',
    imageBg: 'bg-[#f6f3ef]',
    description: `Meidän pisteellämme pääset kokeilemaan erilaisia hauskoja liikuntahaasteita yksin ja kaverin kanssa. Ei tarvitse olla ennätyskunnossa vaan tärkeintä on fiilis ja yhdessä tekeminen! Päivän aikana kerätään pisteitä, ja parhaat palkitaan illalla.

Valona Wellness on tamperelainen hyvinvointibrändi, joka tarjoaa liikuntapalveluita yksilöille, ryhmille sekä tilauksesta yrityksille ja yhteisöille. Tervetuloa juttelemaan lisää ja kokeilemaan omat rajasi!`,
    icon: 'Activity',
  },
  {
    id: 'glitteritytot',
    title: 'Glitterimeikit',
    titleFi: 'Glitterimeikit',
    facilitator: 'Glitteritytöt / Beauty Lounge Viva',
    image: '/workshops/glitteritytot.jpeg',
    imageFit: 'cover',
    imagePosition: '50% 48%',
    description: `Me ollaan Glitteritytöt, pitkän linjan kauneusalan ammattilaisia. Työskentelemme Beauty Lounge Vivassa Lahdessa.

Rakastamme meikata ja ehostaa ihmisiä, minkä vuoksi meidät löytääkin kesäisin festareilta siveltimien varresta tekemästä glitterimeikkejä. ✨🩷

Nähdään Tampereella Wake Up festareilla!

Terkuin Eeva, Vilma ja Natalie`,
    icon: 'Sparkles',
  },
  {
    id: 'ensiapusi',
    title: 'Päihdemyrkytyksen ensiapu & pop up -piste',
    titleFi: 'Päihdemyrkytyksen ensiapu & pop up -piste',
    facilitator: 'EnsiApusi',
    url: 'https://www.ensiapusi.com/',
    image: '/workshops/ensiapusi.png',
    imageFit: 'contain',
    imageBg: 'bg-white',
    description: `EnsiApusi-pisteellä opit päihdemyrkytysten ensiapua käytännönläheisesti.

Päivän aikana järjestetään viisi 20 minuutin minikoulutusta päihdemyrkytyksen ensiavusta ja tajuttomuudesta. Koulutukseen sisältyy lyhyt luento ja kylkiasentoon kääntämisen harjoittelua. Ennakkoilmoittautumista ei tarvita, ja mukaan mahtuu 15 osallistujaa kerrallaan.

Pisteellä voit osallistua QR-koodilla tietovisaan ja arvontaan. Voittaja arvotaan klo 21.30. Lisäksi voit testata tietosi TOTTA/TARUA-pelissä klo 21 asti. Nopeimmat palkitaan festareiden selviytyjäpaketilla ja pienillä ensiapulaukuilla.

Pisteeltä saat myös henkilökohtaisen alekoodin EnsiApusi-verkkokursseille.`,
    icon: 'HeartPulse',
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
    id: 'hameenpuisto-arvokulta',
    name: 'Hämeenpuisto Arvokulta',
    image: '/partners/hameenpuisto-arvokulta.png',
    alt: 'Hämeenpuisto Arvokulta -logo',
    url: 'https://suomenarvokulta.fi/',
    variant: 'light',
    imageClassName: 'h-14 w-full max-w-[220px] object-contain sm:h-16',
  },
  {
    id: 'helmi-metsa',
    name: 'Helmimetsän Oy',
    image: '/partners/partner-round.png',
    alt: 'Helmimetsä-logo',
    url: 'https://www.helmimetsa.fi/',
    variant: 'light',
    imageClassName: 'h-20 w-full max-w-[240px] object-contain sm:h-24',
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
    id: 'tonokahvila',
    name: 'Tönökahvila',
    image: '/partners/tonokahvila.png',
    alt: 'Tönökahvila Cafe & Bar -logo',
    url: 'https://www.tonokahvila.com/',
    variant: 'light',
    imageClassName: 'h-20 w-full max-w-[200px] object-contain sm:h-24',
  },
  {
    id: 'biletti',
    name: 'Biletti.fi',
    image: '/partners/biletti.png',
    alt: 'Biletti.fi -logo',
    url: 'https://biletti.fi/',
    variant: 'light',
    imageClassName: 'h-12 w-full max-w-[160px] object-contain sm:h-16',
  },
  {
    id: 'niceevents',
    name: 'Nice Events',
    image: '/partners/niceevents.png',
    alt: 'Nice Events -logo',
    url: 'https://niceevents.fi/',
    variant: 'light',
    imageClassName: 'h-12 w-full max-w-[200px] object-contain sm:h-16',
  },
  {
    id: 'jpj-palvelut',
    name: 'JPJ Palvelut',
    image: '/partners/jpj-palvelut.png',
    alt: 'JPJ Palvelut -logo',
    url: 'https://jpjpalvelut.com/',
    variant: 'light',
    imageClassName: 'h-12 w-full max-w-[160px] object-contain sm:h-16',
  },
  {
    id: 'viihdekeskus-crazy',
    name: 'Viihdekeskus Crazy',
    image: '/partners/crazy.png',
    alt: 'Viihdekeskus Crazy -logo',
    url: 'https://www.viihdekeskuscrazy.fi/',
    variant: 'light',
    imageClassName: 'h-20 w-full max-w-[220px] object-contain sm:h-24',
  },
  {
    id: 'spacebowling',
    name: 'Space Bowling & Billiards',
    image: '/partners/spacebowling.png',
    alt: 'Space Bowling & Billiards -logo',
    url: 'https://spacebowling.fi/',
    variant: 'light',
    imageClassName: 'h-20 w-full max-w-[220px] object-contain sm:h-24',
  },
  {
    id: 'juhlatelttavuokraus',
    name: 'Juhlatelttavuokraus.com',
    image: '/partners/juhlatelttavuokraus.png',
    alt: 'Juhlatelttavuokraus.com -logo',
    url: 'https://www.juhlatelttavuokraus.com/',
    variant: 'dark',
    imageClassName: 'h-14 w-full max-w-[240px] object-contain sm:h-16',
  },
  {
    id: 'suomen-rannekekauppa',
    name: 'Suomen Rannekekauppa',
    image: '/partners/rannekekauppa.png',
    alt: 'Suomen Rannekekauppa -logo',
    url: 'https://www.rannekekauppa.fi/',
    variant: 'light',
    imageClassName: 'h-14 w-full max-w-[220px] object-contain sm:h-16',
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
    answer: `Wake Up fest järjestetään 28.7.2026 tiistaina klo 15–22. Paikkana ${venue.address}, Tampere.`,
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
