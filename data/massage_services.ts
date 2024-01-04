interface MassageService {
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

const massageServices: MassageService[] = [
  {
    name: 'Масаж обличчя',
    description:
      'Відновлює контури обличчя, повертає шкірі свіжість та еластичность, приховуючи сліди втоми та стресу.',
    duration: '90',
    price: '1000',
    image: '/photos/cosmetology-landing.jpg',
  },
  {
    name: 'Массаж спини',
    description:
      "Відчуйте полегшення м'язів, покращення гнучкості та зануртеся в атмосферу спокою та комфорту, надаючи вашому тілу заслужений відпочинок.",
    duration: '90',
    price: '900',
    image: '/photos/back-massage.jpg',
  },
  {
    name: 'Лімфодренажний масаж тіла',
    description:'Насолоджуйтеся збереженням молодості, виводьте токсини, відчуваючи легкість та підтримуючи свій імунітет.',
    duration: '90',
    price: '1000',
    image: '/photos/leg-massage.jpg',
  },
  {
    name: 'Антицелюлітні програми',
    description:'Eфективний метод для покращення текстури шкіри та зменшення видимості целюліту. Cтимулює кровообіг, розгладжує нерівності та відновлює природний вигляд шкіри.',
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
