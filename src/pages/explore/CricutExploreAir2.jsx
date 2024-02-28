import { List, Stack, Title } from "@mantine/core"
import SmallIntro from "../../components/SmallIntro"
import ProductShowCase from "../../components/ProductShowCase"

import exp_1 from '../../../public/img/explore-air-2/ex-1.jpg'
import exp_2 from '../../../public/img/explore-air-2/ex-2.jpg'
import exp_3 from '../../../public/img/explore-air-2/ex-3.jpg'
import exp_4 from '../../../public/img/explore-air-2/ex-4.jpg'
import exp_5 from '../../../public/img/explore-air-2/ex-5.jpeg'
import exp_6 from '../../../public/img/explore-air-2/ex-6.jpg'
import exp_7 from '../../../public/img/explore-air-2/ex-7.jpg'

const ProductArray = [
    {
        image: exp_1,
        title: 'Cricut Explore Air™ 2, Lilac',
        description: 'Elevate your crafting experience with the Cricut Explore Air™ 2 in Lilac. This versatile cutting machine offers precision and speed, making it the perfect companion for a wide range of creative projects.'
    },
    {
        image: exp_2,
        title: 'Cricut Explore Air™ 2, Lilac + Essentials Bundle',
        description: 'Unleash your creativity with the Cricut Explore Air™ 2 in Lilac, bundled with essential tools and materials. This comprehensive package provides everything you need to embark on exciting crafting endeavors.'
    },
    {
        image: exp_3,
        title: 'Cricut Explore Air® 2 + Essentials Bundle + Cricut Access™ Subscription',
        description: 'Experience the ultimate crafting journey with the Cricut Explore Air® 2. This bundle includes essential tools, materials, and a Cricut Access™ subscription, giving you access to a vast library of inspiring designs.'
    },
    {
        image: exp_4,
        title: 'New, Open-Box Cricut Explore Air® 2',
        description: 'Discover the possibilities of a new, open-box Cricut Explore Air® 2. This cutting-edge machine provides a fresh start for your creative projects, delivering precision and innovation straight out of the box.'
    },
    {
        image: exp_5,
        title: 'New, Open-Box Cricut Explore Air® 2',
        description: 'Revitalize your crafting experience with a new, open-box Cricut Explore Air® 2. Unbox creativity and innovation as you embark on artistic projects with this precision cutting machine.'
    },
    {
        image: exp_6,
        title: 'New, Open-Box Cricut Explore Air® 2',
        description: 'Embrace the potential of a new, open-box Cricut Explore Air® 2. This cutting-edge machine opens the door to limitless creativity, offering precision and versatility for your crafting endeavors.'
    },
    {
        image: exp_7,
        title: 'Cricut Explore Air™ 2, Mint + Vinyl Bundle',
        description: 'Make a statement with the Cricut Explore Air™ 2 in Mint, bundled with vibrant vinyl materials. This bundle is the perfect combination for creating personalized designs that stand out.'
    },
];




function CricutExploreAir2() {
    return (
        <Stack maw={850} mx={'auto'} my={'xl'} px={'md'}>
            <SmallIntro title={'Cricut Explore Air 2: Unleash Your Creative Potential'} description={"Step into a world of limitless creativity with the Cricut Explore Air 2. This cutting-edge cutting machine redefines DIY projects, allowing you to effortlessly craft personalized designs for a variety of materials. With its precision cutting capabilities and versatile features, the Explore Air 2 empowers you to bring your imagination to life. Whether you're a seasoned crafter or just starting, this machine is your key to unlocking a universe of creative possibilities. Explore, design, and innovate with the Cricut Explore Air 2."} />
            <Title order={2}>Versatile Crafting Machine:</Title>
            <List>
                <List.Item>The Cricut Explore Air 2 is a versatile cutting machine designed for a wide range of crafting projects.</List.Item>
                <List.Item>Its precision cutting capabilities make it suitable for various materials, including paper, vinyl, cardstock, fabric, and more.</List.Item>
            </List>

            <Title order={2}>Smart Cutting Technology:</Title>
            <List>
                <List.Item>Features smart cutting technology that allows for precise and intricate designs.</List.Item>
                <List.Item>The machine is equipped with dual carriage for cutting and writing or cutting and scoring in one step.</List.Item>
            </List>


            <Title order={2}>Fast and Efficient:  </Title>
            <List>
                <List.Item>Boasts a fast mode, allowing users to cut and create projects up to two times faster than its predecessor.</List.Item>
                <List.Item>Ideal for those looking to complete projects quickly without compromising quality.</List.Item>
            </List>


            <Title order={2}>User-Friendly Design:</Title>
            <List>
                <List.Item>User-friendly interface with easy-to-navigate software for both beginners and experienced crafters.</List.Item>
                <List.Item>Wireless cutting capability for a seamless and clutter-free crafting experience.</List.Item>
            </List>


            <Title order={2}>Endless Design Possibilities: </Title>
            <List>
                <List.Item>Access to the Cricut Design Space, offering a vast library of pre-designed projects and images.</List.Item>
                <List.Item>Allows users to upload their own designs, providing endless possibilities for customization.</List.Item>
            </List>


            <Title order={2}>Wide Range of Materials:            </Title>

            <List>
                <List.Item>Capable of cutting a wide variety of materials, from delicate paper to tough leather.</List.Item>
                <List.Item>Perfect for creating personalized items such as home decor, customized apparel, greeting cards, and more.</List.Item>
            </List>

            <Title order={2}>Compact and Stylish Design:            </Title>

            <List>
                <List.Item>Compact and stylish design that fits well in any crafting space.</List.Item>
                <List.Item>Available in a variety of colors, allowing users to choose a machine that matches their personal style.</List.Item>
            </List>

            <Title order={2}>Ease of Setup and Use:            </Title>

            <List>
                <List.Item>Quick and straightforward setup, allowing users to start crafting in no time.</List.Item>
                <List.Item>Comes with easy-to-follow tutorials and guides for a smooth crafting experience.</List.Item>
            </List>

            <Title order={2}>Wireless Connectivity:            </Title>

            <List>
                <List.Item>Wireless Bluetooth connectivity for convenient and cable-free operation.</List.Item>
                <List.Item>Enables users to send their designs directly from their computer or mobile device to the Explore Air 2.</List.Item>
            </List>

            <Title order={2}>Consistent and Reliable Performance:            </Title>

            <List>
                <List.Item>Reliable cutting performance with consistent results.</List.Item>
                <List.Item>Equipped with a double tool holder for efficient project completion.</List.Item>
            </List>
            <ProductShowCase productArray={ProductArray} />
        </Stack >
    )
}

export default CricutExploreAir2
