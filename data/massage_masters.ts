interface MassageMaster {
  name: string;
  rank: string;
  experience: string;
  description: string;
  description1?: string;
  description2?: string;
  description3?: string;
  option1?: string;
  option2?: string;
  option3?: string;
  option4?: string;
  option5?: string;
  option6?: string;
  option7?: string;
  option8?: string;
  option9?: string;
  option10?: string;
  photo: string;
}

const massageMasters: MassageMaster[] = [
  {
    name: 'Тетяна',
    rank: 'топ-майстер',
    experience: 'Досвід: 10 років',
    description: 'Топ-майстер масажу, ГУРУ тейпування',
    description1: 'Виконує такі види масажу:',
    option1:
      'оздоровчий (з використанням методики IASTM та мʼякі мануальні техніки)',
    option2: '️тайський',
    option3: 'лімфодренажний',
    option4: 'фітнес-моделюючий',
    option5: 'спортивний',
    option6: 'антицелюлітний масаж',
    option7: 'масаж для вагітних',
    option8:
      'масаж обличчя (використовуючи лімфодренажні, мʼякі мануальні, скульптуруючі, фасціальні, ліфтингові, інтраоральні техніки в залежності від запиту клієнта)',

    photo: '/photos/massage-landing.jpg',
  },
  {
    name: 'Ірина',
    rank: 'майстер',
    experience: 'Досвід: 2 роки',
    description:
      'Майстер масажу, має медичну освіту Виконує такі види масажу оздоровчий класичний масаж лімфодренажний фітнес-моделюючий, спортивний,антицелюлітний масаж обличчя',

    photo: '/photos/massage-master-2.jpg',
  },
  // {
  //   name: 'Елізавета',
  //   rank: 'майстер',
  //   experience: 'Досвід: 3 роки',
  //   description:
  //     'Досвідчений майстер масажу збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
  //   photo: '/photos/massage-landing.jpg',
  // },
];

export default massageMasters;
