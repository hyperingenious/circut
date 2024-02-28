import ProductShowCase from "../../components/ProductShowCase"
import SmallIntro from "../../components/SmallIntro"

import cutting_machine_1 from '../../../public/img/cricut-cutting-machine/cutting_machine_1.png'
import cutting_machine_2 from '../../../public/img/cricut-cutting-machine/cutting_machine_2.jpg'
import cutting_machine_3 from '../../../public/img/cricut-cutting-machine/cutting_machine_3.jpg'
import cutting_machine_4 from '../../../public/img/cricut-cutting-machine/cricut_cutting_machine_4.png'
import cutting_machine_5 from '../../../public/img/cricut-cutting-machine/cutting_machine_5.jpg'
import cutting_machine_6 from '../../../public/img/cricut-cutting-machine/cutting_machine_6.jpg'
import cutting_machine_7 from '../../../public/img/cricut-cutting-machine/cutting_machine_7.png'
import cutting_machine_8 from '../../../public/img/cricut-cutting-machine/cutting_machine_8.jpg'
import cutting_machine_9 from '../../../public/img/cricut-cutting-machine/cutting_machine_9.jpg'

function CricutCuttingMachine() {
    const productArray = [
        {
            image: cutting_machine_1,
            title: 'Cricut Maker® 3',
            description: "Unleash your creative potential with the Cricut Maker® 3. This cutting-edge machine redefines crafting, offering precision, versatility, and the power to bring your imaginative designs to life. Elevate your crafting experience with the ultimate tool for makers."
        },
        {
            image: cutting_machine_2,
            title: 'Cricut Maker® 3 + Essentials Bundle + Cricut Access™ Subscription',
            description: "Take your creativity to new heights with the Cricut Maker® 3 Essentials Bundle, including a Cricut Access™ Subscription. This comprehensive package equips you with essential tools and exclusive content, ensuring every project is infused with innovation and limitless possibilities."
        },
        {
            image: cutting_machine_3,
            title: 'Cricut Maker® 3 + Essentials Bundle',
            description: "Immerse yourself in the world of crafting excellence with the Cricut Maker® 3 Essentials Bundle. This curated collection of tools enhances your creative endeavors, making every cut, score, and project a seamless and delightful experience."
        },
        {
            image: cutting_machine_4,
            title: 'Cricut Joy Xtra™',
            description: "Meet the compact powerhouse – Cricut Joy Xtra™. This versatile cutting machine brings joy to your crafting with its ease of use and portability. Whether you're a beginner or a seasoned crafter, the Cricut Joy Xtra™ is your go-to companion for quick and delightful projects."
        },
        {
            image: cutting_machine_5,
            title: 'Cricut Joy Xtra™ + Everything Bundle + Cricut Access™ Subscription',
            description: "Elevate your crafting game with the Cricut Joy Xtra™ Everything Bundle, featuring a Cricut Access™ Subscription. This all-inclusive package provides you with everything you need for endless creative possibilities, making each project a joyous expression of your unique style."
        },
        {
            image: cutting_machine_6,
            title: 'Cricut Joy Xtra™ + Everything Bundle',
            description: "Unleash your creativity with the Cricut Joy Xtra™ Everything Bundle. This curated collection of accessories and tools complements your Cricut Joy, making it even easier to personalize and create joyous moments through your projects."
        },
        {
            image: cutting_machine_7,
            title: 'Cricut Explore® 3',
            description: "Explore new dimensions of crafting with the Cricut Explore® 3. This cutting machine combines precision and innovation, allowing you to effortlessly bring your design visions to life. Uncover the possibilities and redefine your crafting journey with Cricut Explore® 3."
        },
        {
            image: cutting_machine_8,
            title: 'Cricut Explore® 3 + Essentials Bundle + Cricut Access™ Subscription',
            description: "Elevate your crafting experience with the Cricut Explore® 3 Essentials Bundle, featuring a Cricut Access™ Subscription. This comprehensive package provides you with essential tools, creative content, and the advanced capabilities of Cricut Explore® 3 for a truly immersive crafting journey."
        },
        {
            image: cutting_machine_9,
            title: 'Cricut Explore® 3 + Essentials Bundle',
            description: "Immerse yourself in the world of crafting excellence with the Cricut Explore® 3 Essentials Bundle. This thoughtfully curated collection enhances your creative process, ensuring that each project is a masterpiece of precision and innovation."
        },
    ];
    
    return (
        <>
            <SmallIntro title={'Cricut Cutting Machine: Crafting Limitless Possibilities'} description={"Step into a world of creativity with the Cricut Cutting Machine, where precision meets imagination. Unleash your artistic potential and bring your designs to life effortlessly. Whether you're a seasoned crafter or just beginning your creative journey, the Cricut Cutting Machine empowers you to cut, score, and create with unparalleled precision. Explore the boundless possibilities of personalized crafts, intricate designs, and DIY projects – all at the touch of a button. Elevate your crafting experience with the tool that turns your visions into reality, one cut at a time."} />
            <ProductShowCase productArray={productArray}/>
        </>
    )
}

export default CricutCuttingMachine
