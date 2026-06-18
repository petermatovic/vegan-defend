// 100 ďalších use-casov (mýtov) pre Vegan Defender.
// Štýl je zhodný s pôvodnými dátami: provokatívna otázka + vecná, vedecky
// podložená odpoveď, zdroje a (voliteľne) graf.
// Pozn.: v reťazcoch zámerne nepoužívame rovné dvojité úvodzovky, aby sme
// nemuseli nič escapovať – používame „slovenské“ úvodzovky a apostrofy.

export const mythsExtra = [
  // ========================= VÝŽIVA =========================
  {
    id: "zinc",
    category: "Výživa",
    keywords: ["zinok", "zinc", "imunita zinok", "testosterón zinok"],
    query: "Bez mäsa nezískaš dosť zinku, budeš mať rozbitú imunitu a testosterón na nule.",
    reality: "Zinok je v strukovinách, tekvicových a konopných semienkach, ovse, cíceri či tofu vo veľkom množstve. Áno, fytáty mierne znižujú vstrebávanie, ale namáčanie, klíčenie a fermentácia (kvások, tempeh) ho odomknú. Telo sa navyše vie pri nižšom príjme adaptovať a zvýšiť absorpciu – štúdie nenachádzajú u dlhodobých vegánov klinický deficit zinku.",
    sources: [
      { title: "NIH Office of Dietary Supplements: Zinc", url: "https://ods.od.nih.gov/factsheets/Zinc-HealthProfessional/" }
    ],
    chartType: "bar",
    chartTitle: "Obsah zinku v 100 g potraviny (mg)",
    chartData: [
      { name: "Hovädzie mäso", amount: 4.8, fill: "#e57373" },
      { name: "Šošovica (varená)", amount: 1.3, fill: "#81c784" },
      { name: "Cícer", amount: 1.5, fill: "#66bb6a" },
      { name: "Tekvicové semienka", amount: 7.6, fill: "#2e7d32" }
    ],
    chartDataKey: "amount",
    chartUnit: "mg",
    image: "🛡️"
  },
  {
    id: "vitamin_d",
    category: "Výživa",
    keywords: ["vitamín d", "vitamin d", "slnko", "déčko", "decko vitamin"],
    query: "Vitamín D je len v rybách a vajciach, vegáni sú vždy v deficite!",
    reality: "Vitamín D nie je „mäsový“ vitamín – je to hormón, ktorý si telo vyrába z cholesterolu pôsobením slnka. V zime má deficit prakticky celá populácia mierneho pásma bez ohľadu na stravu (aj jedáci mäsa). Riešenie je rovnaké pre všetkých: slnko a doplnok D3 z lišajníka (vegan) alebo D2. Ryba nie je liek na geografiu.",
    sources: [
      { title: "NHS: Vitamin D", url: "https://www.nhs.uk/conditions/vitamins-and-minerals/vitamin-d/" }
    ],
    chartType: "none",
    image: "☀️"
  },
  {
    id: "selenium",
    category: "Výživa",
    keywords: ["selén", "selen", "selenium", "para orechy"],
    query: "Selén získaš len zo živočíchov, inak ti zlyhá štítna žľaza.",
    reality: "Jeden až dva para orechy denne pokryjú celú dennú dávku selénu – a to s rezervou. Selén je aj v celozrnných obilninách, hubách a slnečnicových semienkach. Obsah závisí hlavne od pôdy, nie od toho, či ide o rastlinu alebo zviera (zvieratá ho tiež získavajú len z rastlín a krmiva).",
    sources: [
      { title: "NIH ODS: Selenium", url: "https://ods.od.nih.gov/factsheets/Selenium-HealthProfessional/" }
    ],
    chartType: "none",
    image: "🥥"
  },
  {
    id: "creatine",
    category: "Výživa",
    keywords: ["kreatín", "kreatin", "creatine", "sila kreatin", "mozog kreatin"],
    query: "Kreatín je len v mäse, vegáni budú vždy slabší a hlúpejší v posilke.",
    reality: "Telo si kreatín vyrába samo v pečeni a obličkách. Vegáni majú nižšie zásoby v svaloch, čo paradoxne znamená, že na lacný kreatín monohydrát (vyrábaný synteticky, nie zo zvierat) reagujú ešte výraznejšie ako jedáci mäsa – v sile aj v kognitívnych testoch. Je to najlepšie preskúmaný a najlacnejší doplnok na svete.",
    sources: [
      { title: "Examine.com: Creatine", url: "https://examine.com/supplements/creatine/" }
    ],
    chartType: "none",
    image: "💪"
  },
  {
    id: "taurine",
    category: "Výživa",
    keywords: ["taurín", "taurin", "taurine", "energia taurin"],
    query: "Taurín je len v mäse, bez neho ti zlyhá srdce a oči!",
    reality: "Zdravé ľudské telo si taurín syntetizuje z aminokyselín cysteínu a metionínu, ktoré sú bohato v strukovinách a semienkach. Na rozdiel od mačiek (ktoré ho naozaj musia prijať z potravy) človek nie je obligátny mäsožravec. Štúdie nenachádzajú u vegánov nedostatok taurínu spôsobujúci ochorenia.",
    sources: [
      { title: "NCBI: Taurine biosynthesis in humans", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC3501277/" }
    ],
    chartType: "none",
    image: "⚡"
  },
  {
    id: "carnitine",
    category: "Výživa",
    keywords: ["karnitín", "karnitin", "carnitine", "tuky energia"],
    query: "Bez L-karnitínu z mäsa nedokážeš páliť tuky a budeš unavený.",
    reality: "Telo si karnitín vyrába z aminokyselín lyzínu a metionínu. Vegáni majú síce nižšie hladiny, no to je skôr výhoda: črevné baktérie z karnitínu a cholínu (z mäsa a vajec) vyrábajú TMAO – látku spojenú s upchávaním ciev a infarktom. Menej karnitínu z potravy = menej TMAO.",
    sources: [
      { title: "NutritionFacts.org: Carnitine, Choline, Cancer and Cholesterol (TMAO)", url: "https://nutritionfacts.org/video/carnitine-choline-cancer-and-cholesterol-the-tmao-connection/" }
    ],
    chartType: "none",
    image: "🔥"
  },
  {
    id: "choline",
    category: "Výživa",
    keywords: ["cholín", "cholin", "choline", "vajcia mozog", "pečeň cholin"],
    query: "Cholín je len vo vajciach a pečeni, bez vajec si zničíš mozog a pečeň.",
    reality: "Cholín je aj v sóji, strukovinách, ovse, brokolici, karfiole a quinoe. Áno, treba naň myslieť, ale prehnaný príjem z vajec zvyšuje TMAO a podľa štúdií aj riziko progresie rakoviny prostaty. Cieľ je dostatok, nie maximum – a rastliny ho pokryjú bez vedľajšieho cholesterolu.",
    sources: [
      { title: "NIH ODS: Choline", url: "https://ods.od.nih.gov/factsheets/Choline-HealthProfessional/" }
    ],
    chartType: "none",
    image: "🧠"
  },
  {
    id: "vitamin_a",
    category: "Výživa",
    keywords: ["vitamín a", "vitamin a", "retinol", "betakarotén", "betakaroten", "zrak"],
    query: "Pravý vitamín A (retinol) je len v živočíchoch, betakarotén z mrkvy je nanič.",
    reality: "Zdravý človek si z betakaroténu (mrkva, sladké zemiaky, kel, tekvica) vyrobí presne toľko retinolu, koľko potrebuje – a nikdy sa ním nepredávkuje, čo je obrovská výhoda oproti toxickému predávkovaniu retinolom z pečene. Telo má vstavanú poistku, ktorú rastlinný zdroj rešpektuje.",
    sources: [
      { title: "NIH ODS: Vitamin A and Carotenoids", url: "https://ods.od.nih.gov/factsheets/VitaminA-HealthProfessional/" }
    ],
    chartType: "none",
    image: "🥕"
  },
  {
    id: "vitamin_k2",
    category: "Výživa",
    keywords: ["k2", "vitamín k2", "vitamin k2", "kosti k2", "menaquinón"],
    query: "Vitamín K2 je len v živočíchoch a syroch, bez neho ti vápnik zanesie tepny!",
    reality: "K2 produkujú baktérie – preto je v fermentovaných potravinách. Vegánskou bombou na K2 je nattó (fermentovaná sója), ktoré má najvyšší obsah na svete. Navyše si časť K2 vyrobia aj naše vlastné črevné baktérie z rastlinného K1 z listovej zeleniny.",
    sources: [
      { title: "NCBI: Vitamin K2 sources and metabolism", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6770193/" }
    ],
    chartType: "none",
    image: "🥬"
  },
  {
    id: "complete_protein",
    category: "Výživa",
    keywords: ["kompletný proteín", "neúplný proteín", "kombinovať bielkoviny", "aminokyseliny chýbajú", "komplet protein"],
    query: "Rastlinné bielkoviny sú „neúplné“ – musíš presne kombinovať ryžu s fazuľou v jednom jedle, inak to nefunguje!",
    reality: "Mýtus z 70. rokov, ktorý sama autorka neskôr odvolala. Telo udržiava zásobu aminokyselín a kombinuje ich v priebehu celého dňa – nemusíš to riešiť v jednom tanieri. Pestrá rastlinná strava (strukoviny + obilniny počas dňa) dodá všetky esenciálne aminokyseliny automaticky. Sója, quinoa a pohánka sú navyše kompletné samy o sebe.",
    sources: [
      { title: "Harvard Nutrition Source: Protein", url: "https://nutritionsource.hsph.harvard.edu/what-should-you-eat/protein/" }
    ],
    chartType: "none",
    image: "🧩"
  },
  {
    id: "leucine_bcaa",
    category: "Výživa",
    keywords: ["leucín", "leucin", "bcaa", "svalová syntéza", "anabolizmus"],
    query: "Bez leucínu zo srvátky (whey) nikdy nenaštartuješ rast svalov.",
    reality: "Leucín je vo veľkom v sóji, šošovici, arašidoch a seitane. Stačí o málo väčšia porcia rastlinného proteínu (alebo sójový izolát) a prah pre svalovú syntézu prekročíš rovnako. Dlhodobé štúdie ukazujú identický prírastok svalovej hmoty pri rastlinnom aj živočíšnom proteíne, ak je príjem dostatočný.",
    sources: [
      { title: "Hevia-Larraín et al. (2021): Vegan vs omnivorous protein & muscle", url: "https://pubmed.ncbi.nlm.nih.gov/33599941/" }
    ],
    chartType: "none",
    image: "🏋️"
  },
  {
    id: "fiber_bloating",
    category: "Výživa",
    keywords: ["vláknina nafukovanie", "plyny", "nadúvanie", "priveľa vlákniny", "nafukovanie"],
    query: "Toľko vlákniny v rastlinnej strave ti zničí trávenie a budeš stále nafúknutý.",
    reality: "Nafukovanie na začiatku je len znak, že tvoje črevné baktérie sa po rokoch nedostatku konečne kŕmia. Po pár týždňoch sa mikrobióm prispôsobí a problém zmizne. Pritom 9 z 10 ľudí na západnej strave nedosahuje ani minimálny odporúčaný príjem vlákniny – tá je palivom pre baktérie chrániace pred rakovinou hrubého čreva.",
    sources: [
      { title: "NutritionFacts.org: Fiber", url: "https://nutritionfacts.org/topics/fiber/" }
    ],
    chartType: "none",
    image: "🌾"
  },
  {
    id: "magnesium",
    category: "Výživa",
    keywords: ["horčík", "horcik", "magnezium", "kŕče", "svalové kŕče"],
    query: "Vegáni majú deficit horčíka, preto majú kŕče a problémy so spánkom.",
    reality: "Pravý opak – horčík je v centre molekuly chlorofylu, takže každá zelená rastlina je jeho zdrojom. Strukoviny, orechy, semienka, celozrnné obilniny a horká čokoláda sú nabité horčíkom. Vegáni majú typicky vyšší príjem horčíka než jedáci mäsa.",
    sources: [
      { title: "NIH ODS: Magnesium", url: "https://ods.od.nih.gov/factsheets/Magnesium-HealthProfessional/" }
    ],
    chartType: "none",
    image: "🍫"
  },
  {
    id: "potassium",
    category: "Výživa",
    keywords: ["draslík", "draslik", "potassium", "banán draslik", "krvný tlak draslik"],
    query: "Potrebuješ draslík a ten je len v mäse, banán nestačí.",
    reality: "Draslík je takmer výhradne rastlinná záležitosť – zemiaky, fazuľa, špenát, sušené marhule a paradajky ho majú viac než banán. Väčšina ľudí ho má málo, čo zvyšuje krvný tlak. Rastlinná strava draslíkom doslova preteká a pomáha tlak znižovať.",
    sources: [
      { title: "NIH ODS: Potassium", url: "https://ods.od.nih.gov/factsheets/Potassium-HealthProfessional/" }
    ],
    chartType: "none",
    image: "🥔"
  },
  {
    id: "biological_value",
    category: "Výživa",
    keywords: ["biologická hodnota", "kvalita bielkovín", "vstrebateľnosť proteínu", "diaas", "pdcaas"],
    query: "Živočíšny proteín má vyššiu biologickú hodnotu, rastlinný je menejcenný odpad.",
    reality: "Drobný rozdiel vo „skóre“ jednej potraviny je v praxi irelevantný, lebo nikto neje len jednu vec. Sójový a hrachový izolát majú skóre porovnateľné s mäsom. A „vyššia kvalita“ živočíšneho proteínu je dvojsečná – práve agresívna stimulácia rastu (IGF-1) je dôvod, prečo je spojený s vyššou úmrtnosťou.",
    sources: [
      { title: "Satija et al. (2017): Plant vs animal protein & mortality", url: "https://pubmed.ncbi.nlm.nih.gov/27479196/" }
    ],
    chartType: "none",
    image: "⚖️"
  },
  {
    id: "salt_processed",
    category: "Výživa",
    keywords: ["soľ náhrady", "sol", "spracované vegan", "vegan junk", "udeniny rastlinné"],
    query: "Rastlinné náhrady sú napchaté soľou, vegáni jedia samú nezdravú chémiu.",
    reality: "Áno, vegánska klobása je junk food – rovnako ako tá mäsová, len bez cholesterolu a karcinogénov skupiny 1. Ale celá pointa rastlinnej stravy nie sú náhrady, ale celé potraviny: fazuľa, ovos, zelenina, ovocie. Porovnávať párky s párkami je fér; porovnávať vegánsky párok s brokolicou nie.",
    sources: [
      { title: "WHO: Healthy diet (salt and processed food)", url: "https://www.who.int/news-room/fact-sheets/detail/healthy-diet" }
    ],
    chartType: "none",
    image: "🧂"
  },
  {
    id: "fruit_sugar",
    category: "Výživa",
    keywords: ["cukor ovocie", "fruktóza", "priveľa ovocia", "cukrovka ovocie", "fruktoza"],
    query: "Vegáni jedia hory ovocia – ten cukor a fruktóza ti spravia cukrovku a stučnieš!",
    reality: "Fruktóza je problém vo forme sirupov a stolového cukru – nie v jablku obalenom vlákninou, vodou a antioxidantmi, ktoré spomaľujú vstrebávanie. Štúdie konzistentne ukazujú, že vyšší príjem celého ovocia znižuje, nie zvyšuje, riziko cukrovky 2. typu.",
    sources: [
      { title: "Muraki et al. (2013): Fruit consumption and type 2 diabetes", url: "https://pubmed.ncbi.nlm.nih.gov/23990623/" }
    ],
    chartType: "none",
    image: "🍎"
  },
  {
    id: "raw_only",
    category: "Výživa",
    keywords: ["surová strava", "raw vegan", "len surové", "raw", "varené ničí"],
    query: "Byť vegán znamená jesť len surovú studenú zeleninu, to telo nezvládne.",
    reality: "Vegánstvo neznamená raw. Varenie zvyšuje vstrebateľnosť mnohých živín – likopénu z paradajok, betakaroténu, železa zo špenátu. Teplý tanier ryže so šošovicou, pečené zemiaky, dusená zelenina, polievky a guláše sú jadrom rastlinnej kuchyne na celom svete. Studený šalát je voľba, nie povinnosť.",
    sources: [
      { title: "Harvard Health: Cooking and nutrient availability", url: "https://www.health.harvard.edu/staying-healthy" }
    ],
    chartType: "none",
    image: "🍲"
  },
  {
    id: "b2_riboflavin",
    category: "Výživa",
    keywords: ["riboflavín", "b2", "vitamín b2", "energia b2"],
    query: "Vitamín B2 (riboflavín) je len v mlieku, bez neho budeš mať popraskané pery a únavu.",
    reality: "Riboflavín je v hubách, mandliach, špenáte, strukovinách a najmä v obohatenom nutričnom droždí (vegánsky superpotravina s orieškovo-syrovou chuťou). Lyžica droždia pokryje veľkú časť dennej dávky B2 aj B12 naraz.",
    sources: [
      { title: "NIH ODS: Riboflavin", url: "https://ods.od.nih.gov/factsheets/Riboflavin-HealthProfessional/" }
    ],
    chartType: "none",
    image: "🧀"
  },
  {
    id: "dha_brain_baby",
    category: "Výživa",
    keywords: ["dha dieťa", "vývoj mozgu dieťa", "tehotenstvo omega", "kojenie dha"],
    query: "Tehotná alebo dojčiaca vegánka oberá dieťa o DHA a poškodzuje vývoj jeho mozgu.",
    reality: "DHA pochádza z rias – ryba je len prostredník. Vegánky môžu (a majú) brať priamo riasový DHA doplnok, ktorý je čistý, bez ortuti a mikroplastov, ktorých sa ryby v dnešnom oceáne nezbavia. Dieťa tak dostane to isté DHA bez ťažkých kovov.",
    sources: [
      { title: "NutritionFacts.org: Algae-based DHA", url: "https://nutritionfacts.org/topics/dha/" }
    ],
    chartType: "none",
    image: "🤰"
  },
  {
    id: "protein_quantity",
    category: "Výživa",
    keywords: ["koľko proteínu", "gramov bielkovín", "málo proteínu vegan", "deficit proteínu"],
    query: "Vegáni jednoducho nevedia zjesť dosť gramov bielkovín za deň, fyzicky to nejde.",
    reality: "Šošovica má 9 g proteínu na 100 kcal, tofu ešte viac – to je hustota porovnateľná s mäsom. Bežná porcia strukovín, kúsok seitanu či sójový jogurt a si na cieli bez snahy. Deficit proteínu v rozvinutom svete prakticky neexistuje; trpia ním len ľudia hladujúci celkovo.",
    sources: [
      { title: "Academy of Nutrition and Dietetics: Vegetarian diets position", url: "https://pubmed.ncbi.nlm.nih.gov/27886704/" }
    ],
    chartType: "none",
    image: "🥣"
  },
  {
    id: "bioavailability_overall",
    category: "Výživa",
    keywords: ["vstrebateľnosť", "biodostupnosť", "telo to nevstrebe", "rastlinné sa nevstrebáva"],
    query: "Aj keď to v rastline je, telo to vôbec nevstrebe – je to len číslo na papieri.",
    reality: "Vstrebateľnosť sa dá jednoducho zvýšiť: vitamín C k železu, namáčanie a klíčenie strukovín, fermentácia, varenie. Evolúcia nás vyladila na rastlinnú stravu – nie nadarmo máme dlhé črevo bylinožravca. Tvrdenie „nič sa nevstrebe“ vyvracia stámiliarda zdravých vegánov a stovky kontrolovaných štúdií.",
    sources: [
      { title: "NutritionFacts.org: Nutrient absorption", url: "https://nutritionfacts.org/topics/" }
    ],
    chartType: "none",
    image: "🔬"
  },

  // ========================= ZDRAVIE =========================
  {
    id: "cancer_meat",
    category: "Zdravie",
    keywords: ["rakovina mäso", "karcinogén", "spracované mäso", "who rakovina", "údeniny rakovina", "klobasa rakovina"],
    query: "To je hlúposť, že mäso spôsobuje rakovinu – to je len ďalší vegánsky strašiak.",
    reality: "Nie je to názor vegánov, je to oficiálna klasifikácia WHO: spracované mäso (slanina, klobásy, šunka) je karcinogén skupiny 1 – tá istá kategória ako cigarety a azbest. Červené mäso je „pravdepodobný“ karcinogén skupiny 2A. Vláknina z rastlín naopak riziko rakoviny hrubého čreva preukázateľne znižuje.",
    sources: [
      { title: "WHO/IARC: Carcinogenicity of processed and red meat", url: "https://www.who.int/news-room/questions-and-answers/item/cancer-carcinogenicity-of-the-consumption-of-red-meat-and-processed-meat" }
    ],
    chartType: "none",
    image: "🎗️"
  },
  {
    id: "diabetes_type2",
    category: "Zdravie",
    keywords: ["cukrovka", "diabetes", "inzulín", "cukrovka 2", "inzulinová rezistencia"],
    query: "Sacharidy z ryže a zemiakov u vegánov spôsobia cukrovku, mäso je predsa bez cukru.",
    reality: "Cukrovku 2. typu nespôsobuje škrob, ale tuk hromadiaci sa vo svaloch a pečeni, ktorý blokuje účinok inzulínu – a živočíšny nasýtený tuk je tu hlavný hráč. Štúdie ukazujú, že celostná rastlinná strava riziko cukrovky 2. typu výrazne znižuje a u mnohých pacientov ju dokáže zvrátiť.",
    sources: [
      { title: "Tonstad et al.: Vegetarian diets and type 2 diabetes", url: "https://pubmed.ncbi.nlm.nih.gov/19351712/" }
    ],
    chartType: "bar",
    chartTitle: "Relatívny výskyt cukrovky 2. typu podľa stravy",
    chartData: [
      { name: "Jedáci mäsa", amount: 100, fill: "#e57373" },
      { name: "Vegetariáni", amount: 61, fill: "#ffb74d" },
      { name: "Vegáni", amount: 38, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🩺"
  },
  {
    id: "heart_reversal",
    category: "Zdravie",
    keywords: ["srdce", "infarkt", "kardiovaskulárne", "upchaté cievy", "ateroskleróza", "kardio"],
    query: "Srdcové choroby sú genetika a vek, strava s tým nič nespraví.",
    reality: "Klinické štúdie (Ornish, Esselstyn) ukázali niečo, čo nezvládli ani lieky: celostná rastlinná strava dokáže zúžené tepny reálne uvoľniť a zvrátiť priebeh ischemickej choroby srdca. Ide o jedinú diétu s opakovane preukázanou regresiou aterosklerózy.",
    sources: [
      { title: "Ornish et al.: Lifestyle changes and coronary heart disease", url: "https://pubmed.ncbi.nlm.nih.gov/9863851/" }
    ],
    chartType: "none",
    image: "❤️‍🩹"
  },
  {
    id: "gut_microbiome",
    category: "Zdravie",
    keywords: ["mikrobióm", "črevné baktérie", "trávenie zdravie", "probiotiká", "mikrobiom"],
    query: "Telo potrebuje mäso pre zdravé trávenie a silné črevá.",
    reality: "Črevné baktérie sa živia vlákninou, ktorá je výhradne v rastlinách – mäso vlákninu neobsahuje vôbec. Vegánska strava do pár dní zvyšuje rozmanitosť mikrobiómu a produkciu protizápalových mastných kyselín (butyrát), zatiaľ čo strava na mäse podporuje baktérie produkujúce TMAO a črevný zápal.",
    sources: [
      { title: "David et al. (2014): Diet rapidly alters the gut microbiome", url: "https://pubmed.ncbi.nlm.nih.gov/24336217/" }
    ],
    chartType: "none",
    image: "🦠"
  },
  {
    id: "blue_zones",
    category: "Zdravie",
    keywords: ["modré zóny", "dlhovekosť", "storoční", "okinawa", "sardínia", "blue zones"],
    query: "Najstarší ľudia sveta jedia mäso, žiadna „modrá zóna“ nie je vegánska.",
    reality: "Práve naopak: obyvatelia modrých zón (Okinawa, Sardínia, Loma Linda, Ikaria, Nicoya) jedia prevažne rastliny – strukoviny, obilniny, zeleninu – a mäso len zriedka, sviatočne. Najdlhšie žijúca a najlepšie zdokumentovaná skupina, adventisti z Loma Lindy, sú z veľkej časti vegetariáni a vegáni.",
    sources: [
      { title: "Buettner & Skemp: Blue Zones lessons for living longer", url: "https://pubmed.ncbi.nlm.nih.gov/30202288/" }
    ],
    chartType: "none",
    image: "🌐"
  },
  {
    id: "dementia_brain",
    category: "Zdravie",
    keywords: ["demencia", "alzheimer", "mozog starnutie", "pamäť", "kognitívny úpadok"],
    query: "Bez živočíšnych tukov ti zdegeneruje mozog a dostaneš Alzheimera.",
    reality: "Riziková je práve nadmerná spotreba nasýtených tukov a hému zo živočíchov, ktoré podporujú cievne poškodenie mozgu a oxidačný stres. Rastlinná strava bohatá na antioxidanty, listovú zeleninu a bobule sa v štúdiách spája s pomalším kognitívnym starnutím (diéta MIND).",
    sources: [
      { title: "Morris et al.: MIND diet and cognitive decline", url: "https://pubmed.ncbi.nlm.nih.gov/26086182/" }
    ],
    chartType: "none",
    image: "🧠"
  },
  {
    id: "kidney_protein",
    category: "Zdravie",
    keywords: ["obličky", "ledviny", "protein obličky", "filtrácia", "renálne"],
    query: "Vysoký príjem bielkovín u športujúcich vegánov zničí obličky.",
    reality: "Záťaž obličiek nezvyšuje proteín ako taký, ale najmä živočíšny proteín, ktorý zvyšuje kyslosť a filtračný tlak. Rastlinný proteín obličky zaťažuje menej a u ľudí s ich oslabením sa priamo odporúča. Zdravým obličkám rastlinný proteín neškodí.",
    sources: [
      { title: "Clinical Journal: Plant vs animal protein and kidney function", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC6835171/" }
    ],
    chartType: "none",
    image: "🫘"
  },
  {
    id: "acne_dairy",
    category: "Zdravie",
    keywords: ["akné", "pleť", "mliečne výrobky pleť", "vyrážky", "akne"],
    query: "Vegáni majú zlú pleť, lebo im chýbajú živiny z mäsa a mlieka.",
    reality: "Opak je pravdou – mliečne výrobky patria medzi najsilnejšie stravové spúšťače akné, lebo zvyšujú inzulín a IGF-1, ktoré rozbúria mazové žľazy. Mnohým ľuďom sa po vysadení mliečnych výrobkov pleť dramaticky zlepší.",
    sources: [
      { title: "Juhl et al.: Dairy intake and acne", url: "https://pubmed.ncbi.nlm.nih.gov/30096883/" }
    ],
    chartType: "none",
    image: "🧴"
  },
  {
    id: "inflammation",
    category: "Zdravie",
    keywords: ["zápal", "chronický zápal", "crp", "protizápalová strava", "zapal"],
    query: "Rastlinná strava telo nedokáže ochrániť pred zápalmi tak ako kvalitné mäso.",
    reality: "Meranie zápalových markerov (napr. CRP) ukazuje, že rastlinná strava zápal znižuje, kým spracované a červené mäso ho zvyšujú. Antioxidanty, polyfenoly a vláknina sú prirodzené protizápalové nástroje, ktoré mäso jednoducho neobsahuje.",
    sources: [
      { title: "Eichelmann et al.: Plant-based diets and inflammation", url: "https://pubmed.ncbi.nlm.nih.gov/26780279/" }
    ],
    chartType: "none",
    image: "🔥"
  },
  {
    id: "testosterone_low",
    category: "Zdravie",
    keywords: ["testosterón nízky", "mužnosť hormóny", "libido", "testosteron", "chlap hormony"],
    query: "Vegánski muži majú nízky testosterón, sú to slabosi bez libida.",
    reality: "Štúdie nenachádzajú medzi vegánmi a jedákmi mäsa významný rozdiel v testosteróne. Naopak, zdravie ciev (ktoré rastlinná strava zlepšuje) je kľúčové pre erekciu a libido – erektilná dysfunkcia je často prvým príznakom upchávajúcich sa tepien z mäsa a syra.",
    sources: [
      { title: "NutritionFacts.org: Diet and erectile dysfunction", url: "https://nutritionfacts.org/topics/erectile-dysfunction/" }
    ],
    chartType: "none",
    image: "🍆"
  },
  {
    id: "mood_depression",
    category: "Zdravie",
    keywords: ["depresia", "nálada", "úzkosť", "psychika strava", "serotonín"],
    query: "Vegáni sú nervózni a depresívni, lebo telo bez mäsa trpí.",
    reality: "Zhoršenie nálady takmer vždy súvisí s deficitom B12 alebo omega-3 – obe sa dajú jednoducho doplniť. Pri správne zostavenej strave dáta naopak ukazujú u rastlinných stravníkov nižšiu mieru úzkosti a lepšiu náladu vďaka vláknine a antioxidantom podporujúcim mozog.",
    sources: [
      { title: "Beezhold et al.: Vegetarian diets and mood", url: "https://pubmed.ncbi.nlm.nih.gov/22717188/" }
    ],
    chartType: "none",
    image: "🙂"
  },
  {
    id: "weight_loss",
    category: "Zdravie",
    keywords: ["chudnutie", "schudnúť", "váha", "obezita", "diéta na chudnutie"],
    query: "Z rastlín nikdy nezhudneš, len z proteínu a mäsa sa chudne.",
    reality: "Rastlinná strava je objemná a kalorický menej hustá – zaženie hlad pri menšom počte kalórií. V randomizovaných štúdiách vegáni schudli viac než kontrolné skupiny aj bez počítania kalórií, čisto vďaka vláknine a vode v jedle.",
    sources: [
      { title: "Barnard et al.: Plant-based diet and weight loss (BROAD/RCT)", url: "https://pubmed.ncbi.nlm.nih.gov/26138004/" }
    ],
    chartType: "none",
    image: "⚖️"
  },
  {
    id: "orthorexia",
    category: "Zdravie",
    keywords: ["orthorexia", "porucha príjmu", "posadnutosť jedlom", "extrémna diéta", "orthorexia veganstvo"],
    query: "Vegánstvo je len maskovaná porucha príjmu potravy a posadnutosť jedlom.",
    reality: "Vegánstvo je etické a zdravotné rozhodnutie, nie diagnóza. Áno, ktokoľvek môže mať nezdravý vzťah k jedlu – aj jedáci mäsa, aj fitness „bro“ vážiaci kuracie prsia na gram. Zamieňať si súcitnú voľbu s chorobou je urážlivé voči ľuďom so skutočnou poruchou príjmu.",
    sources: [
      { title: "The Vegan Society: Health and wellbeing", url: "https://www.vegansociety.com/resources/nutrition-and-health" }
    ],
    chartType: "none",
    image: "🍽️"
  },
  {
    id: "life_expectancy",
    category: "Zdravie",
    keywords: ["dĺžka života vegan", "úmrtnosť", "žijú dlhšie", "adventisti", "dlhovekosť strava"],
    query: "Žiadna štúdia nedokázala, že vegáni žijú dlhšie – to si len nahovárate.",
    reality: "Adventistická štúdia (Loma Linda) na desaťtisícoch ľudí ukázala u vegánov nižšiu celkovú úmrtnosť než u jedákov mäsa, pričom najlepšie obstáli vegáni-muži. Rastlinná strava sa konzistentne spája s nižším rizikom srdcových chorôb, cukrovky aj viacerých druhov rakoviny.",
    sources: [
      { title: "Orlich et al.: Vegetarian dietary patterns and mortality (AHS-2)", url: "https://pubmed.ncbi.nlm.nih.gov/23836264/" }
    ],
    chartType: "none",
    image: "⏳"
  },
  {
    id: "anemia_b12_myth",
    category: "Zdravie",
    keywords: ["anémia b12", "perniciózna anémia", "nervy b12", "brnenie", "b12 deficit nervy"],
    query: "B12 deficit u vegánov ti nezvratne zničí nervy – preto je vegánstvo nebezpečné.",
    reality: "B12 deficit je reálny a vážny – preto ho každý vegán jednoducho rieši lacným doplnkom, ktorý problém spoľahlivo eliminuje. Ironicky deficit B12 majú často aj starší jedáci mäsa pre zhoršené vstrebávanie. Vedieť o B12 a brať ho je súčasť zodpovedného vegánstva, nie jeho slabina.",
    sources: [
      { title: "NIH ODS: Vitamin B12", url: "https://ods.od.nih.gov/factsheets/VitaminB12-HealthProfessional/" }
    ],
    chartType: "none",
    image: "💉"
  },
  {
    id: "hair_loss",
    category: "Zdravie",
    keywords: ["vypadávanie vlasov", "lysina", "vlasy padajú vegan", "rednutie vlasov"],
    query: "Vegánom vypadávajú vlasy, lebo nemajú dosť bielkovín a železa.",
    reality: "Dočasné rednutie vlasov pri prudkom prechode býva z náhleho kalorického deficitu, nie z absencie mäsa. Pri dostatku kalórií, proteínu, železa, zinku a B12 vlasy prosperujú – stačí myslieť na pestrosť a nehladovať počas prechodu.",
    sources: [
      { title: "NutritionFacts.org: Iron and the vegan diet", url: "https://nutritionfacts.org/topics/iron/" }
    ],
    chartType: "none",
    image: "💇"
  },
  {
    id: "cold_hands",
    category: "Zdravie",
    keywords: ["zima vegan", "studené ruky", "stále mi je zima", "termoregulácia", "studené končatiny"],
    query: "Vegánom je stále zima, lebo mäso „zahrieva“ a rastliny nie.",
    reality: "Pocit chladu na začiatku býva z prudkého poklesu kalórií, nie z chýbajúceho mäsa – „zahrievanie“ je len trávenie kalórií. Stačí jesť dosť hutných jedál (ryža, strukoviny, orechy) a pridať koreniny ako zázvor či čili. Termoregulácia s mäsom nesúvisí.",
    sources: [
      { title: "PCRM: Calorie density and energy", url: "https://www.pcrm.org/good-nutrition" }
    ],
    chartType: "none",
    image: "🧤"
  },
  {
    id: "bones_strength",
    category: "Zdravie",
    keywords: ["zlomeniny vegan", "krehké kosti", "hustota kostí", "osteoporóza vegan"],
    query: "Vegáni majú krehkejšie kosti a viac zlomenín – to je dokázané.",
    reality: "Riziko zlomenín u vegánov stúpa len vtedy, ak majú nízky príjem vápnika a bielkovín a nízke D. Keď je strava dobre zostavená (obohatené nápoje, tofu, listová zelenina, D + cvičenie), hustota kostí je porovnateľná. Nie je to o vegánstve, ale o plánovaní.",
    sources: [
      { title: "EPIC-Oxford: Vegetarian/vegan diets and fracture risk", url: "https://pubmed.ncbi.nlm.nih.gov/33222015/" }
    ],
    chartType: "none",
    image: "🦴"
  },
  {
    id: "stomach_strength",
    category: "Zdravie",
    keywords: ["žalúdok oslabený", "trávenie mäsa", "enzýmy mäso", "neztrávim", "tráviace enzýmy"],
    query: "Keď prestaneš jesť mäso, telo stratí enzýmy a už ho nikdy nestrávi.",
    reality: "Tráviace enzýmy sa nestrácajú natrvalo – telo ich produkuje podľa potreby. Dočasná ťažoba po dlhej pauze je dočasná. To skôr ukazuje, ako náročné je mäso na trávenie, kým rastliny telo spracúva ľahšie.",
    sources: [
      { title: "Harvard Health: Digestion basics", url: "https://www.health.harvard.edu/topics/digestive-health" }
    ],
    chartType: "none",
    image: "🫄"
  },

  // ========================= ETIKA =========================
  {
    id: "eggs_backyard",
    category: "Etika",
    keywords: ["vlastné sliepky", "vajcia z dvora", "domáce vajcia", "sliepka znáša", "backyard vajcia"],
    query: "Moje sliepky na dvore majú raj, ich vajcia predsa nikomu neublížia!",
    reality: "Aj „šťastná“ sliepka pochádza z liahne, kde jednodňových kohútikov (polovicu vyliahnutých) usmrcujú hneď po narodení – nevedia znášať. Sliepky boli vyšľachtené znášať 300 vajec ročne namiesto prirodzených ~12, čo vyčerpáva ich vápnik a ničí zdravie. Etickejšie je vajcia nechať sliepke (zožerie ich späť) než z nej robiť automat.",
    sources: [
      { title: "The Humane League: Male chick culling", url: "https://thehumaneleague.org/article/male-chick-culling" }
    ],
    chartType: "none",
    image: "🥚"
  },
  {
    id: "male_chicks",
    category: "Etika",
    keywords: ["drvenie kohútikov", "samčekov zabíjajú", "liaheň kuriatka", "maceration", "kohutiky"],
    query: "To je propaganda, že v liahňach zabíjajú kuriatka len preto, že sú samce.",
    reality: "Bohužiaľ je to bežná, legálna prax: kohútiky vo vajčiarskom priemysle nemajú ekonomickú hodnotu (nezačnú znášať a nie sú mäsové plemeno), preto sa živé drvia alebo udúšajú plynom – globálne miliardy ročne. Platí to aj pre vajcia z „voľného výbehu“.",
    sources: [
      { title: "RSPCA: What happens to male chicks?", url: "https://www.rspca.org.uk/adviceandwelfare/farm/laying-hens" }
    ],
    chartType: "none",
    image: "🐤"
  },
  {
    id: "dairy_calves",
    category: "Etika",
    keywords: ["teliatka odoberajú", "krava teľa odlúčenie", "mlieko teliatko", "dojnica teľa", "teliatka mlieko"],
    query: "Krava na mlieko predsa netrpí, len ju podojíme a žije ďalej v pohode.",
    reality: "Aby krava dávala mlieko, musí každoročne porodiť teľa – ktoré jej do dňa-dvoch odoberú, aby mlieko zostalo pre ľudí. Krava po odlúčení niekoľko dní reve za mláďaťom. Samčeky často skončia ako teľacie mäso. Mliekarstvo a mäsiarstvo sú dva konce tej istej linky.",
    sources: [
      { title: "RSPCA: Welfare of dairy cattle", url: "https://kb.rspca.org.au/knowledge-base/what-are-the-animal-welfare-issues-with-dairy-cows/" }
    ],
    chartType: "none",
    image: "🐮"
  },
  {
    id: "fish_pain",
    category: "Etika",
    keywords: ["ryby necítia bolesť", "ryba nemá pocity", "rybolov etika", "ryby utrpenie", "ryby bolest"],
    query: "Ryby nič necítia, sú to len studené tvory bez nervov, lov rýb je v pohode.",
    reality: "Ryby majú nociceptory aj opioidné receptory, reagujú na bolesť, učia sa jej vyhýbať a po poranení berú lieky proti bolesti, ak majú možnosť. Udusenie na vzduchu alebo rozrezanie zaživa je pre ne reálne utrpenie. Veda dnes priznáva rybám cit pre bolesť.",
    sources: [
      { title: "Sneddon: Pain perception in fish", url: "https://pubmed.ncbi.nlm.nih.gov/26095926/" }
    ],
    chartType: "none",
    image: "🐠"
  },
  {
    id: "bivalves",
    category: "Etika",
    keywords: ["mušle", "ustrice", "lastúry", "bivalves", "ustrice vegan", "mušle vegan"],
    query: "Mušle a ustrice nemajú mozog – tak prečo by ich nemohol jesť ani vegán?",
    reality: "Toto je legitímne sporná téma aj medzi vegánmi (tzv. ostroveganstvo). Mušle naozaj nemajú centrálny nervový systém. Väčšina vegánov ich však neje z dvoch dôvodov: nie je istota o absencii citu a chov narúša morské ekosystémy. Je to však oveľa menší etický problém než cicavce či ryby.",
    sources: [
      { title: "Diana Fleischman: The ethics of eating bivalves", url: "https://sentienceinstitute.org/" }
    ],
    chartType: "none",
    image: "🦪"
  },
  {
    id: "insects_food",
    category: "Etika",
    keywords: ["hmyz jesť", "cvrčky", "múčne červy", "entomofágia", "hmyzí proteín"],
    query: "Jedzme hmyz – je to ekologické a vegáni proti tomu nemôžu nič mať.",
    reality: "Hmyz má nervovú sústavu a vyhýba sa škodlivým podnetom, takže nejde o „nič necítiacu“ potravu. Z pohľadu vegánstva je zbytočné chovať a zabíjať miliardy tvorov, keď máme rastlinné zdroje proteínu (strukoviny), ktoré sú lacnejšie aj etickejšie. Hmyz rieši ekológiu, nie etiku.",
    sources: [
      { title: "Sentience Institute: Insect sentience", url: "https://sentienceinstitute.org/" }
    ],
    chartType: "none",
    image: "🦗"
  },
  {
    id: "wool",
    category: "Etika",
    keywords: ["vlna", "ovce strihanie", "merino", "vlnené oblečenie", "vlna etika"],
    query: "Vlna predsa neubližuje, ovca sa len ostrihá a je jej teplo!",
    reality: "Ovce boli vyšľachtené na nadmernú produkciu vlny (pôvodne by si ju zhodili samy). Strihanie po kvótach býva rýchle a hrubé, s častými poraneniami, a v krajinách ako Austrália sa praktizuje bolestivý „mulesing“ (vyrezávanie kože). Keď ovca prestane byť produktívna, končí na bitúnku.",
    sources: [
      { title: "PETA / Four Paws: The wool industry", url: "https://www.four-paws.org/campaigns-topics/topics/farm-animals/sheep" }
    ],
    chartType: "none",
    image: "🐑"
  },
  {
    id: "leather_byproduct",
    category: "Etika",
    keywords: ["koža vedľajší produkt", "kožené topánky", "leather", "useň", "koža etika"],
    query: "Koža je len vedľajší produkt mäsa – aspoň sa nič nevyhodí, kúpim si kožené topánky.",
    reality: "Koža nie je „odpad“, je to lukratívny spoluprodukt, ktorý mäsovému a mliečnemu priemyslu zvyšuje zisk a tým ho dotuje – kupovaním kože ho priamo financuješ. Časť kože navyše pochádza z mladých teliat a zo zvierat chovaných primárne pre kožu. Existuje mnoho rastlinných a recyklovaných alternatív.",
    sources: [
      { title: "Collective Fashion Justice: Leather is not a byproduct", url: "https://www.collectivefashionjustice.org/leather" }
    ],
    chartType: "none",
    image: "👞"
  },
  {
    id: "pets_meat",
    category: "Etika",
    keywords: ["pes mäso", "mačka mäso", "krmivo pre zvieratá", "domáce zvieratá strava", "krmivo mäso"],
    query: "Ako môžeš mať psa/mačku a kŕmiť ho – aj tak musíš kupovať mäso!",
    reality: "Mačky sú obligátne mäsožravce, no dnes existuje aj nutrične kompletné krmivo so syntetickým taurínom. Psy sú všežravce a darí sa im aj na overených rastlinných krmivách. Otázka existencie chovaných miláčikov je samostatná téma; vegánstvo znamená minimalizovať utrpenie tam, kde to ide – nie ho ignorovať úplne.",
    sources: [
      { title: "Knight & Leitsberger: Vegetarian diets for companion animals", url: "https://www.ncbi.nlm.nih.gov/pmc/articles/PMC5035952/" }
    ],
    chartType: "none",
    image: "🐕"
  },
  {
    id: "lab_grown",
    category: "Etika",
    keywords: ["laboratórne mäso", "kultivované mäso", "in vitro", "lab grown", "umelé mäso bunky"],
    query: "Načo vegánstvo, keď čoskoro budeme jesť mäso z laboratória bez zabíjania?",
    reality: "Kultivované mäso je sľubná technológia, ktorá by mohla výrazne znížiť utrpenie. Vegáni ho väčšinou vítajú. Lenže je stále drahé, nedostupné a často závislé od živočíšneho séra. Kým príde na pulty pre všetkých, rastliny už dnes ponúkajú bezbolestnú a lacnú voľbu – netreba na nič čakať.",
    sources: [
      { title: "Good Food Institute: Cultivated meat", url: "https://gfi.org/science/the-science-of-cultivated-meat/" }
    ],
    chartType: "none",
    image: "🧫"
  },
  {
    id: "hunting_population",
    category: "Etika",
    keywords: ["poľovníctvo", "regulácia zveri", "lov premnoženie", "poľovníci", "polovnictvo"],
    query: "Poľovníci konajú dobro – regulujú premnoženú zver, je to vlastne ochrana prírody.",
    reality: "Premnoženie zveri je z veľkej časti dôsledok samotného poľovníctva: predátory (vlky, rysy) sa likvidujú a zver sa miestami prikrmuje, aby bolo čo loviť. Prirodzené predátory regulujú populácie zadarmo a presnejšie. „Regulácia“ je často zámienka pre záľubu v streľbe.",
    sources: [
      { title: "Humane Society: The myth of hunting as conservation", url: "https://www.humanesociety.org/resources/myths-trophy-hunting" }
    ],
    chartType: "none",
    image: "🦌"
  },
  {
    id: "roadkill",
    category: "Etika",
    keywords: ["zrazené auto", "roadkill", "už mŕtve zviera", "zviera čo zomrelo", "mŕtve nájdené"],
    query: "Keby som jedol len zviera zrazené autom alebo zomreté prirodzene, to je predsa etické?",
    reality: "Z čisto teoretického hľadiska konzumácia už mŕtveho tela nepridáva nové utrpenie – to je férový argument. V praxi tým takmer nikto nežije a slúži to skôr ako rétorická pasca. Vegánstvo nie je o hľadaní hraničných výnimiek, ale o tom, čo si reálne denne nakladáme na tanier.",
    sources: [
      { title: "Earthling Ed: Common arguments answered", url: "https://earthlinged.org/resources/" }
    ],
    chartType: "none",
    image: "🚗"
  },
  {
    id: "would_die_anyway",
    category: "Etika",
    keywords: ["aj tak by zomrelo", "už je zabité", "kúpim čo je v obchode", "zviera je už mŕtve"],
    query: "To zviera v pulte je už aj tak mŕtve – moje nekúpenie ho neoživí, tak prečo nejesť?",
    reality: "Obchody objednávajú podľa predaja – každý nákup je hlas, ktorý objedná ďalšie zviera na zabitie. Nejde o jedno konkrétne telo, ale o dopyt, ktorý systém poháňa. Keby tak uvažovali všetci, dopyt by nikdy neklesol; keď klesá, klesá aj počet chovaných a zabíjaných zvierat.",
    sources: [
      { title: "Animal Charity Evaluators: Impact of dietary change", url: "https://animalcharityevaluators.org/" }
    ],
    chartType: "none",
    image: "🛒"
  },
  {
    id: "we_give_life",
    category: "Etika",
    keywords: ["dali sme im život", "bez chovu by neexistovali", "vďačiť za existenciu", "lepšie existovať"],
    query: "Tie zvieratá by bez nás vôbec neexistovali – dávame im život, mali by byť vďačné!",
    reality: "Priviesť niekoho na svet len preto, aby trpel a bol predčasne zabitý, nie je dar, ale ospravedlnenie využívania. Tou istou logikou by sme mohli ospravedlniť chov akejkoľvek bytosti v utrpení. Existencia nie je láskavosť, ak je jej jediným zmyslom smrť pre cudzí pôžitok.",
    sources: [
      { title: "Peter Singer: Animal Liberation", url: "https://petersinger.info/" }
    ],
    chartType: "none",
    image: "🎁"
  },
  {
    id: "predators_argument",
    category: "Etika",
    keywords: ["lev jedol", "predátory zabíjajú", "v prírode sa žerú", "šelmy mäso", "predator priklad"],
    query: "Lev predsa zabíja gazely – tak prečo by človek nemohol zabíjať zvieratá?",
    reality: "Lev musí zabiť, aby prežil – nemá morálnu voľbu ani supermarket plný alternatív. My ju máme. Z faktu, že niečo robí dravec z nutnosti, nevyplýva, že je to pre nás správne: levy sa aj násilne pária a jedia svoje mláďatá – nepoužívame ich ako morálny vzor.",
    sources: [
      { title: "Earthling Ed: 'Lions eat meat' argument", url: "https://earthlinged.org/resources/" }
    ],
    chartType: "none",
    image: "🦁"
  },
  {
    id: "speciesism",
    category: "Etika",
    keywords: ["prečo pes nie prasa", "speciesizmus", "diskriminácia druhu", "pes vs prasa", "milujem psa jem prasa"],
    query: "Prečo riešite prasa? Veď ja milujem svojho psa, ale prasa je predsa na jedenie.",
    reality: "Prasa je inteligentnejšie než pes a rovnako cíti bolesť, strach aj radosť. To, ktoré zviera hladkáme a ktoré jeme, je čisto kultúrna náhoda (inde jedia psy a uctievajú kravy). Toto svojvoľné rozdeľovanie podľa druhu sa nazýva špeciezizmus – predsudok rovnakého typu ako rasizmus či sexizmus.",
    sources: [
      { title: "Melanie Joy: Carnism and speciesism", url: "https://carnism.org/" }
    ],
    chartType: "none",
    image: "🐷"
  },
  {
    id: "pig_intelligence",
    category: "Etika",
    keywords: ["inteligencia prasiat", "prasa chytré", "prasa vs pes", "zvieratá rozum", "prasa inteligencia"],
    query: "Zvieratá sú hlúpe, nemajú rozum ani vedomie, na ich utrpení nezáleží.",
    reality: "Prasatá riešia hlavolamy, hrajú videohry s joystickom, používajú nástroje a poznajú svoje meno – kognitívne predčia psov aj malé deti. Ale inteligencia nie je podmienka pre právo netrpieť: rozhodujúca je schopnosť cítiť bolesť, ktorú majú aj „menej chytré“ zvieratá.",
    sources: [
      { title: "Marino & Colvin: Cognition of domestic pigs", url: "https://pubmed.ncbi.nlm.nih.gov/26044113/" }
    ],
    chartType: "none",
    image: "🧠"
  },
  {
    id: "humane_meat",
    category: "Etika",
    keywords: ["humánne zabitie", "etické mäso", "bezbolestná smrť", "humánna porážka", "etický chov"],
    query: "Existuje predsa humánne, etické mäso od malých fariem – to je v pohode.",
    reality: "„Humánne zabíjanie“ je rozpor v pojmoch: žiadna smrť bytosti, ktorá chce žiť a nepotrebuje zomrieť, nie je v jej záujme. Zviera nezabíjame z milosrdenstva, ale pre chuť. Lepší život pred smrťou je zlepšenie, ale stále hovoríme o zbytočnom usmrtení tvora, ktorý sa nemusel narodiť pre náš tanier.",
    sources: [
      { title: "Earthling Ed: Is there humane slaughter?", url: "https://earthlinged.org/resources/" }
    ],
    chartType: "none",
    image: "🔪"
  },
  {
    id: "vegan_kills_too",
    category: "Etika",
    keywords: ["aj vegáni zabíjajú", "nie si dokonalý", "veganstvo nie je čisté", "smrť pri pestovaní"],
    query: "Aj pri pestovaní rastlín zomierajú zvieratá, takže vegánstvo je pokrytectvo.",
    reality: "Vegánstvo nie je o dosiahnutí dokonalej čistoty, ale o minimalizácii utrpenia v rámci možného. Keďže väčšina pestovaných plodín na svete ide ako krmivo zvieratám, jedák mäsa nepriamo spôsobí zánik mnohonásobne viac poľných zvierat než vegán. Menej dokonalé než nula stále znamená výrazne menej.",
    sources: [
      { title: "Our World in Data: Land use of food", url: "https://ourworldindata.org/land-use-diets" }
    ],
    chartType: "none",
    image: "🌾"
  },
  {
    id: "consent_animals",
    category: "Etika",
    keywords: ["zviera nesúhlasí", "súhlas zvieraťa", "využívanie tela", "telo zvieraťa", "vykorisťovanie"],
    query: "Načo robiť drámu, veď zvieratám je jedno, čo sa s nimi deje.",
    reality: "Každé zviera bojuje o život, keď je ohrozené – uteká, kričí, bráni sa. To je najjasnejší možný prejav toho, že mu to jedno nie je. Nedostatok ľudskej reči neznamená nedostatok záujmu o vlastný život.",
    sources: [
      { title: "The Vegan Society: Why go vegan", url: "https://www.vegansociety.com/go-vegan/why-go-vegan" }
    ],
    chartType: "none",
    image: "🆘"
  },
  {
    id: "silk",
    category: "Etika",
    keywords: ["hodváb", "silk", "priadka morušová", "hodvábne", "hodvab"],
    query: "Hodváb je len z červíkov, to predsa nemôže byť etický problém.",
    reality: "Pri výrobe bežného hodvábu sa kukly priadky morušovej varia alebo naparujú zaživa, aby sa vlákno odvinulo v jednom kuse – na jeden kilogram hodvábu padne tisíce kukiel. Existujú rastlinné a syntetické alternatívy aj tzv. mierový hodváb, kde motýľ dostane šancu vyliahnuť sa.",
    sources: [
      { title: "PETA: How silk is made", url: "https://www.peta.org/issues/animals-used-for-clothing/silk/" }
    ],
    chartType: "none",
    image: "🧵"
  },

  // ========================= EKOLÓGIA =========================
  {
    id: "water_footprint",
    category: "Ekológia",
    keywords: ["spotreba vody mäso", "voda na hovädzie", "vodná stopa", "litre vody mäso", "vodná stopa mäsa"],
    query: "Sprchovaním šetrím vodu – strava s tým nemá nič spoločné.",
    reality: "Najväčší skrytý spotrebiteľ vody je tvoj tanier. Na 1 kg hovädzieho padne okolo 15 000 litrov vody (hlavne na krmivo), kým na 1 kg zeleniny či obilnín len zlomok. Jeden hamburger sa vodnou stopou rovná týždňom sprchovania.",
    sources: [
      { title: "Mekonnen & Hoekstra: Water footprint of farm animals", url: "https://waterfootprint.org/resources/Report-48-WaterFootprint-AnimalProducts-Vol1.pdf" }
    ],
    chartType: "bar",
    chartTitle: "Spotreba vody na výrobu 1 kg potraviny (litre)",
    chartData: [
      { name: "Hovädzie mäso", amount: 15400, fill: "#e57373" },
      { name: "Syr", amount: 5000, fill: "#ffb74d" },
      { name: "Strukoviny", amount: 4000, fill: "#aed581" },
      { name: "Zelenina", amount: 320, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "l",
    image: "💧"
  },
  {
    id: "almonds_water",
    category: "Ekológia",
    keywords: ["mandle voda", "mandľové mlieko", "almond water", "mandle ekológia", "mandlove mlieko"],
    query: "Ale tvoje mandľové mlieko spotrebuje šialené množstvo vody, to je ekologická katastrofa!",
    reality: "Mandľové mlieko má napriek tomu nižšiu vodnú, uhlíkovú aj pôdnu stopu než kravské mlieko v každom parametri. A 80 % svetovej sóje aj obrovská časť plodín idú zvieratám – takže vodná stopa živočíšnych výrobkov zahŕňa aj vodu na ich krmivo. Whataboutizmus s mandľami neobstojí.",
    sources: [
      { title: "Poore & Nemecek (2018): Environmental impacts of food", url: "https://www.science.org/doi/10.1126/science.aaq0216" }
    ],
    chartType: "bar",
    chartTitle: "Vodná stopa na 1 pohár (200 ml) mlieka (litre)",
    chartData: [
      { name: "Kravské mlieko", amount: 120, fill: "#e57373" },
      { name: "Mandľové mlieko", amount: 75, fill: "#ffb74d" },
      { name: "Ovsené mlieko", amount: 10, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "l",
    image: "🥛"
  },
  {
    id: "avocado_footprint",
    category: "Ekológia",
    keywords: ["avokádo ekológia", "avokádo doprava", "avocado", "avokádo voda", "avokado"],
    query: "Vy vegáni a vaše dovážané avokáda – to je predsa ekologická pohroma!",
    reality: "Avokádo má svoje problémy (voda, doprava), no jeho celková stopa je stále zlomkom stopy mäsa a syra. A ironicky avokádo nie je vegánska základná potravina – je to skôr ozdoba na instagrame. Jadro rastlinnej stravy tvoria lokálne strukoviny, zemiaky a obilniny.",
    sources: [
      { title: "Our World in Data: Carbon footprint of food", url: "https://ourworldindata.org/food-choice-vs-eating-local" }
    ],
    chartType: "none",
    image: "🥑"
  },
  {
    id: "methane_cows",
    category: "Ekológia",
    keywords: ["metán kravy", "skleníkové plyny dobytok", "methane", "kravy plyny", "emisie dobytok"],
    query: "Kravy a ich „prdy“ neovplyvňujú klímu, to je len výmysel na strašenie ľudí.",
    reality: "Hospodárske zvieratá produkujú zhruba 14,5 % všetkých skleníkových plynov – viac než celá svetová doprava dokopy. Metán z kráv je navyše desiatky ráz silnejší skleníkový plyn než CO2. Zníženie spotreby mäsa je jedna z mála vecí, ktoré klíme pomôžu rýchlo.",
    sources: [
      { title: "FAO: Livestock and climate change", url: "https://www.fao.org/news/story/en/item/197623/icode/" }
    ],
    chartType: "none",
    image: "🐄"
  },
  {
    id: "local_vs_vegan",
    category: "Ekológia",
    keywords: ["lokálne mäso", "miestne potraviny", "food miles", "domáce mäso ekológia", "lokálne vs vegan"],
    query: "Radšej jem lokálne mäso od suseda než tvoju dovezenú zeleninu – to je pre planétu lepšie.",
    reality: "Doprava tvorí len malý zlomok uhlíkovej stopy jedla (často pod 10 %) – rozhoduje, čo ješ, nie odkiaľ to prišlo. Lokálne hovädzie má vyššiu stopu než dovezená rastlinná potravina. „Lokálne“ neporazí „rastlinné“.",
    sources: [
      { title: "Our World in Data: You want to reduce the carbon footprint of your food?", url: "https://ourworldindata.org/food-choice-vs-eating-local" }
    ],
    chartType: "none",
    image: "🚚"
  },
  {
    id: "regenerative_grazing",
    category: "Ekológia",
    keywords: ["regeneratívne pasenie", "grass-fed", "uhlík pôda", "regeneratívne mäso", "pasienok uhlík"],
    query: "Regeneratívne pasenie dobytka ukladá uhlík do pôdy – tráva-kŕmené hovädzie je vlastne eko!",
    reality: "Ukladanie uhlíka pastvou je obmedzené, dočasné a ľahko zvratné – a nikdy nevykompenzuje metán, ktorý kravy stále vypúšťajú. Navyše tráva-kŕmený dobytok potrebuje ešte viac pôdy a vody na kilogram. Najlepšie pre klímu je nechať pôdu zalesniť, nie ňou pásť kravy.",
    sources: [
      { title: "FCRN Oxford: Grazed and Confused report", url: "https://www.tabledebates.org/research-library/grazed-and-confused" }
    ],
    chartType: "none",
    image: "🌱"
  },
  {
    id: "palm_oil",
    category: "Ekológia",
    keywords: ["palmový olej", "palm oil", "odlesňovanie palma", "orangutany", "palmovy olej"],
    query: "Vegáni jedia palmový olej a ničia pralesy a orangutanov – pokrytci!",
    reality: "Palmový olej je problém, no nie je vegánsky – je v sušienkach, čokoládach aj kozmetike, ktoré jedia všetci. Vegán sa mu vyhne ľahšie čítaním etikiet. A najväčší tlak na pralesy spôsobuje sója a pastviny pre dobytok, nie tofu.",
    sources: [
      { title: "WWF: Palm oil and deforestation", url: "https://www.wwf.org.uk/what-we-do/palm-oil" }
    ],
    chartType: "none",
    image: "🌴"
  },
  {
    id: "overfishing",
    category: "Ekológia",
    keywords: ["prelovenie", "prázdne oceány", "rybolov ekológia", "bycatch", "vedľajší úlovok", "oceany ryby"],
    query: "Jesť ryby je predsa udržateľné a zdravé, more je nevyčerpateľné.",
    reality: "Vyše tretiny svetových rybích populácií je prelovených a pri súčasnom tempe hrozí kolaps rybolovu. Siete zabíjajú aj milióny delfínov, korytnačiek a žralokov ako „vedľajší úlovok“ a rybárske siete tvoria väčšinu plastu v oceánskych odpadových škvrnách. Prázdne oceány sú reálne riziko.",
    sources: [
      { title: "FAO: State of World Fisheries (SOFIA)", url: "https://www.fao.org/state-of-fisheries-aquaculture" }
    ],
    chartType: "none",
    image: "🎣"
  },
  {
    id: "land_use",
    category: "Ekológia",
    keywords: ["využitie pôdy", "pôda na mäso", "land use", "plocha pre dobytok", "pôda jedlo"],
    query: "Potrebujeme chov zvierat, lebo inak by sme nemali ako využiť pôdu.",
    reality: "Živočíšna výroba zaberá 77 % všetkej poľnohospodárskej pôdy, no dodáva len 18 % kalórií a 37 % bielkovín. Prechodom na rastlinnú stravu by sa uvoľnili miliardy hektárov, ktoré by sa mohli vrátiť lesom a divočine – obrovský nástroj proti klimatickej kríze a vymieraniu druhov.",
    sources: [
      { title: "Poore & Nemecek (2018), Science", url: "https://www.science.org/doi/10.1126/science.aaq0216" }
    ],
    chartType: "pie",
    chartTitle: "Poľnohospodárska pôda vs. dodané kalórie (živočíšna výroba)",
    chartData: [
      { name: "Zaberaná pôda", amount: 77, fill: "#e57373" },
      { name: "Dodané kalórie", amount: 18, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🗺️"
  },
  {
    id: "biodiversity",
    category: "Ekológia",
    keywords: ["biodiverzita", "vymieranie druhov", "strata biotopov", "divočina", "habitat"],
    query: "Vymieranie druhov spôsobuje znečistenie, nie to, čo mám na tanieri.",
    reality: "Poľnohospodárstvo, najmä chov dobytka, je hlavnou príčinou ničenia biotopov a vymierania druhov na súši – kvôli pastvinám a poliam na krmivo sa rúbu lesy a vysúšajú mokrade. Rastlinná strava potrebuje menej pôdy, takže viac priestoru zostane voľnej prírode.",
    sources: [
      { title: "Chatham House / UNEP: Food system impacts on biodiversity", url: "https://www.chathamhouse.org/2021/02/food-system-impacts-biodiversity-loss" }
    ],
    chartType: "none",
    image: "🦋"
  },
  {
    id: "antibiotic_resistance",
    category: "Ekológia",
    keywords: ["antibiotiká chov", "rezistencia antibiotík", "superbaktérie", "antibiotic resistance", "antibiotika dobytok"],
    query: "Antibiotická rezistencia je problém nemocníc, nie chovu zvierat a môjho steaku.",
    reality: "Väčšina všetkých antibiotík na svete sa spotrebuje v chove zvierat – často preventívne, aby prežili stiesnené podmienky. To je liaheň rezistentných „superbaktérií“, ktoré potom ohrozujú liečbu ľudí. Znižovanie dopytu po lacnom mäse priamo znižuje toto riziko.",
    sources: [
      { title: "WHO: Antimicrobial resistance and food animals", url: "https://www.who.int/news-room/fact-sheets/detail/antimicrobial-resistance" }
    ],
    chartType: "none",
    image: "💊"
  },
  {
    id: "pandemics_zoonotic",
    category: "Ekológia",
    keywords: ["pandémie", "zoonózy", "vtáčia chrípka", "prasacia chrípka", "vírusy chov", "zoonoza"],
    query: "Pandémie nemajú nič spoločné s jedením zvierat, to je len konšpirácia.",
    reality: "Väčšina nových pandémií je zoonotická – prenáša sa zo zvierat na človeka. Veľkochovy a trhy so živými zvieratami sú ideálne liahne pre vznik nových vírusov (vtáčia a prasacia chrípka). Menej intenzívneho chovu = menšie riziko ďalšej pandémie.",
    sources: [
      { title: "UNEP/ILRI: Preventing the next pandemic (zoonoses)", url: "https://www.unep.org/resources/report/preventing-future-zoonotic-disease-outbreaks-protecting-environment-animals-and" }
    ],
    chartType: "none",
    image: "🦠"
  },
  {
    id: "dead_zones",
    category: "Ekológia",
    keywords: ["mŕtve zóny", "hnoj znečistenie", "eutrofizácia", "dusík voda", "mrtve zony"],
    query: "Chov zvierat neznečisťuje vodu o nič viac než pestovanie zeleniny.",
    reality: "Obrovské množstvo hnoja z veľkochovov a hnojív na krmivo splavuje dusík a fosfor do riek a morí, kde vznikajú „mŕtve zóny“ bez kyslíka, v ktorých nič neprežije. Živočíšna výroba je jedným z hlavných zdrojov tohto znečistenia.",
    sources: [
      { title: "Our World in Data: Eutrophication and food", url: "https://ourworldindata.org/environmental-impacts-of-food" }
    ],
    chartType: "none",
    image: "🌊"
  },
  {
    id: "feed_conversion",
    category: "Ekológia",
    keywords: ["konverzia krmiva", "kalórie krmivo mäso", "neefektívne mäso", "plytvanie kalóriami", "krmivo konverzia"],
    query: "Chov zvierat je efektívny spôsob výroby potravín pre ľudstvo.",
    reality: "Je to presný opak – zviera väčšinu skrmovaných kalórií spotrebuje na vlastný život a pohyb. Na 100 kalórií v krmive získame len ~3 kalórie v hovädzom mäse. Je to obrovské plytvanie potravinami, keď tretina sveta hladuje.",
    sources: [
      { title: "Our World in Data: Less meat is nearly always better", url: "https://ourworldindata.org/less-meat-or-sustainable-meat" }
    ],
    chartType: "bar",
    chartTitle: "Kalórie v mäse získané zo 100 kalórií krmiva",
    chartData: [
      { name: "Hovädzie", amount: 3, fill: "#e57373" },
      { name: "Bravčové", amount: 9, fill: "#ffb74d" },
      { name: "Kuracie", amount: 13, fill: "#aed581" }
    ],
    chartDataKey: "amount",
    chartUnit: " kcal",
    image: "♻️"
  },
  {
    id: "carbon_footprint_diet",
    category: "Ekológia",
    keywords: ["uhlíková stopa strava", "co2 jedlo", "klíma strava", "emisie potravín", "uhlikova stopa"],
    query: "Zmena stravy nemá na klímu žiadny reálny dopad, to je kvapka v mori.",
    reality: "Prechod na rastlinnú stravu patrí medzi najúčinnejšie individuálne kroky pre klímu – znižuje uhlíkovú stopu jedla až o ~70 %. Pre jednotlivca má väčší efekt než to, či lieta menej či jazdí elektromobilom v mnohých prípadoch.",
    sources: [
      { title: "Scarborough et al. (2023): Vegans vs meat-eaters environmental impact", url: "https://www.nature.com/articles/s43016-023-00795-w" }
    ],
    chartType: "bar",
    chartTitle: "Uhlíková stopa stravy (relatívne, jedáci mäsa = 100)",
    chartData: [
      { name: "Veľa mäsa", amount: 100, fill: "#e57373" },
      { name: "Málo mäsa", amount: 65, fill: "#ffb74d" },
      { name: "Vegetariáni", amount: 45, fill: "#aed581" },
      { name: "Vegáni", amount: 30, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🌡️"
  },
  {
    id: "wild_fish_sustainable",
    category: "Ekológia",
    keywords: ["divoké ryby udržateľné", "msc certifikát", "udržateľný rybolov", "wild caught", "certifikovane ryby"],
    query: "Kupujem len certifikované „udržateľné“ divoké ryby, to je predsa v poriadku.",
    reality: "Certifikáty udržateľnosti sú často kritizované za benevolentné kritériá a aj „udržateľný“ lov má vedľajší úlovok a ničí morské dno. A z hľadiska zvieraťa je smrť udusením rovnaká bez ohľadu na pečiatku. Akvakultúra (chov rýb) zase znamená stiesnené nádrže a kŕmenie ďalšími ulovenými rybami.",
    sources: [
      { title: "Our World in Data: Fish and overfishing", url: "https://ourworldindata.org/fish-and-overfishing" }
    ],
    chartType: "none",
    image: "🐟"
  },
  {
    id: "soil_degradation",
    category: "Ekológia",
    keywords: ["degradácia pôdy", "erózia pôdy", "vyčerpaná pôda", "pasienky erózia", "pôda eroduje"],
    query: "Chov zvierat je súčasťou zdravého kolobehu a chráni pôdu.",
    reality: "Nadmerná pastva a monokultúry na krmivo patria medzi hlavné príčiny erózie a degradácie pôdy na svete. Pestovanie potravín priamo pre ľudí potrebuje menej pôdy, čím sa znižuje tlak, ktorý ju ničí.",
    sources: [
      { title: "FAO: Soil degradation and agriculture", url: "https://www.fao.org/soils-portal/soil-degradation-restoration/en/" }
    ],
    chartType: "none",
    image: "🏜️"
  },

  // ========================= PRAKTICKÉ / SOCIÁLNE =========================
  {
    id: "cooking_hard",
    category: "Praktické",
    keywords: ["náročné varenie", "neviem variť vegan", "komplikované jedlo", "veľa práce kuchyňa", "tazke varenie"],
    query: "Vegánske varenie je strašne komplikované, na to nemám čas ani trpezlivosť.",
    reality: "Najjednoduchšie jedlá sveta sú náhodou vegánske: ovsená kaša, šošovicová polievka, ryža s fazuľou, cestoviny s paradajkovou omáčkou, hummus s chlebom. Nemusíš variť exotické náhrady – stačí variť to, čo dedovia jedli pred lacným mäsom. Je to lacnejšie aj rýchlejšie, než si myslíš.",
    sources: [
      { title: "Forks Over Knives: Simple plant-based recipes", url: "https://www.forksoverknives.com/recipes/" }
    ],
    chartType: "none",
    image: "👨‍🍳"
  },
  {
    id: "social_awkward",
    category: "Praktické",
    keywords: ["trápne v spoločnosti", "obed s kolegami", "rodinná oslava jedlo", "spolocenske jedlo", "stretnutie jedlo"],
    query: "Vegánstvo ničí spoločenský život – na každej oslave si za otravu, čo nič neje.",
    reality: "Dnes má prílohy a rastlinné jedlá takmer každá reštaurácia aj rodinný stôl – stačí krátko dopredu povedať. Nepríjemné to robí skôr to, keď cítime, že naša voľba spochybňuje voľbu iných. Slušnosť a humor zvládnu väčšinu situácií; jedlo nikdy nebolo prekážkou priateľstva.",
    sources: [
      { title: "The Vegan Society: Eating out and social life", url: "https://www.vegansociety.com/go-vegan/dining-out" }
    ],
    chartType: "none",
    image: "🎉"
  },
  {
    id: "restaurant_options",
    category: "Praktické",
    keywords: ["reštaurácie nemajú", "menu vegan", "kam ísť jesť", "vyber v restauracii", "vegan menu"],
    query: "V bežnej reštaurácii sa vegán nenaje, nemajú nič okrem hranolčekov.",
    reality: "Takmer každá kuchyňa má rastlinné jadro: talianska (pasta arrabbiata, pizza marinara), ázijská (tofu, zelenina, ryža), blízkovýchodná (hummus, falafel, šaláty), indická (dal, channa masala). Aj klasická slovenská kuchyňa pozná lečo, fazuľovicu či zemiaky. Stačí sa spýtať alebo upraviť objednávku.",
    sources: [
      { title: "HappyCow: Vegan-friendly restaurants worldwide", url: "https://www.happycow.net/" }
    ],
    chartType: "none",
    image: "🍝"
  },
  {
    id: "willpower",
    category: "Praktické",
    keywords: ["sila vôle", "disciplína jedlo", "nezvládol by som", "vzdať sa mäsa", "vola jedlo"],
    query: "Ja by som to nikdy nedal, nemám takú silnú vôľu vzdať sa mäsa.",
    reality: "Vegánstvo nie je o večnom odriekaní silou vôle – po pár týždňoch sa zmenia chute aj zvyky a bývalé „obľúbené“ jedlo prestane lákať. Pomáha nájsť rastlinné verzie jedál, ktoré máš rád, a postupovať krok za krokom. Milióny ľudí to zvládli a neboli to askéti.",
    sources: [
      { title: "Challenge 22: 22-day vegan support program", url: "https://challenge22.com/" }
    ],
    chartType: "none",
    image: "💪"
  },
  {
    id: "taste_bland",
    category: "Praktické",
    keywords: ["bez chuti", "nudná strava", "tráva chutí", "nechutné vegan", "fadne jedlo"],
    query: "Rastlinná strava je nudná a bez chuti, len samá tráva a klíčky.",
    reality: "Chuť nerobí mäso, ale korenie, soľ, tuk, kyslosť a umami – a tie sú všetky rastlinné. Údená paprika, cesnak, sójová omáčka, nutričné droždie, restované cibuľky a byliny dokážu zázraky. Najchutnejšie kuchyne sveta (indická, thajská, mexická, blízkovýchodná) stoja na rastlinách.",
    sources: [
      { title: "BOSH! / Forks Over Knives: Flavor in plant-based cooking", url: "https://www.forksoverknives.com/how-tos/" }
    ],
    chartType: "none",
    image: "🌶️"
  },
  {
    id: "meat_cravings",
    category: "Praktické",
    keywords: ["chute na mäso", "telo si pýta mäso", "craving mäso", "chcem mäso", "potreba mäsa"],
    query: "Keď mám chuť na mäso, to mi telo signalizuje, že ho naozaj potrebuje.",
    reality: "Chuť na mäso je zvyčajne chuť na soľ, tuk, umami a textúru – nie na konkrétne živiny. Preto ju spoľahlivo zaženú údené tofu, huby, marinovaný seitan či dobre okorenená strukovinová zmes. Chuť je naučená a po čase sa prepíše.",
    sources: [
      { title: "PCRM: Why we crave certain foods", url: "https://www.pcrm.org/good-nutrition" }
    ],
    chartType: "none",
    image: "🍖"
  },
  {
    id: "travel_vegan",
    category: "Praktické",
    keywords: ["cestovanie vegan", "dovolenka jedlo", "v zahraničí vegan", "letisko jedlo", "cestujem vegan"],
    query: "Pri cestovaní sa vegánsky najesť nedá, umrel by si od hladu v cudzine.",
    reality: "Väčšina svetových kuchýň je rastlinami bohatá (Ázia, Stredomorie, Blízky východ, India). Appky ako HappyCow ukážu vegánske podniky v okolí, supermarkety majú ovocie, pečivo a strukoviny a frázu „bez mäsa a mliečnych“ sa naučíš v každom jazyku za minútu. Cestovanie je dnes vegánsky jednoduché.",
    sources: [
      { title: "HappyCow travel guide", url: "https://www.happycow.net/" }
    ],
    chartType: "none",
    image: "✈️"
  },
  {
    id: "family_pressure",
    category: "Praktické",
    keywords: ["rodina tlačí", "babka vegan", "rodičia mäso", "rodinný tlak", "rodina nechape"],
    query: "Moja rodina to nikdy neprijme, babka sa urazí, keď nezjem jej rezeň.",
    reality: "Odpor blízkych býva z lásky a obáv, nie zo zloby – často sa bojí, že budeš hladný či chorý. Pomáha vysvetliť dôvody pokojne, priniesť na stôl chutné rastlinné jedlo, ktoré ochutnajú aj oni, a dať im čas. Veľa rodín časom časť jedál „spovegánčí“ samo.",
    sources: [
      { title: "The Vegan Society: Talking to family and friends", url: "https://www.vegansociety.com/go-vegan" }
    ],
    chartType: "none",
    image: "👵"
  },
  {
    id: "kids_excluded",
    category: "Praktické",
    keywords: ["deti vyčlenené", "dieťa v škole vegan", "spolužiaci jedlo", "obed v škole", "deti skola jedlo"],
    query: "Vegánske dieťa bude v škole za čudáka a vyčlenené z kolektívu.",
    reality: "Detí s rôznou stravou (alergie, halal, vegetariáni) je dnes veľa a školské jedálne sa prispôsobujú. Deti riešia kamarátstvo hrou, nie obsahom obeda. Naučiť dieťa stáť za svojimi hodnotami a súcitom je dar, nie hendikep – a chutný desiatový box problém spoľahlivo vyrieši.",
    sources: [
      { title: "Academy of Nutrition and Dietetics: Vegetarian diets (all life stages)", url: "https://pubmed.ncbi.nlm.nih.gov/27886704/" }
    ],
    chartType: "none",
    image: "🎒"
  },
  {
    id: "all_or_nothing",
    category: "Praktické",
    keywords: ["buď všetko alebo nič", "flexitarián", "nedokážem na 100", "stále jem trochu mäsa", "ciastocne vegan"],
    query: "Nemá zmysel začať, keď to aj tak nedokážem na 100 % – buď vegán, alebo nič.",
    reality: "Toto čierno-biele myslenie zastaví viac ľudí než čokoľvek iné. Každé rastlinné jedlo ráta – keby celý svet ubral mäso len o tretinu, dopad by bol obrovský. Začni „rastlinnými pondelkami“ alebo rastlinnými raňajkami. Lepšie je 100 ľudí nedokonalých než 1 dokonalý.",
    sources: [
      { title: "Meatless Monday: Why reducing matters", url: "https://www.mondaycampaigns.org/meatless-monday" }
    ],
    chartType: "none",
    image: "📊"
  },
  {
    id: "convenience_busy",
    category: "Praktické",
    keywords: ["nemám čas", "rýchle jedlo", "zaneprázdnený", "meal prep", "rychle vegan jedlo"],
    query: "Som strašne zaneprázdnený, na vegánstvo proste nie je čas.",
    reality: "Rastlinná strava môže byť bleskovo rýchla: konzervovaná fazuľa, mrazená zelenina, instantná ryža, ovsené vločky, hummus, celozrnný chlieb. 10-minútová panvica zo strukovín a zeleniny je hotová skôr než rozváža mäso. Zopár minút meal-prepu cez víkend pokryje celý týždeň.",
    sources: [
      { title: "BBC Good Food: Quick vegan meals", url: "https://www.bbcgoodfood.com/recipes/collection/quick-vegan-recipes" }
    ],
    chartType: "none",
    image: "⏱️"
  },
  {
    id: "kids_growth",
    category: "Praktické",
    keywords: ["deti rast vegan", "rastúce dieťa mäso", "dieťa potrebuje mäso", "vyvoj dieta strava"],
    query: "Rastúce deti jednoducho potrebujú mäso, inak nebudú správne rásť.",
    reality: "Podľa najväčších odborných dietetických organizácií je dobre naplánovaná rastlinná strava vhodná pre všetky vekové kategórie vrátane detí, pri myslení na B12, D, železo, omega-3 a dostatok kalórií. Deti potrebujú živiny, nie konkrétne mäso – tie sa dajú dodať aj z rastlín plus doplnkov.",
    sources: [
      { title: "Academy of Nutrition and Dietetics position", url: "https://pubmed.ncbi.nlm.nih.gov/27886704/" }
    ],
    chartType: "none",
    image: "🧒"
  },

  // ========================= EVOLÚCIA / BIOLÓGIA =========================
  {
    id: "omnivore_design",
    category: "Evolúcia",
    keywords: ["sme všežravci", "omnivor", "stavaní na mäso", "biologicky všežravec", "vsezravec"],
    query: "Človek je biologicky všežravec, jesť mäso je teda úplne prirodzené.",
    reality: "Sme schopní stráviť mäso, no naša anatómia (dlhé črevo, ploché stoličky, slabá žalúdočná kyselina, neschopnosť syntetizovať vlastný vitamín C) je oveľa bližšie bylinožravcom než pravým mäsožravcom. „Vieme to jesť“ nie je to isté ako „je to pre nás optimálne alebo nutné“.",
    sources: [
      { title: "Milton: Diet and primate evolution", url: "https://pubmed.ncbi.nlm.nih.gov/10403487/" }
    ],
    chartType: "none",
    image: "🦧"
  },
  {
    id: "stomach_acid",
    category: "Evolúcia",
    keywords: ["žalúdočná kyselina", "ph žalúdka", "trávenie mäsa kyselina", "zaludocna kyselina"],
    query: "Máme silnú žalúdočnú kyselinu ako dravce, takže sme stavaní na surové mäso.",
    reality: "Naše žalúdočné pH je porovnateľné skôr s mrchožrútmi než s aktívnymi lovcami – a hlboko pod úrovňou pravých mäsožravcov, ktoré dokážu bezpečne stráviť hnijúce surové mäso plné baktérií. Práve preto si my musíme mäso tepelne upraviť, aby sme sa neotrávili.",
    sources: [
      { title: "Beasley et al.: Evolution of stomach acidity", url: "https://pubmed.ncbi.nlm.nih.gov/26222383/" }
    ],
    chartType: "none",
    image: "🧪"
  },
  {
    id: "blood_type_diet",
    category: "Evolúcia",
    keywords: ["krvná skupina diéta", "diéta podľa krvi", "blood type", "krvna skupina jedlo"],
    query: "Mám krvnú skupinu 0, takže podľa diéty podľa krvi musím jesť mäso ako lovec.",
    reality: "Diéta podľa krvnej skupiny je vyvrátená pseudoveda – kontrolované štúdie nenašli žiadnu súvislosť medzi krvnou skupinou a tým, ktorá strava je pre koho zdravá. Ľudia, ktorým prospela „0 diéta“, profitovali z menej spracovaného jedla, nie z krvnej skupiny.",
    sources: [
      { title: "Cusack et al.: Blood type diets lack evidence", url: "https://pubmed.ncbi.nlm.nih.gov/23695205/" }
    ],
    chartType: "none",
    image: "🩸"
  },
  {
    id: "ancestors_meat",
    category: "Evolúcia",
    keywords: ["predkovia jedli mäso", "lovci zberači", "paleo predkovia", "praľudia mäso", "predkovia lov"],
    query: "Naši predkovia lovci-zberači jedli hlavne mäso, my by sme mali tiež.",
    reality: "Analýzy ukazujú, že strava lovcov-zberačov bola z veľkej časti rastlinná (zber bol spoľahlivejší než lov) a regionálne veľmi rôzna. Navyše „prirodzené“ nie je automaticky „zdravé“ ani „morálne“ – naši predkovia sa dožívali nízkeho veku a my dnes máme možnosti voľby, ktoré oni nemali.",
    sources: [
      { title: "The American Journal of Clinical Nutrition: Paleolithic diets", url: "https://pubmed.ncbi.nlm.nih.gov/10702160/" }
    ],
    chartType: "none",
    image: "🏹"
  },
  {
    id: "brain_needs_meat",
    category: "Evolúcia",
    keywords: ["mozog potrebuje mäso", "glukóza mozog", "živiny pre mozog", "mozog energia"],
    query: "Mozog potrebuje živiny z mäsa, inak nebude správne fungovať.",
    reality: "Mozog beží primárne na glukóze zo sacharidov – ryža, zemiaky, ovocie a strukoviny sú ideálne palivo. Kľúčové „mozgové“ živiny (omega-3 DHA, cholín, jód, B12) sú dostupné z rastlín a doplnkov. Mäso nie je pre mozog nenahraditeľné.",
    sources: [
      { title: "Hardy et al.: Importance of dietary carbohydrate in human evolution", url: "https://www.journals.uchicago.edu/doi/10.1086/682587" }
    ],
    chartType: "none",
    image: "🧠"
  },

  // ========================= ARGUMENTY / FILOZOFIA =========================
  {
    id: "hitler_vegetarian",
    category: "Argumenty",
    keywords: ["hitler vegetarián", "hitler bol vegan", "diktátor vegetarián", "hitler"],
    query: "Veď aj Hitler bol vegetarián – tak akí ste vy vegáni vlastne dobrí?",
    reality: "Po prvé, historicky je sporné, či Hitler vôbec dôsledne vegetariánom bol (jedával klobásy a kaviár). Po druhé, ide o klasický logický faul (ad hominem): zlý človek robiaci niečo nerobí tú vec zlou. Hitler aj nejedol psy a maľoval – to z toho tiež nerobí zločin.",
    sources: [
      { title: "Earthling Ed: Logical fallacies in arguments", url: "https://earthlinged.org/resources/" }
    ],
    chartType: "none",
    image: "🤡"
  },
  {
    id: "preachy_vegans",
    category: "Argumenty",
    keywords: ["vegáni otravní", "nátlak vegáni", "kážu morálku", "agresívni vegáni", "veganska sekta"],
    query: "Vegáni sú otravní fanatici, čo všetkým nasilu vnucujú svoju morálku.",
    reality: "Existujú otravní ľudia v každej skupine – aj tí, čo sa pri každom jedle pýtajú „a kde berieš proteín?“. Keď niekto upozorňuje na utrpenie a ničenie planéty, je to nepríjemné práve preto, že má často pravdu. Posol nerobí správu nepravdivou. Väčšina vegánov len chce žiť podľa svojich hodnôt.",
    sources: [
      { title: "Faunalytics: Public attitudes toward veganism", url: "https://faunalytics.org/" }
    ],
    chartType: "none",
    image: "📢"
  },
  {
    id: "no_one_perfect",
    category: "Argumenty",
    keywords: ["nikto nie je dokonalý", "aj ty škodíš", "telefón otroci", "appeal futility", "nemozes byt cisty"],
    query: "Aj tvoj mobil vyrobili v zlých podmienkach – nikto nie je dokonalý, tak načo sa snažiť?",
    reality: "To, že nedokážeme odstrániť všetko zlo naraz, nie je dôvod neodstrániť to, čo dokážeme ľahko. Touto logikou by nemalo zmysel ani darovať krv, lebo nezachrániš všetkých. Vegánstvo je o znižovaní svojho podielu na utrpení tam, kde to ide – a strava ide veľmi ľahko.",
    sources: [
      { title: "The Vegan Society: Definition of veganism", url: "https://www.vegansociety.com/go-vegan/definition-veganism" }
    ],
    chartType: "none",
    image: "📱"
  },
  {
    id: "appeal_to_nature",
    category: "Argumenty",
    keywords: ["je to prirodzené", "príroda mäso", "natural", "prirodzene jesť mäso", "prirodzene"],
    query: "Jesť mäso je prirodzené, a čo je prirodzené, je predsa správne.",
    reality: "„Prirodzené“ a „správne“ nie sú to isté – to je klasický omyl (appeal to nature). V prírode je bežné aj zabíjanie mláďat, znásilňovanie a choroby, a my ich predsa neospravedlňujeme. Naopak, mnohé „neprirodzené“ veci (medicína, okuliare, hasenie požiarov) sú jednoznačne dobré.",
    sources: [
      { title: "Earthling Ed: The appeal to nature fallacy", url: "https://earthlinged.org/resources/" }
    ],
    chartType: "none",
    image: "🌿"
  },
  {
    id: "where_draw_line",
    category: "Argumenty",
    keywords: ["kde je hranica", "kde končí súcit", "rastliny tiež", "kam až", "hranica sucitu"],
    query: "Kde to skončí? Najprv zvieratá, potom rastliny – kde je vlastne hranica?",
    reality: "Hranica je celkom jasná a vedecká: schopnosť cítiť (vnímať bolesť a mať záujem o vlastný život – tzv. sentience). Zvieratá s nervovým systémom ju majú, rastliny bez mozgu nie. Nie je to klzký svah; je to principiálna a dobre definovaná čiara.",
    sources: [
      { title: "Sentience Institute: Defining sentience", url: "https://sentienceinstitute.org/" }
    ],
    chartType: "none",
    image: "📏"
  },
  {
    id: "one_person_change",
    category: "Argumenty",
    keywords: ["jeden človek nezmení", "nemá to zmysel", "individuálny dopad", "kvapka v mori", "jednotlivec dopad"],
    query: "Jeden človek nič nezmení, môj jedáleň nezachráni svet, tak prečo sa obmedzovať?",
    reality: "Priemerný vegán za život ušetrí stovky až tisíce zvierat a tony emisií – to nie je nula. Spoločenské zmeny sú len súčtom individuálnych rozhodnutí: dopyt po rastlinných produktoch dnes mení celý potravinársky priemysel práve preto, že sa pridali milióny „bezvýznamných jednotlivcov“.",
    sources: [
      { title: "Animal Charity Evaluators: Number of animals spared", url: "https://animalcharityevaluators.org/" }
    ],
    chartType: "none",
    image: "🫵"
  },
  {
    id: "god_dominion",
    category: "Argumenty",
    keywords: ["boh dal zvieratá", "biblia mäso", "vláda nad zvieratami", "náboženstvo mäso", "boh dominion"],
    query: "Boh dal človeku zvieratá, aby sme ich využívali – tak píše aj Biblia.",
    reality: "Mnohí veriaci čítajú „vládu nad tvorstvom“ ako zodpovednú starostlivosť, nie ako právo týrať. V Genezis je prvá strava človeka opísaná ako rastlinná (Gen 1:29) a súcit k zvieratám je naprieč náboženstvami cnosť. Existujú kresťanskí, židovskí aj moslimskí vegáni, ktorí vo viere nevidia rozpor.",
    sources: [
      { title: "CreatureKind: Faith and animals", url: "https://www.becreaturekind.org/" }
    ],
    chartType: "none",
    image: "🙏"
  }
];
