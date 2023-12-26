interface MassagePrice {
  type: string;
    name: string;
    description: string;
    description2?: string;
    description3?: string;
    duration: string;
    price: string;
}

const massagePackagePrices:MassagePrice[] = [
  {
    type: 'Масаж',
    name: 'Healthy body',
    description: '10 процедур лімфодренажного масажу',
    duration: '90 хв.',
    price: '9500',
  },
  {
    type: 'Масаж',
    name: 'Sexy body',
    description: '10 процедур скульптуруючого масажу',
    duration: '90 хв.',
    price: '9500',
  },
  {
    type: 'Масаж',
    name: 'Hot body',
    description: '5 процедур скульптуруючого масажу',
    duration: '90 хв.',
    price: '5500',
  },
  {
    type: 'Масаж',
    name: 'Full package',
    description: '10 процедур масажів спини',
    description2: '+ скульптуруючий всього тіла',
    duration: '90 хв.',
    price: '11900',
  },

  {
    type: 'Масаж',
    name: 'Dry body',
    description: '5 процедур обгортання BRUNO VASSARI',
    description2: 'до яких входить: скарбування, обгортання, масаж',
    description3: 'спина, руки, плечи, стегна, ягодиці, живіт, бока',
    duration: '80 хв.',
    price: '7000',
  },
  {
    type: 'Масаж',
    name: 'Strong body',
    description: '10 скульптуруючих масажів',
    description2: '& 5 обгортань BRUNO VASSARI',
    duration: '90/80 хв.',
    price: '15000',
  },
  {
    type: 'Масаж',
    name: 'Aparatus body',
    description: '5 процедур Вакуумно-ролікового масажу',
    description2: '& 5 процедур RF - ліфтінгу',
    duration: '60 хв.',
    price: '5000',
  },
];

export default massagePackagePrices;
