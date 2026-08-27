import { MotorcycleModel } from '../types';

export const modelsData: MotorcycleModel[] = [
  {
    id: 'el-200-cc',
    slug: 'el-200-cc',
    name: 'ELDOSH EL-200 CC',
    category: 'universal',
    isPopular: true,
    tagline: {
      ru: 'Флагманский универсальный грузовой трицикл для ежедневной интенсивной работы',
      uz: 'Har kungi intensiv mehnat uchun eng ommabop universal yuk trisikli'
    },
    description: {
      ru: 'ELDOSH EL-200 CC — сбалансированная модель с оптимальным соотношением тяги, грузоподъемности и экономичности. Оснащен усиленным 200-кубовым двигателем с водяным охлаждением, усиленной рамной конструкцией и самосвальным кузовом.',
      uz: 'ELDOSH EL-200 CC — tortish kuchi, yuk ko‘tarish va tejamkorlikning ideal muvozanatiga ega model. Suv bilan sovutiluvchi 200 sm³ dvigatel, kuchaytirilgan po‘lat rama va samosval kuzov bilan jihozlangan.'
    },
    primaryImage: '/ELDOSH%20EL-200%20CC.png',
    gallery: [
      {
        id: 'img-1',
        label: { ru: 'Официальный трицикл ELDOSH EL 200 (Синий)', uz: 'ELDOSH EL 200 rasmiy trisikli (Ko‘k)' },
        url: '/ELDOSH%20EL-200%20CC.png',
        tag: 'Front View'
      },
      {
        id: 'img-2',
        label: { ru: 'Усиленный кузов 2200×1350×460 мм', uz: 'Kuchaytirilgan kuzov 2200×1350×460 mm' },
        url: '/ELDOSH%20EL-200%20CC.png',
        tag: 'Cargo Bed'
      }
    ],
    highlightSpecs: {
      payload: '1 500 кг',
      power: '14.0 л.с.',
      speed: '70 км/ч',
      engine: '200 см³ Водяное'
    },
    specs: {
      engineVolume: '200 см³ (1 цилиндр, вертикальный)',
      engineType: 'Бензиновый, карбюраторный, четырёхтактный, водяного охлаждения',
      power: '14 л.с. (Электронное зажигание)',
      payload: '1 500 кг (Вес нетто: 470 кг)',
      maxSpeed: '70 км/ч',
      fuelConsumption: '5 л / 100 км',
      tankCapacity: '20 литров (Размер шины: 5.00 R12)',
      cargoBedSize: '2200 × 1350 × 460 мм',
      dimensions: '3800 × 1460 × 1450 мм',
      curbWeight: '470 кг',
      coolingSystem: 'Водяное охлаждение (радиатор + кулер)',
      transmission: '5 передач вперед + реверс + демультипликатор',
      brakeSystem: 'Телескопическая вилка с гидравлическими амортизаторами, барабанные тормоза'
    },
    keyFeatures: {
      ru: [
        'Лобовое стекло и стальные дуги безопасности с двух сторон',
        'Встроенная аудиосистема: стереодинамики и плеер',
        'Усиленная рама: прямоугольный трубчатый сварной профиль',
        'Богатая комплектация: шлем, домкрат, запаска, ключ, дождевик, футболка',
        'Высокая грузоподъёмность 1500 кг при экономичном расходе 5 л / 100 км'
      ],
      uz: [
        'Old himoya oynasi va ikki tomonlama po‘lat xavfsizlik dugalari',
        'O‘rnatilgan audiotizim: stereodinamiklar va musiqa pleyeri',
        'Kuchaytirilgan rama: to‘g‘ri to‘rtburchak quvurli payvandlangan profil',
        'Boy komplektatsiya: shlem, domkrat, zapaska g‘ildirak, kalit, yomg‘irpo‘sh, futbolka',
        '5 l / 100 km tejamkorlikda 1500 kg yuqori yuk ko‘tarish quvvati'
      ]
    }
  },
  {
    id: 'el-250-heavy-duty',
    slug: 'el-200-m-cc',
    name: 'ELDOSH EL-200 M CC',
    category: 'heavy',
    isNew: true,
    tagline: {
      ru: 'Надёжный трёхколёсный грузовой мотоцикл для интенсивной коммерческой работы',
      uz: `Intensiv tijorat mehnati uchun ishonchli uch g'ildirakli yuk mototsikli`
    },
    description: {
      ru: 'Модель ELDOSH EL-200 M CC создана для практичных задач: перевозки грузов, строительных материалов и урожая. Оснащена прямоугольной трубчатой сварной рамой, стальными дугами безопасности с двух сторон, лобовым стеклом и экономичным 200 см³ двигателем с воздушным охлаждением.',
      uz: `ELDOSH EL-200 M CC modeli amaliy vazifalar uchun yaratilgan: yuklar, qurilish mollari va hosil tashish. To'g'ri to'rtburchak quvurli payvandlangan rama, ikki tomonlama po'lat xavfsizlik dugalari, old oyna va havo bilan sovutiluvchi 200 sm³ tejamkor dvigatel bilan jihozlangan.`
    },
    primaryImage: '/ELDOSH%20EL-200%20M%20CC.png',
    gallery: [
      {
        id: 'hd-1',
        label: { ru: 'ELDOSH EL-200 M CC', uz: `ELDOSH EL-200 M CC` },
        url: '/ELDOSH%20EL-200%20M%20CC.png',
        tag: 'Main View'
      },
      {
        id: 'hd-2',
        label: { ru: 'Кузов 1900×1200×475 мм', uz: 'Kuzov 1900×1200×475 mm' },
        url: '/ELDOSH%20EL-200%20M%20CC.png',
        tag: 'Cargo Bed'
      }
    ],
    highlightSpecs: {
      payload: '800 кг',
      power: '13.0 л.с.',
      speed: '70 км/ч',
      engine: '200 см³ Воздушное'
    },
    specs: {
      engineVolume: '200 см³ (1 цилиндр, вертикальный)',
      engineType: 'Бензиновый, карбюраторный, четырёхтактный, воздушного охлаждения',
      power: '13 л.с. (Электронная система зажигания)',
      payload: '800 кг (Вес нетто: 400 кг)',
      maxSpeed: '70 км/ч',
      fuelConsumption: '4 л / 100 км',
      tankCapacity: '17 литров (Шины: 5.00 R12)',
      cargoBedSize: '1900 × 1200 × 475 мм',
      dimensions: '3500 × 1350 × 1370 мм',
      curbWeight: '400 кг',
      coolingSystem: 'Воздушное охлаждение',
      transmission: '5 передач вперед + реверс (задний ход)',
      brakeSystem: 'Телескопическая вилка с гидравлическими амортизаторами, барабанные тормоза'
    },
    keyFeatures: {
      ru: [
        'Габаритные размеры кузова: 1900×1200×475 мм при грузоподъёмности 800 кг',
        'Профиль рамы: прямоугольный, трубчатый, сварной повышенной прочности',
        'Стальные защитные дуги безопасности с двух сторон и лобовое стекло',
        'Экономичный расход топлива: всего 4 л на 100 км при баке 17 литров',
        'Комплектация: шлем, ключ, дождевик, фирменная футболка'
      ],
      uz: [
        `Kuzov o'lchamlari: 1900×1200×475 mm, yuk ko'tarish quvvati: 800 kg`,
        `Rama profili: to'g'ri to'rtburchak, quvurli, mustahkam payvandlangan`,
        `Ikki tomonlama po'lat xavfsizlik dugalari va old oyna`,
        `Tejamkor yoqilg'i sarfi: 100 km ga 4 litr, bak hajmi 17 litr`,
        `To'liq komplektatsiya: shlem, kalit, yomg'irpo'sh, futbolka`
      ]
    }
  },
  {
    id: 'el-200-pro-cabin',
    slug: 'el-200-pro-cabin',
    name: 'ELDOSH EL 200 PRO CABIN',
    category: 'cabin',
    tagline: {
      ru: 'Закрытая остекленная кабина для круглогодичной комфортной работы в любую погоду',
      uz: 'Yil bo‘yi har qanday ob-havoda qulay ishlash uchun yopiq oynali kabina'
    },
    description: {
      ru: 'Коммерческий трицикл с полноценной металлической кабиной, панорамным ветровым стеклом, стеклоочистителем с омывателем, системой вентиляции и отопителя салона. Защищает водителя от дождя, ветра, пыли и холода.',
      uz: 'To‘liq metall kabina, panoramik old oyna, tozalagich (dvornik), ventilyatsiya va isitish tizimiga ega tijorat trisikli. Haydovchini yomg‘ir, shamol, chang va sovuqdan to‘liq himoya qiladi.'
    },
    primaryImage: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        id: 'cb-1',
        label: { ru: 'Кабина и панорамное стекло', uz: 'Kabina va panoramik oyna' },
        url: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1200&q=80',
        tag: 'Cabin Exterior'
      },
      {
        id: 'cb-2',
        label: { ru: 'Интерьер и рулевое управление', uz: 'Interyer va rul boshqaruvi' },
        url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
        tag: 'Interior'
      },
      {
        id: 'cb-3',
        label: { ru: 'Грузовой отсек', uz: 'Yuk bo‘limi' },
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
        tag: 'Cargo Space'
      }
    ],
    highlightSpecs: {
      payload: '1 100 кг',
      power: '15.0 л.с.',
      speed: '60 км/ч',
      engine: '200 см³ Pro Cabin'
    },
    specs: {
      engineVolume: '200 см³ (4-тактный жидкостного охлаждения)',
      engineType: 'Бензиновый повышенного моторесурса',
      power: '15.0 л.с. при 7500 об/мин',
      payload: '1 100 кг',
      maxSpeed: '60 км/ч',
      fuelConsumption: 'от 6.0 л на 100 км',
      tankCapacity: '15 литров',
      cargoBedSize: '2000 мм x 1300 мм x 500 мм',
      dimensions: '3500 мм x 1350 мм x 1750 мм',
      curbWeight: '430 кг',
      coolingSystem: 'Жидкостное с выносным радиатором',
      transmission: '5 вперед + 1 назад с демультипликатором',
      brakeSystem: 'Гидравлическая трехколесная система с вакуумным усилением'
    },
    keyFeatures: {
      ru: [
        'Цельнометаллическая кабина с боковыми дверями и замками',
        'Электрический стеклоочиститель и омыватель лобового стекла',
        'Встроенный вентилятор обдува и теплый салонный отопитель',
        'Шумо- и виброизоляция моторного щита',
        'Автомобильное эргономичное кресло водителя с регулировкой'
      ],
      uz: [
        'Qulflanadigan yon eshiklarga ega yaxlit metall kabina',
        'Elektr oyna tozalagich va suv purkagich tizimi',
        'O‘rnatilgan salqin ventilyator va qishki isitgich (pechka)',
        'Dvigatel shovqini va titrashini kamaytiruvchi izolyatsiya',
        'Haydovchi uchun qulay sozlanuvchi ergonomik avtomobil o‘rindig‘i'
      ]
    }
  },
  {
    id: 'el-150-agro-max',
    slug: 'el-150-agro-max',
    name: 'ELDOSH EL 150 AGRO MAX',
    category: 'agro',
    tagline: {
      ru: 'Легкий, маневренный и сверхэкономичный трицикл для садов, теплиц и ферм',
      uz: 'Bog‘lar, issiqxonalar va fermalar uchun yengil, chaqqon va o‘ta tejamkor trisikl'
    },
    description: {
      ru: 'Компактный трицикл, созданный специально для фермерских хозяйств, дехкан и садоводов. Узкая колея позволяет легко проезжать между рядами в садах и теплицах при минимальном расходе бензина.',
      uz: 'Fermer xo‘jaliklari, dehqonlar va bog‘bonlar uchun maxsus yaratilgan ixcham trisikl. Tor oraliqlardan bemalol o‘tish imkonini beradi va yoqilg‘ini minimal darajada sarflaydi.'
    },
    primaryImage: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        id: 'ag-1',
        label: { ru: 'Общий вид Agro Max', uz: 'Agro Max umumiy ko‘rinish' },
        url: 'https://images.unsplash.com/photo-1558980664-3a031cf67ea8?auto=format&fit=crop&w=1200&q=80',
        tag: 'Overall'
      },
      {
        id: 'ag-2',
        label: { ru: 'Компактный кузов', uz: 'Ixcham kuzov' },
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
        tag: 'Compact Bed'
      }
    ],
    highlightSpecs: {
      payload: '850 кг',
      power: '11.5 л.с.',
      speed: '55 км/ч',
      engine: '150 см³ Эконом'
    },
    specs: {
      engineVolume: '150 см³ (4-тактный)',
      engineType: 'Бензиновый с принудительным воздушным охлаждением',
      power: '11.5 л.с. при 7500 об/мин',
      payload: '850 кг',
      maxSpeed: '55 км/ч',
      fuelConsumption: 'от 6.0 л на 100 км',
      tankCapacity: '12 литров',
      cargoBedSize: '1600 мм x 1150 мм x 450 мм',
      dimensions: '3100 мм x 1200 мм x 1350 мм',
      curbWeight: '290 кг',
      coolingSystem: 'Воздушно-масляное с масляным радиатором',
      transmission: '5 передач вперед + реверс',
      brakeSystem: 'Барабанные тормоза всех колес с механическим ручником'
    },
    keyFeatures: {
      ru: [
        'Экономичный двигатель: от 6.0 л бензина на 100 км',
        'Уменьшенный радиус разворота для тесных ферм и теплиц',
        'Увеличенный дорожный просвет 210 мм для грунтовых дорог',
        'Простая и надежная карбюраторная система подачи топлива',
        'Низкая стоимость владения и копеечные расходники'
      ],
      uz: [
        'Tejamkor motor: 100 km masofaga 6.0 litrdan yoqilg‘i',
        'Tor fermalar va issiqxonalar uchun qisqartirilgan burilish radiusi',
        'Tuproq yo‘llar uchun oshirilgan 210 mm klirens',
        'Oddiy va o‘ta ishonchli karbyurator tizimi',
        'Arzon xizmat ko‘rsatish va hamyonbop ehtiyot qismlar'
      ]
    }
  },
  {
    id: 'el-eco-electric-pro',
    slug: 'el-eco-electric-pro',
    name: 'ELDOSH EL-ECO ELECTRIC',
    category: 'electric',
    isNew: true,
    tagline: {
      ru: '100% электрический грузовой трицикл с нулевым расходом топлива для эко-парков и складов',
      uz: '100% elektr yuk trisikli — omborlar, ekoparklar va shahar yetkazib berishi uchun'
    },
    description: {
      ru: 'Инновационный полностью электрический грузовой трицикл. Бесшумный, экологически чистый, заряжается от обычной розетки 220V за 5–6 часов. Идеален для закрытых складских комплексов, курортных зон, парков и ночной доставки.',
      uz: 'Innovatsion to‘liq elektr yuk trisikli. Shovqinsiz, toza, oddiy 220V rozetkadan 5-6 soatda quvvatlanadi. Yopiq omborlar, dam olish maskanlari, bog‘lar va tungi yetkazib berish uchun ayni muddao.'
    },
    primaryImage: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
    gallery: [
      {
        id: 'el-1',
        label: { ru: 'Электротрицикл EL-ECO', uz: 'EL-ECO elektr trisikli' },
        url: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?auto=format&fit=crop&w=1200&q=80',
        tag: 'Electric Eco'
      },
      {
        id: 'el-2',
        label: { ru: 'Электродвигатель и батарея', uz: 'Elektr motor va batareya' },
        url: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1200&q=80',
        tag: 'EV Battery'
      }
    ],
    highlightSpecs: {
      payload: '1 000 кг',
      power: '2200 W (Peak 4kW)',
      speed: '45 км/ч',
      engine: '100% Electric EV'
    },
    specs: {
      engineVolume: 'Бесщеточный BLDC электромотор 2200W (пик 4000W)',
      engineType: 'Электрический с прямым редукторным приводом',
      power: 'Эквивалент 7.0 л.с. с мгновенным крутящим моментом',
      payload: '1 000 кг',
      maxSpeed: '45 км/ч',
      fuelConsumption: '0 л (Расход ~4 кВт⋅ч на 100 км / ~3 000 сум)',
      tankCapacity: 'LiFePO4 / Тяговый гелевый блок 72V 60Ah',
      cargoBedSize: '1800 мм x 1200 мм x 450 мм',
      dimensions: '3300 мм x 1250 мм x 1400 мм',
      curbWeight: '320 кг',
      coolingSystem: 'Пассивное оребрение мотора + контроллер с термозащитой',
      transmission: 'Автоматическая (Drive, Neutral, Reverse, Low Gear)',
      brakeSystem: 'Передний гидравлический + задние барабанные с рекуперацией'
    },
    keyFeatures: {
      ru: [
        'Стоимость 100 км пути менее 3 500 узбекских сумов',
        'Зарядка от стандартной розетки 220 Вольт (кабель в комплекте)',
        'Запас хода до 80–100 км на одном полном заряде',
        'Абсолютная бесшумность и отсутствие вредных выхлопных газов',
        'Рекуперативное торможение для подзарядки на спусках'
      ],
      uz: [
        '100 km masofa tannarxi 3 500 so‘mdan kam',
        'Oddiy 220V elektr rozetkasidan quvvatlanish',
        'Bir quvvatlanishda 80–100 km gacha yurish zaxirasi',
        'Mutlaqo shovqinsiz va hech qanday zaharli gazsiz',
        'Tushishlarda quvvatni qaytaruvchi rekuperativ tormozlanish'
      ]
    }
  }
];
