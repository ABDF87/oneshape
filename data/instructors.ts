interface Instructors {
  name: string;
  rank: string;
  experience: string;
  description: string;
  photo: string;
}

const instructors: Instructors[] = [
  {
    name: 'Тетяна Склема',
    rank: 'майстер-інструктор з масажу',
    experience: 'Досвід: 5 років',
    description:
      'Досвідчений майстер-інструктор збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
    photo: '/photos/leg-massage.jpg',
  },
  {
    name: 'Анастасія',
    rank: 'майстер-інструктор з манікюру',
    experience: 'Досвід: 3 роки',
    description:
      'Досвідчений майстер-інструктор збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
    photo: '/photos/training-landing-2.jpg',
  },
];

export default instructors;
