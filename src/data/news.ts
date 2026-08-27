import { NewsArticle } from '../types';

export const newsData: NewsArticle[] = [
  {
    id: 'news-1',
    slug: 'eldosh-launch-el250-heavy',
    title: {
      ru: 'ELDOSH MOTORS представляет новую сверхмощную модель EL 250 HEAVY DUTY',
      uz: 'ELDOSH MOTORS yangi o‘ta kuchli EL 250 HEAVY DUTY modelini taqdim etdi'
    },
    excerpt: {
      ru: 'Флагман тяжелой серии получил усиленную раму из конструкционной стали, двигатель с двойным водяным контуром и грузоподъемность до 1500 кг.',
      uz: 'Og‘ir seriya flagmani konstruksion po‘latdan ishlangan mustahkam rama, ikki zanjirli suv sovutishli dvigatel va 1500 kg gacha yuk ko‘tarish imkoniyatiga ega bo‘ldi.'
    },
    content: {
      ru: [
        'Инженерный департамент ELDOSH MOTORS завершил полугодовые испытания новой модели грузового трицикла EL 250 HEAVY DUTY. Модель разработана с учетом пожеланий фермерских хозяйств и строительных подрядчиков Узбекистана.',
        'Ключевыми особенностями новинки стали: усиленный картер заднего моста, удлиненный кузов 2200 мм с рифленым износостойким настилом и инновационная система охлаждения, не допускающая перегрева двигателя даже при непрерывной работе в +50°C.',
        'Первая серийная партия уже поступила во все официальные дилерские центры в Ташкенте, Самарканде и Ферганской долине. Доступны тест-драйв и оформление в лизинг.'
      ],
      uz: [
        'ELDOSH MOTORS muhandislik bo‘limi EL 250 HEAVY DUTY yangi yuk trisikli modelining yarim yillik sinovlarini muvaffaqiyatli yakunladi. Model O‘zbekiston fermerlari va qurilish pudratchilarining talablarini inobatga olgan holda yaratildi.',
        'Yangilikning asosiy ustunliklari: kuchaytirilgan orqa most karteri, 2200 mm uzunlikdagi qalin polli kuzov hamda +50°C issiqda ham qizib ketishga yo‘l qo‘ymaydigan innovatsion suv sovutish tizimi.',
        'Birinchi seriyali partiya Toshkent, Samarqand va Farg‘ona vodiysidagi barcha rasmiy dilerlik markazlariga yetkazildi. Test-drayv va lizing xizmatlari mavjud.'
      ]
    },
    date: '2026-08-15',
    category: { ru: 'Презентация', uz: 'Taqdimot' },
    image: 'https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?auto=format&fit=crop&w=1000&q=80',
    readTime: { ru: '3 мин', uz: '3 daq' }
  },
  {
    id: 'news-2',
    slug: 'dealership-expansion-fergana-bukhara',
    title: {
      ru: 'Расширение дилерской сети: открытие новых центров в Бухаре и Ургенче',
      uz: 'Dilerlik tarmog‘ining kengayishi: Buxoro va Urganchda yangi markazlar ochilishi'
    },
    excerpt: {
      ru: 'ELDOSH MOTORS продолжает масштабирование сервисной инфраструктуры, открывая современные шоурумы с полным складским запасом запчастей.',
      uz: 'ELDOSH MOTORS ehtiyot qismlarning to‘liq ombor zaxirasiga ega zamonaviy shourumlarni ochib, servis infratuzilmasini kengaytirmoqda.'
    },
    content: {
      ru: [
        'В рамках стратегии развития региональной инфраструктуры ELDOSH MOTORS объявляет об открытии двух новых полнофункциональных дилерских центров формата 3S (Sales, Service, Spare parts) в городах Бухара и Ургенч.',
        'Каждый центр оборудован специализированными сервисными постами с профессиональным диагностическим оборудованием и складом оригинальных комплектующих.',
        '«Наша цель — обеспечить каждого владельца техники ELDOSH качественным сервисом и оригинальными деталями в шаговой доступности», — отметил директор по развитию сети.'
      ],
      uz: [
        'Hududiy infratuzilmani rivojlantirish strategiyasi doirasida ELDOSH MOTORS Buxoro va Urganch shaharlarida 3S formatidagi (Savdo, Servis, Ehtiyot qismlar) ikkita yangi dilerlik markazi ochilganini e’lon qiladi.',
        'Har bir markaz professional diagnostika uskunalari va original butlovchi qismlar omboriga ega maxsus servis postlari bilan ta’minlangan.',
        '«Bizning maqsadimiz — har bir ELDOSH texnikasi egasiga yaqin masofada sifatli servis va asl ehtiyot qismlarni taqdim etishdir», — dedi dilerlik tarmog‘i rahbari.'
      ]
    },
    date: '2026-07-28',
    category: { ru: 'Развитие сети', uz: 'Tarmoq rivoji' },
    image: 'https://images.unsplash.com/photo-1558981806-ec527fa84c39?auto=format&fit=crop&w=1000&q=80',
    readTime: { ru: '2 мин', uz: '2 daq' }
  },
  {
    id: 'news-3',
    slug: 'special-agro-financing-program',
    title: {
      ru: 'Запуск специальной программы субсидирования и рассрочки для фермеров',
      uz: 'Fermerlar uchun maxsus subsidiyalash va muddatli to‘lov dasturining boshlanishi'
    },
    excerpt: {
      ru: 'Совместно с ведущими банками запущена льготная программа приобретения грузового мототранспорта с первоначальным взносом от 15%.',
      uz: 'Yetakchi banklar bilan birgalikda 15% boshlang‘ich to‘lov bilan yuk mototransportini xarid qilish bo‘yicha imtiyozli dastur yo‘lga qo‘yildi.'
    },
    content: {
      ru: [
        'ELDOSH MOTORS совместно с партнерскими финансовыми организациями разработала программу поддержки дехканских и фермерских хозяйств Узбекистана.',
        'Программа предусматривает ускоренное рассмотрение заявки (в течение 24 часов) с минимальным пакетом документов и гибким сезонным графиком выплат с учетом сбора урожая.',
        'Для подачи заявки достаточно обратиться в любой официальный дилерский центр или оставить онлайн-заявку на сайте.'
      ],
      uz: [
        'ELDOSH MOTORS hamkor moliya tashkilotlari bilan birgalikda O‘zbekiston dehqon va fermer xo‘jaliklarini qo‘llab-quvvatlash dasturini ishlab chiqdi.',
        'Dastur arizalarni 24 soat ichida ko‘rib chiqish, minimal hujjatlar to‘plami va hosil yig‘im-terimini inobatga olgan moslashuvchan mavsumiy to‘lov grafigini taqdim etadi.',
        'Ariza berish uchun istalgan rasmiy dilerlik markaziga murojaat qilish yoki saytda onlayn so‘rov qoldirish kifoya.'
      ]
    },
    date: '2026-07-10',
    category: { ru: 'Финансирование', uz: 'Moliyalashtirish' },
    image: 'https://images.unsplash.com/photo-1609630875171-b1321377ee65?auto=format&fit=crop&w=1000&q=80',
    readTime: { ru: '4 мин', uz: '4 daq' }
  }
];
