import ProductShowCase from "../../components/ProductShowCase"
import SmallIntro from "../../components/SmallIntro"

import blade_1 from '../../../public/img/cricut-blades/blade-1.jpg';
import blade_2 from '../../../public/img/cricut-blades/blade-2.jpg';
import blade_3 from '../../../public/img/cricut-blades/balde-3.jpg';
import blade_4 from '../../../public/img/cricut-blades/blade-4.jpg';
import blade_5 from '../../../public/img/cricut-blades/blade-5.jpg';
import blade_6 from '../../../public/img/cricut-blades/blade-6.jpg';
import blade_7 from '../../../public/img/cricut-blades/blade-7.jpg';
import blade_8 from '../../../public/img/cricut-blades/blade-8.jpg';
import blade_9 from '../../../public/img/cricut-blades/blade-9.jpg';
import KeyPoints from "../../components/KeyPoints";

function CricutBlades() {
    const productArray = [
        {
            image: blade_1,
            title: 'Premium Fine-Point Replacement Blades (10 ct.)',
            description: 'Achieve unparalleled precision in your crafting projects with our Premium Fine-Point Replacement Blades. This set of 10 high-quality blades ensures clean and intricate cuts, allowing you to unlock your creativity with ease. Perfect for a variety of materials, these blades are a must-have for every dedicated crafter.'
        },
        {
            image: blade_2,
            title: 'Deep-Point Blade + Housing',
            description: 'Take your cutting capabilities to the next level with the Deep-Point Blade + Housing. Designed for thicker materials, this blade effortlessly cuts through a variety of mediums, making it ideal for projects that demand durability. Elevate your crafting experience and achieve precise results with this versatile tool.'
        },
        {
            image: blade_3,
            title: 'Knife Blade + Drive Housing',
            description: 'Unleash your creativity with the Knife Blade + Drive Housing. Craft intricate designs on a range of materials, from chipboard to leather, with ease and precision. This powerful combination is perfect for makers who seek to create unique and detailed projects that stand out.'
        },
        {
            image: blade_4,
            title: 'Foil Transfer Kit',
            description: 'Add a touch of elegance to your projects with the Foil Transfer Kit. Elevate your designs by incorporating metallic accents effortlessly. This kit is perfect for creating stunning foil effects on a variety of materials, adding a touch of sophistication to your crafting endeavors.'
        },
        {
            image: blade_5,
            title: 'Engraving Tip + QuickSwap™ Housing',
            description: 'Personalize your creations with the Engraving Tip + QuickSwap™ Housing. This versatile tool allows you to add intricate and detailed engravings to a wide range of materials. Elevate your crafting projects with the precision and sophistication that this engraving tip provides.'
        },
        {
            image: blade_6,
            title: 'Rotary Blade + Drive Housing',
            description: 'Experience the ease of cutting through fabrics with the Rotary Blade + Drive Housing. This tool is specially designed for fabric projects, ensuring clean and precise cuts every time. Make your fabric crafting projects a breeze with this essential accessory.'
        },
        {
            image: blade_7,
            title: 'Scoring Wheel Tip',
            description: 'Achieve professional-looking folds and creases with the Scoring Wheel Tip. Perfect for creating crisp lines on paper, cardstock, and more, this accessory is a must-have for anyone looking to add a polished finish to their projects. Enhance your paper crafting experience with this precision scoring tool.'
        },
        {
            image: blade_8,
            title: 'Scoring Stylus',
            description: 'Upgrade your scoring capabilities with the Scoring Stylus. This tool is perfect for creating accurate score lines on paper and other materials, ensuring flawless folds for your projects. Add this scoring stylus to your crafting toolkit and take your paper crafting to new heights.'
        },
        {
            image: blade_9,
            title: 'Premium Fine-Point Replacement Blade',
            description: 'Ensure consistently sharp cuts with the Premium Fine-Point Replacement Blade. Ideal for detailed and intricate projects, this blade delivers precision and reliability. Keep your crafting projects on track with this essential replacement blade, designed for long-lasting performance.'
        }
    ];

    const keyPoints  = [
        {
            title: 'Precision Cutting',
            description: 'Experience precision cutting with Cricut Blades, ensuring clean and accurate cuts for a wide range of crafting materials.'
        },
        {
            title: 'Versatility',
            description: 'Explore the versatility of Cricut Blades, suitable for various projects and materials, from paper and cardstock to fabrics, leather, and beyond.'
        },
        {
            title: 'Craftsmanship',
            description: 'Craft with confidence using high-quality blades that deliver consistent and professional results, elevating the overall quality of your creations.'
        },
        {
            title: 'Specialized Options',
            description: 'Choose from a variety of specialized blades such as Deep-Point, Knife, Rotary, and Engraving Blades, each tailored to specific crafting needs.'
        },
        {
            title: 'Durability',
            description: 'Designed for durability, Cricut Blades are built to withstand the demands of different materials, ensuring longevity and reliable performance.'
        },
        {
            title: 'Compatibility',
            description: 'Enjoy seamless integration with Cricut machines, offering easy swapping and compatibility with QuickSwap™ housings for efficient crafting.'
        },
        {
            title: 'Foil Transfer Capability',
            description: 'Explore the world of foiling with the Foil Transfer Kit, adding a touch of elegance and sophistication to your projects.'
        },
        {
            title: 'Scoring Precision',
            description: 'Achieve professional-looking folds and creases with Scoring Wheel Tips and Scoring Stylus, enhancing the overall finish of your paper crafting projects.'
        },
        {
            title: 'Easy Replacement',
            description: 'Keep your projects on track with the convenience of easy-to-replace Premium Fine-Point Replacement Blades, ensuring uninterrupted crafting sessions.'
        },
        {
            title: 'Enhanced Creativity',
            description: 'Cricut Blades empower creators to unleash their creativity, allowing for intricate designs, detailed engravings, and personalized touches in every project.'
        }
    ];


    return (
        <>
            <SmallIntro title={'Unlock Your Creativity with Precision: Explore the World of Cricut Blades'} description={'Dive into the endless possibilities of crafting with Cricut Blades! Our collection of high-quality, versatile Cricut Blades is designed to cater to all your cutting needs, ensuring precision and creativity in every project. Discover the perfect blade for your unique crafting endeavors, from intricate paper designs to durable fabric creations. Explore the Cricut Blades range today and elevate your crafting experience to new heights. With Cricut Blades, the possibilities are limitless, and your imagination is the only constraint!'} />
            <ProductShowCase productArray={productArray} />
            <KeyPoints keyPoints={keyPoints} />
        </>
    )
}

export default CricutBlades
