interface MassageMaster {
  name: string;
  rank: string;
  experience: string;
  description: string;
  photo: string;
}

const massageMasters: MassageMaster[] = [
  {
    name: 'Тетяна',
    rank: 'топ-майстер',
    experience: 'Досвід: 5 років',
    description:
      'Досвідчений майстер масажу збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
    photo: '/photos/massage-landing.jpg',
  },
  {
    name: 'Ірина',
    rank: 'майстер',
    experience: 'Досвід: 3 роки',
    description:
      'Досвідчений майстер масажу збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
    photo: '/photos/massage-landing.jpg',
  },
  {
    name: 'Олена',
    rank: 'майстер',
    experience: 'Досвід: 3 роки',
    description:
      'Досвідчений майстер масажу збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
    photo: '/photos/massage-landing.jpg',
  },
];

export default massageMasters;
