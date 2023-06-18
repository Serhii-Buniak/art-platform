import { useTranslation } from "react-i18next"

interface Vocabulary {
    main: string
    museums: string
    artGalleries: string
    copyright: string
    developed: string
    greeting1: string
    greeting2: string
    greeting3: string
    quotationText: string
    quotationAuthor: string
    faq: string
    question1: string
    answer1: string
    question2: string
    answer2: string
    question3: string
    answer3: string
    question4: string
    answer4: string
    question5: string
    answer5: string
    essayMuseum: string
    essayArtGallery: string
    notFound: string
    louvre: string
    siteServices: string
    informationPoints: string
    equipmentLoan: string
    lockerRoom: string
    freeWiFi: string
    toilet: string
    parking: string
    touristGroupTitle: string
    touristGroupText: string
    schoolGroupTitle: string
    schoolGroupText: string
    socialGroupTitle: string
    socialGroupText: string
    healthGroupTitle: string
    healthGroupText: string
    salonParExcellenceTitle: string
    salonParExcellenceText: string
    pyramidAsSymbolTitle: string
    pyramidAsSymbolText: string
    monaLisaTitle: string
    monaLisaText: string
    idealOfGreekTitle: string
    idealOfGreekText: string
    stairwayToVictoryTitle: string
    stairwayToVictoryText: string
    egyptianMuseumTitle: string
    egyptianMuseumText: string
    frenchPaintersTitle: string
    frenchPaintersText: string
    renaissancePalaceTitle: string
    renaissancePalaceText: string
    treasuresOfMediterraneanTitle: string
    treasuresOfMediterraneanText: string
    drawingsPrintsPastelsTitle: string
    drawingsPrintsPastelsText: string
    rubensMuseum: string
    ladyAtTheFishmarketTitle: string
    ladyAtTheFishmarketText: string
    supportUsTitle: string
    supportUsText: string
    organisationTitle: string
    organisationText: string
    aboutRubensMuseumTitle: string
    aboutRubensMuseumText: string
    aboutRubensTitle: string
    aboutRubensText: string
    henry4BattleOfIvryTitle: string
    henry4BattleOfIvryText: string
    neptuneAndAmphitriteTitle: string
    neptuneAndAmphitriteText: string
    galleryOfCornelisTitle: string
    galleryOfCornelisText: string
    liberAmicorumTitle: string
    liberAmicorumText: string
    archdukesAlbrechtAndIsabellaTitle: string
    archdukesAlbrechtAndIsabellaText: string
    peasantDrinkingTitle: string
    peasantDrinkingText: string
    StillLifeTitle: string
    StillLifeText: string
    sundialTitle: string
    sundialText: string
    ewerAndBasinTitle: string
    ewerAndBasinText: string

    britishMuseum: string
    virginAndChildTitle: string
    virginAndChildText: string
    AboutBritishMuseumTitle: string
    AboutBritishMuseumText: string
    visitBritishMuseumTitle: string
    visitBritishMuseumText: string
    galleriesMuseumTitle: string
    galleriesMuseumText: string
    objectTrailsMuseumTitle: string
    objectTrailsMuseumText: string
    membershipMuseumTitle: string
    membershipMuseumText: string
    donateTitle: string
    donateText: string
    shopOnlineTitle: string
    shopOnlineText: string
    loutrophorosTitle: string
    loutrophorosText: string
    bonesOfMankindTitle: string
    bonesOfMankindText: string
    catMummiesTitle: string
    catMummiesText: string
    durerRhinoTitle: string
    durerRhinoText: string
    ladiesOfLlangollenTitle: string
    ladiesOfLlangollenText: string
    lewisChessmenTitle: string
    lewisChessmenText: string
    blackFiguredAmphoraTitle: string
    blackFiguredAmphoraText: string
}

export const getFunctionParametr = (func: ((obj: Vocabulary) => any)) => {
    const strFunction = func.toString()
    const indexOfDot = strFunction.indexOf(".")
    const parametr = strFunction.substring(indexOfDot + 1)
    return parametr
}

export const useVocabulary = () => {
    const { t } = useTranslation()

    const vocabulary = (func: ((obj: Vocabulary) => any)) => {

        const parametr = getFunctionParametr(func)
        return t(parametr)
    }

    return vocabulary
}

export const enVocabulary: Vocabulary = {
    main: "Main",
    museums: "Museums",
    artGalleries: "Art galleries",
    copyright: "Copyright © 2023. All rights reserved.",
    developed: "Developed by buniak.serhii@gmail.com",
    greeting1: "Welcome home",
    greeting2: "to",
    greeting3: "art platform",
    quotationText: "Don't limit yourself. Many people limit themselves to what they think they can do. You can go as far as your mind lets you. What you believe, remember, you can achieve.",
    quotationAuthor: "Mary Kay Ash",
    faq: "FAQ",
    question1: "What museums and galleries are available on the platform?",
    answer1: "Thousands of museums and galleries from around the world are available on the platform. You can visit both museums of famous artists and unknown art galleries, which may be far from your location.",
    question2: "What types of art can be seen on the platform?",
    answer2: "The platform features a variety of art forms, including painting, sculpture, photography, graphics, design, and more. Also on the platform you can find various exhibitions reflecting different eras and styles of art.",
    question3: "How can I find a specific exhibition or work of art?",
    answer3: "The platform has various search methods, such as searching by the name of the exhibition or artwork, by artist, by era or by style. You can also use filters to find artwork by color, size, or other criteria.",
    question4: "Can I chat with other visitors to the platform?",
    answer4: "Yes, on the platform there is an opportunity to exchange thoughts and impressions with other visitors. You can leave comments, create forum discussions or interact with other users in real time.",
    question5: "What are the computer system requirements for using the platform?",
    answer5: "The platform can run on most modern computers and devices with an Internet connection. It is recommended to have an Internet connection speed of at least 5 Mbps to have a quality experience of viewing high-quality images.",
    essayMuseum: "Museums are places of storage and display of cultural and historical artifacts. They help preserve our heritage and teach us about the past, which allows us to better understand the present. Museums can specialize in a variety of subjects, from art to natural sciences. They offer visitors a unique experience of learning about the world in which we live. Even in the digital age, museums remain indispensable participants in cultural life and sources of inspiration for many people.",
    essayArtGallery: "Art galleries are places where the art of famous and talented artists is exhibited. They can be dedicated to a certain style, era or a specific artist. Galleries allow you to enjoy the work of artists and feel their emotions through their works. Visitors can be educated and broaden their horizons by viewing real masterpieces of art. Art galleries help promote and preserve the cultural heritage of mankind, and enrich our lives with beauty and intellectual impressions.",
    notFound: "Not found",
    louvre: "Louvre",
    siteServices: "On-Site Services",
    informationPoints: "Information Points",
    equipmentLoan: "Equipment loan",
    lockerRoom: "Locker rooms and lockers",
    freeWiFi: "Free WIFI",
    toilet: "WC",
    parking: "Parking",
    touristGroupTitle: "Tourist and leisure groups",
    touristGroupText: "Tourism professionals and associations",
    schoolGroupTitle: "School and extracurricular groups",
    schoolGroupText: "Teachers or facilitators",
    socialGroupTitle: "Social field groups",
    socialGroupText: "Supporters or volunteers",
    healthGroupTitle: "Health and disability groups",
    healthGroupText: "Supporters or volunteers",
    salonParExcellenceTitle: "The Salon par excellence",
    salonParExcellenceText: "The Square Lounge",
    pyramidAsSymbolTitle: "A pyramid as a symbol",
    pyramidAsSymbolText: "Cour Napoleon and Pyramid",
    monaLisaTitle: "From the Mona Lisa to the Wedding at Cana",
    monaLisaText: "Hall of States",
    idealOfGreekTitle: "An ideal of Greek beauty",
    idealOfGreekText: "Hall of the Venus de Milo",
    stairwayToVictoryTitle: "A Stairway to Victory",
    stairwayToVictoryText: "Daru staircase",
    egyptianMuseumTitle: "Excursion to the Egyptian Museum of Champollion",
    egyptianMuseumText: "Musée Charles-X",
    frenchPaintersTitle: "When French painters think big",
    frenchPaintersText: "Red rooms",
    renaissancePalaceTitle: "In the heart of the Renaissance palace",
    renaissancePalaceText: "Hall of Caryatids",
    treasuresOfMediterraneanTitle: "Treasures of the Eastern Mediterranean",
    treasuresOfMediterraneanText: "Angoulême Gallery",
    drawingsPrintsPastelsTitle: "Drawings, prints and pastels",
    drawingsPrintsPastelsText: "Rotunda Sully",
    rubensMuseum: "Rubens Museum",
    ladyAtTheFishmarketTitle: "A lady on the Fish Market in Antwerp",
    ladyAtTheFishmarketText: "Adriaen Van Utrecht and Marten Pepijn, oil on canvas",
    supportUsTitle: "Support us",
    supportUsText: "Do you like the Rubens House and do you want to ensure that the quality of its activities and operations is assured for the future? You can do this by supporting the Rubens House. You can do this in many ways: as a friend, a volunteer, a donor or a sponsor.",
    organisationTitle: "Organisation",
    organisationText: "The Rubens House opened as a museum in 1946. From this time onwards, the employees have strived every day to showcase the versatility of Rubens to the largest possible audience. Find out more about who works at the museum and how we achieve this.",
    aboutRubensMuseumTitle: "About the museum",
    aboutRubensMuseumText: "The brilliant and versatile artist Rubens lived in this palazzo with his family. Here he also painted with his colleagues and assistants. He created many of his paintings in this house, in the centre of Antwerp. The museum has an interesting collection but also shows visitors how the master lived and worked.",
    aboutRubensTitle: "About Rubens",
    aboutRubensText: "He was capable of everything and knew everything. He was a brilliant and versatile artist, run a large studio, spoke several languages, collected art, designed his own home, travelled around Europe as a diplomat and was interested in science. Rubens was well-versed in almost everything.",
    henry4BattleOfIvryTitle: "Henry IV at the Battle of Ivry",
    henry4BattleOfIvryText: "Peter Paul Rubens. Oil on canvas",
    neptuneAndAmphitriteTitle: "Neptune and Amphitrite",
    neptuneAndAmphitriteText: "Jacob Jordaens. Oil on canvas, permanent loan collection Flemish Community",
    galleryOfCornelisTitle: "The Picture Gallery of Cornelis van der Geest",
    galleryOfCornelisText: "Willem Van Haecht. Oil on panel",
    liberAmicorumTitle: "Liber Amicorum of Nicolaas Rockox",
    liberAmicorumText: "manuscript",
    archdukesAlbrechtAndIsabellaTitle: "The Archdukes Albrecht and Isabella in the garden of their castle at Coudenberg in Brussels",
    archdukesAlbrechtAndIsabellaText: "Jan II Brueghel. Oil on panel",
    peasantDrinkingTitle: "Peasant drinking",
    peasantDrinkingText: "Adriaen Brouwer. Oil on panel",
    StillLifeTitle: "Still life with game and fruit",
    StillLifeText: "Frans Snijders. Oil on panel",
    sundialTitle: "Sundial",
    sundialText: "Jacobus de Succa. Brass",
    ewerAndBasinTitle: "Ewer and basin",
    ewerAndBasinText: "Theodoor Rogiers. On permanent loan from the King Baudouin Foundation",

    britishMuseum: "British Museum",
    virginAndChildTitle: "Virgin and Child",
    virginAndChildText: "Raphael. Generally known as the 'Mackintosh Madonna' after its donor Miss Eva Mackintosh",
    AboutBritishMuseumTitle: "The first national public museum of the world",
    AboutBritishMuseumText: "The British Museum is unique in bringing together under one roof the cultures of the world, spanning continents and oceans. No other museum is responsible for collections of the same depth and breadth, beauty and significance. Its eight million objects allow us to explore the extraordinary diversity of human cultures, from small communities to vast empires, to discover the many forms and expressions human beings have given to every aspect of life, and to realise how closely they are interconnected.",
    visitBritishMuseumTitle: "Plan your visit",
    visitBritishMuseumText: "Your safety is our priority. Here's everything you need to know before visiting us including how to book tickets.",
    galleriesMuseumTitle: "Galleries",
    galleriesMuseumText: "Walk through two million years of history and culture across more than 50 galleries.",
    objectTrailsMuseumTitle: "Object trails",
    objectTrailsMuseumText: "From an hour-long highlight tour to inspiring objects for children, journey through the collection with one of our object trails.",
    membershipMuseumTitle: "Become a Member",
    membershipMuseumText: "Support us by becoming a Member today and get 10% off in our online shop.",
    donateTitle: "Donate",
    donateText: "The British Museum is unique in bringing together the cultures of the world under one roof. Your donation will enable people from across the globe to explore humanity's extraordinary cultural achievements.",
    shopOnlineTitle: "Shop online",
    shopOnlineText: "The British Museum shop has a range of unique gifts, replicas, games and more.",
    loutrophorosTitle: "Red-figured loutrophoros, Attica, 430 BC.",
    loutrophorosText: "Red-figured loutrophoros (vessel for ceremonial bath-water) showing the dead laid out on a bier.",
    bonesOfMankindTitle: "The bones of mankind",
    bonesOfMankindText: "The bones of mankind. Block cut by Hans Lützelburger, print made by Hans Holbein the Younger, published about 1526",
    catMummiesTitle: "Cat mummies",
    catMummiesText: "Egypt, 30 BC (after)",
    durerRhinoTitle: "Albrecht Durer, 'The Rhinoceros'",
    durerRhinoText: " Woodcut, about 1515",
    ladiesOfLlangollenTitle: "Ladies of Llangollen",
    ladiesOfLlangollenText: "Richard James Lane (1800–1872), about 1840",
    lewisChessmenTitle: "Lewis Chessmen, 1150–1200",
    lewisChessmenText: "They were probably made in Scandinavia, thought to be Norway, about AD 1150–1200",
    blackFiguredAmphoraTitle: "Ancient Greek black-figured amphora",
    blackFiguredAmphoraText: "Signed by Exekias as potter and attributed to him as painter. The scene on this vase shows Achilles looming above Amazon warrior Penthesilea as she sinks to the ground",
}

export const uaVocabulary: Vocabulary = {
    main: "Головна",
    museums: "Музеї",
    artGalleries: "Художні галереї",
    copyright: "Авторське право © 2023. Всі права захищені.",
    developed: "Розроблено buniak.serhii@gmail.com",
    greeting1: "Запрошуємо додому",
    greeting2: "до",
    greeting3: "мистецтва",
    quotationText: "Не обмежуйте себе. Багато людей обмежують себе тим, що, на їхню думку, можуть зробити. Ви можете зайти настільки далеко, наскільки вам дозволяє ваш розум. У що ти віриш, пам’ятай, ти можеш досягти.",
    quotationAuthor: "Мері Кей Еш",
    faq: "Поширені запитання",
    question1: "Які музеї та галереї доступні на платформі?",
    answer1: "На платформі доступні тисячі музеїв та галерей з усього світу. Ви можете відвідати як музеї відомих художників, так і невідомі галереї мистецтва, які можливо знаходяться далеко від вашого місцезнаходження.",
    question2: "Які види мистецтва можна побачити на платформі?",
    answer2: "На платформі можна побачити різноманітні види мистецтва, включаючи живопис, скульптуру, фотографію, графіку, дизайн та інше. Також на платформі можна знайти різноманітні виставки, що відображають різні епохи та стилі мистецтва.",
    question3: "Як я можу знайти конкретну виставку або роботу мистецтва?",
    answer3: "На платформі є різні способи пошуку, такі як пошук за назвою виставки або роботою мистецтва, за художником, за епохою або за стилем. Також можна використовувати фільтри, щоб знайти роботу мистецтва за кольором, розміром або іншими параметрами.",
    question4: "Чи можу я спілкуватися з іншими відвідувачами платформи?",
    answer4: "Так, на платформі є можливість обмінюватися думками та враженнями з іншими відвідувачами. Ви можете залишати коментарі, створювати дискусії на форумі або взаємодіяти з іншими користувачами у режимі реального часу.",
    question5: "Які є вимоги до комп'ютерної системи для використання платформи?",
    answer5: "Платформа може працювати на більшості сучасних комп'ютерах та пристроях з підключенням до Інтернету. Рекомендовано мати швидкість Інтернет-з'єднання не менше 5 Мбіт/сек, щоб мати якісний досвід перегляду високоякісних зображень.",
    essayMuseum: "Музеї є місцем зберігання та показу культурних та історичних артефактів. Вони допомагають зберегти нашу спадщину та навчають нас про минуле, що дозволяє краще розуміти сучасність. Музеї можуть бути спеціалізованими на різних темах, від мистецтва до природничих наук. Вони пропонують відвідувачам унікальний досвід пізнання світу, в якому ми живемо. Навіть у цифрову епоху, музеї залишаються незамінними учасниками культурного життя та джерелами натхнення для багатьох людей.",
    essayArtGallery: "Художні галереї - це місця, де виставляється мистецтво відомих та талановитих художників. Вони можуть бути присвячені певному стилю, епохі або конкретному художнику. Галереї дозволяють насолоджуватися творчістю митців та відчувати їхні емоції через їхні роботи. Відвідувачі можуть отримати освіту та розширити свій кругозір, ознайомившись зі справжніми шедеврами мистецтва. Художні галереї допомагають популяризувати та зберігати культурну спадщину людства, та збагачують наше життя красою та інтелектуальними враженнями.",
    notFound: "Не знайдено",
    louvre: "Лувр",
    siteServices: "Послуги на місці",
    informationPoints: "Інформаційні пункти",
    equipmentLoan: "Позика на обладнання",
    lockerRoom: "Роздягальні та камери схову",
    freeWiFi: "Безкоштовний WIFI",
    toilet: "Туалет",
    parking: "Парковка",
    touristGroupTitle: "Туристично-відпочинкові групи",
    touristGroupText: "Фахівці та асоціації з туризму",
    schoolGroupTitle: "Шкільні та позашкільні гуртки",
    schoolGroupText: "Викладачі або фасилітатори",
    socialGroupTitle: "Групи соціального поля",
    socialGroupText: "Прихильники або волонтери",
    healthGroupTitle: "Групи здоров'я та інвалідності",
    healthGroupText: "Прихильники або волонтери",
    salonParExcellenceTitle: "Салон найвищої якості",
    salonParExcellenceText: "Квадратна кімната відпочинку",
    pyramidAsSymbolTitle: "Піраміда як символ",
    pyramidAsSymbolText: "Кур Наполеон і піраміда",
    monaLisaTitle: "Від Мони Лізи до весілля в Кані",
    monaLisaText: "Зал держав",
    idealOfGreekTitle: "Ідеал грецької краси",
    idealOfGreekText: "Зал Венери Мілоської",
    stairwayToVictoryTitle: "Сходи до перемоги",
    stairwayToVictoryText: "Сходи Дару",
    egyptianMuseumTitle: "Екскурсія в єгипетський музей Шампольйона",
    egyptianMuseumText: "Музей Карла X",
    frenchPaintersTitle: "Коли французькі художники мислять масштабно",
    frenchPaintersText: "Червоні кімнати",
    renaissancePalaceTitle: "У серці ренесансного палацу",
    renaissancePalaceText: "Зал каріатид",
    treasuresOfMediterraneanTitle: "Скарби Східного Середземномор'я",
    treasuresOfMediterraneanText: "Галерея Ангулем",
    drawingsPrintsPastelsTitle: "Малюнки, гравюри та пастель",
    drawingsPrintsPastelsText: "Ротонда Саллі",
    rubensMuseum: "Музей Рубенса",
    ladyAtTheFishmarketTitle: "Жінка на рибному ринку в Антверпені",
    ladyAtTheFishmarketText: "Адріан Ван Утрехт і Мартен Пепійн, полотно, олія",
    supportUsTitle: "Підтримайте нас",
    supportUsText: "Вам подобається дім Рубенса і ви хочете бути впевненими в тому, що якість його діяльності та роботи буде забезпечено в майбутньому? Ви можете зробити це, підтримавши Дім Рубенса. Ви можете зробити це різними способами: як друг, волонтер, донор чи спонсор.",
    organisationTitle: "Організація",
    organisationText: "Будинок Рубенса був відкритий як музей у 1946 році. З цього часу співробітники щодня прагнули продемонструвати різноманітність Рубенса якомога більшій аудиторії. Дізнайтеся більше про те, хто працює в музеї та як ми цього досягаємо.",
    aboutRubensMuseumTitle: "Про музей",
    aboutRubensMuseumText: "У цьому палаццо жив геніальний і різнобічний художник Рубенс зі своєю родиною. Тут він також малював разом зі своїми колегами та помічниками. У цьому будинку, в центрі Антверпена, він створив багато своїх картин. Музей має цікаву колекцію, але також показує відвідувачам, як жив і працював майстер.",
    aboutRubensTitle: "Про Рубенса",
    aboutRubensText: "Він був на все здатний і все знав. Він був блискучим і різностороннім художником, керував великою студією, володів кількома мовами, колекціонував твори мистецтва, проектував власний будинок, подорожував Європою як дипломат і цікавився наукою. Рубенс добре розумівся майже на всьому.",
    henry4BattleOfIvryTitle: "Генріх IV у битві при Іврі",
    henry4BattleOfIvryText: "Пітер Пауль Рубенс. Полотно, олія",
    neptuneAndAmphitriteTitle: "Нептун і Амфітріта",
    neptuneAndAmphitriteText: "Якоб Йорданс. Полотно, олія, постійна колекція фламандської спільноти",
    galleryOfCornelisTitle: "Картинна галерея Корнеліса ван дер Геста",
    galleryOfCornelisText: "Віллем Ван Хехт. Олія на панелі",
    liberAmicorumTitle: "Книга друзів Ніколаса Рококса",
    liberAmicorumText: "манускрипт",
    archdukesAlbrechtAndIsabellaTitle: "Ерцгерцоги Альбрехт та Ізабелла в саду свого замку Куденберг у Брюсселі",
    archdukesAlbrechtAndIsabellaText: "Ян II Брейгель. Олія на панелі",
    peasantDrinkingTitle: "Селяни випивають",
    peasantDrinkingText: "Адріан Брауер. Олія на панелі",
    StillLifeTitle: "Натюрморт з дичиною та фруктами",
    StillLifeText: "Франс Снайдерс. Олія на панелі",
    sundialTitle: "Сонячний годинник",
    sundialText: "Якобус де Сукка. Латунь",
    ewerAndBasinTitle: "Чайник і басейн",
    ewerAndBasinText: "Теодор Рогірс. На постійній основі від Фонду короля Бодуена",



    britishMuseum: "Британський музей",
    virginAndChildTitle: "Богородиця з Немовлям",
    virginAndChildText: "Рафаель. Широко відома як «Мадонна Макінтоша» на честь її дарувальника міс Єви Макінтош",
    AboutBritishMuseumTitle: "Перший національний публічний музей світу",
    AboutBritishMuseumText: "Британський музей унікальний тим, що об’єднує під одним дахом культури всього світу, що охоплює континенти й океани. Жоден інший музей не відповідає за колекції такої ж глибини та широти, краси та значення. Його вісім мільйонів об’єктів дозволяють нам досліджувати надзвичайне розмаїття людських культур, від невеликих громад до величезних імперій, відкривати численні форми та вираження, які люди надали кожному аспекту життя, і усвідомлювати, наскільки тісно вони взаємопов’язані.",
    visitBritishMuseumTitle: "Плануйте свій візит",
    visitBritishMuseumText: "Ваша безпека є нашим пріоритетом. Тут є все, що вам потрібно знати, перш ніж відвідати нас, зокрема, як забронювати квитки.",
    galleriesMuseumTitle: "Галереї",
    galleriesMuseumText: "Пройдіться двомільйонною історією та культурою в понад 50 галереях.",
    objectTrailsMuseumTitle: "Сліди об'єктів",
    objectTrailsMuseumText: "Від годинного екскурсійного огляду до надихаючих об’єктів для дітей, подорожуйте колекцією за допомогою одного з наших маршрутів об’єктів.",
    membershipMuseumTitle: "Стати учасником",
    membershipMuseumText: "Підтримайте нас, зареєструвавшись сьогодні, і отримайте знижку 10% у нашому онлайн-магазині.",
    donateTitle: "Пожертвуйте",
    donateText: "Британський музей унікальний тим, що об’єднує культури всього світу під одним дахом. Ваша пожертва дозволить людям з усього світу досліджувати надзвичайні культурні досягнення людства.",
    shopOnlineTitle: "Купуйте онлайн",
    shopOnlineText: "У магазині Британського музею є різноманітні унікальні подарунки, репліки, ігри тощо.",
    loutrophorosTitle: "Червонофігурний лутрофор, Аттика, 430 р. до н.е.",
    loutrophorosText: "Червонофігурний лутрофор (посудина для церемоніального купання) із зображенням померлих, покладених на гроб",
    bonesOfMankindTitle: "Кістки людства",
    bonesOfMankindText: "Кістки людства. Розріз Ганса Лютцельбургера, гравюра Ганса Гольбейна Молодшого, опублікована близько 1526 року",
    catMummiesTitle: "Мумії котів",
    catMummiesText: "Єгипет, 30 рік до нашої ери (після)",
    durerRhinoTitle: "Альбрехт Дюрер, «Носоріг»",
    durerRhinoText: "Ксилография, близько 1515 року",
    ladiesOfLlangollenTitle: "Пані Лланголлена",
    ladiesOfLlangollenText: "Річард Джеймс Лейн (1800–1872), близько 1840 року",
    lewisChessmenTitle: "Льюїс Чесмен, 1150–1200",
    lewisChessmenText: "Ймовірно, вони були виготовлені в Скандинавії, яка вважається Норвегією, приблизно в 1150–1200 роках нашої ери",
    blackFiguredAmphoraTitle: "Давньогрецька чорнофігурна амфора",
    blackFiguredAmphoraText: "Підписано Екзекієм як гончар і приписано йому як художнику. Сцена на цій вазі показує Ахілла, що навис над амазонкою Пентесілеєю, яка опускається на землю",
}

export default Vocabulary