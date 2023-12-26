
interface ManicureService {
    name: string;
    description: string;
    duration: string;
    price: string;
    image: string;
}

const manicureServices:ManicureService[] = [
    {
        name: 'Манікюр',
        description: 'Корекція форми нігтів, обрізання кутикули, покриття лаком',
        duration: '60 хв.',
        price: '250',
        image: '/photos/manicure-landing-bezh.jpg',

    },
    {
        name: 'Педікюр',
        description: 'Корекція форми нігтів, обрізання кутикули, покриття гель-лаком',
        duration: '90 хв.',
        price: '350',
        image: '/photos/manicure/pedicureBG.jpeg',

    },
    {
        name: 'Подологічні послуги',
        description: 'Корекція форми нігтів, обрізання кутикули, покриття гель-лаком',
        duration: '90 хв.',
        price: '350',
        image: '/photos/manicure/manicure-ba-heel-a.jpg',
    },
    {
        name: 'Парафіно терапія',
        description: 'Корекція форми нігтів, обрізання кутикули, покриття гель-лаком',
        duration: '90 хв.',
        price: '350',
        image: '/photos/manicure/parafin-therapy-2.webp',
    }
]

export default manicureServices;