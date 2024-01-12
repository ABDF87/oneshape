interface ManicureCoursesData {
  courses: {
    title: string;
    subTitle: string;
    descriptionTitle: string;
    descriptionOptions: string[];
    backgroundImage: string;
    price: string;
    comment?: string;
  }[];
  instructor: {
    name: string;
    qualification: string;
    experience: string;
    description: string;
    image: string;
  };
  feedbacks: {
    name: string;
    feedback: string;
  }[];
  details: {
    friquency: string;
    friquencyComment?: string;
    duration: string;
    time: string;
    certificate?: string;
    groupInfo?: string;
    groupInfoComment?: string;
  };
}

const ManicureCoursesData: ManicureCoursesData[] = [
  {
    courses: [
      {
        title: 'Курс манікюру',
        subTitle: 'авторський курс',
        descriptionTitle:
          'Опануйте 4 техніки для отримання результату після першої процедури:',
        descriptionOptions: [
          'Ручна пластика обличчя(бліферопластичні техніки на підняття верхнього повіка)',
          'Інтероральні техніки',
          'Фасціальні техніки',
          'М`які мануальні техніки',
        ],
        backgroundImage: '/photos/manicure-landing-bezh.jpg',
        price: 'Ціна: 4000 грн',
      },
      {
        title: 'Курс педикюру',
        subTitle: 'базовий курс',
        descriptionTitle:
          'Навчитесь правільній діагностиці клієнтів та лімфодренажним технікам:',
        descriptionOptions: [
          'Діагностика тестування',
          'Корекція тазу',
          'Базові техніки лімфодренажного масажу',
          'Целлюліт від А до Я',
          'Зрозумієте як ліквідувати порушення та проблеми в роботі лімфатичної системи',
          'Складання програми корекції фігури',
        ],
        backgroundImage: '/photos/nails-landing.jpg',
        price: 'Ціна: 4000 грн',
      },
    ],
    instructor: {
      name: 'Анастасія',
      qualification:
        'Косметолог, масажист, майстер мануальної терапії, тренер, автор курсів',
      experience: 'Досвід роботи 10 років',
      description:
        'Косметолог, масажист, майстер мануальної терапії, тренер, автор курсів',
      image: '/photos/training-landing-2.jpg',
    },
    feedbacks: [
      {
        name: 'Ірина',
        feedback:
          'Дуже задоволена курсом. Все було доступно, зрозуміло, цікаво. Тетяна - чудовий тренер, дуже відповідальна, завжди готова допомогти, пояснити, підказати. Дякую за навчання!',
      },
      {
        name: 'Ірина',
        feedback:
          'Дуже задоволена курсом. Все було доступно, зрозуміло, цікаво. Тетяна - чудовий тренер, дуже відповідальна, завжди готова допомогти, пояснити, підказати. Дякую за навчання!',
      },
      {
        name: 'Ірина',
        feedback:
          'Дуже задоволена курсом. Все було доступно, зрозуміло, цікаво. Тетяна - чудовий тренер, дуже відповідальна, завжди готова допомогти, пояснити, підказати. Дякую за навчання!',
      },
    ],
    details: {
      friquency: '2 рази на місяць',
      friquencyComment: 'по вихідних',
      duration: '2 дні',
      time: '10:00 - 17:00',
      certificate: 'Отримуйте сертифікат',
      groupInfo: 'Навчайтесь індивідуально ',
      groupInfoComment: 'або в групі',
    },
  },
];

export default ManicureCoursesData;
