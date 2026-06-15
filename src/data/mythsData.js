import { mythsExtra } from "./mythsExtra";

const baseMyths = [
  {
    id: "protein",
    keywords: ["proteín", "bielkoviny", "svaly", "mäso", "protein", "bielkovina", "narastú", "slabý"],
    query: "Ale odkiaľ berieš proteín? Veď z trávy svaly nenarastú...",
    reality: "Rastlinné zdroje obsahujú všetky esenciálne aminokyseliny, a to navyše v 'čistom' balení – bez cholesterolu a s obrovským množstvom vlákniny. Najnovšie štúdie ukazujú, že rastlinný proteín predlžuje životnosť, zatiaľ čo živočíšny aktivuje rakovinotvorné rastové faktory (IGF-1). Svaly nepotrebujú mäso, potrebujú dusík a stimul – opýtajte sa najsilnejších zvierat na zemi ako sú gorily, slony, či nosorožce.",
    sources: [
      { title: "M.Greger: Animal Protein Compared to Plant Protein", url: "https://nutritionfacts.org/video/animal-protein-compared-to-plant-protein/" },
      { title: "Satija A. et al. (2017). Dietary Protein Sources and Mortality", url: "https://pubmed.ncbi.nlm.nih.gov/27479196/" }
    ],
    chartType: "bar",
    chartTitle: "Porovnanie čistého proteínu na 100 kalórií",
    chartData: [
      { name: "Hovädzie (priemer)", amount: 8, fill: "#e57373" },
      { name: "Šošovica", amount: 8.5, fill: "#81c784" },
      { name: "Brokolica", amount: 8.2, fill: "#4caf50" },
      { name: "Tempeh", amount: 9.8, fill: "#388e3c" }
    ],
    chartDataKey: "amount",
    chartUnit: "g",
    image: "🌿"
  },
  {
    id: "calcium",
    keywords: ["vápnik", "kosti", "mlieko", "osteoporóza", "syry", "vapnik", "zlomenina"],
    query: "A čo vápnik? Bez mlieka budeš mať krehké kosti a osteoporózu!",
    reality: "Krajiny s najvyššou spotrebou kravského mlieka (USA, Škandinávia) majú celosvetovo najvyššiu mieru zlomenín krčka stehennej kosti. Zatiaľ čo živočíšne bielkoviny prúdia do obličiek a spôsobujú vylučovanie vápnika močom (acid-ash hypothesis), tmavá listová zelenina dodáva vápnik v lepšie vstrebateľnej forme (a bez estrogénu a hnisu z prekonaných zápalov vemien).",
    sources: [
      { title: "Harvard T.H. Chan: Calcium and Milk", url: "https://www.hsph.harvard.edu/nutritionsource/what-should-you-eat/calcium-and-milk/" },
      { title: "Feskanich D. et al., Milk, dietary calcium, and bone fractures", url: "https://pubmed.ncbi.nlm.nih.gov/9224182/" }
    ],
    chartType: "bar",
    chartTitle: "Reálna vstrebateľnosť vápnika telom (%)",
    chartData: [
      { name: "Špenát", amount: 5, fill: "#b0bec5" },
      { name: "Kravské mlieko", amount: 32, fill: "#90caf9" },
      { name: "Listový kel", amount: 49, fill: "#66bb6a" },
      { name: "Ružičkový kel", amount: 64, fill: "#43a047" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🦴"
  },
  {
    id: "b12",
    keywords: ["b12", "vitamín", "vitamin b12", "doplnky", "tabletky", "umelé"],
    query: "Vegánstvo je neprirodzené, musíte brať syntetický B12!",
    reality: "Vitamín B12 nie je produkovaný zvieratami ani rastlinami, ale baktériami v pôde a vode. My ho pijeme vo forme čistenej (chlórovanej) vody a umytej zeleniny len veľmi málo. Paradoxy spočívajú v tom, že hospodárske zvieratá dnes žijú taktiež vo fabrických halách bez pôdy a slnka, čiže priemysel im B12 pridáva priamo do krmiva. Ty len filtruješ svoj 'syntetický' vitamín cez telo trpiaceho zvieraťa.",
    sources: [
      { title: "Dr. Greger: Safest Source of B12", url: "https://nutritionfacts.org/video/safest-source-of-b12/" }
    ],
    chartType: "pie",
    chartTitle: "Odkiaľ priemerná ošípaná získava B12?",
    chartData: [
      { name: "Zo špinavej pôdy a trávy", amount: 10, fill: "#aed581" },
      { name: "Vynútený syntetický prídavok v krmive", amount: 90, fill: "#ffb74d" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "💊"
  },
  {
    id: "plants_pain",
    keywords: ["bolesť", "mrkva", "rastliny trpia", "pain", "cítia", "citia", "plačú"],
    query: "Ale veď aj rastliny cítia bolesť! Si rovnaký vrah ako my, lebo mrkva trpí.",
    reality: "Rastliny nemajú mozog a centrálny nervový systém. Reagujú na poškodenie chemickými signálmi, no bez vedomia nie je interpretácia 'utrpenia'. Navyše, ak skutočne súcitiš s rastlinami – dobytok zje od 5 do 20 kilogramov rastlín (obila/sóje) na vyprodukovanie 1 kg mäsa. Konzumáciou zvierat spôsobíš 'smrť' mnohonásobne vyššiemu počtu rastlín. Logika nepustí.",
    sources: [
      { title: "World Resources Institute: Animal-Based Foods Conversions", url: "https://www.wri.org/research/creating-sustainable-food-future" }
    ],
    chartType: "bar",
    chartTitle: "Spotreba rastlín na vytvorenie 1kg jedla pre človeka",
    chartData: [
      { name: "Hovädzie mäso (krava)", amount: 12, fill: "#f44336" },
      { name: "Bravčové mäso (prasa)", amount: 6, fill: "#ffb74d" },
      { name: "Čistá lokálna zelenina", amount: 1, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "kg",
    image: "🌱"
  },
  {
    id: "soy_estrogen",
    keywords: ["sója", "soja", "estrogén", "estrogen", "mužnosť", "hormóny", "prsia", "testosterón"],
    query: "Zo sóje ti narastú prsia, obsahuje množstvo estrogénu a ničí mužnosť!",
    reality: "Sója obsahuje FYTOestrogény, teda rastlinné zlúčeniny, ktoré sú tak slabé, že chránia pred rakovinou blokovaním viazania silných cicavčích estrogénov na bunky (preto v Ázii majú rapídne nižší výskyt rakoviny prsníka a prostaty). Skutočné a vysoko potentné cicavčie estrogény (produkované tehotnými samicami) pijete priamo v pohári živočíšneho kravského mlieka.",
    sources: [
      { title: "Meta-analysis: Soy and Men's Testosterone", url: "https://pubmed.ncbi.nlm.nih.gov/19524224/" },
      { title: "Estrogen in Milk: Journal of Dairy Science", url: "https://www.journalofdairyscience.org/" }
    ],
    chartType: "bar",
    chartTitle: "Reálny obsah pravého cicavčieho estrogénu (ng/L)",
    chartData: [
      { name: "Sójové mlieko", amount: 0, fill: "#4caf50" },
      { name: "Kravské mlieko (komerčné)", amount: 12, fill: "#f48fb1" },
      { name: "Mlieko od gravidných kráv", amount: 33, fill: "#c2185b" }
    ],
    chartDataKey: "amount",
    chartUnit: "ng",
    image: "🫘"
  },
  {
    id: "canines",
    keywords: ["zuby", "tesáky", "dravce", "levy", "kly", "lev", "špičiaky", "stavba"],
    query: "Človek bol odjakživa lovec, pozri na naše ostré tesáky, sme predátori!",
    reality: "Naše takzvané 'tesáky' (špičiaky) nemajú s trhaním surovej zveri absolútne nič spoločné. Pripomínajú zuby našich bylinožravých a plodožravých príbuzných, opíc. Náš obrovský, dlhý zažívací trakt s hrubými črevami a nízkou žalúdočnou kyselinou sa prispôsobil na pomalé trávenie vlákniny, na rozdiel od dravcov, ktorí majú krátky trakt, aby surové mäso nestihlo zhniť v črevách.",
    sources: [
      { title: "Milton K., Nutritional characteristics of wild primate foods...", url: "https://pubmed.ncbi.nlm.nih.gov/10403487/" }
    ],
    chartType: "bar",
    chartTitle: "Pomer dĺžky čreva k trupu (ukazovateľ stravy)",
    chartData: [
      { name: "Mačka (Čistý mäsožravec)", amount: 3, fill: "#e57373" },
      { name: "Pes / Vlk", amount: 6, fill: "#ff9800" },
      { name: "Človek", amount: 11, fill: "#81c784" },
      { name: "Krava (Bylinožravec)", amount: 20, fill: "#388e3c" }
    ],
    chartDataKey: "amount",
    chartUnit: "x",
    image: "🦷"
  },
  {
    id: "iron",
    keywords: ["železo", "zelezo", "anémia", "chudokrvnosť", "krv", "anemia"],
    query: "Z rastlín nedostaneš dosť železa, vegáni sú chudokrvní a anemickí.",
    reality: "Štúdie opakovane ukazujú, že vegáni konzumujú rovnaké alebo väčšie množstvo železa ako konzumenti mäsa. Zatiaľ čo hémové železo (z mäsa) telo absorbuje nekontrolovane (čo zvyšuje oxidačný stres, a riziko srdcových chorôb), rastlinné, nehémové železo zohľadňuje aktuálne potreby tvojho tela a absorbuje ho presne toľko, koľko potrebuje. Stačí pri raňajšej ovsenej kaši pridať vitamín C (lesné ovocie) a absorpcia stúpla o 300%.",
    sources: [
      { title: "Iron Status of Vegetarians vs Omnivores", url: "https://pubmed.ncbi.nlm.nih.gov/25369923/" }
    ],
    chartType: "bar",
    chartTitle: "Množstvo železa v 100g potraviny (mg)",
    chartData: [
      { name: "Vajce", amount: 1.2, fill: "#ffb74d" },
      { name: "Hovädzie mäso", amount: 2.6, fill: "#e57373" },
      { name: "Špenát", amount: 2.7, fill: "#81c784" },
      { name: "Šošovica (varená)", amount: 3.3, fill: "#4caf50" },
      { name: "Konopné semienka", amount: 9.6, fill: "#2e7d32" } // Changed from Mak to Konopné semienka for better representation 
    ],
    chartDataKey: "amount",
    chartUnit: "mg",
    image: "🩸"
  },
  {
    id: "expensive",
    keywords: ["drahé", "drahe", "bohatých", "peniaze", "lacné", "luxus", "drahota"],
    query: "Vegánstvo je pre bohatú elitu s avokádovými hriankami. Je to extrémne predražené!",
    reality: "Ak ješ ultra-spracované „Beyond Meat“ hamburgery v hipster bistre, tak áno. Základom rastlinnej stravy po celej kultúrnej histórii sú ale obilniny, ryža, zemiaky, šošovica, fazuľa, ovos a sezónna zelenina. Tieto suroviny predstavujú geograficky celosvetovo najlacnejšie potraviny vôbec. Luxus mäsa je len ilúzia podporená obrovskými štátnymi miliardovými dotáciami do priemyslu z tvojich daní.",
    sources: [
      { title: "Oxford University: Vegan diets are the most affordable", url: "https://www.ox.ac.uk/news/2021-11-11-sustainable-eating-cheaper-and-healthier-oxford-study" }
    ],
    chartType: "bar",
    chartTitle: "Priemerná cena v EÚ za nákup 100g proteínu (€)",
    chartData: [
      { name: "Fazuľa / Šošovica (Sušená)", amount: 0.60, fill: "#81c784" },
      { name: "Tofu", amount: 1.50, fill: "#4caf50" },
      { name: "Vajíčka", amount: 1.90, fill: "#ffb74d" },
      { name: "Hovädzie chudé mäso", amount: 3.50, fill: "#e57373" }
    ],
    chartDataKey: "amount",
    chartUnit: "€",
    image: "💸"
  },
  {
    id: "soy_amazon",
    keywords: ["prales", "amazónia", "amazon", "stromy", "lesy", "deforestácia"],
    query: "Vy vegáni a tá vaša sója ničíte Amazonský prales kvôli nekonečným sójovým poliam!",
    reality: "Takmer 80 % všetkej vypestovanej sóje na svete sa používa pre živočíšny priemysel ako krmivo do fabrík pre sliepky, prasatá a kravy (vrátane európskych chovov, ktoré túto drvenú GMO sóju dovážajú loďami). Len necelých 6 % ide pre priamu ľudskú spotrebu na výrobu tofu alebo tvojich obľúbených nápojov. Teda konzumáciou mäsa nepriamo podporuješ zďaleka najmasívnejšiu deforestáciu planéty.",
    sources: [
      { title: "WWF: The Story of Soy", url: "https://wwf.panda.org/discover/our_focus/food_practice/sustainable_production/soy/" },
      { title: "Our World in Data: Environmental impacts of food", url: "https://ourworldindata.org/environmental-impacts-of-food" }
    ],
    chartType: "pie",
    chartTitle: "Ako sa využíva globálne napestovaná sója?",
    chartData: [
      { name: "Živočíšne krmivo", amount: 77, fill: "#ffb74d" },
      { name: "Sójový olej (priemysel, biopalivá)", amount: 16, fill: "#b0bec5" },
      { name: "Tofu, Sójové mlieko a ľudská konzumácia", amount: 7, fill: "#81c784" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🌳"
  },
  {
    id: "cows_explode",
    keywords: ["vydojiť", "explodujú", "bolí ich to", "dojenie", "krava nedáva"],
    query: "Ale veď kravy sa musia dojiť, inak by im prasklo vemeno od bolesti a utrpenia!",
    reality: "Krava, ako každý iný cicavec na planéte (vrátane človeka), produkuje mlieko jedine pre svoje čerstvo narodené mláďa. Ak by sa do tohto prirodzeného cyklu človek nemontoval a kravu by nikto umelo a systematicky neoplodnil rukou pracovníka, žiadne mlieko narodené pre 'odstraňovanie bolesti' by vôbec nemala. A bolestí by ju skôr zbavilo, ak by sme jej na farme po pár hodinách od pôrodu nenariekajúce teliatko neukradli.",
    sources: [
      { title: "RSPCA: How cows produce milk", url: "https://kb.rspca.org.au/knowledge-base/what-is-the-life-cycle-of-a-dairy-cow/" }
    ],
    chartType: "bar",
    chartTitle: "Prirodzená dĺžka života vs Život dojnice",
    chartData: [
      { name: "Priemerný zabitý vek z 'vyčerpania' na komerčnej farme", amount: 5, fill: "#e57373" },
      { name: "Prirodzená dlhovekosť kravy", amount: 20, fill: "#81c784" }
    ],
    chartDataKey: "amount",
    chartUnit: " r",
    image: "🐄"
  },
  {
    id: "omega3",
    keywords: ["omega 3", "omega3", "ryby", "more", "DHA", "EPA", "mozog"],
    query: "Na tvoj mozog a vývoj potrebuješ Omega-3 mastné kyseliny (DHA, EPA) a jedine z morských rýb!",
    reality: "Ryby vôbec nevytvárajú omega-3 mastné kyseliny; jednoducho ich izolujú a ukladajú do bunkových stien z jedla, ktoré jedia - z hlbokomorských mikrorias. My vieme urobiť to isté: ísť priamo ku zdroju! Vegáni môžu prijímať omega-3 cez ľanové, chia a konopné semiačka a mozog si následne vyrobí EPA a DHA rovnako. Získame tak navyše čistú energiu bez ťažkých kovov a mikroplastov, ktoré sa v dnešných moriach kumulujú v telách rýb.",
    sources: [
      { title: "NCBI: Conversion of ALA to DHA/EPA", url: "https://pubmed.ncbi.nlm.nih.gov/9637947/" },
      { title: "Dr. Greger: Should we take EPA and DHA?", url: "https://nutritionfacts.org/video/should-vegans-take-dha-to-preserve-brain-function/" }
    ],
    chartType: "pie",
    chartTitle: "Odkiaľ vôbec vzniká Omega-3?",
    chartData: [
      { name: "Ryby a ich utrpenie (Iba sprostredkovateľ)", amount: 0, fill: "#e57373" },
      { name: "Oceánske fytoplanktóny (Riasa)", amount: 100, fill: "#81c784" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🐟"
  },
  {
    id: "meat_evolution",
    keywords: ["opice", "zväčšil mozog", "evolúcia", "predkovia", "paleo", "paleolit", "zliezli"],
    query: "To práve pečené mäso spôsobilo, že sa nám v evolúcii zväčšil mozog a sme inteligentní!",
    reality: "Hoci bol prístup k horiacemu ohňu kľúčový, najnovšie genetické a antropologické štúdie z Harvardskej univerzity odhaľujú, že prudký ohromný nárast nášho mozgu zabezpečil iný objav –  nájdenie škrobov, respektíve zemiakov a hľúz. Tieto škroby obsahujú ľahko využiteľnú čistú glukózu pre mozog, na rozdiel od drahého metabolizovania proteínového mäsa. Prežitie nám nenúka mäso, ale vymenovanie sacharidových korienkov, ktoré zistili u neandertálskych fosílií zabudnuté v ich zložení zubného povlaku.",
    sources: [
      { title: "The Importance of Dietary Carbohydrates in Human Evolution", url: "https://www.journals.uchicago.edu/doi/10.1086/682587" }
    ],
    chartType: "none",
    image: "🐒"
  },
  {
    id: "athletes_weak",
    keywords: ["šport", "slabý", "slabí", "kulturista", "atletika", "výkon", "atlet", "silacky"],
    query: "Vegáni sú len slabé biele paličky, atletika a profesionálny silový šport bez mäsa neexistujú.",
    reality: "Dnes vidíme fenomenálny nárast vegánskych vrcholových atlétov (Novak Djokovič, Patrik Baboumian - silák držiaci svetové rekordy, Lewis Hamilton, tenistky Venus Williams apod).  A prečo? Pretože rastlinná strava má neuveriteľné benefity na zrýchlenie prietoku okysličenej krvi do svalov, masívne potláča po-tréningový zápal a umožňuje atlétom skrátiť regeneráciu (tzv. The Game Changers).",
    sources: [
      { title: "Film: The Game Changers (Prieskum, Fakty, Štúdie)", url: "https://gamechangersmovie.com/the-facts/" }
    ],
    chartType: "bar",
    chartTitle: "Doba zotrvania oxidačného zápalu po záťaži v tele",
    chartData: [
      { name: "Omnivor (Bežný konzum mäsa)", amount: 100, fill: "#e57373" },
      { name: "Vegánsky atlét (Rastlinná strava)", amount: 55, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🏋️"
  },
  {
    id: "personal_choice",
    keywords: ["moje telo", "osobná voľba", "každého vec", "sloboda", "nikoho do toho", "volba"],
    query: "A čo moja voľba?! Čo si dám na tanier nesúdi druhých, je to čisto osobná sloboda.",
    reality: "Každé osobné rozhodnutie je posvätné len v tom bode, kedy pri ňom netrpí, alebo nezomiera iný jedinec bez vlastnej 'voľby'. Ak by si sa osobne rozhodol nakopať uličného psíka, spoločnosť by zistila, že to nie je osobná voľba, lebo zasahuješ do iného práva na život. Presne tak isto trpí na farme zviera, ktoré s tvojou obedňajšou pauzou vôbec nesúhlasilo.",
    sources: [
      { title: "Earthling Ed: What is 'Personal Choice'?", url: "https://earthlinged.org/" }
    ],
    chartType: "none",
    image: "🤷"
  },
  {
    id: "free_range",
    keywords: ["voľný chýbeh", "od dedka", "u babky na dvore", "humánne", "zabitie", "domáce"],
    query: "Ale ja si kupujem iba voľný výbeh z domáceho chovu! To zviera malo krásny život.",
    reality: "Ak máte pocit, že zviera prežilo „úžasný život“, robí to jeho predčasné a násilné zabitie na jatkách pre náš gurmánsky pôžitok morálnejším? Humánna porážka neexistuje, je to oxymoron. Skúste si vygooglovať bežné postupy na farme, kde uvidíte, že 'Free-Range' vo väčšine krajín znamená iba okienko navyše do obrovskej preplnenej priemyselnej haly, kde slnečné lúče nikto ani nevidel.",
    sources: [
      { title: "RSPCA: What does Free-Range actually mean in Law?", url: "https://kb.rspca.org.au/" }
    ],
    chartType: "pie",
    chartTitle: "Faktor utrpenia na 1 kus porcie podľa štúdií (% súcitu)",
    chartData: [
      { name: "Humánna porážka v lokálnom bio-chove", amount: 0, fill: "#e57373" },
      { name: "Ilúzia, že zviera umrelo priateľsky vo sne", amount: 100, fill: "#81c784" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🏡"
  },
  {
    id: "honey",
    keywords: ["med", "včela", "včely", "medu", "osy", "vcelar", "ul", "vcelarstvo"],
    query: "Prečo mi prekáža med? Veď ho včely robia pre nás!",
    reality: "Včely tvoria med pre *seba*. Slúži ako nevyhnutná a výživná zimná zásoba pre celý ich úľ. Komerční včelári po zbere tohto exkluzívne výživného elixíru natlačia včelám do úľa obyčajnú neplnohodnotnú cukrovú vodu, čím rapídne znižujú imunitu celého roja (vystavenie kolapsu). Vegáni navyše bojkotujú umelé skracovanie zoslabnutých kráľovien (aby neodleteli do nového roja) či fumigáciu a vyzabíjanie úľov z ekonomických dôvodov.",
    sources: [
      { title: "The Vegan Society: Why don't vegans eat honey?", url: "https://www.vegansociety.com/go-vegan/why-go-vegan/honey-industry" }
    ],
    chartType: "none",
    image: "🍯"
  },
  {
    id: "overpopulation_cows",
    keywords: ["plno rýb", "kravy by ovládli svet", "rozmnožili", "čo s nimi urobíme"],
    query: "Ak všetci prestaneme jesť zvieratá, premnožia sa a budú sa túlať po meste, čo s nimi?",
    reality: "Zvieratá na masových farmách sú tam len a výhradne kvôli jednému faktu – umelému inseminovaniu, ktoré platíme a dožadujeme sa ho naším nakupovaním. Kravy by sa „nepremnožili“, pretože by sme zastavili ich denné umelé nahrádzanie ruka v ruke (doslova) v chovných cykloch. Postupne by množstvo ustúpilo do prirodzeného, udržateľného rezervného stavu ako kedysi.",
    sources: [
      { title: "Surge Sanctuary: Emptying cages not filling them", url: "https://www.surgeactivism.org/" }
    ],
    chartType: "bar",
    chartTitle: "Biomasa cicavcov na planéte dnes",
    chartData: [
      { name: "Divoké zvieratá vo voľnej prírode", amount: 4, fill: "#e57373" },
      { name: "Planéta ľudia", amount: 36, fill: "#64b5f6" },
      { name: "Zavreté hospodárske zvieratá zabíjané v priemysle", amount: 60, fill: "#81c784" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "📈"
  },
  {
    id: "circle_of_life",
    keywords: ["kruh života", "príroda", "prírodný zákon", "silnejší vyhráva", "zákon džungle", "vlk a ovca"],
    query: "Ale jeme zvieratá kvôli kolobehu života v prírode. Vlk rovnako odfajčí zajaca na lúke!",
    reality: "Príroda sa neriadi obchodnými centrami, balíčkovaním do plastov a plynovými komorami s CO2. My sa nesprávame k potrave podľa prírody a kruhu života, postavili sme absolútne syntetickú dystopickú továreň na smrť (Factory farming), kde nemajú šance uniknúť. Narozdiel od divokého vlka, ktorý inú prežitkovú voľbu nemá, my ako jediné zvieratá na zemi máme morálnu agentúru voľby: Vyberme si súcit, keď môžeme, vďaka supermarketom plných alternatív.",
    sources: [
      { title: "Philosopher Peter Singer: Animal Liberation", url: "https://petersinger.info/" }
    ],
    chartType: "none",
    image: "🦁"
  },
  {
    id: "world_hunger",
    keywords: ["hlad vo svete", "nenakŕmime", "všetci nedokážu", "zomrieť hladom", "jedlo", "malo jedla"],
    query: "Nikdy by sme z čisto zeleniny nedokázali nakŕmiť neustále rastúcu 9 miliardovú planétu hladujúcich dospelých a detí.",
    reality: "Iróniou osudu je presný opak. Väčšina svetovo napestovaného zrna a obilnín v hladujúcich štátoch globálneho juhu ide priamo do úst poľnohospodárskych zvierat Západného sveta (aby sme mali steaky). Keby sa toto obrovské kvantum kalorickej stravy priamo aplikovalo do úst tretieho sveta miesto kŕmenia západných zvierat, odstránili by sme svetový hlad a nasýtili by sme celú planétu hneď trikrát.",
    sources: [
      { title: "Cornell Univ: U.S. could feed 800 million people with grain that livestock eat", url: "https://news.cornell.edu/stories/1997/08/us-could-feed-800-million-people-grain-livestock-eat" }
    ],
    chartType: "bar",
    chartTitle: "Percento prijatých kalórií v Európskej Únii u dobytka a hydiny",
    chartData: [
      { name: "Pestované pre ľudí z 1m2", amount: 100, fill: "#81c784" },
      { name: "Zostatkový kalorický limit z mesa", amount: 10, fill: "#e57373" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🌍"
  },
  {
    id: "crop_deaths",
    keywords: ["smrť pri žatve", "pokosili", "kombajny", "myši", "traktor", "pripal", "kombajn", "hmyz"],
    query: "Na tvoje bio pole išiel kombajn a pokosil a drtil miliardy myší a polného sysľového hmyzu. Kto za ne zaplače?",
    reality: "Samozrejme, nehody poľnohospodárskej techniky ničia určitý obmedzený prejav divokej prirody, čo nie je vôbec vegánsky dokonalé (veganstvo je minimalizácia krutosti v medziach praktického prežitia). Lenže pri konzumácii živočíchov sa s traktorom vyoráva obilia obrovsky - obrovsky viac! Na tvojich 100 gramov proteínov z poľnohospodárskeho kurčaťa či hovädzieho mäsa bolo treba pokosiť x-násobne viac sóje a kukuričných lúk s tým istým traktorom, ergo – vy zabijete o 10x viac obilia (avším aj tie neboráky polné myši) ako ja a NAVYŠE na záver zaplatíte niekomu, kto podreže krk tomu prasaťu.",
    sources: [
      { title: "Animal Visuals: Number of Animals Killed to Produce One Million Calories", url: "http://animalvisuals.org/projects/data/1mc/" }
    ],
    chartType: "bar",
    chartTitle: "Mŕtve poľné zvieratká a hmyz na 1 milión prijatých kalórií stravy",
    chartData: [
      { name: "Pri zjedení Kurča / Hovädzina", amount: 17, fill: "#e57373" },
      { name: "Pri vybranej vegánskej strave", amount: 2, fill: "#66bb6a" }
    ],
    chartDataKey: "amount",
    chartUnit: " ",
    image: "🚜"
  },
  {
    id: "culture_tradition",
    keywords: ["tradícia", "sliepka", "zabíjačky", "kultúra", "dedo", "kultura"],
    query: "Odjakživa existovali dedinské zabíjačky, je to naša slovenská úžasná tradícia!",
    reality: "Tradícia a kultúra nie sú legitímnou výhovorkou ani ospravedlnením utrpenia (či už zvieracieho alebo v minulosti po stáročia ľudského otroctva a segregovatiek žien do určitej úrovne tradície a postavenia). Morálka by nemala diktovať minulosť, tradície vznikli z obmedzených stredovekých možností prezimovania rodín v dolinách, ktoré my dnes už nemáme.",
    sources: [
      { title: "Ed Winters: Is culture a justification?", url: "https://www.surgeactivism.org/" }
    ],
    chartType: "none",
    image: "🎭"
  },
  {
    id: "anti_nutrients",
    keywords: ["fytáty", "lektíny", "carnivore", "antinutrienty", "oxaláty", "oxalaty"],
    query: "Ale veď zelenina a strukoviny sú plné nebezpečných 'antinutrientov' ako oxaláty, a lektíny, ktoré blokujú trávenie!",
    reality: "Populárny strašiak carnivore influencerov. Áno, v surovom stave niektoré fazule (lektín a fytínová kyselina) môžu byť ťažké, presne preto pred konzumáciou prebieha preplachovanie vodou a pomalé varenie pri vysokej teplote (respektíve fermentácia), čím ich takmer na kompletku zlikvidujeme, aktivujeme zdravé mikro prvky a dostaneme z nich antikarcinogénne vlastnosti.",
    sources: [
      { title: "HSPH Harvard: Are Anti-Nutrients Harmful?", url: "https://www.hsph.harvard.edu/nutritionsource/anti-nutrients/" }
    ],
    chartType: "pie",
    chartTitle: "Vstrebávanie aktívnych nutričných látok pri správnej príprave",
    chartData: [
      { name: "Úplná absorpcia živín do bunky", amount: 95, fill: "#81c784" },
      { name: "Prípadná strata vitamínov (prepad blokád)", amount: 5, fill: "#e57373" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🌿"
  },
  {
    id: "collagen",
    keywords: ["kolagén", "vrásky", "starnutie", "pleť", "kolagen"],
    query: "Rastlinný kolagén neexistuje! Bez kostných vývarov budeš mať scvrknutú pokožku a kĺby na blato.",
    reality: "Rastlinný kolagén naozaj neexistuje (čiže všetky bio obaly do značnej miery klamú do názvu). ALE - náš organizmus (či vôbec, a prednostne živočíchy požívané z mäsa) si nevybuduje a neukladá cudzí do-vyvarený kolagén v tele v jeho natívnej podobe. Uštiepi tento cudzí kravný kolagén v žalúdku na esenciálne miniaminokyseliny (prednostne glycín, prolín a vitamín C) a až z nich syntezuuje VLASTNÝ lokálny zdravý kolagén. Tieto základné stavebné piliere sú k dispozícii v obrovskom rýdzom rozsahu na tanieri vo vit C zelenine a strukovinách.",
    sources: [
      { title: "Healthline: How the body actually makes collagen", url: "https://www.healthline.com/nutrition/collagen" }
    ],
    chartType: "none",
    image: "✨"
  },
  {
    id: "fake_meat_chemicals",
    keywords: ["chémia", "umelé mäso", "prísady", "spracované potraviny", "éčka", "beyond"],
    query: "Moderné vegánske náhrady sú preštrikované chémiou! 'Spracované Beyond Meat z mŕtvých buniek'!",
    reality: "Samozrejme, Beyond Meat nie je brokolica z babkinej záhrady. Je to zmixovaný hrubý hrachový proteín s pridanou cviklou a slnečnicovým olejom pre uspokojenie pocitu. Napriek tomu neobsahuje rastový hormón (rBGH), anitibiotiká potlačujúce super-vírusy ročnej produkcie a predovšetkým je to nula levelového živočíšneho cholesterolu. A navyše – nikto nepovedal, že je to denný základ zdravej vegánskej pyramídy, len alternatíva na gril párkrát do leta.",
    sources: [
      { title: "Harvard Univ: Substituting plant-protein for red meat improves heart health", url: "https://www.hsph.harvard.edu/news/press-releases/" }
    ],
    chartType: "bar",
    chartTitle: "Porovnanie profilu: Priemerný živočíšny burger vs rastlinný",
    chartData: [
      { name: "Cholesterol (mg) - Krava", amount: 80, fill: "#f44336" },
      { name: "Cholesterol (mg) - Beyond/Rastlinný", amount: 0, fill: "#4caf50" },
      { name: "Vláknina (g) - Krava", amount: 0, fill: "#ff9800" },
      { name: "Vláknina (g) - Beyond/Rastlinný", amount: 2, fill: "#66bb6a" }
    ],
    chartDataKey: "amount",
    chartUnit: " ",
    image: "🍔"
  },
  {
    id: "inuit_geography",
    keywords: ["eskymáci", "inuiti", "zima na pustom", "klimatické"],
    query: "No dobre, ale čo povieš Inuitom v Arktíde pod snehom? Pre nich nie je sója a vegánstvo udržateľné! To nie je fér strava pre každého človeka planéty.",
    reality: "Je obrovskou logickou chybou odvolať sa na životné limity kmeňa žijúceho pod Arktickým kruhom voči vášmu vlastnému morálnemu základu pre nákup kuracích medailónov zo studeného regála na predmestí bratislavskej Bille kúsok od plnej steny zelenej farby avokád. Áno, menšiny s limitovaným prístupom nemajú voľbu, vegánstvo je definované ako vylúčenie utrpenia zvierat \"tak veľmi, ako to je absolútne uskutočniteľné pre tvoj kontext a reálnu možnosť voľby\".",
    sources: [
      { title: "Vegan Society definition and framework", url: "https://www.vegansociety.com/go-vegan/definition-veganism" }
    ],
    chartType: "none",
    image: "❄️"
  },
  {
    id: "iodine_thyroid",
    keywords: ["jód", "štítna", "štítna žľaza", "hormón štítnej", "jodem"],
    query: "Z rastlinnej stravy do prázdna padne tvoj prísun v jóde – stratíš činnosť štítnej žľazy na celý život.",
    reality: "Práve naopak! Jód z rýb prichádza iba z morských chalúh z vĺn, ktoré tie isté steny rybieho prieduchu dýchajú a sprostredkúvajú. Výborne na jód zaberajú u vegánov priamo v domácom servise riasy a morská rastlinná zelenina z obrovského množstva wakame / kelp nori sushi s extra prižihovanou jodičnou soľou. Len štvrť čajovej lyžice sušenej morskej riasy pokryje vašu dennú dávku.",
    sources: [
      { title: "NutritionFacts.org: Vegan Sources of Iodine", url: "https://nutritionfacts.org/video/avoiding-iodine-deficiency-2/" }
    ],
    chartType: "none",
    image: "🌊"
  },
  {
    id: "children_nutrition",
    keywords: ["deti", "pre dojča", "detstvo", "vývoj dieťaťa", "nedostatok u detí", "rodinne deti", "detske veganstvo"],
    query: "Nútiť deti jesť ako ty? Deťom ničíš zdravý bunkový a rastový vývoj pre život vo vynútenej sekte!",
    reality: "Podľa konsenzu Academy of Nutrition and Dietetics – celosvetovo najväčšieho bloku odbornej stravy (100 000+ lekárov a študujúcich) je prísna a plánovaná plná rastlinná diéta adekvátne vhodná pre **všetky fázy a životné etapy vrátane laktácie a detstva bábätka**. Prirodzene zabezpečuje nízke hodnoty obezity v štandardizovanom pediatrickom spektre pre dnešný zosladený vývoj poškodzovaný zvieracím junk a fast food konzumom.",
    sources: [
      { title: "Academy of Nutrition and Dietetics Position Statement", url: "https://pubmed.ncbi.nlm.nih.gov/27886704/" }
    ],
    chartType: "none",
    image: "👶"
  },
  {
    id: "cholesterol",
    keywords: ["cholesterol", "saturovany tuk", "zivé maslo", "carnivore", "je zdravé maso"],
    query: "Už sa osvedčilo, že živočíšny saturovaný tuk a krvný cholesterol je pre hormonálnu obrodu zdravý! Tí vegani sú brainwashnutí starou propagandou z 90s.",
    reality: "Absolútny oxymoron z produkcie mliečnej zástupenskej lobby. Jediný fakt v dlhodobej medicíne kardiovaskulárneho bloku znie, že cholesterol naberaný z mäsa a masla upcháva cievne stenstvá plakov a tvorí smrť č.1 v zozname.  LDL cholesterol a saturované preťaženia naďalej jednoznačne podľa metaanalýz s miliónmi zdravých a sledovaných prípadov posúva populáciu k predčasnému skráteniu života k obrovskému úmrtiu do 50 rokov z kardio srdcových chorôb.",
    sources: [
      { title: "World Health Organization: Saturated fat limits and links to CVD", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" }
    ],
    chartType: "bar",
    chartTitle: "Vizuálne porovnanie čistého nebezpečného LDL",
    chartData: [
      { name: "Strava na hovädzom loji a vaječných omeletách", amount: 160, fill: "#e57373" },
      { name: "Celostná listová a bylinná rastlinná strava (priemer)", amount: 65, fill: "#81c784" }
    ],
    chartDataKey: "amount",
    chartUnit: " mg/dl",
    image: "🫀"
  },
  {
    id: "fatigue",
    keywords: ["únava", "energia", "bezmäsitý spánok", "vycerpanosť", "spim", "hladný"],
    query: "Začal som byť vegán predtým a ihneď po prvých 5 dňoch mi spadla imunita a cítil som nekonečnú permanentnú spavosť a vyčerpávajúcu príchuť a mal som vlčí hlad kvôli zníženiu energie.",
    reality: "Hranolky s Vegan Kečupom nefungujú energiou! Drvivá väčšina ranných únikov od začiatočníkov pramení zo skokového úpadku samotnej kalorickej hustoty stravy, pretože zelenina na tom samom plechu vo varnej mise vytlačenom do žalúdka obsahuje trojnásobne až päťnásobne menej čistých energetických kíl. Vyhovieme s plnými kopcami plných rýž, sladkých zemiakov so šošovicovou masívnou dávkou (pričítaj minimálne 30 % podiel tanieru!). B12 neprejaví anémiu ihneď, je to kalorický dejavu v objeme rastlín.",
    sources: [
      { title: "PCRM: Calorie Density in Plant-Based Diets", url: "https://www.pcrm.org/" }
    ],
    chartType: "none",
    image: "😴"
  },
  {
    id: "supplements_everything",
    keywords: ["všetko suplementuješ", "vitamíny tablety", "umelý zivot", "krabicka liekov"],
    query: "Ja som videl u môjho veganskeho kolegu krabičku na tabletky (Zinok, Omega 3, Vápnik..). Ako to môže byť príroda a zdravé, ak ty prehĺtaš len chemické náhrady a kapsule?",
    reality: "Žijeme v industriálnom odďaľovaní a znehodnotenej vnútornej biote pôdy voči chápaniu celkovej komercionalizácie (tvoj dedo, ak bol pastier, jedol pôdu pod trávnikom spolu pri nečistej zelenine z hnoja u kráv). Suplementácia je dnešným najčistejším farmaceutickým logickým extrahovaním mikroživín poistkami proti dnešným chudobnejším pôdam vo svete. Priemerný stravník s klobásami na liekoch zo zabraňovania tlakových hypertenzií zhltne omnoho dlhší lístok suplementov od srdcovej farmácie z nutnosti na prežitie svojej voľby chorého stravovania v budúcnosti.",
    sources: [
      { title: "Harvard Health: Do we really need supplements?", url: "https://www.health.harvard.edu/" }
    ],
    chartType: "none",
    image: "💊"
  }
];

// Kategórie pre pôvodné mýty (nové už majú vlastnú `category`).
const CATEGORY_BY_ID = {
  protein: "Výživa",
  calcium: "Výživa",
  b12: "Výživa",
  iron: "Výživa",
  omega3: "Výživa",
  iodine_thyroid: "Výživa",
  anti_nutrients: "Výživa",
  collagen: "Zdravie",
  cholesterol: "Zdravie",
  fatigue: "Zdravie",
  children_nutrition: "Zdravie",
  athletes_weak: "Zdravie",
  fake_meat_chemicals: "Výživa",
  supplements_everything: "Výživa",
  soy_estrogen: "Výživa",
  canines: "Evolúcia",
  meat_evolution: "Evolúcia",
  plants_pain: "Etika",
  personal_choice: "Etika",
  free_range: "Etika",
  honey: "Etika",
  cows_explode: "Etika",
  circle_of_life: "Etika",
  culture_tradition: "Etika",
  overpopulation_cows: "Etika",
  crop_deaths: "Etika",
  soy_amazon: "Ekológia",
  world_hunger: "Ekológia",
  expensive: "Praktické",
  inuit_geography: "Praktické",
};

const withCategory = (m) => ({
  ...m,
  category: m.category || CATEGORY_BY_ID[m.id] || "Ostatné",
});

export const mythsData = [...baseMyths, ...mythsExtra].map(withCategory);

// Poradie kategórií pre zobrazenie filtrov.
export const categories = [
  "Výživa",
  "Zdravie",
  "Etika",
  "Ekológia",
  "Praktické",
  "Evolúcia",
  "Argumenty",
];
