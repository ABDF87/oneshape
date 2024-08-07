interface MassageService {
  name: string;
  description: string[];
  duration: string;
  price: string;
  image: string;
  link?: string;    
}

const massageServices: MassageService[] = [
  {
    name: 'Масаж обличчя',
    description:
      ['Відновлює контури обличчя', 'Повертає шкірі еластичность', 'Приховуює сліди втоми'],
    duration: '90',
    price: '1000',
    image: '/photos/cosmetology-landing.jpg',
    link: 'https://oneshape.com.ua/facemassage'

  },
  {
    name: 'Массаж спини',
    description:
      ['Полегшує напруження м`язів', 'Покращує гнучкість', 'Заспокоює'],
    duration: '90',
    price: '900',
    image: '/photos/back-massage.jpg',
  },
  {
    name: 'Лімфодренажний масаж тіла',
    description:['Зберігає молодість', 'Виводе токсини', 'Підтримує імунітет'],
    duration: '90',
    price: '1000',
    image: '/photos/leg-massage.jpg',
  },
  {
    name: 'Антицелюлітні програми',
    description:['Покращує текстуру шкіри', 'Зменьшує видимість целюліту', 'Розгладжує нерівності'],
    duration: '90',
    price: '1000',
    image: '/photos/massage-stomac.jpg',
  },
  // {
  //     name: 'Масаж шиї',
  //     description: 'Swedish massage is the most common and best-known type of massage in the West. If it\'s your first time or you don\'t get massage often, Swedish massage is the best place to start.',
  //     duration: '90',
  //     price: '1000',
  //     image: '/photos/massage-neck.jpg',
  // },
  // {
  //     name: 'Масаж шії',
  //     description: 'Swedish massage is the most common and best-known type of massage in the West. If it\'s your first time or you don\'t get massage often, Swedish massage is the best place to start.',
  //     duration: '90',
  //     price: '1000',
  //     image: '/photos/massage-back.jpg',
  // },
  // {
  //     name: 'Масаж ніг',
  //     description: 'Swedish massage is the most common and best-known type of massage in the West. If it\'s your first time or you don\'t get massage often, Swedish massage is the best place to start.',
  //     duration: '90',
  //     price: '1000',
  //     image: '/photos/foot_massage.jpg',
  // },
  // {
  //     name: 'Інтер-оральний масаж',
  //     description: 'Swedish massage is the most common and best-known type of massage in the West. If it\'s your first time or you don\'t get massage often, Swedish massage is the best place to start.',
  //     duration: '90',
  //     price: '1000',
  //     image: '/photos/inter-oral-massage.jpg',
  // },
  // {
  //     name: 'Лімфодренажний масаж',
  //     description: 'Swedish massage is the most common and best-known type of massage in the West. If it\'s your first time or you don\'t get massage often, Swedish massage is the best place to start.',
  //     duration: '90',
  //     price: '1000',
  //     image: '/photos/leg-massage.jpg',
  // },

  // {
  //     name: 'Массаж спини',
  //     description: 'Swedish massage is the most common and best-known type of massage in the West. If it\'s your first time or you don\'t get massage often, Swedish massage is the best place to start.',
  //     duration: '90',
  //     price: '1000',
  //     image: '/photos/back-massage.jpg',
  // },
];

export default massageServices;
