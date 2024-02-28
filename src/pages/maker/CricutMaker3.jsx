import { Group, Image, List, Paper, Stack, Text, Title, rem, useMantineTheme } from "@mantine/core"
import maker_banner from '../../../public/img/cricut-maker-3/cricut-maker-banner.png'
import classes from './CricutMaker3.module.css'
import { Carousel } from "@mantine/carousel";
import { useMediaQuery } from "@mantine/hooks";

import car_1 from '../../../public/img/cricut-maker-3/car-1.jpg'
import car_2 from '../../../public/img/cricut-maker-3/car-2.jpg'
import car_3 from '../../../public/img/cricut-maker-3/car-3.jpg'
import car_4 from '../../../public/img/cricut-maker-3/car-4.jpg'
import car_5 from '../../../public/img/cricut-maker-3/car-5.jpg'
import car_6 from '../../../public/img/cricut-maker-3/car-6.jpg'

import dis_1 from '../../../public/img/cricut-maker-3/dis-1.png'
import dis_3 from '../../../public/img/cricut-maker-3/dis-3.png'
import dis_4 from '../../../public/img/cricut-maker-3/dis-4.png'

import prod_1 from '../../../public/img/cricut-maker-3/prod-1.png'
import prod_2 from '../../../public/img/cricut-maker-3/prod-2.jpg'
import prod_3 from '../../../public/img/cricut-maker-3/prod-3.jpg'

import SmallIntro from "../../components/SmallIntro";
import ProductShowCase from "../../components/ProductShowCase";


const productArray = [
    { image: prod_1, title: "Cricut Maker® 3", description: "Get the ultimate smart cutting machine, now smarter and faster than ever." },
    { image: prod_2, title: "Cricut Maker® 3 + Everything Materials Bundle", description: "All the fuel for your creative fire. Get the ultimate smart cutting machine, plus the widest variety of Smart Materials & tools." },
    { image: prod_3, title: "Cricut EasyPress® 2", description: "Get the no-stress heat press and take on any heat transfer project that comes your way." },
]


function Card({ image, title, category }) {
    return (
        <Paper
            shadow="md"
            p="xl"
            radius="md"
            style={{ backgroundImage: `url(${image})` }}
            className={classes.card}
        >
            <div>
                <Text className={classes.category} size="xs">
                    {category}
                </Text>
                <Title order={3} className={classes.title}>
                    {title}
                </Title>
            </div>
        </Paper>
    );

}

const data = [
    {
        image: car_1,
    },
    {
        image: car_2,
    },
    {
        image: car_3,
    },
    {
        image: car_4,
    },
    {
        image: car_5,
    },
    {
        image: car_6,
    },

];


function CricutMaker3() {

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));


    return (
        <Stack maw={850} mx={'auto'} my={'xl'} px={'md'} justify="center">
            <Image src={maker_banner} height={'100%'} />
            <Title ta={'center'} order={1}>The ultimate cutting machine.</Title>
            <Text fw={500} size="xl" maw={500} mx={'auto'} ta={'center'}>Cricut Maker® 3 is the most powerful smart cutting machine we've ever made — for every craft, and every crafter.</Text>

            <Stack my={'xl'} w={'100%'} maw={1100} mx={'auto'}>
                <Stack gap={0}>
                    <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
                        Made with Cricut Maker 3.
                    </Title>

                    <Text c="dimmed" className={classes.description} ta="center">
                        See what you make possible with Cricut Maker 3, tools, materials & accessories.
                    </Text>
                </Stack>

                <Carousel mx={'md'}
                    slideSize={{ base: '100%', sm: '50%' }}
                    slideGap={{ base: rem(2), sm: 'xl' }}
                    align="start"
                    slidesToScroll={mobile ? 1 : 2}>
                    {slides}
                </Carousel>
            </Stack>

            <SmallIntro title={'Cricut Maker 3: Empowering Precision for Limitless Creativity'} description={'Unleash your creative potential with the Cricut Maker 3, a cutting-edge crafting marvel that takes your DIY projects to new heights. This advanced cutting machine combines power and precision, allowing you to effortlessly cut a vast range of materials with unparalleled accuracy. From fabric and leather to balsa wood and beyond, the Cricut Maker 3 opens up a world of possibilities for creators of all levels. With enhanced speed and versatility, this cutting-edge machine is designed to fuel your imagination and turn your ideas into stunning, professional-quality creations. Elevate your crafting experience with the Cricut Maker 3 and embark on a journey of limitless creativity.'} />

            <Group mx={'auto'} style={{ flexDirection: 'column' }}>
                <Stack gap={0} mt={'xl'}>
                    <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
                        3 simple steps. Endless possibilities.
                    </Title>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Stack maw={400}>
                            <Title>Design.
                            </Title>
                            <Text>Start from scratch, or get a head start with 1,000s of ready-to-make projects.
                            </Text>
                        </Stack>
                        <Image src={dis_1} height={250} />
                    </Group>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Image src={dis_3} height={250} />
                        <Stack maw={400}>
                            <Title> Click.
                            </Title>
                            <Text>Customize to your liking, click Make It, then follow on-screen prompts.
                            </Text>
                        </Stack>
                    </Group>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Stack maw={400}>
                            <Title>Admire.

                            </Title>
                            <Text>Put it together, add finishing touches & enjoy the end result.
                            </Text>
                        </Stack>
                        <Image src={dis_4} height={250} />
                    </Group>
                </Stack>
            </Group>
            <Stack gap={0} mt={'xl'}>
                <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
                    Showcase of Cricut Maker 3
                </Title>
            </Stack>
            <ProductShowCase productArray={productArray} />


            <List>
                <List.Item>For compatible materials and Smart Materials™, see cricut.com/materials</List.Item>
                <List.Item>Additional tools sold separately. For compatible tools, see cricut.com/blades</List.Item>
                <List.Item>When cutting Cricut Smart Materials, compared to Cricut Explore Air™ 2 using Fast Mode.</List.Item>
                <List.Item>Compared to previous Cricut Explore® model.</List.Item>
                <List.Item>Maximum cut depth and cut radius varies depending on the material.</List.Item>
                <List.Item>Availability varies based on Cricut machine selection in Design Space. Some images available only in specific Cricut projects</List.Item>
                <List.Item>*iOS is a trademark or registered trademark of Cisco in the U.S. and other countries. Android is a trademark of Google, LLC. Windows® is a registered trademark of Microsoft Corporation in the United States and/or other countries. Mac is a trademark of Apple Inc., registered in the U.S. and other countries. The Bluetooth® word mark and logos are registered trademarks owned by Bluetooth SIG, Inc. and any use of such marks by Cricut, Inc. is under license.</List.Item>
            </List>



        </Stack>
    )
}

export default CricutMaker3;
