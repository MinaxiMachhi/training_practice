import redmi from '@/assets/redmi.jpeg'
import vivo from '@/assets/vivo.jpg'
import oppo from '@/assets/oppo.jpeg'
import iphone from '@/assets/iphone.jpeg'

import apple from '@/assets/apple.jpg'
import dell from '@/assets/dell.jpg'
import hp from '@/assets/hp.png'
import lenovo from '@/assets/lenovo.jpg'

import titan from '@/assets/titan.jpg'
import fastrack from '@/assets/fastrack.webp'
import rolex from '@/assets/rolex.webp'
import puma from '@/assets/puma.jpg'

import nike from '@/assets/nike.jpeg'
import adidas from '@/assets/adidas.jpeg'
import skechers from '@/assets/sketchers.jpeg'
import bata from '@/assets/bata.jpg'


const items = [
    {
        id: 1,
        name: 'phone',
        phones: [
            {
                id: 1,
                name: "Redmi",
                image: redmi,
                quantity: '0',
                price: '12,999'
            },
            {
                id: 2,
                name: "Vivo",
                image: vivo,
                quantity: '0',
                price: '11,999'
            },
            {
                id: 3,
                name: "Oppo",
                image: oppo,
                quantity: '0',
                price: '10,999'
            },
            {
                id: 4,
                name: "Iphone",
                image: iphone,
                quantity: '0',
                price: '1,02,999'
            },
        ]
    },
    {
        id: 2,
        name: 'laptop',
        laptops: [
            {
                id: 1,
                name: "Apple",
                image: apple,
                quantity: '0',
                price: '85,999'
            },
            {
                id: 2,
                name: "Dell",
                image: dell,
                quantity: '0',
                price: '45,000'
            },
            {
                id: 3,
                name: "hp",
                image: hp,
                quantity: '0',
                price: '40,999'
            },
            {
                id: 4,
                name: "Lenovo",
                image: lenovo,
                quantity: '0',
                price: '38,999'

            },
        ]
    },
    {
        id: 3,
        name: 'Watch',
        Watches: [
            {
                id: 1,
                name: "Titan",
                image: titan,
                quantity: '0',
                price: '2100'
            },
            {
                id: 2,
                name: "Rolex",
                image: rolex,
                quantity: '0',
                price: '2500'
            },
            {
                id: 3,
                name: "Fastrack",
                image: fastrack,
                quantity: '0',
                price: '1800'
            },
            {
                id: 4,
                name: "Puma",
                image: puma,
                quantity: '0',
                price: '1900'
            },
        ]
    },
    {
        id: 4,
        name: 'Shoes',
        shoes: [
            {
                id: 1,
                name: "Nike",
                image: nike,
            },
            {
                id: 2,
                name: "Adidas",
                image: adidas,
            },
            {
                id: 3,
                name: "Skechers",
                image: skechers,
            },
            {
                id: 4,
                name: "Bata",
                image: bata,
            },
        ]
    },
]

export default {
    getItems() {
        return items;
    }
}
