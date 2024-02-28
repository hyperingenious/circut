import { Stack } from "@mantine/core"
import SmallIntro from "../../components/SmallIntro"

import cjv_1 from '../../../public/img/cricut-joy-vinyl/cjv-1.png'
import cjv_2 from '../../../public/img/cricut-joy-vinyl/cjv-2.png'
import cjv_3 from '../../../public/img/cricut-joy-vinyl/cjv-3.png'
import cjv_4 from '../../../public/img/cricut-joy-vinyl/cjv-4.jpg'
import cjv_5 from '../../../public/img/cricut-joy-vinyl/cjv-5.jpg'
import cjv_6 from '../../../public/img/cricut-joy-vinyl/cjv-6.jpg'
import cjv_7 from '../../../public/img/cricut-joy-vinyl/cjv-7.jpg'
import cjv_8 from '../../../public/img/cricut-joy-vinyl/cjv-8.jpg'
import cjv_9 from '../../../public/img/cricut-joy-vinyl/cjv-9.jpg'
import cjv_10 from '../../../public/img/cricut-joy-vinyl/cjv-10.jpg'
import cjv_11 from '../../../public/img/cricut-joy-vinyl/cjv-11.png'
import cjv_12 from '../../../public/img/cricut-joy-vinyl/cjv-12.png'
import cjv_13 from '../../../public/img/cricut-joy-vinyl/cjv-13.jpg'
import cjv_14 from '../../../public/img/cricut-joy-vinyl/cjv-14.jpg'
import cjv_15 from '../../../public/img/cricut-joy-vinyl/cjv-15.png'
import ProductShowCase from "../../components/ProductShowCase"

const productArray = [
    {
        image: cjv_1,
        title: "Heat-Activated, Colour-Changing Vinyl – Permanent",
        description: "Experience the magic of color transformation with our Heat-Activated, Colour-Changing Vinyl. This permanent vinyl adds an enchanting touch to your projects, revealing vibrant hues when exposed to heat. Create captivating designs that evolve with temperature changes, making your crafts truly one-of-a-kind."
    },
    {
        image: cjv_2,
        title: "Cold-Activated, Colour-Changing Vinyl – Permanent",
        description: "Bring a cool and dynamic element to your creations with our Cold-Activated, Colour-Changing Vinyl. This permanent vinyl reacts to cold temperatures, unveiling a spectrum of colors. Craft unique and visually stunning designs that evolve with the environment, adding a mesmerizing touch to your projects."
    },
    {
        image: cjv_3,
        title: "Vinyl Sampler, Skin Tone – Permanent (10 ct)",
        description: "Celebrate diversity and personalize your projects with the Vinyl Sampler, Skin Tone edition. This set of 10 permanent vinyl sheets offers a range of skin tones, allowing you to create inclusive and representative designs. Add a personal touch to your crafts with these versatile skin tone shades."
    },
    {
        image: cjv_4,
        title: "Smart Vinyl™ – Permanent (0.9 m)",
        description: "Elevate your crafting game with Cricut Joy™ Smart Vinyl™ in a permanent variant. This 0.9 m roll provides convenience and precision, making it easy to create long-lasting decals, labels, and more. Experience the joy of effortless customization with this smart and reliable permanent vinyl."
    },
    {
        image: cjv_5,
        title: "Premium Vinyl™ - Permanent",
        description: "Unleash your creativity with the high-quality and durability of Premium Vinyl™ in a permanent variant. This versatile vinyl adheres permanently to a variety of surfaces, ensuring your designs stand the test of time. Create professional-looking decals, labels, and projects with ease."
    },
    {
        image: cjv_6,
        title: "Premium Vinyl™ - Removable",
        description: "Enjoy the flexibility of customization with the Premium Vinyl™ in a removable variant. This high-quality vinyl offers precision cuts and easy removal, making it perfect for temporary decals, labels, and creative projects where you want the option to change your design."
    },
    {
        image: cjv_7,
        title: "Cricut Joy™ Smart Vinyl™ – Permanent Matte",
        description: "Achieve a sleek and matte finish with Cricut Joy™ Smart Vinyl™ in a permanent matte variant. This vinyl offers the convenience of smart cutting technology and a lasting matte appearance. Create sophisticated and timeless designs with this versatile permanent vinyl."
    },
    {
        image: cjv_8,
        title: "Transfer Tape (6.4 m)",
        description: "Facilitate easy and precise transfers with the Cricut Joy™ Transfer Tape. This 6.4 m roll ensures you have ample tape for various projects. Make the application of your vinyl creations a breeze and achieve professional-looking results with this essential crafting tool."
    },
    {
        image: cjv_9,
        title: "Transfer Tape",
        description: "Simplify your crafting process with the Transfer Tape. This essential tool ensures smooth and precise transfers of your vinyl designs. Whether you're a beginner or seasoned crafter, the Transfer Tape makes applying your creations a seamless and professional experience."
    },
    {
        image: cjv_10,
        title: "Premium Vinyl™ - Removable, Powder Blue",
        description: "Add a touch of elegance to your projects with Premium Vinyl™ in a removable variant and a stunning Powder Blue hue. This versatile vinyl allows for easy customization and removal, making it perfect for adding a subtle and sophisticated touch to your creative endeavors."
    },
    {
        image: cjv_11,
        title: "Printable Waterproof Holographic Sticker Set – A4 (5 ct)",
        description: "Elevate your sticker game with the Printable Waterproof Holographic Sticker Set. This set of five A4-sized sheets allows you to print vibrant and holographic designs that are not only eye-catching but also waterproof. Add a touch of magic to your creations with this unique set."
    },
    {
        image: cjv_12,
        title: "Printable Waterproof Sticker Set – A4 (6 ct)",
        description: "Transform your designs into durable and water-resistant stickers with the Printable Waterproof Sticker Set. This set of six A4-sized sheets allows you to print and create custom stickers that withstand various conditions. Express your creativity with confidence, knowing your stickers will endure."
    },
    {
        image: cjv_13,
        title: "Stencil Film, Flexible",
        description: "Explore the world of stenciling with the Flexible Stencil Film. This versatile and flexible film allows you to create custom stencils for a variety of projects. Whether you're adding intricate designs to home decor or personalizing fabric, this stencil film is a must-have for any crafter."
    },
    {
        image: cjv_14,
        title: "Cricut Joy™ Transfer Tape",
        description: "Ensure smooth and precise transfers of your vinyl designs with the Cricut Joy™ Transfer Tape. This essential crafting tool is specifically designed for use with Cricut Joy™, making the application of your creations easy and efficient. Achieve professional-looking results with this reliable transfer tape."
    },
    {
        image: cjv_15,
        title: "Cricut Joy Xtra™ Smart Vinyl™ – Permanent (3 ft)",
        description: "Take your crafting to the next level with Cricut Joy Xtra™ Smart Vinyl™ in a permanent variant. This 3 ft roll ensures you have enough vinyl for various projects, while the smart cutting technology guarantees precision and ease. Elevate your creations with the convenience of Cricut Joy Xtra™."
    }
];


function CricutJoyVinyl() {
    return (
        <Stack maw={850} mx={'auto'} my={'xl'} px={'md'} justify="center">
            <SmallIntro title={"Cricut Joy Vinyl: Effortless Precision for Your Creative Ventures"} description={"Dive into the world of seamless crafting with Cricut Joy Vinyl, a versatile and user-friendly solution for your DIY projects. Whether you're personalizing labels, creating vibrant decals, or adding a unique touch to everyday items, the Cricut Joy Vinyl ensures precision cuts with ease. Unleash your creativity and bring your designs to life effortlessly, making every crafting session a joyous and satisfying experience. Elevate your projects with the reliability and precision of Cricut Joy Vinyl, your go-to companion for all things crafty."} />

            <ProductShowCase productArray={productArray} />

        </Stack>
    )
}

export default CricutJoyVinyl
