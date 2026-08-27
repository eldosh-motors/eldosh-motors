import { Dealer } from '../types';

export const dealersData: Dealer[] = [
  {
    id: 'dealer-1',
    number: 1,
    region: 'Surxondaryo',
    city: { ru: 'Сурхандарьинская область, Ангорский район', uz: 'Surxondaryo viloyati, Angor tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Ангор', uz: 'ELDOSH Dilerlik markazi — Angor' },
    address: {
      ru: 'Сурхандарьинская обл., Ангорский р-н, ул. Тадбиркорлар, 84-дом',
      uz: 'Surxondaryo viloyati, Angor tumani, Tadbirkorlar ko‘chasi, 84-uy'
    },
    phone: '+998 (94) 204-84-77',
    phones: ['+998 (94) 204-84-77'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 18:30', uz: 'Dush-Shan: 08:30 - 18:30' },
    lat: 37.4939,
    lng: 67.1469,
    services: {
      ru: ['Продажа всех моделей', 'Запчасти в наличии', 'Сервисное обслуживание', 'Консультация'],
      uz: ['Barcha modellar savdosi', 'Mavjud ehtiyot qismlar', 'Servis xizmati', 'Konsultatsiya']
    }
  },
  {
    id: 'dealer-2',
    number: 2,
    region: 'Surxondaryo',
    city: { ru: 'Сурхандарьинская область, Шерободский район', uz: 'Surxondaryo viloyati, Sherobod tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Шеробод', uz: 'ELDOSH Dilerlik markazi — Sherobod' },
    address: {
      ru: 'Сурхандарьинская обл., Шерободский р-н, ССК Сарыкамыш, МСГ Шеробод',
      uz: 'Surxondaryo viloyati, Sherobod tumani, Sarikamish SSG, Sherobod MSG'
    },
    phone: '+998 (93) 814-77-37',
    phones: ['+998 (93) 814-77-37', '+998 (99) 944-77-37'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 18:30', uz: 'Dush-Shan: 08:30 - 18:30' },
    lat: 37.6694,
    lng: 66.9986,
    services: {
      ru: ['Шоурум трициклов', 'Гарантийный ремонт', 'Оригинальные комплектующие'],
      uz: ['Trisikllar shourumi', 'Kafolatli ta’mirlash', 'Asl butlovchi qismlar']
    }
  },
  {
    id: 'dealer-3',
    number: 3,
    region: 'Qashqadaryo',
    city: { ru: 'Кашкадарьинская область, Камашинский район', uz: 'Qashqadaryo viloyati, Kamashi tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Камаши', uz: 'ELDOSH Dilerlik markazi — Kamashi' },
    address: {
      ru: 'Кашкадарьинская обл., Камашинский р-н, ул. Амира Темура, 16-дом',
      uz: 'Qashqadaryo viloyati, Kamashi tumani, Amir Temur ko‘chasi, 16-uy'
    },
    phone: '+998 (97) 799-73-78',
    phones: ['+998 (97) 799-73-78', '+998 (97) 387-68-61', '+998 (91) 211-60-99'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 18:00', uz: 'Dush-Shan: 09:00 - 18:00' },
    lat: 38.8358,
    lng: 66.4714,
    services: {
      ru: ['Продажа техники', 'Диагностика и ТО', 'Склад запчастей'],
      uz: ['Texnika savdosi', 'Diagnostika va texnik ko‘rik', 'Ehtiyot qismlar ombori']
    }
  },
  {
    id: 'dealer-4',
    number: 4,
    region: 'Qashqadaryo',
    city: { ru: 'г. Карши (Кашкадарьинская область)', uz: 'Qarshi shahri (Qashqadaryo viloyati)' },
    name: { ru: 'ELDOSH Автосалон — Карши Чармгар', uz: 'ELDOSH Avtosaloni — Qarshi Charmgar' },
    address: {
      ru: 'г. Карши, ул. Чармгар, 5-дом',
      uz: 'Qarshi shahri, Charmgar ko‘chasi, 5-uy'
    },
    phone: '+998 (91) 216-45-41',
    phones: ['+998 (91) 216-45-41', '+998 (91) 220-79-51', '+998 (98) 475-44-45', '+998 (90) 428-19-10'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 19:00, Вс: 09:00 - 16:00', uz: 'Dush-Shan: 08:30 - 19:00, Yak: 09:00 - 16:00' },
    lat: 38.8606,
    lng: 65.7891,
    services: {
      ru: ['Центральный региональный автосалон', 'Тест-драйв', 'Рассрочка и лизинг', 'Сервисный бокс'],
      uz: ['Markaziy viloyat avtosaloni', 'Test-drayv', 'Muddatli to‘lov va lizing', 'Servis boks']
    }
  },
  {
    id: 'dealer-5',
    number: 5,
    region: 'Jizzax',
    city: { ru: 'Джизакская область, г. Джизак', uz: 'Jizzax viloyati' },
    name: { ru: 'ELDOSH Дилерский центр — Джизак', uz: 'ELDOSH Dilerlik markazi — Jizzax' },
    address: {
      ru: 'Джизакская обл., ул. О. Азимова, 1-дом',
      uz: 'Jizzax viloyati, O. Azimov ko‘chasi, 1-uy'
    },
    phone: '+998 (99) 525-03-06',
    phones: ['+998 (99) 525-03-06', '+998 (97) 436-51-15'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 18:00', uz: 'Dush-Shan: 09:00 - 18:00' },
    lat: 40.1158,
    lng: 67.8422,
    services: {
      ru: ['Продажа трициклов', 'Гарантийный сервис', 'Расходные материалы'],
      uz: ['Trisikllar savdosi', 'Kafolatli servis', 'Sarf materiallari']
    }
  },
  {
    id: 'dealer-6',
    number: 6,
    region: 'Sirdaryo',
    city: { ru: 'Сырдарьинская область, р-н Шароф Рашидов', uz: 'Sirdaryo viloyati' },
    name: { ru: 'ELDOSH Дилерский центр — Сырдарья М-39', uz: 'ELDOSH Dilerlik markazi — Sirdaryo M-39' },
    address: {
      ru: 'Сырдарьинская обл., р-н Шароф Рашидов, МФЙ Йоилма, автомагистраль М-39 Ташкент–Термез, 72-дом',
      uz: 'Sirdaryo viloyati, Sharof Rashidov tumani, Yoilma MFY, M-39 Toshkent–Termiz avtomagistral yo‘li, 72-uy'
    },
    phone: '+998 (99) 525-03-06',
    phones: ['+998 (99) 525-03-06'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 19:00', uz: 'Dush-Shan: 08:30 - 19:00' },
    lat: 40.8436,
    lng: 68.6617,
    services: {
      ru: ['Пункт продаж на трассе М-39', 'Срочный сервис', 'Запчасти'],
      uz: ['M-39 trassasidagi savdo punkti', 'Tezkor servis', 'Ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-7',
    number: 7,
    region: 'Buxoro',
    city: { ru: 'Бухарская область, Вобкентский район', uz: 'Buxoro viloyati, Vobkent tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Вобкент', uz: 'ELDOSH Dilerlik markazi — Vobkent' },
    address: {
      ru: 'Бухарская обл., Вобкентский р-н, ул. Навруз, 18-дом',
      uz: 'Buxoro viloyati, Vobkent tumani, Navro‘z ko‘chasi, 18-uy'
    },
    phone: '+998 (90) 415-20-01',
    phones: ['+998 (90) 415-20-01'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 18:30', uz: 'Dush-Shan: 09:00 - 18:30' },
    lat: 40.0306,
    lng: 64.5164,
    services: {
      ru: ['Выставка моделей', 'Сервисное обслуживание', 'Запчасти'],
      uz: ['Modellar ko‘rgazmasi', 'Servis xizmati', 'Ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-8',
    number: 8,
    region: 'Navoiy',
    city: { ru: 'Навоийская область, Хатырчинский район', uz: 'Navoiy viloyati, Xatirchi tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Хатырчи', uz: 'ELDOSH Dilerlik markazi — Xatirchi' },
    address: {
      ru: 'Навоийская обл., Хатырчинский р-н, кишлак Чинобод, 67-дом',
      uz: 'Navoiy viloyati, Xatirchi tumani, Chinobod qishlog‘i, 67-uy'
    },
    phone: '+998 (91) 250-90-09',
    phones: ['+998 (91) 250-90-09', '+998 (97) 684-87-07', '+998 (99) 379-90-09'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 18:00', uz: 'Dush-Shan: 08:30 - 18:00' },
    lat: 40.0461,
    lng: 65.9725,
    services: {
      ru: ['Продажа всех модификаций', 'Техобслуживание', 'Запчасти в наличии'],
      uz: ['Barcha modifikatsiyalar sotuvi', 'Texnik xizmat', 'Mavjud ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-9',
    number: 9,
    region: 'Farg‘ona',
    city: { ru: 'Ферганская область', uz: 'Farg‘ona viloyati' },
    name: { ru: 'ELDOSH Дилерский центр — Фергана', uz: 'ELDOSH Dilerlik markazi — Farg‘ona' },
    address: {
      ru: 'Ферганская обл., ул. Т. Кодирова, 22-дом',
      uz: 'Farg‘ona viloyati, T. Qodirov ko‘chasi, 22-uy'
    },
    phone: '+998 (93) 979-50-77',
    phones: ['+998 (93) 979-50-77', '+998 (94) 454-93-39'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 18:30', uz: 'Dush-Shan: 09:00 - 18:30' },
    lat: 40.3864,
    lng: 71.7864,
    services: {
      ru: ['Автосалон', 'Гарантийный сервис', 'Оптовые поставки фермерам'],
      uz: ['Avtosalon', 'Kafolatli servis', 'Fermerlarga ulgurji yetkazish']
    }
  },
  {
    id: 'dealer-10',
    number: 10,
    region: 'Qoraqalpog‘iston',
    city: { ru: 'Республика Каракалпакстан, г. Нукус', uz: 'Qoraqalpog‘iston Respublikasi, Nukus shahri' },
    name: { ru: 'ELDOSH Дилерский центр — Нукус', uz: 'ELDOSH Dilerlik markazi — Nukus' },
    address: {
      ru: 'Республика Каракалпакстан, г. Нукус, ул. А. Темира, 75-дом, 73-квартира',
      uz: 'Qoraqalpog‘iston Respublikasi, Nukus shahri, A. Temir ko‘chasi, 75-uy, 73-xonadon'
    },
    phone: '+998 (91) 374-02-20',
    phones: ['+998 (91) 374-02-20', '+998 (91) 388-82-12'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 18:00', uz: 'Dush-Shan: 09:00 - 18:00' },
    lat: 42.4619,
    lng: 59.6166,
    services: {
      ru: ['Официальное представительство в Каракалпакстане', 'Сервис', 'Запчасти'],
      uz: ['Qoraqalpog‘istondagi rasmiy vakillik', 'Servis', 'Ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-11',
    number: 11,
    region: 'Xorazm',
    city: { ru: 'Хорезмская область, г. Ханка', uz: 'Xorazm viloyati, Xonqa shahri' },
    name: { ru: 'ELDOSH Дилерский центр — Ханка', uz: 'ELDOSH Dilerlik markazi — Xonqa' },
    address: {
      ru: 'Хорезмская обл., г. Ханка, МФЙ Янгиланиш, ул. Буюк Карвон, 17Б-дом',
      uz: 'Xorazm viloyati, Xonqa shahri, Yangilanish MFY, Buyuk Karvon ko‘chasi, 17B-uy'
    },
    phone: '+998 (99) 961-00-80',
    phones: ['+998 (99) 961-00-80'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 18:00', uz: 'Dush-Shan: 08:30 - 18:00' },
    lat: 41.4828,
    lng: 60.7717,
    services: {
      ru: ['Продажа трициклов', 'Фирменное обслуживание', 'Запчасти'],
      uz: ['Trisikllar savdosi', 'Rasmiy xizmat ko‘rsatish', 'Ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-12',
    number: 12,
    region: 'Samarqand',
    city: { ru: 'Самаркандская область, г. Самарканд (Ойдин йул)', uz: 'Samarqand viloyati, Samarqand shahri (Oydin yo‘l)' },
    name: { ru: 'ELDOSH Дилерский центр — Самарканд Ойдин йул', uz: 'ELDOSH Dilerlik markazi — Samarqand Oydin yo‘l' },
    address: {
      ru: 'г. Самарканд, ул. Ойдин йул, 3-дом',
      uz: 'Samarqand shahri, Oydin yo‘l ko‘chasi, 3-uy'
    },
    phone: '+998 (91) 316-00-55',
    phones: ['+998 (91) 316-00-55'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 19:00', uz: 'Dush-Shan: 08:30 - 19:00' },
    lat: 39.6542,
    lng: 66.9597,
    services: {
      ru: ['Крупный шоурум', 'Сервисный центр', 'Склад оригинальных запчастей'],
      uz: ['Katta shourum', 'Servis markazi', 'Asl ehtiyot qismlar ombori']
    }
  },
  {
    id: 'dealer-13',
    number: 13,
    region: 'Samarqand',
    city: { ru: 'Самаркандская область, Кошрабадский район', uz: 'Samarqand viloyati, Kushrabod tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Кошрабад', uz: 'ELDOSH Dilerlik markazi — Kushrabod' },
    address: {
      ru: 'Самаркандская обл., Кошрабадский р-н, МФЙ Булокбоши, кишлак Булокбоши, 488-дом',
      uz: 'Samarqand viloyati, Kushrabod tumani, Bulokboshi MFY, Bulokboshi qishlog‘i, 488-uy'
    },
    phone: '+998 (99) 052-20-02',
    phones: ['+998 (99) 052-20-02', '+998 (93) 994-98-34'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 18:00', uz: 'Dush-Shan: 09:00 - 18:00' },
    lat: 40.3853,
    lng: 66.5292,
    services: {
      ru: ['Продажа для агросектора', 'ТО', 'Запчасти'],
      uz: ['Agrosektor uchun texnika sotuvi', 'Texnik ko‘rik', 'Ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-14',
    number: 14,
    region: 'Samarqand',
    city: { ru: 'Самаркандская область, Ургутский район', uz: 'Samarqand viloyati, Urgut tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Ургут', uz: 'ELDOSH Dilerlik markazi — Urgut' },
    address: {
      ru: 'Самаркандская обл., Ургутский р-н, МФЙ Бойбул, кишлак Хакачак',
      uz: 'Samarqand viloyati, Urgut tumani, Boybul MFY, Xaqachak qishlog‘i'
    },
    phone: '+998 (90) 194-00-77',
    phones: ['+998 (90) 194-00-77', '+998 (97) 915-08-68', '+998 (93) 992-16-15'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 18:30', uz: 'Dush-Shan: 08:30 - 18:30' },
    lat: 39.4056,
    lng: 67.2417,
    services: {
      ru: ['Выставка моделей', 'Сервис', 'Запчасти в наличии'],
      uz: ['Modellar ko‘rgazmasi', 'Servis', 'Mavjud ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-15',
    number: 15,
    region: 'Toshkent',
    city: { ru: 'г. Ташкент, Сергелийский район', uz: 'Toshkent shahri, Sergeli tumani' },
    name: { ru: 'ELDOSH Флагманский Автосалон — Ташкент ТКАД', uz: 'ELDOSH Flagman Avtosaloni — Toshkent TKAD' },
    address: {
      ru: 'г. Ташкент, Сергелийский р-н, ул. ТКАД (Ташкентская кольцевая автодорога)',
      uz: 'Toshkent shahri, Sergeli tumani, TKAD ko‘chasi'
    },
    phone: '+998 (93) 621-60-01',
    phones: ['+998 (93) 621-60-01', '+998 (93) 479-79-53'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 19:00, Вс: 09:00 - 17:00', uz: 'Dush-Shan: 09:00 - 19:00, Yak: 09:00 - 17:00' },
    lat: 41.2285,
    lng: 69.2155,
    services: {
      ru: ['Главный автосалон в столице', 'Тест-драйв всех моделей', 'Оптовые контракты', 'Центральный склад запчастей'],
      uz: ['Poytaxtdagi bosh avtosalon', 'Barcha modellarga test-drayv', 'Ulgurji shartnomalar', 'Markaziy ehtiyot qismlar ombori']
    }
  },
  {
    id: 'dealer-16',
    number: 16,
    region: 'Samarqand',
    city: { ru: 'г. Самарканд (Сузангаран)', uz: 'Samarqand shahri (Suzangaran)' },
    name: { ru: 'ELDOSH Автосалон — Самарканд Сузангаран', uz: 'ELDOSH Avtosaloni — Samarqand Suzangaran' },
    address: {
      ru: 'г. Самарканд, ул. Сузангаранская, 67-дом',
      uz: 'Samarqand shahri, Suzanqaranskaya ko‘chasi, 67-uy'
    },
    phone: '+998 (93) 720-23-42',
    phones: ['+998 (93) 720-23-42', '+998 (90) 224-73-66'],
    workingHours: { ru: 'Пн-Сб: 09:00 - 18:30', uz: 'Dush-Shan: 09:00 - 18:30' },
    lat: 39.6700,
    lng: 66.9750,
    services: {
      ru: ['Продажа трициклов', 'Диагностика', 'Запчасти'],
      uz: ['Trisikllar sotuvi', 'Diagnostika', 'Ehtiyot qismlar']
    }
  },
  {
    id: 'dealer-17',
    number: 17,
    region: 'Qashqadaryo',
    city: { ru: 'Кашкадарьинская область, Касбинский район', uz: 'Qashqadaryo viloyati, Kasbi tumani' },
    name: { ru: 'ELDOSH Дилерский центр — Муглан (Касби)', uz: 'ELDOSH Dilerlik markazi — Mug‘lon (Kasbi)' },
    address: {
      ru: 'Кашкадарьинская обл., г. Муглан, МФЙ Тинчлик, ул. Мустакиллик, 4-дом',
      uz: 'Qashqadaryo viloyati, Kasbi tumani, Mug‘lon sh., Tinchlik MFY, Mustaqillik ko‘chasi, 4-uy'
    },
    phone: '+998 (94) 520-58-88',
    phones: ['+998 (94) 520-58-88', '+998 (88) 310-87-56'],
    workingHours: { ru: 'Пн-Сб: 08:30 - 18:00', uz: 'Dush-Shan: 08:30 - 18:00' },
    lat: 38.9214,
    lng: 65.4183,
    services: {
      ru: ['Продажа техники', 'Сервисное ТО', 'Запчасти в наличии'],
      uz: ['Texnika savdosi', 'Servis xizmati', 'Mavjud ehtiyot qismlar']
    }
  }
];
