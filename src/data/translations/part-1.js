export const part1 = {
  "protein": {
    en: {
      query: "But where do you get your protein? You can't build muscle from grass...",
      reality: "Plant sources contain all the essential amino acids — and they come in a 'clean' package: no cholesterol and packed with fiber. The latest studies show that plant protein extends lifespan, while animal protein activates cancer-promoting growth factors (IGF-1). Muscles don't need meat, they need nitrogen and stimulus — just ask the strongest animals on Earth, like gorillas, elephants, or rhinos.",
      chartTitle: "Comparison of pure protein per 100 calories",
      chartData: ["Beef (average)", "Lentils", "Broccoli", "Tempeh"]
    },
    bg: {
      query: "Ама откъде си вземаш протеина? От трева мускули не растат...",
      reality: "Растителните източници съдържат всички есенциални аминокиселини, при това в „чист“ вид — без холестерол и с огромно количество фибри. Най-новите проучвания показват, че растителният протеин удължава живота, докато животинският активира канцерогенни растежни фактори (IGF-1). Мускулите не се нуждаят от месо, а от азот и стимул — попитай най-силните животни на Земята като горилите, слоновете или носорозите.",
      chartTitle: "Сравнение на чист протеин на 100 калории",
      chartData: ["Говеждо (средно)", "Леща", "Броколи", "Темпе"]
    },
  },
  "calcium": {
    en: {
      query: "And what about calcium? Without milk you'll have brittle bones and osteoporosis!",
      reality: "The countries with the highest consumption of cow's milk (USA, Scandinavia) have the world's highest rates of hip fractures. While animal proteins flood the kidneys and cause calcium to be excreted in urine (the acid-ash hypothesis), dark leafy greens deliver calcium in a far more absorbable form (and without estrogen and pus from past udder infections).",
      chartTitle: "Real calcium absorption by the body (%)",
      chartData: ["Spinach", "Cow's milk", "Kale", "Brussels sprouts"]
    },
    bg: {
      query: "Ами калцият? Без мляко ще имаш чупливи кости и остеопороза!",
      reality: "Страните с най-висока консумация на краве мляко (САЩ, Скандинавия) имат най-високия дял на счупвания на шийката на бедрената кост в света. Докато животинските белтъци натоварват бъбреците и водят до отделяне на калций с урината (хипотезата за киселинната пепел), тъмнозелените листни зеленчуци доставят калций в много по-усвоима форма (и без естроген и гной от прекарани възпаления на вимето).",
      chartTitle: "Реална усвояемост на калция от тялото (%)",
      chartData: ["Спанак", "Краве мляко", "Къдраво зеле", "Брюкселско зеле"]
    },
  },
  "b12": {
    en: {
      query: "Veganism is unnatural, you have to take synthetic B12!",
      reality: "Vitamin B12 isn't produced by animals or plants, but by bacteria in soil and water. We consume very little of it because we drink purified (chlorinated) water and washed vegetables. The paradox is that today's farm animals also live in factory halls without soil and sun, so the industry adds B12 directly to their feed. You're just filtering your 'synthetic' vitamin through the body of a suffering animal.",
      chartTitle: "Where does the average pig get its B12?",
      chartData: ["From dirty soil and grass", "Forced synthetic additive in feed"]
    },
    bg: {
      query: "Веганството е неестествено, трябва да приемате синтетичен B12!",
      reality: "Витамин B12 не се произвежда от животните или растенията, а от бактерии в почвата и водата. Ние приемаме много малко от него, защото пием пречистена (хлорирана) вода и измити зеленчуци. Парадоксът е, че днешните селскостопански животни също живеят във фабрични халета без почва и слънце, затова индустрията им добавя B12 директно във фуража. Ти просто филтрираш своя „синтетичен“ витамин през тялото на страдащо животно.",
      chartTitle: "Откъде средностатистическата свиня получава B12?",
      chartData: ["От мръсна почва и трева", "Принудителна синтетична добавка във фуража"]
    },
  },
  "plants_pain": {
    en: {
      query: "But plants feel pain too! You're just as much a killer as we are, because the carrot suffers.",
      reality: "Plants have no brain and no central nervous system. They respond to damage with chemical signals, but without consciousness there is no interpretation of 'suffering'. Moreover, if you truly empathize with plants — cattle eat between 5 and 20 kilograms of plants (grain/soy) to produce 1 kg of meat. By eating animals you cause the 'death' of many times more plants. The logic doesn't let up.",
      chartTitle: "Plant consumption to create 1 kg of food for a human",
      chartData: ["Beef (cow)", "Pork (pig)", "Pure local vegetables"]
    },
    bg: {
      query: "Ама нали и растенията усещат болка! Ти си същият убиец като нас, защото морковът страда.",
      reality: "Растенията нямат мозък и централна нервна система. Те реагират на увреждане с химични сигнали, но без съзнание няма интерпретация на „страдание“. Освен това, ако наистина съчувстваш на растенията — добитъкът изяжда от 5 до 20 килограма растения (зърно/соя), за да се произведе 1 кг месо. С консумацията на животни причиняваш „смъртта“ на многократно повече растения. Логиката е безпощадна.",
      chartTitle: "Консумация на растения за създаване на 1 кг храна за човек",
      chartData: ["Говеждо месо (крава)", "Свинско месо (прасе)", "Чисти местни зеленчуци"]
    },
  },
  "soy_estrogen": {
    en: {
      query: "Soy will make you grow breasts, it's full of estrogen and destroys masculinity!",
      reality: "Soy contains PHYTOestrogens, that is, plant compounds so weak that they protect against cancer by blocking the binding of strong mammalian estrogens to cells (which is why Asia has dramatically lower rates of breast and prostate cancer). The real, highly potent mammalian estrogens (produced by pregnant females) are what you drink straight from a glass of animal cow's milk.",
      chartTitle: "Actual content of true mammalian estrogen (ng/L)",
      chartData: ["Soy milk", "Cow's milk (commercial)", "Milk from pregnant cows"]
    },
    bg: {
      query: "От соята ще ти пораснат гърди, тя съдържа купища естроген и убива мъжествеността!",
      reality: "Соята съдържа ФИТОестрогени, тоест растителни съединения, които са толкова слаби, че предпазват от рак, като блокират свързването на силните бозайнически естрогени с клетките (затова в Азия честотата на рака на гърдата и простатата е рязко по-ниска). Истинските и силно активни бозайнически естрогени (произвеждани от бременни женски) ги пиете директно в чашата с животинско краве мляко.",
      chartTitle: "Реално съдържание на истински бозайнически естроген (ng/L)",
      chartData: ["Соево мляко", "Краве мляко (търговско)", "Мляко от бременни крави"]
    },
  },
  "canines": {
    en: {
      query: "Humans have always been hunters, look at our sharp fangs, we're predators!",
      reality: "Our so-called 'fangs' (canines) have absolutely nothing to do with tearing raw game. They resemble the teeth of our herbivorous and frugivorous relatives, the apes. Our huge, long digestive tract with a large intestine and low stomach acid is adapted for the slow digestion of fiber, unlike predators, who have a short tract so that raw meat doesn't have time to rot in their intestines.",
      chartTitle: "Ratio of intestine length to torso (an indicator of diet)",
      chartData: ["Cat (pure carnivore)", "Dog / Wolf", "Human", "Cow (herbivore)"]
    },
    bg: {
      query: "Човекът открай време е ловец, погледни острите ни зъби, ние сме хищници!",
      reality: "Така наречените ни „зъби хищници“ (кучешките зъби) нямат абсолютно нищо общо с разкъсването на сурова плячка. Те приличат на зъбите на нашите растителноядни и плодоядни роднини — маймуните. Нашият огромен, дълъг храносмилателен тракт с дебело черво и ниска стомашна киселинност е приспособен за бавно смилане на фибри, за разлика от хищниците, които имат къс тракт, за да не успее суровото месо да изгние в червата им.",
      chartTitle: "Съотношение на дължината на червото към тялото (показател за хранене)",
      chartData: ["Котка (чист месояд)", "Куче / Вълк", "Човек", "Крава (растителнояд)"]
    },
  },
  "iron": {
    en: {
      query: "You can't get enough iron from plants, vegans are anemic and weak.",
      reality: "Studies repeatedly show that vegans consume the same or greater amounts of iron as meat eaters. While heme iron (from meat) is absorbed by the body uncontrollably (which increases oxidative stress and the risk of heart disease), plant-based, non-heme iron respects your body's current needs and is absorbed in exactly the amount needed. Just add vitamin C (berries) to your morning oatmeal and absorption rises by 300%.",
      chartTitle: "Amount of iron in 100 g of food (mg)",
      chartData: ["Egg", "Beef", "Spinach", "Lentils (cooked)", "Hemp seeds"]
    },
    bg: {
      query: "От растения не получаваш достатъчно желязо, веганите са анемични и малокръвни.",
      reality: "Проучванията многократно показват, че веганите приемат същото или по-голямо количество желязо от месоядните. Докато хемовото желязо (от месо) тялото усвоява неконтролируемо (което повишава оксидативния стрес и риска от сърдечни заболявания), растителното, нехемово желязо се съобразява с текущите нужди на тялото ти и се усвоява точно толкова, колкото е нужно. Достатъчно е към сутрешната овесена каша да добавиш витамин C (горски плодове) и усвояването скача с 300%.",
      chartTitle: "Количество желязо в 100 г храна (mg)",
      chartData: ["Яйце", "Говеждо месо", "Спанак", "Леща (сварена)", "Конопени семена"]
    },
  },
  "expensive": {
    en: {
      query: "Veganism is for the rich elite with avocado toast. It's extremely overpriced!",
      reality: "If you eat ultra-processed 'Beyond Meat' burgers in a hipster bistro, then yes. But the foundation of a plant-based diet throughout cultural history is grains, rice, potatoes, lentils, beans, oats, and seasonal vegetables. These are geographically the cheapest foods in the world, full stop. The luxury of meat is just an illusion propped up by enormous state subsidies of billions poured into the industry from your taxes.",
      chartTitle: "Average price in the EU for buying 100 g of protein (€)",
      chartData: ["Beans / Lentils (dried)", "Tofu", "Eggs", "Lean beef"]
    },
    bg: {
      query: "Веганството е за богатия елит с авокадо тостове. То е изключително надценено!",
      reality: "Ако ядеш ултра-преработени бургери „Beyond Meat“ в хипстърско бистро, тогава да. Но основата на растителното хранене през цялата културна история са житните култури, оризът, картофите, лещата, бобът, овесът и сезонните зеленчуци. Тези продукти са географски най-евтините храни в света изобщо. Луксът на месото е само илюзия, поддържана от огромни държавни субсидии от милиарди за индустрията — от твоите данъци.",
      chartTitle: "Средна цена в ЕС за покупка на 100 г протеин (€)",
      chartData: ["Боб / Леща (сушени)", "Тофу", "Яйца", "Постно говеждо месо"]
    },
  },
  "soy_amazon": {
    en: {
      query: "You vegans and your soy are destroying the Amazon rainforest with endless soy fields!",
      reality: "Almost 80% of all soy grown in the world is used for the animal industry as feed in factories for chickens, pigs, and cows (including European farms, which import this crushed GMO soy by ship). Barely under 6% goes to direct human consumption for making tofu or your favorite drinks. So by eating meat you indirectly support by far the most massive deforestation of the planet.",
      chartTitle: "How is globally grown soy used?",
      chartData: ["Animal feed", "Soy oil (industry, biofuels)", "Tofu, soy milk and human consumption"]
    },
    bg: {
      query: "Вие веганите и вашата соя унищожавате Амазонската гора заради безкрайните соеви полета!",
      reality: "Почти 80% от цялата отглеждана в света соя се използва за животновъдната индустрия като фураж във фабриките за пилета, прасета и крави (включително европейските ферми, които внасят тази смляна ГМО соя с кораби). Едва под 6% отива за пряка човешка консумация — за производство на тофу или любимите ти напитки. Тоест с консумацията на месо непряко подкрепяш далеч най-масовото обезлесяване на планетата.",
      chartTitle: "Как се използва глобално отглежданата соя?",
      chartData: ["Животински фураж", "Соево масло (индустрия, биогорива)", "Тофу, соево мляко и човешка консумация"]
    },
  },
  "cows_explode": {
    en: {
      query: "But cows have to be milked, otherwise their udders would burst from the pain and suffering!",
      reality: "A cow, like every other mammal on the planet (including humans), produces milk solely for her newly born offspring. If humans didn't meddle in this natural cycle and the cow weren't artificially and systematically impregnated by a worker's hand, she would have no milk at all to be 'relieved of pain'. And she'd sooner be spared pain if we didn't steal her bawling calf away on the farm a few hours after birth.",
      chartTitle: "Natural lifespan vs the life of a dairy cow",
      chartData: ["Average age of slaughter from 'exhaustion' on a commercial farm", "Natural longevity of a cow"]
    },
    bg: {
      query: "Ама нали кравите трябва да се доят, иначе вимето им ще се пръсне от болка и страдание!",
      reality: "Кравата, като всеки друг бозайник на планетата (включително човека), произвежда мляко единствено за своето новородено малко. Ако човекът не се намесваше в този естествен цикъл и никой не оплождаше кравата изкуствено и систематично с ръката на работник, тя изобщо нямаше да има мляко, от което да бъде „освобождавана от болка“. А по-скоро бихме я избавили от болка, ако във фермата не ѝ откраднехме рукащото теленце няколко часа след раждането.",
      chartTitle: "Естествена продължителност на живота спрямо живота на млечната крава",
      chartData: ["Средна възраст на заколване от „изтощение“ в търговска ферма", "Естествено дълголетие на крава"]
    },
  },
  "omega3": {
    en: {
      query: "For your brain and development you need Omega-3 fatty acids (DHA, EPA) and only from sea fish!",
      reality: "Fish don't create omega-3 fatty acids at all; they simply isolate them and store them in their cell walls from the food they eat — from deep-sea microalgae. We can do the same: go straight to the source! Vegans can get omega-3 through flax, chia, and hemp seeds, and the brain then produces EPA and DHA just the same. As a bonus we get clean energy without the heavy metals and microplastics that accumulate in fish bodies in today's seas.",
      chartTitle: "Where does Omega-3 actually originate?",
      chartData: ["Fish and their suffering (just a middleman)", "Ocean phytoplankton (algae)"]
    },
    bg: {
      query: "За мозъка и развитието си имаш нужда от Омега-3 мастни киселини (DHA, EPA) и то само от морска риба!",
      reality: "Рибите изобщо не създават омега-3 мастни киселини; те просто ги изолират и складират в клетъчните си стени от храната, която ядат — от дълбоководни микроводорасли. Ние можем да направим същото: да отидем директно при източника! Веганите могат да приемат омега-3 чрез ленено, чиа и конопено семе, а мозъкът след това произвежда EPA и DHA по същия начин. Така допълнително получаваме чиста енергия без тежки метали и микропластмаси, които в днешните морета се натрупват в телата на рибите.",
      chartTitle: "Откъде изобщо възниква Омега-3?",
      chartData: ["Рибите и тяхното страдание (само посредник)", "Океански фитопланктон (водорасли)"]
    },
  },
  "meat_evolution": {
    en: {
      query: "It was roasted meat that made our brain grow during evolution and made us intelligent!",
      reality: "Although access to burning fire was crucial, the latest genetic and anthropological studies from Harvard University reveal that the sharp, enormous growth of our brain was driven by another discovery — finding starches, namely potatoes and tubers. These starches contain easily usable pure glucose for the brain, unlike the costly metabolizing of protein-rich meat. Survival isn't offered to us by meat, but by the substitution of carbohydrate roots, which researchers found preserved in the dental plaque of Neanderthal fossils."
    },
    bg: {
      query: "Точно печеното месо е причината мозъкът ни да се уголеми в еволюцията и да станем интелигентни!",
      reality: "Макар достъпът до горящ огън да е бил ключов, най-новите генетични и антропологични проучвания от Харвардския университет разкриват, че рязкото огромно нарастване на мозъка ни е осигурило друго откритие — намирането на нишестета, тоест на картофи и грудки. Тези нишестета съдържат лесно използваема чиста глюкоза за мозъка, за разлика от скъпото метаболизиране на протеиновото месо. Оцеляването ни го предлага не месото, а замяната с въглехидратни корени, които изследователите откриха запазени в състава на зъбната плака на неандерталски вкаменелости."
    },
  },
  "athletes_weak": {
    en: {
      query: "Vegans are just weak skinny sticks, athletics and professional strength sports don't exist without meat.",
      reality: "Today we see a phenomenal rise of vegan elite athletes (Novak Djokovic, Patrik Baboumian — a strongman holding world records, Lewis Hamilton, tennis player Venus Williams, and so on). And why? Because a plant-based diet has incredible benefits for accelerating the flow of oxygenated blood to the muscles, massively suppresses post-workout inflammation, and lets athletes shorten recovery (the so-called The Game Changers).",
      chartTitle: "Duration of oxidative inflammation in the body after exertion",
      chartData: ["Omnivore (regular meat consumption)", "Vegan athlete (plant-based diet)"]
    },
    bg: {
      query: "Веганите са само слаби бели клечки, атлетика и професионален силов спорт без месо не съществуват.",
      reality: "Днес виждаме феноменален възход на вегански елитни спортисти (Новак Джокович, Патрик Бабумян — силач, държащ световни рекорди, Луис Хамилтън, тенисистката Винъс Уилямс и т.н.). И защо? Защото растителното хранене има невероятни ползи за ускоряване на притока на наситена с кислород кръв към мускулите, масово потиска след-тренировъчното възпаление и позволява на спортистите да съкратят възстановяването (т.нар. The Game Changers).",
      chartTitle: "Продължителност на оксидативното възпаление в тялото след натоварване",
      chartData: ["Месояд (обичайна консумация на месо)", "Вегански атлет (растително хранене)"]
    },
  },
  "personal_choice": {
    en: {
      query: "And what about my choice?! What I put on my plate doesn't judge others, it's purely personal freedom.",
      reality: "Every personal decision is sacred only up to the point where it doesn't make another individual suffer or die without their own 'choice'. If you personally decided to kick a stray dog, society would recognize that it isn't a personal choice, because you're infringing on another's right to life. In exactly the same way, an animal on a farm suffers — one that never agreed to your lunch break."
    },
    bg: {
      query: "Ами моят избор?! Какво си слагам в чинията не съди другите, това е чисто лична свобода.",
      reality: "Всяко лично решение е свещено само до момента, в който при него не страда или не умира друго същество без собствен „избор“. Ако лично решиш да ритнеш уличното кученце, обществото би установило, че това не е личен избор, защото посягаш на чуждо право на живот. Точно по същия начин страда във фермата животното, което изобщо не се е съгласило с твоята обедна почивка."
    },
  },
  "free_range": {
    en: {
      query: "But I only buy free-range from home farming! That animal had a beautiful life.",
      reality: "If you feel the animal lived an 'amazing life', does that make its premature and violent killing at the slaughterhouse for our gourmet pleasure more moral? Humane slaughter doesn't exist, it's an oxymoron. Try Googling common farm practices, where you'll see that in most countries 'free-range' only means an extra little window into a huge, overcrowded industrial hall where the sun's rays were never even seen.",
      chartTitle: "Suffering factor per single serving according to studies (% of compassion)",
      chartData: ["Humane slaughter on a local organic farm", "The illusion that the animal died peacefully in its sleep"]
    },
    bg: {
      query: "Ама аз купувам само свободно отглеждани от домашна ферма! Това животно е имало прекрасен живот.",
      reality: "Ако имаш чувството, че животното е изживяло „невероятен живот“, прави ли това преждевременното и насилствено заколване в кланицата за нашето гурме удоволствие по-морално? Хуманно клане не съществува, това е оксиморон. Опитай се да потърсиш в Google обичайните практики във фермите, където ще видиш, че „свободно отглеждане“ в повечето държави означава само едно допълнително прозорче към огромно претъпкано индустриално хале, където слънчеви лъчи никой никога не е виждал.",
      chartTitle: "Фактор на страданието на 1 порция според проучванията (% съчувствие)",
      chartData: ["Хуманно клане в местна биоферма", "Илюзията, че животното е умряло приятелски в съня си"]
    },
  },
  "honey": {
    en: {
      query: "Why do I have a problem with honey? Bees make it for us!",
      reality: "Bees make honey for *themselves*. It serves as a vital and nutritious winter store for their entire hive. After harvesting this exclusively nutritious elixir, commercial beekeepers cram ordinary, inferior sugar water into the hive, which rapidly lowers the immunity of the whole colony (exposing it to collapse). Vegans also boycott the artificial clipping of weakened queens (so they don't fly off to a new swarm) and the fumigation and killing of hives for economic reasons."
    },
    bg: {
      query: "Защо ми пречи медът? Нали пчелите го правят за нас!",
      reality: "Пчелите правят мед за *себе си*. Той служи като жизненоважен и хранителен зимен запас за целия им кошер. След като приберат този изключително хранителен еликсир, търговските пчелари натъпкват в кошера обикновена непълноценна захарна вода, с което рязко понижават имунитета на целия рояк (излагайки го на колапс). Освен това веганите бойкотират изкуственото подрязване на отслабнали царици (за да не отлетят в нов рояк), както и опушването и избиването на кошери по икономически причини."
    },
  },
  "overpopulation_cows": {
    en: {
      query: "If we all stop eating animals, they'll overpopulate and roam the city, what do we do with them?",
      reality: "Animals on factory farms are there solely and exclusively because of one fact — artificial insemination, which we pay for and demand through our shopping. Cows wouldn't 'overpopulate', because we'd stop their daily artificial replacement, hand in hand (literally), in breeding cycles. Gradually the numbers would recede into a natural, sustainable reserve state, as it once was.",
      chartTitle: "Biomass of mammals on the planet today",
      chartData: ["Wild animals in the wild", "Planet of humans", "Confined farm animals killed by the industry"]
    },
    bg: {
      query: "Ако всички спрем да ядем животни, те ще се размножат прекомерно и ще се скитат из града, какво да правим с тях?",
      reality: "Животните в масовите ферми са там единствено и изключително заради един факт — изкуственото осеменяване, което плащаме и изискваме с нашето пазаруване. Кравите няма да се „размножат прекомерно“, защото бихме спрели тяхното ежедневно изкуствено заместване ръка за ръка (буквално) в развъдните цикли. Постепенно количеството би се върнало към естествено, устойчиво равнище, както някога.",
      chartTitle: "Биомаса на бозайниците на планетата днес",
      chartData: ["Диви животни в природата", "Планета на хората", "Затворени селскостопански животни, избивани от индустрията"]
    },
  },
  "circle_of_life": {
    en: {
      query: "But we eat animals because of the circle of life in nature. A wolf snaps up a hare on the meadow just the same!",
      reality: "Nature doesn't run on shopping malls, plastic packaging, and CO2 gas chambers. We don't treat food according to nature and the circle of life — we've built an absolutely synthetic dystopian death factory (factory farming) where they have no chance to escape. Unlike the wild wolf, which has no other survival option, we are the only animals on Earth with the moral agency to choose: let's choose compassion when we can, thanks to supermarkets full of alternatives."
    },
    bg: {
      query: "Ама ние ядем животни заради кръговрата на живота в природата. Вълкът също опандизва заека на поляната!",
      reality: "Природата не се управлява от търговски центрове, опаковане в пластмаса и газови камери с CO2. Ние не се отнасяме към храната според природата и кръговрата на живота — построили сме абсолютно изкуствена дистопична фабрика за смърт (factory farming), от която няма шанс за бягство. За разлика от дивия вълк, който няма друг избор за оцеляване, ние сме единствените животни на Земята, които притежават морална свобода на избор: нека изберем съчувствието, когато можем, благодарение на супермаркетите, пълни с алтернативи."
    },
  },
  "world_hunger": {
    en: {
      query: "We could never feed an ever-growing planet of 9 billion starving adults and children with vegetables alone.",
      reality: "The irony of fate is the exact opposite. Most of the grain and cereals grown worldwide in the starving countries of the global south go straight into the mouths of the Western world's farm animals (so we can have steaks). If this enormous quantity of caloric food were applied directly to the mouths of the third world instead of feeding Western animals, we would eliminate world hunger and feed the entire planet three times over.",
      chartTitle: "Percentage of calories consumed in the European Union by livestock and poultry",
      chartData: ["Grown for humans from 1 m²", "Residual caloric limit from meat"]
    },
    bg: {
      query: "Никога не бихме могли само от зеленчуци да изхраним непрекъснато растящата 9-милиардна планета от гладуващи възрастни и деца.",
      reality: "Иронията на съдбата е точно обратното. По-голямата част от зърното и житните култури, отглеждани по света в гладуващите държави от глобалния юг, отиват директно в устата на селскостопанските животни на Западния свят (за да имаме пържоли). Ако това огромно количество калорична храна се прилагаше директно в устата на третия свят вместо за хранене на западните животни, бихме премахнали световния глад и бихме нахранили цялата планета цели три пъти.",
      chartTitle: "Процент приети калории в Европейския съюз от добитъка и птиците",
      chartData: ["Отглеждано за хора от 1 м²", "Остатъчен калориен лимит от месото"]
    },
  },
};
