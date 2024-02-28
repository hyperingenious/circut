import SmallIntro from "../../components/SmallIntro"
import smart_banner from '../../../public/img/cricutSmartAccessories/smart-banner.jpg'
import smart_banner_2 from '../../../public/img/cricutSmartAccessories/smart-banner-2.jpg'
import Wonder from "../../components/Wonder"

import smart_1 from '../../../public/img/cricutSmartAccessories/smart-1.webp';
import smart_2 from '../../../public/img/cricutSmartAccessories/smart-2.webp';
import smart_3 from '../../../public/img/cricutSmartAccessories/smart-3.webp';
import smart_4 from '../../../public/img/cricutSmartAccessories/samrt-4.webp';
import smart_5 from '../../../public/img/cricutSmartAccessories/smart-5.webp';
import smart_6 from '../../../public/img/cricutSmartAccessories/smart-6.webp';

import ProductShowCase from "../../components/ProductShowCase";
import { Group, Text, Title } from "@mantine/core";


function CricutSmartAccessories() {
    const productArray = [
        {
            image: smart_1
            , title: 'Cricut Joy Smart Vinyl Removable Matte Hydrangeas Sampler 5.5 X 12inch 5Sheets',
            description: 'Elevate your crafts with this 5-sheet set of 5.5 x 12-inch Cricut Joy Smart Vinyl in Removable Matte. Experiment and customize effortlessly with its beautiful matte finish and easy peel-off feature.'
        },
        {
            image: smart_2
            , title: 'Cricut Smart Iron On Holographic Blue 13inch X 3 Ft Maker 3 / Explore 3',
            description: "Unleash creativity with Cricut Smart Iron On in Holographic Blue. Measuring 13 inches by 3 feet, it's perfect for Cricut Maker 3 and Explore 3, adding a dazzling holographic touch to your apparel and accessories."
        },
        {
            image: smart_3
            , title: 'Cricut Smart Iron On Pink 13inch X 3 Ft Maker 3 / Explore 3', description: "Transform fabrics with Cricut Smart Iron On in Pink. Measuring 13 inches by 3 feet, this vibrant material is compatible with Cricut Maker 3 and Explore 3, allowing you to infuse a pop of color into your garments and accessories."
        },
        {
            image: smart_4
            , title: 'Smart Vinyl Permanent Red 13 Inx 12 Ft Explore /Maker', description: "Enhance your projects with Cricut Smart Vinyl in Permanent Red. Measuring 13 inches by 12 feet, this durable material is perfect for use with Cricut Explore and Maker machines. Add a bold and lasting touch to your creations."
        },
        {
            image: smart_5
            , title: 'Smart Vinyl Removable Grass 13 Inx 12 Ft Explore /Maker', description: "Explore endless possibilities with Cricut Smart Vinyl in Removable Grass. Measuring 13 inches by 12 feet, this removable vinyl is designed for use with Cricut Explore and Maker machines. Create and customize with ease, knowing you can change your designs whenever inspiration strikes."
        },
        {
            image: smart_6
            , title: 'Smart Vinyl Removable Orange 13inch X 3 Ft Explore / Maker', description: "Infuse warmth into your crafts with Cricut Smart Vinyl in Removable Orange. Measuring 13 inches by 3 feet, this removable vinyl is compatible with Cricut Explore and Maker machines, providing a versatile solution for adding vibrant accents to your projects."
        }
    ]

    return (<>
        <SmallIntro title={'Unleash Your Creativity: Crafting Wonders with Cricut Smart Accessories'} description={"Dive into the world of endless possibilities as you craft something truly amazing with Cricut Smart Accessories. From precision blades to intuitive mats, these accessories elevate your crafting experience, enabling you to bring your most imaginative ideas to life. Let the magic of Cricut inspire you to create extraordinary projects that captivate and motivate others to embark on their own crafting journeys. Elevate your creativity, and let Cricut Smart Accessories be your trusted companions in crafting extraordinary wonders."} />
        <Wonder image={smart_banner} bg={'teal'} title={'Crafting Wonders with Cricut Smart Accessories: Ignite Your Imagination!'} text={'Dive into a world of endless possibilities as you unlock the true potential of your creativity with Cricut Smart Accessories. From precision cutting tools to dynamic mats and specialized blades, these smart accessories are the key to crafting something truly extraordinary. Transform mundane materials into personalized masterpieces and let your imagination run wild. Elevate your crafting journey, inspire others, and bring your visions to life with the magic of Cricut Smart Accessories.'} />
        <ProductShowCase productArray={productArray} />

        <Wonder image={smart_banner_2} bg={'blue'}
            title={'Crafting Brilliance with Cricut Smart Accessories'}
            text={'Unleash your creative genius and elevate your crafting endeavors with Cricut Smart Accessories. From precision cutting to dynamic crafting mats, these accessories are the keys to turning your imaginative visions into tangible wonders. Embrace the art of possibility, and let every cut and creation reflect the brilliance of your unique expression. Craft boldly, craft brilliantly with Cricut Smart Accessories.'} />
        <SmallIntro title={'Features of Cricut Smart Accessories'} description={'Unleash the full potential of your crafting endeavors with Cricut Smart Accessories, a suite of tools designed to revolutionize your creative process. Here are some key features that make these accessories an indispensable asset to every crafter'} />
        <Group maw={760} mx={'auto'} my={'xl'}>
            <Title order={3}>
                Precision Crafting
            </Title>
            <Text>
                Dive into the world of impeccable craftsmanship. Cricut Smart Accessories boast unparalleled precision, ensuring that each cut and intricate detail in your projects is executed with the utmost accuracy. Your creations will exude a professional finish that captivates attention.
            </Text>
            <Title order={3}>
                Versatility Unleashed
            </Title>
            <Text>
                Embrace a spectrum of possibilities as these accessories seamlessly complement a diverse range of crafting materials. From vibrant vinyl and expressive iron-on to delicate specialty papers and fabrics, the versatility of Cricut Smart Accessories opens doors to a myriad of creative expressions.
            </Text>

            <Title order={3}>
                Effortless Integration
            </Title>
            <Text>
                Craft with ease as Cricut Smart Accessories are ingeniously engineered to seamlessly integrate with Cricut cutting machines. Whether you're a novice or seasoned crafter, the intuitive design ensures a user-friendly experience, allowing you to channel your energy into the heart of your creativity rather than navigating complex tools.
            </Text>

            <Title order={3}>Enhanced Efficiency
            </Title>
            <Text>Time is a precious resource, and Cricut Smart Accessories are here to maximize your efficiency. Smart features, like the adaptive Smart Mats, automatically adjust settings to match the material you're working with, streamlining your setup and cutting process for a more efficient workflow.
            </Text>

            <Title order={3}>Universal Compatibility
            </Title>
            <Text>Regardless of whether you own a Cricut Maker, Explore, or Joy, Cricut Smart Accessories are meticulously crafted to be universally compatible. Tailored enhancements await, enriching the capabilities of your specific cutting machine and expanding the horizons of your crafting possibilities.
            </Text>

            <Title order={3}>Innovative Materials Palette
            </Title>
            <Text>Explore a universe of textures, finishes, and effects with the inclusion of innovative materials like Smart Vinyl and Smart Iron-On. These specialized materials are designed to work seamlessly with Cricut cutting machines, providing you the freedom to experiment and push the boundaries of your creativity.
            </Text>

            <Title order={3}>Inspiration in Every Cut
            </Title>
            <Text>Experience the true essence of crafting as the precision and versatility offered by Cricut Smart Accessories empower you to bring even the most intricate design ideas to life. With every cut, discover inspiration that sparks a continuous flow of creativity, making each crafting session a journey of limitless possibilities. Elevate your craft with Cricut Smart Accessories – where innovation meets inspiration.
            </Text>

        </Group>
    </>
    )
}

export default CricutSmartAccessories
