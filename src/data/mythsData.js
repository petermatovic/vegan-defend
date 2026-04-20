export const mythsData = [
  {
    id: "protein",
    keywords: ["proteín", "bielkoviny", "svaly", "mäso", "protein", "bielkovina"],
    query: "Ale odkiaľ berieš proteín? Veď z trávy svaly nenarastú...",
    reality: "Rastlinné zdroje obsahujú všetky esenciálne aminokyseliny, a to navyše v 'čistom' balení – bez cholesterolu a s množstvom vlákniny. Najnovšie štúdie dokonca ukazujú, že rastlinný proteín priamo koreluje s dlhovekosťou, na rozdiel od živočíšneho, ktorý aktivuje prozápalové dráhy (IGF-1). Svaly nepotrebujú mäso, potrebujú dusík a stimul. Stačí sa pozrieť na gorilu alebo slona.",
    sources: [
      "NutritionFacts.org: Animal Protein Compared to Plant Protein",
      "Satija A. et al. (2017). Dietary Protein Sources and Mortality"
    ],
    chartType: "bar",
    chartTitle: "Porovnanie obsahu proteínu na 100 kcal",
    chartData: [
      { name: "Hovädzie mäso (Mleté)", amount: 8, fill: "#e57373" },
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
    keywords: ["vápnik", "kosti", "mlieko", "osteoporóza", "syry", "vapnik"],
    query: "A čo vápnik? Bez mlieka budeš mať krehké kosti!",
    reality: "Toto je jeden z najväčších marketingových mýtov mliekarenského priemyslu. Krajiny s najvyššou spotrebou mlieka (USA, Švédsko) majú zároveň najvyššiu mieru zlomenín krčka stehennej kosti z osteoporózy. Zelená listová zelenina (napr. kel) alebo sezam majú oveľa vyššiu a lepšie vstrebateľnú formu vápnika než kravské mlieko. Pričom na rozdiel od syrov neprekysľujú organizmus.",
    sources: [
      "Feskanich D. et al., Milk, dietary calcium, and bone fractures in women: a 12-year prospective study",
      "Harvard T.H. Chan School of Public Health: Calcium and Milk"
    ],
    chartType: "bar",
    chartTitle: "Vstrebateľnosť vápnika v organizme (%)",
    chartData: [
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
    keywords: ["b12", "vitamín", "vitamin b12", "doplnky"],
    query: "Vegánstvo je neprirodzené, musíte brať syntetický B12!",
    reality: "Vitamín B12 nevyrábajú zvieratá, produkujú ho baktérie v pôde a vode. V modernom hygienickom svete pijeme chlórovanú vodu a zeleninu drhneme, takže prirodzený styk s B12 sme stratili. Hospodárske zvieratá dostávajú B12 taktiež ako doplnok, priamo do krmiva. Prečo teda filtrovať cenný vitamín cez utrpenie zvieraťa, keď si môžete dať ten istý doplnok priamo a bez cholesterolu?",
    sources: [
      "Dr. Michael Greger: 'Vitamin B12 Supplements for Vegans'",
      "Academy of Nutrition and Dietetics: Position Paper on Vegetarian Diets"
    ],
    chartType: "pie",
    chartTitle: "Odkiaľ skutočne získava dobytok B12?",
    chartData: [
      { name: "Syntetický doplnok v krmive", amount: 90, fill: "#ffb74d" },
      { name: "Prirodzená pastva z pôdy", amount: 10, fill: "#aed581" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "💊"
  },
  {
    id: "plants_pain",
    keywords: ["bolesť", "mrkva", "rastliny trpia", "pain", "cítia", "citia"],
    query: "Ale veď aj rastliny cítia bolesť! Si rovnaký vrah ako my.",
    reality: "Rastliny nemajú centrálny nervový systém, mozog, ani receptory bolesti. Bolesť sa vyvinula u hybných organizmov ako signál k úniku. Ak už vám ale úprimne záleží na rastlinách – hospodárske zvieratá zjedia na vyprodukovanie 1kg mäsa od 5 do 20kg rastlinnej stravy! Jedením mäsa zabíjate mnohonásobne viac rastlín. Ak chcete zachrániť rastliny, buďte vegán.",
    sources: [
      "University of California, Davis: 'Do Plants Feel Pain?'",
      "Feed Conversion Ratio (Corn/Soy to Beef) Statistics"
    ],
    chartType: "bar",
    chartTitle: "Spotreba rastlín na získanie 1kg potravy",
    chartData: [
      { name: "Cez hovädzie mäso", amount: 12, fill: "#f44336" },
      { name: "Cez bravčové mäso", amount: 6, fill: "#ff9800" },
      { name: "Priamo človekom", amount: 1, fill: "#4caf50" }
    ],
    chartDataKey: "amount",
    chartUnit: "kg",
    image: "🌱"
  },
  {
    id: "soy",
    keywords: ["sója", "soja", "estrogén", "estrogen", "mužnosť", "hormóny"],
    query: "Zo sóje ti narastú prsia, obsahuje estrogén!",
    reality: "Sója obsahuje FYTOestrogény, čo sú rastlinné látky, ktoré sa viažu na naše estrogénové receptory, ale v skutočnosti pôsobia veľmi slabo, a tým dokonca blokujú náš vlastný silný estrogén. Znižujú riziko rakoviny prsníka a prostaty. Ak sa bojíte reálneho cicavčieho estrogénu, nachádza sa (aj u gravidných kráv) v obrovských dávkach práve v mlieku.",
    sources: [
      "NutritionFacts.org: 'Soy Phytoestrogens for Prostate Cancer'",
      "Messina, M. (2010). 'Soy and Health Update'"
    ],
    chartType: "pie",
    chartTitle: "Skutočný estrogén vs Rastlinný štít (v potrave)",
    chartData: [
      { name: "Pravý estrogén (mlieko/mäso)", amount: 85, fill: "#ba68c8" },
      { name: "Fytoestrogény (Sója)", amount: 15, fill: "#81c784" }
    ],
    chartDataKey: "amount",
    chartUnit: "%",
    image: "🫘"
  }
];
