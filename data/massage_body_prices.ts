interface MassagePrice {
    type: string;
      name: string;
      description: string;
      description2?: string;
      description3?: string;
      duration: string;
      price: string;
  }
  
  const massageBodyPrices:MassagePrice[] = [
    {
      type: 'Масаж',
      name: 'Оздоровчий масаж',
      description: 'Загальний лімфодренажний масаж',
      duration: '90 хв.',
      price: '1200',
    },
    {
      type: 'Масаж',
      name: 'Антицелюлітний СКУЛЬПТУРУЮЧИЙ',
      description: '',
      duration: '90 хв.',
      price: '1200',
    },
    {
      type: 'Масаж',
      name: 'Масаж спини',
      description: '5 процедур скульптуруючого масажу',
      duration: '45 хв.',
      price: '500',
    },
    {
      type: 'Масаж',
      name: 'Масаж спини & Антицелюлітний',
      description: 'антицелюлітний масаж всього тіла',
      description2: '',
      duration: '90 хв.',
      price: '1400',
    },
  
    {
      type: 'Масаж',
      name: 'Обгортання BRUNO VASSARI',
      description: ' скарбування, обгортання, масаж',
      description2: 'спина, руки, плечи, стегна, ягодиці, живіт, бока',
      description3: '',
      duration: '80 хв.',
      price: '1400',
    },
    {
      type: 'Масаж',
      name: 'Вакуумно-роліковий масаж',
      description: '',
      description2: '',
      duration: '60 хв.',
      price: '700',
    },
    {
      type: 'Масаж',
      name: 'RF - ліфтінг',
      description: '',
      description2: '',
      duration: '60 хв.',
      price: '700',
    },
  ];
  
  export default massageBodyPrices;
  