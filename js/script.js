import check from '../assets/check.svg'
import star from '../assets/star.svg'
import sushi12 from '../assets/sushi-12.png'
import sushi11 from '../assets/sushi-11.png'
import sushi10 from '../assets/sushi-10.png'

import AOS from "aos";
import "aos/dist/aos.css";

AOS.init({
    duration: 1000,
    offset: 100,
});

const trendingSushis = [
    'Make Sushi',
    'Nigiri Sushi',
    'Oshizushi',
    'Temaki Sushi',
    'Uramaki Sushi',
    'Inari Sushi'
];

const trendingDrinks = [
    "Oruncha",
    "Ofukucha",
    "Sakura Tea",
    "Kombu-cha",
    "Aojiru",
    "Mugicha",
]

const cards = [
    {
        imgSrc: sushi12,
        alt: "sushi-12",
        title: "Sashimi Sushi",
        rating: "4.9",
        price: "$21.00"
    },
    {
        imgSrc: sushi11,
        alt: "sushi-11",
        title: "Ururmaki Sushi",
        rating: "5.0",
        price: "$21.00",
        active: true
    },
    {
        imgSrc: sushi10,
        alt: "sushi-10",
        title: "Hakata Ramen",
        rating: "4.7",
        price: "$21.00"
    }
];