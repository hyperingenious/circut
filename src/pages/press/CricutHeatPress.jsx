import { List, Stack, Text, Title } from "@mantine/core"
import SmallIntro from "../../components/SmallIntro"

import hp1 from '../../../public/img/cricut-heat-press/hp-1.jpg'
import hp2 from '../../../public/img/cricut-heat-press/hp-2.jpg'
import hp3 from '../../../public/img/cricut-heat-press/hp-3.jpg'
import hp4 from '../../../public/img/cricut-heat-press/hp-4.jpg'
import hp5 from '../../../public/img/cricut-heat-press/hp-5.jpg'
import hp6 from '../../../public/img/cricut-heat-press/hp-6.jpg'
import hp7 from '../../../public/img/cricut-heat-press/hp-7.jpg'
import hp8 from '../../../public/img/cricut-heat-press/hp-8.jpg'
import hp9 from '../../../public/img/cricut-heat-press/hp-9.jpg'
import ProductShowCase from "../../components/ProductShowCase"

const productArray = [
    {
        image: hp1,
        title: 'Cricut EasyPress® 3 - 9 in x 9 in',
        description: 'Compact and efficient, the Cricut EasyPress® 3 with a 9" x 9" heating plate is perfect for small and intricate heat transfer projects.'
    },
    {
        image: hp2,
        title: 'Cricut EasyPress™ 3, 9" x 9" + Essentials Iron-On Bundle',
        description: 'This bundle includes the Cricut EasyPress™ 3 with a 9" x 9" heating plate along with essential Iron-On materials, making it an all-in-one solution for your crafting needs.'
    },
    {
        image: hp3,
        title: 'Cricut EasyPress™ 3, - 9" x 9" + Everything Iron-On Bundle',
        description: 'Unlock endless possibilities with the Cricut EasyPress™ 3 bundled with a variety of Iron-On materials, allowing you to create a wide range of vibrant and personalized projects.'
    },
    {
        image: hp4,
        title: 'Cricut EasyPress™ 3, 12" x 10" + Essentials Iron-On Bundle',
        description: 'The larger 12" x 10" heating plate in this bundle provides versatility for your projects, and it comes with essential Iron-On materials to get you started.'
    },
    {
        image: hp5,
        title: 'Cricut EasyPress™ 3, 12" x 10" + Everything Iron-On Bundle',
        description: 'Take your creativity to the next level with the Cricut EasyPress™ 3 featuring a 12" x 10" heating plate and a comprehensive bundle of Iron-On materials for endless crafting possibilities.'
    },
    {
        image: hp6,
        title: 'Cricut EasyPress® 3 - 9 in x 9 in + Mat',
        description: 'This package includes the Cricut EasyPress® 3 with a 9" x 9" heating plate along with a mat, offering a complete set for convenient and safe heat transfer projects.'
    },
    {
        image: hp7,
        title: 'Cricut EasyPress® 3 - 12 in x 10 in',
        description: 'Experience enhanced efficiency with the Cricut EasyPress® 3 featuring a larger 12" x 10" heating plate, perfect for bigger projects and mass production.'
    },
    {
        image: hp8,
        title: 'Cricut EasyPress Mini™, Zen Blue',
        description: 'Compact and portable, the Cricut EasyPress Mini™ in Zen Blue is perfect for on-the-go crafting and precision heat transfer on small items.'
    },
    {
        image: hp9,
        title: 'Cricut EasyPress Mini™, Zen Blue + Essentials Iron-On Bundle',
        description: 'The Cricut EasyPress Mini™ in Zen Blue, bundled with essential Iron-On materials, is your go-to solution for intricate designs and details.'
    },
];


function CricutHeatPress() {
    return (
        <Stack maw={850} mx={'auto'} my={'xl'} px={'md'}>
            <SmallIntro title={'Cricut Heat Press: Unleashing Creative Possibilities'} description={"Explore the boundless realm of creativity with the Cricut Heat Press, a cutting-edge solution designed to elevate your crafting experience. This innovative heat press is a versatile companion for crafting enthusiasts, providing a seamless blend of precision and ease.The Cricut Heat Press boasts a sleek and efficient design, offering a user-friendly interface that caters to both beginners and seasoned crafters. Its state-of-the-art features, including an extra-wide opening for enhanced safety, make it a standout in the world of heat press technology.Designed to be more than just a machine, the Cricut Heat Press opens doors to a world of possibilities. Whether you're embarking on intricate heat transfer projects or diving into the art of sublimation, this heat press delivers consistent and reliable results.Join the crafting revolution with the Cricut Heat Press – where innovation meets imagination, empowering you to bring your creative visions to life with every press"} />
            <Title order={6}>Cricut Heat Press: Unleashing Creative Possibilities</Title>
            <Text>
                Explore the boundless realm of creativity with the Cricut Heat Press, a cutting-edge solution designed to elevate your crafting experience. This innovative heat press is a versatile companion for crafting enthusiasts, providing a seamless blend of precision and ease.

                The Cricut Heat Press boasts a sleek and efficient design, offering a user-friendly interface that caters to both beginners and seasoned crafters. Its state-of-the-art features, including an extra-wide opening for enhanced safety, make it a standout in the world of heat press technology.

                Designed to be more than just a machine, the Cricut Heat Press opens doors to a world of possibilities. Whether you're embarking on intricate heat transfer projects or diving into the art of sublimation, this heat press delivers consistent and reliable results.

                Join the crafting revolution with the Cricut Heat Press – where innovation meets imagination, empowering you to bring your creative visions to life with every press.
            </Text>

            <Title order={6}>Key Features</Title>
            <List>
                <List.Item>Versatile companion for crafting enthusiasts.</List.Item>
                <List.Item>User-friendly interface suitable for all skill levels.</List.Item>
                <List.Item>State-of-the-art features, including an extra-wide opening for enhanced safety.</List.Item>
                <List.Item>Perfect for intricate heat transfer and sublimation projects.</List.Item>
                <List.Item>Sleek and efficient design with consistent and reliable results.</List.Item>
            </List>
            <ProductShowCase productArray={productArray} />

        </Stack>
    )
}

export default CricutHeatPress
