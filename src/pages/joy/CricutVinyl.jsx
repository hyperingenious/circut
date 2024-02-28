import { Stack } from "@mantine/core";
import SmallIntro from "../../components/SmallIntro";

import vinyl_1 from '../../../public/img/cricut-vinyl/vinyl-1.jpg'
import vinyl_2 from '../../../public/img/cricut-vinyl/vinyl-2.jpg'
import vinyl_3 from '../../../public/img/cricut-vinyl/vinyl-3.jpg'
import vinyl_4 from '../../../public/img/cricut-vinyl/vinyl-4.jpg'
import vinyl_5 from '../../../public/img/cricut-vinyl/vinyl-5.jpg'
import vinyl_6 from '../../../public/img/cricut-vinyl/vinyl-6.png'
import vinyl_7 from '../../../public/img/cricut-vinyl/vinyl-7.jpg'
import vinyl_8 from '../../../public/img/cricut-vinyl/vinyl-8.jpg'
import vinyl_9 from '../../../public/img/cricut-vinyl/vinyl-9.png'
import vinyl_10 from '../../../public/img/cricut-vinyl/vinyl-10.jpg'
import vinyl_11 from '../../../public/img/cricut-vinyl/vinyl-11.png'
import vinyl_12 from '../../../public/img/cricut-vinyl/vinyl-12.jpg'
import ProductShowCase from "../../components/ProductShowCase";


const productArray = [
    {
        image: vinyl_1,
        title: 'Cricut Joy™ Smart Label™ Writable Vinyl – Removable',
        description: 'Enhance your labeling and organization game with the Cricut Joy™ Smart Label™ Writable Vinyl. This removable vinyl offers convenience with easy customization and a clean removal process. Perfect for creating temporary labels for containers, folders, or any other organizational needs.'
    },
    {
        image: vinyl_2,
        title: 'Cricut Joy™ Smart Label™ Writable Vinyl – Removable',
        description: 'Elevate your labeling projects with the Cricut Joy™ Smart Label™ Writable Vinyl. The removable feature provides flexibility while the smart technology ensures precise cuts. Create personalized labels for various items, knowing you can change them whenever you need a new look.'
    },
    {
        image: vinyl_3,
        title: 'Smart Label™ Writable Vinyl – Removable (3 ft)',
        description: 'Unleash your creativity with the Smart Label™ Writable Vinyl. This 3 ft roll of removable vinyl is ideal for crafting projects that require a temporary touch. Use it to label, decorate, and customize with ease, knowing you can update or remove it when needed.'
    },
    {
        image: vinyl_4,
        title: 'Smart Label™ Writable Vinyl – Permanent (3 ft)',
        description: 'Create lasting impressions with the Smart Label™ Writable Vinyl in a permanent variant. This 3 ft roll ensures a durable and long-lasting solution for your labeling and decorating needs. Make your mark on items that require a more enduring personal touch.'
    },
    {
        image: vinyl_5,
        title: 'Premium Vinyl™ - Permanent',
        description: "Experience the premium quality of Cricut's Permanent Premium Vinyl™. This versatile material adheres permanently to a variety of surfaces, making it perfect for creating lasting decals, stickers, and personalized items. Let your imagination run wild with this high-quality permanent vinyl."
    },
    {
        image: vinyl_6,
        title: 'Printable Waterproof Sticker Set - US Letter (6 ct)',
        description: 'Make a splash with your creations using the Printable Waterproof Sticker Set. This set of six US Letter-sized sheets allows you to print your designs and turn them into durable, waterproof stickers. Ideal for adding a personalized touch to water bottles, laptops, and more.'
    },
    {
        image: vinyl_7,
        title: 'Premium Vinyl™ - Removable',
        description: "Enjoy the flexibility of removable customization with Cricut's Premium Vinyl™. This removable vinyl offers the high quality you expect from Cricut with the added bonus of easy removal. Perfect for temporary decals, labels, and other projects where you want the option to change your design."
    },
    {
        image: vinyl_8,
        title: 'Smart Vinyl™ – Permanent (3 ft)',
        description: 'Experience the convenience of Smart Vinyl™ in a permanent variant. This 3 ft roll ensures precise cuts and easy application for your Cricut Joy™ machine. Create permanent decals and labels with confidence, knowing your designs will endure and leave a lasting impression.'
    },
    {
        image: vinyl_9,
        title: 'Printable Waterproof Holographic Sticker Set - US Letter (5 ct)',
        description: 'Add a touch of magic to your creations with the Printable Waterproof Holographic Sticker Set. This set of five US Letter-sized sheets allows you to print vibrant and holographic designs that are not only eye-catching but also waterproof. Elevate your sticker game with this unique set.'
    },
    {
        image: vinyl_10,
        title: 'Vinyl, Everything Sampler - Permanent (45 ct)',
        description: 'Unleash your creativity with the Vinyl, Everything Sampler. This permanent vinyl sampler includes 45 sheets in a variety of colors, allowing you to explore and experiment with different designs. Perfect for those who want to try out a wide range of permanent vinyl options.'
    },
    {
        image: vinyl_11,
        title: 'Printable Vinyl - US Letter (12 ct)',
        description: 'Turn your printer into a creative powerhouse with the Printable Vinyl set. This US Letter-sized set includes 12 sheets, allowing you to print and cut custom designs for a variety of projects. Create personalized stickers, labels, and decals with ease.'
    },
    {
        image: vinyl_12,
        title: 'Transfer Tape (75 ft)',
        description: 'Facilitate smooth transfers of your vinyl designs with the Transfer Tape. This 75 ft roll ensures you have ample tape for various projects. Make the application of your vinyl creations a breeze and achieve professional-looking results with this essential crafting tool.'
    }
];


function CricutVinyl() {
    return (
        <Stack maw={850} mx={'auto'} my={'xl'} px={'md'} justify="center">
            <SmallIntro title={"Cricut Joy Vinyl: Simplifying DIY Projects with Precision and Ease"} description={"Explore the world of effortless crafting with the Cricut Joy Vinyl, a compact cutting machine designed to bring your creative visions to life. This innovative device is perfect for vinyl enthusiasts, offering a seamless and user-friendly experience for personalized DIY projects. With its compact size and user-friendly interface, the Cricut Joy Vinyl is your go-to tool for creating custom decals, stickers, labels, and more. Precision cutting and easy customization make it a versatile companion for both beginners and seasoned crafters. Unleash your creativity and transform ordinary items into extraordinary creations with the Cricut Joy Vinyl – where simplicity meets precision in the world of vinyl crafting."} />

            <ProductShowCase productArray={productArray} />
        </Stack>

    )
}

export default CricutVinyl
