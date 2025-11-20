export interface Event {
  id: number;
  date: string;
  description: string;
}

export interface Timeframe {
  id: number;
  startYear: number;
  endYear: number;
  category: string;
  events: Event[];
  segmentNumber?: number;
}

export const mockData: Timeframe[] = [
  {
    id: 1,
    startYear: 2015,
    endYear: 2022,
    category: 'Наука',
    events: [
      {
        id: 101,
        date: '2015',
        description: 'Открытие гравитационных волн (LIGO).',
      },
      {
        id: 102,
        date: '2015',
        description: 'Запуск миссии "Dawn" к карликовой планете Церера.',
      },
      {
        id: 103,
        date: '2016',
        description: 'Клинические испытания технологии CRISPR.',
      },
      {
        id: 104,
        date: '2017',
        description:
          'Разработка искусственного интеллекта AlphaGo, победившего чемпионов по Го.',
      },
      {
        id: 105,
        date: '2018',
        description: 'Нобелевская премия за иммунотерапию рака.',
      },
      {
        id: 106,
        date: '2019',
        description:
          'Получение первого изображения черной дыры (Event Horizon Telescope).',
      },
      {
        id: 107,
        date: '2020',
        description: 'Масштабная разработка мРНК-вакцин.',
      },
      {
        id: 108,
        date: '2021',
        description: 'Запуск космического телескопа Джеймса Уэбба.',
      },
      {
        id: 109,
        date: '2022',
        description: 'Первый полноцветный снимок от телескопа Джеймса Уэбба.',
      },
    ],
  },
  {
    id: 2,
    startYear: 1991,
    endYear: 2000,
    category: 'Политика',
    events: [
      { id: 201, date: '1991', description: 'Распад Советского Союза.' },
      {
        id: 202,
        date: '1991',
        description: 'Создание Всемирной паутины (World Wide Web) в CERN.',
      },
      {
        id: 203,
        date: '1993',
        description:
          'Подписание Маастрихтского договора и создание Европейского Союза.',
      },
      { id: 204, date: '1994', description: 'Отмена апартеида в ЮАР.' },
      {
        id: 205,
        date: '1995',
        description: 'Создание Всемирной торговой организации (ВТО).',
      },
      {
        id: 206,
        date: '1997',
        description: 'Передача Гонконга под суверенитет Китая.',
      },
      {
        id: 207,
        date: '1998',
        description: 'Подписание Белфастского соглашения (Страстная пятница).',
      },
      {
        id: 208,
        date: '1999',
        description: 'Введение евро как расчетной валюты.',
      },
      { id: 209, date: '2000', description: 'Начало дотком-кризиса.' },
    ],
  },
  {
    id: 3,
    startYear: 1800,
    endYear: 1850,
    category: 'Искусство',
    events: [
      {
        id: 301,
        date: '1803',
        description: 'Покупка Луизианы Соединенными Штатами.',
      },
      {
        id: 302,
        date: '1805',
        description: 'Рождение Ганса Христиана Андерсена.',
      },
      {
        id: 303,
        date: '1815',
        description: 'Битва при Ватерлоо и конец эпохи Наполеона.',
      },
      { id: 304, date: '1825', description: 'Открытие Эри-канала в США.' },
      {
        id: 305,
        date: '1830',
        description: 'Появление романтизма в Европе (Виктор Гюго).',
      },
      {
        id: 306,
        date: '1837',
        description: 'Начало правления королевы Виктории в Великобритании.',
      },
      {
        id: 307,
        date: '1848',
        description: '"Весна народов" — серия революций в Европе.',
      },
      { id: 308, date: '1850', description: 'Смерть Оноре де Бальзака.' },
    ],
  },
  {
    id: 4,
    startYear: 1600,
    endYear: 1650,
    category: 'Июль',
    events: [
      {
        id: 401,
        date: '1605',
        description: 'Открытие порохового заговора в Англии.',
      },
      {
        id: 402,
        date: '1610',
        description: 'Галилей обнаружил спутники Юпитера (Галилеевы луны).',
      },
      { id: 403, date: '1618', description: 'Начало Тридцатилетней войны.' },
      {
        id: 404,
        date: '1620',
        description: 'Прибытие "отцов-пилигримов" в Северную Америку.',
      },
      {
        id: 405,
        date: '1633',
        description: 'Суд над Галилеем католической инквизицией.',
      },
      {
        id: 406,
        date: '1642',
        description: 'Начало Английской гражданской войны.',
      },
    ],
  },
  {
    id: 5,
    startYear: 1941,
    endYear: 1945,
    category: 'Война',
    events: [
      {
        id: 501,
        date: '1941',
        description:
          'Нападение Японии на Перл-Харбор и вступление США в войну.',
      },
      { id: 502, date: '1942', description: 'Битва при Мидуэе.' },
      { id: 503, date: '1943', description: 'Тегеранская конференция.' },
      {
        id: 504,
        date: '1944',
        description: 'Высадка союзников в Нормандии (Открытие Второго фронта).',
      },
      { id: 505, date: '1945', description: 'Ялтинская конференция.' },
      {
        id: 506,
        date: '1945',
        description: 'Атомные бомбардировки Хиросимы и Нагасаки.',
      },
      { id: 507, date: '1945', description: 'Капитуляция Германии и Японии.' },
    ],
  },
  {
    id: 6,
    startYear: 2008,
    endYear: 2023,
    category: 'Технологии',
    events: [
      {
        id: 601,
        date: '2008',
        description: 'Запуск первого Android-телефона (T-Mobile G1).',
      },
      {
        id: 602,
        date: '2009',
        description: 'Запуск Bitcoin и начало криптовалют.',
      },
      {
        id: 603,
        date: '2010',
        description: 'Создание первого iPad и запуск Instagram.',
      },
      {
        id: 604,
        date: '2012',
        description: 'Запуск Raspberry Pi и облачного хранения данных.',
      },
      {
        id: 605,
        date: '2014',
        description: 'Выпуск Apple Watch и начало эры носимых технологий.',
      },
      {
        id: 606,
        date: '2017',
        description: 'Прорыв в технологии глубокого обучения (Deep Learning).',
      },
      {
        id: 607,
        date: '2020',
        description: 'Широкое распространение удаленной работы и Zoom.',
      },
      {
        id: 608,
        date: '2023',
        description: 'Бум генеративного ИИ (ChatGPT, Midjourney).',
      },
    ],
  },
];
