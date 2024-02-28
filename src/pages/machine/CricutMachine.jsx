import { Image } from "@mantine/core"
import SmallIntro from "../../components/SmallIntro"
import KeyPoints from "../../components/KeyPoints";


import Big_Machine from '../../../public/img/circut-machine/big-circut-image.jpg'
import machine_1 from '../../../public/img/circut-machine/cricut-machine-1.jpg'
import machine_2 from '../../../public/img/circut-machine/circut-machine-2.jpg'
import machine_3 from '../../../public/img/circut-machine/cricut-machine-3.jpg'
import ProductShowCase from "../../components/ProductShowCase";


const keyPoints = [
    {
        title: "Precision Cutting Excellence",
        description: "Experience unparalleled precision with the Cricut Machine, ensuring every cut is immaculate and every detail is captured flawlessly, making it an ideal choice for meticulous crafters."
    },
    {
        title: "Versatile Crafting Possibilities",
        description: "The Cricut Machine opens up a world of crafting possibilities, accommodating a wide range of materials from paper and vinyl to fabric and beyond, enabling you to diversify your creative projects effortlessly."
    },
    {
        title: "User-Friendly Interface",
        description: "Enjoy a seamless crafting experience with the user-friendly interface of the Cricut Machine. Whether you're a beginner or an experienced crafter, its intuitive design ensures a smooth and enjoyable creative process."
    },
    {
        title: "Smart Technology Integration",
        description: "Harness the power of smart technology with the Cricut Machine, allowing for easy integration with Cricut Smart Accessories. This synergy enhances efficiency, making your crafting sessions more productive and enjoyable."
    },
    {
        title: "Time-Saving Efficiency",
        description: "Boost your productivity with the Cricut Machine's efficient operation. Time-saving features, such as adaptive Smart Mats and automatic material settings, streamline the crafting process, giving you more time to focus on your creativity."
    },
    {
        title: "Endless Design Flexibility",
        description: "Unleash your imagination with the Cricut Machine's design flexibility. Whether you're creating intricate paper crafts, personalized vinyl decals, or fabric projects, the machine adapts to your unique vision, offering limitless design options."
    },
    {
        title: "Universal Connectivity",
        description: "Enjoy universal compatibility with the Cricut Machine, seamlessly connecting with various devices for easy design uploads and updates. This ensures you stay at the forefront of crafting technology, enhancing your overall crafting experience."
    },
    {
        title: "Innovative Smart Materials",
        description: "Explore a world of innovation with the Cricut Machine's compatibility with Smart Materials. From Smart Vinyl to Smart Iron-On, these cutting-edge materials are designed to optimize your machine's capabilities, providing endless crafting potential."
    },
    {
        title: "Reliability and Durability",
        description: "Craft with confidence as the Cricut Machine is built for durability and reliability. Its robust construction ensures longevity, making it a trusted companion on your crafting journey."
    },
    {
        title: "SEO Keyword Bonus",
        description: "Elevate your SEO presence with the Cricut Machine, ensuring that your crafting projects are synonymous with precision, versatility, efficiency, and innovation. Craft with the best, craft with Cricut Machine, and let your creations shine in the digital crafting landscape."
    }
];

const productArray = [
    {
        image: machine_1,
        title: 'Cricut Joy™ + Smart Iron-On Bundle',
        description: 'Elevate your crafting with the Cricut Joy™ + Smart Iron-On Bundle, a perfect synergy of cutting-edge technology and versatile iron-on materials. Unleash your creativity and transform fabrics into personalized masterpieces with this exclusive bundle.'
    },
    {
        image: machine_2,
        title: 'Cricut Joy™ + Essentials Bundle + Cricut Access™ Subscription',
        description: 'Experience the ultimate crafting journey with the Cricut Joy™ + Essentials Bundle, enriched further by a Cricut Access™ Subscription. This all-inclusive package provides essential tools and access to a treasure trove of creative content, ensuring every project is a masterpiece.'
    },
    {
        image: machine_3,
        title: 'Cricut Joy™ + Insert Card Bundle',
        description: 'Craft delightful and personalized cards effortlessly with the Cricut Joy™ + Insert Card Bundle. Elevate your card-making experience as this bundle brings together the compact Cricut Joy™ machine and a collection of vibrant insert cards, making each card a work of art.'}
];




function CricutMachine() {
    return (
        <>
            <SmallIntro title={'Unlock Your Creative Potential with the Cricut Machine: Crafting Excellence at Your Fingertips'} description={"Elevate your crafting experience with the Cricut Machine, your ultimate companion in the world of DIY and artistic expression. Seamlessly blending precision and versatility, this cutting-edge Cricut Machine empowers you to bring your imaginative designs to life effortlessly. Explore a universe of possibilities with Cricut's innovative technology, making every project a masterpiece. Invest in the Cricut Machine for a crafting journey where creativity knows no bounds. Explore, create, and let the Cricut Machine be your muse in the art of limitless possibilities."} />

            <Image src={Big_Machine} maw={700} mx={'auto'} />

            <KeyPoints keyPoints={keyPoints} />
            <ProductShowCase productArray={productArray} />

        </>
    )
}

export default CricutMachine
