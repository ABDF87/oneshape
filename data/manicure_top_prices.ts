interface ManicurePrice {
  type: string;
  name: string;
  description: string;
  description2?: string;
  description3?: string;
  price: string;
}

const manicureTopMasterPrices: ManicurePrice[] = [
  {
    type: 'Манікюр',
    name: 'Манікюр зі зміцненням ногтів',
    description: 'Дизайн входить у вартість за бажанням',
    price: '1000',
  },
  {
    type: 'Манікюр',
    name: 'Манікюр + викладний френч',
    description: '',
    price: '2000',
  },
  {
    type: 'Манікюр',
    name: 'Манікюр + наращування ногтів',
    description: 'Дизайн входить у вартість',
    price: '2000 ',
  },
  {
    type: 'Манікюр',
    name: 'Педікюр повний с обробкою пальчиків та стоп',
    description: 'Покриття коліром входить у вартість за бажанням',
    price: '1000',
  },
    {
    type: 'Манікюр',
    name: 'Обработка оніхолізіс/грибок ногтів ',
    description: 'Ціна вказана за 1 пальчик',
    price: '250',
    },
    {
    type: 'Манікюр',
    name: 'Встановлення розгрузки на тріщини ',
    description: '',
    price: '150',
    },
    {
    type: 'Манікюр',
    name: 'Видалення врослого нігтя',
    description: 'Ціна вказана за 1 ніготь',
    price: '300',
    },
    {
    type: 'Манікюр',
    name: 'Видалення стрижневого мозоля',
    description: 'Ціна вказана за 1 мозоль',
    price: '200',
    },
    

];

export default manicureTopMasterPrices;