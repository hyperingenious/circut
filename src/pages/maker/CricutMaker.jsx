import { List, Stack, Title } from "@mantine/core"
import mkr_1 from '../../../public/img/cricut-maker/mkr-1.png'
import mkr_2 from '../../../public/img/cricut-maker/mkr-2.jpg'
import mkr_3 from '../../../public/img/cricut-maker/mkr-3.jpg'
import mkr_4 from '../../../public/img/cricut-maker/mkr-4.png'
import mkr_5 from '../../../public/img/cricut-maker/mkr-5.png'
import mkr_6 from '../../../public/img/cricut-maker/mkr-6.jpg'
import mkr_7 from '../../../public/img/cricut-maker/mkr-7.jpg'
import mkr_8 from '../../../public/img/cricut-maker/mkr-8.jpg'
import mkr_9 from '../../../public/img/cricut-maker/mkr-9.jpg'
import mkr_10 from '../../../public/img/cricut-maker/mkr-10.jpg'

import ProductShowCase from '../../components/ProductShowCase'
import SmallIntro from '../../components/SmallIntro'

const productArray = [
    {
        image: mkr_1,
        title: "Cricut Maker® 3",
        description: "Unlock limitless creative possibilities with the Cricut Maker® 3, featuring enhanced speed, versatility, and compatibility with a wide range of materials for your DIY projects."
    },
    {
        image: mkr_2,
        title: "Cricut Maker® 3 + Essentials Bundle + Cricut Access™ Subscription",
        description: "Embark on your crafting journey with the ultimate Cricut Maker® 3 bundle, including essential tools and a Cricut Access™ subscription for a seamless and comprehensive creative experience."
    },
    {
        image: mkr_3,
        title: "Cricut Maker® 3 + Essentials Bundle",
        description: "Get started on your creative ventures with the Cricut Maker® 3 Essentials Bundle, providing the necessary tools and accessories to elevate your crafting projects."
    },
    {
        image: mkr_4,
        title: "Cricut Maker® 3 Bundled with Vinyl, Iron-On & Paper Learning Kits",
        description: "Accelerate your crafting skills with the Cricut Maker® 3 bundled with learning kits for vinyl, iron-on, and paper, offering a comprehensive introduction to various creative techniques."
    },
    {
        image: mkr_5,
        title: "Certified Refurbished Cricut Maker® 3",
        description: "Experience the innovation of the Cricut Maker® 3 with confidence in a certified refurbished edition, combining cutting-edge features with affordability."
    },
    {
        image: mkr_6,
        title: "Certified Refurbished Cricut Maker®",
        description: "Discover the capabilities of a certified refurbished Cricut Maker®, offering a budget-friendly way to access the powerful features of this cutting-edge crafting machine."
    },
    {
        image: mkr_7,
        title: "Certified Refurbished Cricut Maker®",
        description: "Explore your creative potential with a certified refurbished Cricut Maker®, ensuring reliable performance and affordability for your DIY projects."
    },
    {
        image: mkr_8,
        title: "Certified Refurbished Cricut Maker®",
        description: "Step into the world of crafting with a certified refurbished Cricut Maker®, providing a cost-effective option without compromising on the cutting-edge features."
    },
    {
        image: mkr_9,
        title: "Certified Refurbished Cricut Maker®",
        description: "Revitalize your creative workspace with a certified refurbished Cricut Maker®, offering a renewed and reliable crafting companion for your projects."
    },
    {
        image: mkr_10,
        title: "Certified Refurbished Cricut Maker®",
        description: "Elevate your crafting experience with a certified refurbished Cricut Maker®, delivering the same innovative features in a more budget-friendly package."
    },
];


function CricutMaker() {
    return (
        <Stack maw={850} mx={'auto'} my={'xl'} px={'md'} justify="center">
            <SmallIntro title={'Unleash Your Creativity with Cricut Maker: The Ultimate Crafting Companion'} description={"Discover the limitless possibilities of crafting with the Cricut Maker series. Elevate your DIY projects to new heights with precision cutting, versatility, and innovation. Whether you're into paper crafts, fabric creations, or personalized home decor, the Cricut Maker is your go-to tool for bringing your imagination to life. Explore a world of design possibilities with its adaptive tool system, allowing you to cut, draw, score, and engrave with ease. From intricate details to larger-than-life projects, the Cricut Maker empowers you to express your unique style and turn your ideas into stunning reality. Upgrade your crafting experience and embark on a journey of endless creativity with the Cricut Maker."} />
            <ProductShowCase productArray={productArray} />
            <Stack gap={0} mt={'xl'}>
                <Title mb={0} order={2} ta="center" mt="sm">
                    Key Features of Cricut Maker
                </Title>
            </Stack>
            <List>
                <List.Item>Adaptive Tool System</List.Item>
                <List.Item>Precision Cutting</List.Item>
                <List.Item>Versatility in Materials</List.Item>
                <List.Item>Advanced Rotary Blade</List.Item>
                <List.Item>Fine-Point Blade</List.Item>
                <List.Item>Fast Mode for Quick Projects</List.Item>
                <List.Item>Expandable Suite of Tools</List.Item>
                <List.Item>Wireless Connectivity</List.Item>
                <List.Item>Design Space Software Compatibility</List.Item>
                <List.Item>Smart Set Dial for Material Selection</List.Item>
                <List.Item>Bluetooth Connectivity</List.Item>
                <List.Item>Double Tool Holder</List.Item>
                <List.Item>Scoring Stylus for Perfect Folds</List.Item>
                <List.Item>Engraving Tip for Unique Designs</List.Item>
                <List.Item>Print Then Cut Feature</List.Item>
                <List.Item>10X Cutting Force</List.Item>
                <List.Item>Compatibility with Hundreds of Materials</List.Item>
                <List.Item>Fabric Cutting Capabilities</List.Item>
                <List.Item>Easy-to-Use Interface</List.Item>
                <List.Item>User-Friendly Design</List.Item>
                <List.Item>Offline Mode for Convenience</List.Item>
                <List.Item>Fast and Precise Cuts</List.Item>
                <List.Item>App Integration for Mobile Crafting</List.Item>
                <List.Item>Customizable Designs</List.Item>
                <List.Item>Access to Cricut Image Library</List.Item>
                <List.Item>Adaptive Pressure System</List.Item>
                <List.Item>Ultimate DIY Companion</List.Item>
                <List.Item>Time-Saving Technology</List.Item>
                <List.Item>Ideal for Home Decor Projects</List.Item>
                <List.Item>Personalized Gift Creation</List.Item>
                <List.Item>Perfect for Papercrafting</List.Item>
                <List.Item>Quilting and Sewing Applications</List.Item>
                <List.Item>Expansive Project Possibilities</List.Item>
                <List.Item>3D Paper Crafts</List.Item>
                <List.Item>Maker-Exclusive Tools</List.Item>
                <List.Item>Enhanced Scanning Capabilities</List.Item>
                <List.Item>Create Vinyl Decals with Ease</List.Item>
                <List.Item>Professional-Level Results</List.Item>
                <List.Item>Effortless Customization</List.Item>
                <List.Item>Endless Crafting Inspiration</List.Item>
                <List.Item>Support for Multiple File Types</List.Item>
                <List.Item>User-Friendly Tutorials</List.Item>
                <List.Item>Customized Iron-Ons and Heat Transfers</List.Item>
                <List.Item>Intricate Cardmaking Capabilities</List.Item>
                <List.Item>Ideal for School Projects</List.Item>
                <List.Item>Creative Embellishments</List.Item>
                <List.Item>Time-Efficient Production</List.Item>
                <List.Item>Wide Range of Blade Options</List.Item>
                <List.Item>High-Quality Construction</List.Item>
                <List.Item>Innovative Crafting Technology</List.Item>
            </List>

        </Stack>
    )
}

export default CricutMaker
