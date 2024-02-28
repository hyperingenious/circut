import { Badge, Group, Image, Paper, SimpleGrid, Stack, Text, Title, rem, useMantineTheme, Container, Card as TheCard } from '@mantine/core';

import classes from './CricutMugPress.module.css';
import { IconCpu2, IconTemperature, IconThumbUpFilled } from '@tabler/icons-react';

import Carousel_1 from '../../../public/img/cricut-mug-press/carousel-mp-1.jpg'
import Carousel_2 from '../../../public/img/cricut-mug-press/carousel-mp-2.png'
import Carousel_3 from '../../../public/img/cricut-mug-press/carousel-mp-3.jpg'
import Carousel_4 from '../../../public/img/cricut-mug-press/carousel-mp-4.jpg'

import image_1 from '../../../public/img/cricut-mug-press/prod-show-1.jpeg'
import image_2 from '../../../public/img/cricut-mug-press/prod-show-2.jpeg'

import showcase_1 from '../../../public/img/cricut-mug-press/showcase-1.png'
import showcase_2 from '../../../public/img/cricut-mug-press/showcase-2.png'
import showcase_3 from '../../../public/img/cricut-mug-press/showcase-3.png'

import ProductShowCase from '../../components/ProductShowCase';
import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';

const mockdata = [
    {
        title: 'Precise Temperature Control',
        description: 'The Cricut Mug Press is equipped with advanced temperature control features, allowing users to achieve precise and consistent heat levels during the mug sublimation process. This ensures that your designs are transferred with utmost accuracy, resulting in vibrant and long-lasting prints on your mugs.',
        icon: IconTemperature,
    },
    {
        title: 'Easy-to-Use Smart Technology',
        description: 'ith its user-friendly smart technology, the Cricut Mug Press simplifies the mug customization process. The intuitive interface and automated controls make it easy for both beginners and experienced crafters to create personalized mugs effortlessly. The smart technology also facilitates quick setup, reducing the time spent on the press and ensuring a smooth crafting experience.',
        icon: IconCpu2,
    },
    {
        title: 'Compact Design for Convenience',
        description:
            "The compact and space-saving design of the Cricut Mug Press makes it an ideal addition to any crafting space. Despite its small footprint, it doesn't compromise on performance. The portable design allows for easy storage and transportation, making it convenient for users who may have limited workspace or those who want to take their crafting on the go.",
        icon: IconThumbUpFilled,
    },
];


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
    { image: Carousel_1, },
    { image: Carousel_2, },
    { image: Carousel_3, },
    { image: Carousel_4, },
];

const productArray = [
    { image: image_1, title: "Cricut Mug Press + Essentials Bundle", description: 'The starter pack for mug customization. Get Cricut Mug Press, plus all the supplies to make mugs in minutes.' },
    { image: image_2, title: "Cricut Mug Press + Everything Bundle", description: 'Fill that mug with possibilities. Get Cricut Mug Press, plus 8 mug blanks and a plethora of Infusible Ink™ materials. ' },
]

function CricutMugPress() {
    const theme = useMantineTheme();
    const features = mockdata.map((feature) => (
        <TheCard key={feature.title} shadow="md" radius="md" className={classes.card} padding="xl">
            <feature.icon
                style={{ width: rem(50), height: rem(50) }}
                stroke={2}
                color={theme.colors.dark[9]}
            />
            <Text fz="lg" fw={500} className={classes.cardTitle} mt="md">
                {feature.title}
            </Text>
            <Text fz="sm" c="dimmed" mt="sm">
                {feature.description}
            </Text>
        </TheCard>
    ));

    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (
        <>
            <Container size="lg" py="xl">
                <Group justify="center">
                    <Badge variant="filled" bg={'dark'} size="lg">
                        Best company ever
                    </Badge>
                </Group>

                <Title order={2} className={classes.title} c={'dark'} ta="center" mt="sm">
                    Mug Mastery Made Effortless: Cricut Mug Press Key Features
                </Title>

                <Text c="dimmed" className={classes.description} ta="center" mt="md">
                    Unlock the world of personalized mugs with the Cricut Mug Press and its standout features. Dive into a seamless crafting experience with precise temperature control, ensuring your designs come to life in vibrant detail. Embrace the simplicity of smart technology that makes mug customization a breeze for users of all skill levels.
                </Text>

                <SimpleGrid cols={{ base: 1, md: 3 }} spacing="xl" mt={50}>
                    {features}
                </SimpleGrid>
            </Container>


            <Stack my={'xl'} w={'100%'} maw={1100} mx={'auto'}>
                <Stack gap={0}>
                    <Title mb={0} order={2} c={'dark'} className={classes.title} ta="center" mt="sm">
                        Made with Cricut
                    </Title>

                    <Text c="dimmed" className={classes.description} ta="center">
                        See what you make possible with Cricut machines, tools, materials & accessories.
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


            <Stack my={'xl'} w={'100%'}>
                <Title my={'xl'} order={2} c={'dark'} className={classes.title} ta="center" >
                    Hero one of the Best Printers.
                </Title>
                <ProductShowCase productArray={productArray} />
            </Stack>


            <Group mx={'auto'} style={{ flexDirection: 'column' }}>
                <Stack gap={0}>
                    <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
                        Showcase Cricut Mug Press?
                    </Title>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Stack maw={400}>
                            <Title>Design.</Title>
                            <Text>Create your design with Infusible Ink™ materials.
                            </Text>
                        </Stack>
                        <Image src={showcase_1} height={250} />
                    </Group>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Image src={showcase_2} height={250} />
                        <Stack maw={400}>
                            <Title> Attach.
                            </Title>
                            <Text>Attach it to your compatible Cricut mug blank.</Text>
                        </Stack>
                    </Group>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Stack maw={400}>
                            <Title>Press.</Title>
                            <Text>Insert the mug & let the press do the rest!</Text>
                        </Stack>
                        <Image src={showcase_3} height={250} />
                    </Group>
                </Stack>
            </Group>
        </>
    )
}

export default CricutMugPress;

