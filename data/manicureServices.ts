interface ManicureService {
  name: string;
  description: string;
  duration: string;
  price: string;
  image: string;
}

const manicureServices: ManicureService[] = [
  {
    name: 'Манікюр',
    description:
      'Відчуйте естетику бездоганного дизайну та дбайте про здоров`я своїх нігтів, виглядаючи завжди доглянено та елегантно',
    duration: '60',
    price: '250',
    image: '/photos/manicure-landing-bezh.jpg',
  },
  {
    name: 'Педікюр',
    description:
      'Подаруйте своїм ногам вишуканий відпочинок з нашим професійним педікюром – ідеальним способом надати вашим нігтям та шкірі комфорт та бездоганний вигляд.',
    duration: '90',
    price: '350',
    image: '/photos/manicure/pedicureBG.jpeg',
  },
  {
    name: 'Подологічні послуги',
    description:
      'Насолоджуйтеся вищим стандартом догляду за вашими стопами. Наші фахівці з подології забезпечать ваші ноги не лише здоров`ям, але й естетичним виглядом.',
    duration: '90',
    price: '350',
    image: '/photos/manicure/manicure-ba-heel-a.jpg',
  },
  {
    name: 'Парафіно терапія',
    description:
      'Насолоджуйтеся теплотою та корисним впливом парафіну, який забезпечить вашим рукам не лише неперевершений вигляд, але й неймовірну м`якість та еластичність."',
    duration: '90',
    price: '350',
    image: '/photos/manicure/parafin-therapy-2.webp',
  },
];

export default manicureServices;
