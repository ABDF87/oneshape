interface ManicureService {
  name: string;
  description: string[];
  duration: string;
  price: string;
  image: string;
}

const manicureServices: ManicureService[] = [
  {
    name: 'Манікюр',
    description: [
      'Манікюр зі зміцненням нігтів',
      'Нарщування нігтів',
      'Викладний френч',
      'Дизайн у подарунок',
    ],
    duration: '60',
    price: '250',
    image: '/photos/manicure-landing-bezh.jpg',
  },
  {
    name: 'Педікюр',
    description: [
      'З обробкою пальчиків та стоп',
      'Покриття коліром входить у вартість',
    ],
    duration: '90',
    price: '350',
    image: '/photos/pedicureBG.jpeg',
  },
  {
    name: 'Подологічні послуги',
    description: [
      'Обробка від грибка',
      'Розгрузки на тріщіни',
      'Видалення мозолів',
      'Видалення врослого нігтя',
    ],
    duration: '90',
    price: '350',
    image: '/photos/manicure-ba-heel-a.jpg',
  },
  {
    name: 'Парафіно терапія',
    description: [
      'Неперевершений вигляд рук',
      'М`якість та еластичність шкіри',
    ],
    duration: '90',
    price: '350',
    image: '/photos/parafin-therapy.png',
  },
];

export default manicureServices;
