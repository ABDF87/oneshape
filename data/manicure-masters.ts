interface ManiureMaster {
    name: string;
    rank: string;
    experience: string;
    description: string;
    photo: string;
  }
  
  const manicureMasters: ManiureMaster[] = [
    {
      name: 'Анастасія',
      rank: 'топ-майстер',
      experience: 'Досвід: 5 років',
      description:
        'Досвідчений майстер манікюру збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
      photo: '/photos/training-landing-3.jpg',
    },
    {
      name: 'Ірина',
      rank: 'майстер',
      experience: 'Досвід: 3 роки',
      description:
        'Досвідчений майстер манікюру збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
      photo: '/photos/training-landing-3.jpg',
    },
    {
      name: 'Олена',
      rank: 'майстер',
      experience: 'Досвід: 3 роки',
      description:
        'Досвідчений майстер манікюру збагатить ваше відчуття розслаблення. З роками практики він принесе вам не тільки вміння зняти напругу, а й внесе унікальний погляд на ваше благополуччя.',
      photo: '/photos/training-landing-3.jpg',
    },
  ];
  
  export default manicureMasters;
  