import { Carousel } from '@mantine/carousel';
import { useMediaQuery } from '@mantine/hooks';
import { Paper, Text, Title, useMantineTheme, rem, Stack } from '@mantine/core';
import classes from './Homecarousel.module.css';

import Carousel_1 from '../../../public/img/carousel/carousel-1.jpg'
import Carousel_2 from '../../../public/img/carousel/carousel-2.jpg'
import Carousel_3 from '../../../public/img/carousel/carousel-3.jpg'
import Carousel_4 from '../../../public/img/carousel/carousel-4.jpg'
import Carousel_5 from '../../../public/img/carousel/carousel-5.jpg'


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
        image: Carousel_1,
    },
    {
        image: Carousel_2,
    },
    {
        image: Carousel_3,
    },
    {
        image: Carousel_4,
    },
    {
        image: Carousel_5,
    },

];

export default function HomeCarousel() {
    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));

    return (<>
        <Stack my={'xl'} w={'100%'} maw={1100} mx={'auto'}>
            <Stack gap={0}>
                <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
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
    </>
    );
}