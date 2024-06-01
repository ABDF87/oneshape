interface MassageCoursesData {
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

const massageCoursesData: MassageCoursesData[] = [
  {
    courses: [
      {
        title: 'ПЛАСТИКА ОБЛИЧЧЯ',
        subTitle: 'авторський курс',
        descriptionTitle:
          'Опануйте 4 техніки для отримання результату після першої процедури:',
        descriptionOptions: [
          'Ручна пластика обличчя(бліферопластичні техніки на підняття верхнього повіка)',
          'Інтероральні техніки',
          'Фасціальні техніки',
          'М`які мануальні техніки',
        ],
        backgroundImage: '/photos/massage-neck.jpg',
        price: 'Ціна: 5000 грн',
        comment:
          '* На навчанні ми відразу працюємо на моделях та один на одному ',
      },
      {
        title: 'ЛІМФОДРЕНАЖНИЙ МОДЕЛЮЮЧИЙ ДЕТОКС-МАСАЖ',
        subTitle: 'авторський курс',
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
        backgroundImage: '/photos/anticellu-massage.jpg',
        price: 'Ціна: 6000 грн',
      },
    ],
    instructor: {
      name: 'Тетяна Склема',
      qualification: 'Майстер-інструтор з масажу',
      experience: 'Досвід роботи 10 років',
      description: ` "Приєднуйтесь до мене, щоб розкрити свій потенціал у
        масажній терапії під моїм керівництвом. Розширте свої знання
        в світі дотику та станьте справжнім професіоналом масажу
        разом зі мною."`,
      image: '/photos/leg-massage.jpg',
    },
    feedbacks: [
      {
        name: 'Ірина',
        feedback:
          'Дуже задоволена курсом. Все було доступно, зрозуміло, цікаво. Тетяна - чудовий тренер, дуже відповідальна, завжди готова допомогти, пояснити, підказати. Дякую за навчання!',
      },
      {
        name: 'Марина',
        feedback:
          'Дуже задоволена курсом. Все було доступно, зрозуміло, цікаво. Тетяна - чудовий тренер, дуже відповідальна, завжди готова допомогти, пояснити, підказати. Дякую за навчання!',
      },
      {
        name: 'Марина',
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

export default massageCoursesData;
