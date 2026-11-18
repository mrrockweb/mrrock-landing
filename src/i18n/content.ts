// Page copy for both languages. Source: docs/tartalom-hu.md (client copy); EN is a faithful translation.

export type Lang = 'hu' | 'en';

// Placeholders until the client sends them (see CLAUDE.md Cserelista).
export const contact = {
  phoneDisplay: '+36 XX XXX XXXX',
  phoneHref: 'tel:+36000000000',
  email: 'info@mrrock.hu',
  address: '1083 Budapest, Jázmin utca 16.',
};

export const company = {
  legalName: '“Mr. Rock” Építő és Szolgáltató Korlátolt Felelősségű Társaság',
  shortName: '“Mr. Rock” Kft.',
  taxNumber: '25425149-2-42',
  registry: 'Cg. 01-09-274418',
};

export type ServiceIcon = 'building' | 'site' | 'utility' | 'engineering' | 'materials';
export type FactIcon = 'calendar' | 'pin' | 'hardhat' | 'languages';

const hu = {
  meta: {
    title: 'Építés és kivitelezés Budapesten | Mr. Rock Kft.',
    description:
      'Lakó- és nem lakóépületek kivitelezése, közműépítés és mérnöki szolgáltatások Budapesten és környékén. Egy kézből, az előkészítéstől az átadásig.',
  },
  ui: {
    skip: 'Ugrás a tartalomra',
    navLabel: 'Fő navigáció',
    langSwitch: { href: '/en/', label: 'English', short: 'EN', lang: 'en' },
    home: '/',
    call: 'Hívjon minket',
    write: 'Írjon nekünk',
    servicesLink: 'Szolgáltatásaink',
    ctaShort: 'Ajánlat',
  },
  nav: [
    { id: 'rolunk', label: 'Rólunk' },
    { id: 'szolgaltatasok', label: 'Szolgáltatások' },
    { id: 'igy-dolgozunk', label: 'Így dolgozunk' },
    { id: 'kapcsolat', label: 'Kapcsolat' },
  ],
  hero: {
    title: 'Építés, megbízhatóan.',
    lead: 'Lakó- és nem lakóépületek kivitelezése, közműépítés és mérnöki szolgáltatások Budapesten és környékén. Egy kézből, az előkészítéstől az átadásig.',
    imageAlt: 'Toronydaruk egy városi építkezés felett alkonyatkor',
    facts: [
      { icon: 'calendar' as FactIcon, title: '2015 óta', text: 'működő budapesti építőipari vállalkozás' },
      { icon: 'pin' as FactIcon, title: 'Budapest és környéke', text: 'magyar és külföldi megbízóknak' },
      { icon: 'hardhat' as FactIcon, title: 'Egy kézből', text: 'az előkészítéstől a műszaki átadásig' },
      { icon: 'languages' as FactIcon, title: 'Kétnyelvű ügyintézés', text: 'magyarul és angolul' },
    ],
    contactTitle: 'Kérjen ajánlatot',
  },
  about: {
    id: 'rolunk',
    title: 'Rólunk',
    imageAlt: 'Épülő többszintes vasbeton vázszerkezet',
    statement:
      'A Mr. Rock Kft. 2015 óta működő budapesti építőipari vállalkozás. Ügyfeleinknek olyan kivitelezési partnert kínálunk, akire a projekt minden szakaszában számíthatnak: pontos kommunikációval, átlátható költségekkel és gondos, minőségi munkával.',
    paragraphs: [
      'A Mr. Rock Kft. fő tevékenysége lakó- és nem lakóépületek építése. Működésünk során a kivitelezés köré olyan kiegészítő szolgáltatásokat építettünk, amelyek egyszerűbbé teszik az ügyfelek dolgát: építési terület-előkészítést, közműépítést, mérnöki tanácsadást és építőanyag-beszerzési támogatást is vállalunk.',
      'Azt valljuk, hogy egy építkezés akkor sikeres, ha az ügyfél az elejétől a végéig tudja, mi történik, mennyibe kerül és mikor készül el. Ezért az együttműködésünk alapja az őszinte, érthető kommunikáció, a reális ütemterv és az egyértelmű árajánlat.',
      'Székhelyünk Budapesten van, de a projektjeinket a fővárosban és környékén vállaljuk, magyar és külföldi megbízóknak egyaránt. Az ügyintézés magyar és angol nyelven is zajlik.',
    ],
  },
  services: {
    id: 'szolgaltatasok',
    title: 'Szolgáltatásaink',
    intro: 'Egy kézből, az előkészítéstől az átadásig: a kivitelezés és minden, ami körülötte szükséges.',
    items: [
      {
        icon: 'building' as ServiceIcon,
        title: 'Lakó- és nem lakóépületek építése',
        text: 'Családi házak, társasházak és lakóépületek, irodák, kereskedelmi és ipari létesítmények kivitelezése. Vállaljuk az új építést, és az építkezés teljes folyamatát a munkaterület átvételétől a műszaki átadásig koordináljuk.',
      },
      {
        icon: 'site' as ServiceIcon,
        title: 'Építési terület előkészítése',
        text: 'A kivitelezés első lépése a jól előkészített terület. Elvégezzük a területrendezést, a földmunkákat és az építés megkezdéséhez szükséges előkészítő munkálatokat, hogy a projekt biztos alapokon induljon.',
      },
      {
        icon: 'utility' as ServiceIcon,
        title: 'Közműépítés',
        text: 'Folyadékszállító közművek (víz- és csatornahálózat), valamint elektromos és hírközlési közművek építése, a lakóépületek és ipari területek ellátásához.',
      },
      {
        icon: 'engineering' as ServiceIcon,
        title: 'Mérnöki tevékenység és műszaki tanácsadás',
        text: 'A tervezés és a kivitelezés közötti egyeztetés, költségbecslés, műszaki ellenőrzés és szakmai támogatás, hogy a döntések már a projekt elején megalapozottak legyenek.',
      },
      {
        icon: 'materials' as ServiceIcon,
        title: 'Építőanyag- és faanyag-kereskedelem (ügynöki)',
        text: 'Segítünk kiválasztani a projekthez megfelelő anyagokat és beszállítókat, ezzel időt és költséget takaríthat meg.',
      },
    ],
  },
  process: {
    id: 'igy-dolgozunk',
    title: 'Így dolgozunk',
    steps: [
      { title: 'Egyeztetés', text: 'Megismerjük az elképzelését, a helyszínt és az elvárásait.' },
      { title: 'Ajánlat', text: 'Részletes, átlátható árajánlatot és ütemtervet készítünk.' },
      { title: 'Előkészítés', text: 'Egyeztetjük a terveket, az anyagokat és a munkaterület átvételét.' },
      {
        title: 'Kivitelezés',
        text: 'A munkát szervezetten végezzük, és folyamatosan tájékoztatjuk az előrehaladásról.',
      },
      { title: 'Átadás', text: 'Közös bejárás, hibák kijavítása, műszaki átadás.' },
    ],
  },
  why: {
    id: 'miert-mi',
    title: 'Miért a Mr. Rock Kft.?',
    imageAlt: 'Szakember ellenőrzi a vasszerelést egy építkezésen',
    items: [
      { title: 'Egy partner, teljes körű szolgáltatás', text: 'Nem kell több vállalkozót összehangolnia.' },
      { title: 'Átlátható árazás', text: 'Előre tudja, mire számíthat.' },
      { title: 'Határidőre törekvő szervezés', text: 'Reális, betartható ütemterv.' },
      { title: 'Közvetlen kommunikáció', text: 'Egy kapcsolattartó, gyors válaszok.' },
      { title: 'Kétnyelvű ügyintézés', text: 'Magyar és angol nyelven is rendelkezésére állunk.' },
    ],
  },
  contactSection: {
    id: 'kapcsolat',
    title: 'Kérjen ajánlatot',
    imageAlt: '',
    text: 'Mondja el, mit tervez: a helyszínt, a projekt jellegét és az ütemezést. Magyarul és angolul is válaszolunk.',
    phoneLabel: 'Telefon',
    emailLabel: 'E-mail',
    addressLabel: 'Székhely',
  },
  footer: {
    taxLabel: 'Adószám',
    registryLabel: 'Cégjegyzékszám',
  },
};

export type Content = typeof hu;

const en: Content = {
  meta: {
    title: 'Construction and building in Budapest | Mr. Rock Kft.',
    description:
      'Residential and non-residential construction, utility works and engineering services in and around Budapest. One partner from site preparation to handover.',
  },
  ui: {
    skip: 'Skip to content',
    navLabel: 'Main navigation',
    langSwitch: { href: '/', label: 'Magyar', short: 'HU', lang: 'hu' },
    home: '/en/',
    call: 'Call us',
    write: 'Write to us',
    servicesLink: 'Our services',
    ctaShort: 'Quote',
  },
  nav: [
    { id: 'about', label: 'About' },
    { id: 'services', label: 'Services' },
    { id: 'process', label: 'How we work' },
    { id: 'contact', label: 'Contact' },
  ],
  hero: {
    title: 'Construction you can rely on.',
    lead: 'Residential and non-residential construction, utility works and engineering services in and around Budapest. One partner, from site preparation to handover.',
    imageAlt: 'Tower cranes above an urban construction site at dusk',
    facts: [
      { icon: 'calendar', title: 'Since 2015', text: 'a Budapest construction company' },
      { icon: 'pin', title: 'Budapest and surroundings', text: 'for Hungarian and international clients' },
      { icon: 'hardhat', title: 'One partner', text: 'from site preparation to technical handover' },
      { icon: 'languages', title: 'Bilingual service', text: 'in Hungarian and English' },
    ],
    contactTitle: 'Request a quote',
  },
  about: {
    id: 'about',
    title: 'About us',
    imageAlt: 'A multi-storey reinforced concrete frame under construction',
    statement:
      'Mr. Rock Kft. is a Budapest construction company operating since 2015. We offer our clients a building partner they can rely on at every stage of the project: precise communication, transparent costs and careful, high-quality work.',
    paragraphs: [
      'Our core business is the construction of residential and non-residential buildings. Around it we have added services that make our clients’ lives easier: we also take on site preparation, utility construction, engineering consultancy and support with sourcing building materials.',
      'We believe a building project succeeds when the client knows, from start to finish, what is happening, what it costs and when it will be done. That is why our work rests on honest, clear communication, a realistic schedule and an unambiguous quote.',
      'We are based in Budapest and take on projects in the city and its surroundings, for Hungarian and international clients alike. We work in both Hungarian and English.',
    ],
  },
  services: {
    id: 'services',
    title: 'Our services',
    intro: 'One partner from site preparation to handover: construction and everything it needs around it.',
    items: [
      {
        icon: 'building',
        title: 'Residential and non-residential construction',
        text: 'Family houses, apartment and residential buildings, offices, commercial and industrial facilities. We take on new construction and coordinate the entire build, from taking over the site to the technical handover.',
      },
      {
        icon: 'site',
        title: 'Site preparation',
        text: 'Every build starts with a well-prepared site. We carry out site clearance and grading, earthworks and all preparatory work needed before construction, so the project starts on solid ground.',
      },
      {
        icon: 'utility',
        title: 'Utility construction',
        text: 'Construction of water and sewer networks as well as electrical and telecommunications utilities, supplying residential buildings and industrial sites.',
      },
      {
        icon: 'engineering',
        title: 'Engineering and technical consultancy',
        text: 'Coordination between design and construction, cost estimation, technical inspection and professional support, so decisions are well founded from the very start.',
      },
      {
        icon: 'materials',
        title: 'Building materials and timber trade (as agent)',
        text: 'We help you choose the right materials and suppliers for your project, saving you time and money.',
      },
    ],
  },
  process: {
    id: 'process',
    title: 'How we work',
    steps: [
      { title: 'Consultation', text: 'We get to know your ideas, the site and your expectations.' },
      { title: 'Quote', text: 'We prepare a detailed, transparent quote and schedule.' },
      { title: 'Preparation', text: 'We agree the plans, the materials and the site handover.' },
      { title: 'Construction', text: 'We work in an organised way and keep you updated on progress.' },
      { title: 'Handover', text: 'Joint walkthrough, defects fixed, technical handover.' },
    ],
  },
  why: {
    id: 'why-us',
    title: 'Why Mr. Rock Kft.?',
    imageAlt: 'A specialist inspecting rebar on a building site',
    items: [
      { title: 'One partner, full service', text: 'No need to coordinate several contractors.' },
      { title: 'Transparent pricing', text: 'You know in advance what to expect.' },
      { title: 'Organised for deadlines', text: 'A realistic schedule we can keep.' },
      { title: 'Direct communication', text: 'One contact person, quick answers.' },
      { title: 'Bilingual service', text: 'We are at your disposal in Hungarian and English.' },
    ],
  },
  contactSection: {
    id: 'contact',
    title: 'Request a quote',
    imageAlt: '',
    text: 'Tell us what you are planning: the site, the type of project and the timing. We reply in English and Hungarian.',
    phoneLabel: 'Phone',
    emailLabel: 'E-mail',
    addressLabel: 'Registered office',
  },
  footer: {
    taxLabel: 'Tax number',
    registryLabel: 'Company reg. no.',
  },
};

export const content: Record<Lang, Content> = { hu, en };
