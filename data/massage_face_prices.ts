interface MassagePrice {
  type: string;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  duration: string;
  price: string;
}

const massageFacePrices: MassagePrice[] = [
  {
    type: 'Масаж',
    name: 'Массаж обличчя',
    description: 'Бонус - альгінатна маска чи гiалуронова маска',
    duration: '60 хв.',
    price: '800',
  },
  {
    type: 'Масаж',
    name: 'Інтраоральний (букальний) масаж обличчя',
    description: 'Бонус - альгінатна маска чи гiалуронова маска',
    duration: '60 хв.',
    price: '800',
  },
  {
    type: 'Масаж',
    name: 'RF - ліфтінг(апаратний масаж) & Ручна техніка',
    description: 'Обличчя, шия, декольте + поєднання з ручною технікою',
    description2: 'Бонус - альгінатна маска чи гiалуронова маска',
    duration: '15-20 хв.',
    price: '450',
  },
  {
    type: 'Масаж',
    name: 'Масаж обличчя: Пластика обличчя & RF - ліфтінг',
    description: '',
    duration: '60 хв.',
    price: '950',
  },
];

export default massageFacePrices;
