import { Image, Paper, Stack, Text, Title, rem, useMantineTheme } from "@mantine/core"
import cricut_banner from '../../../public/img/cricut-joy/joy-banner.png'
import { Carousel } from "@mantine/carousel";
import classes from './CricutJoy.module.css';
import { useMediaQuery } from "@mantine/hooks";

import car_1 from '../../../public/img/cricut-joy/car-1.jpeg'
import car_2 from '../../../public/img/cricut-joy/car-2.jpeg'
import car_3 from '../../../public/img/cricut-joy/car-3.jpg'
import car_4 from '../../../public/img/cricut-joy/car-4.jpeg'
import car_5 from '../../../public/img/cricut-joy/car-5.jpeg'

import SmallIntro from '../../components/SmallIntro'


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

];

function CricutJoy() {

    const theme = useMantineTheme();
    const mobile = useMediaQuery(`(max-width: ${theme.breakpoints.sm})`);
    const slides = data.map((item) => (
        <Carousel.Slide key={item.title}>
            <Card {...item} />
        </Carousel.Slide>
    ));


    return (
        <>
            <Stack maw={850} mx={'auto'} my={'xl'} px={'md'} justify="center">
                <Image src={cricut_banner} height={'100%'} />
                <Title ta={'center'} order={1}>Make happiness in minutes.</Title>
                <Text maw={500} mx={'auto'} ta={'center'}>With Cricut Joy™, it's a snap to create custom cards, pro-looking labels, and personalized decals.</Text>
            </Stack>
            <Stack my={'xl'} w={'100%'} maw={1100} mx={'auto'}>
                <Stack gap={0}>
                    <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
                        Made with Cricut Joy

                    </Title>

                    <Text c="dimmed" className={classes.description} ta="center">
                        See what you make possible with Cricut Joy, tools, materials & accessories.
                    </Text>
                </Stack>

                <Carousel mx={'md'}
                    slideSize={{ base: '100%', sm: '50%' }}
                    slideGap={{ base: rem(2), sm: 'xl' }}
                    align="start"
                    slidesToScroll={mobile ? 1 : 2}>
                    {slides}
                </Carousel>


                <SmallIntro title={'Cricut Joy: Streamlined Creativity in the Palm of Your Hand'} description={'Elevate your crafting game with the Cricut Joy, a compact wonder that packs a punch. This cutting-edge device brings efficiency to your DIY projects, minimizing effort while maximizing creativity. Say farewell to tedious cutting and hello to a world where precision meets simplicity. The Cricut Joy seamlessly integrates into your crafting routine, allowing you to focus on the artistry without the hassle. Its sleek design and user-friendly interface make it the mean machine for those who demand efficiency without sacrificing quality. Unleash your imagination effortlessly with the Cricut Joy – because creativity should be commanding, not complicated.'} />

                <Title order={3} maw={800} ta={'left'} mx={'auto'}>Cricut Joy: Your Compact Creative Companion</Title>
                <Text maw={800} mx={'auto'} >Unleash your creativity with the Cricut Joy, the ultimate compact cutting and crafting machine. Effortlessly make custom cards, professional-looking labels, and personalized decals in minutes.</Text>

                <Title order={3} maw={800} ta={'left'} mx={'auto'}>Streamlined Creativity in Your Palm</Title>
                <Text maw={800} mx={'auto'} >Elevate your crafting game with the Cricut Joy – a compact wonder that packs a punch. This cutting-edge device minimizes effort while maximizing creativity. Say goodbye to tedious cutting and hello to a world where precision meets simplicity.</Text>

                <Title order={3} maw={800} ta={'left'} mx={'auto'}>Cricut Joy: Your Portable Crafting Solution</Title>
                <Text maw={800} mx={'auto'} >Discover the joy of hassle-free crafting with Cricut Joy's compact design and powerful features. Whether you're at home or on the go, this machine brings efficiency to your DIY projects, making every creative endeavor a seamless experience.</Text>

                <Title order={3} maw={800} ta={'left'} mx={'auto'}>Effortless DIY Adventures Await with Cricut Joy</Title>
                <Text maw={800} mx={'auto'} >Transform ordinary moments into extraordinary expressions of your unique style with the Cricut Joy – your go-to tool for hassle-free DIY adventures. Say goodbye to manual cutting and hello to a world of possibilities.</Text>

                <Title order={3} maw={800} ta={'left'} mx={'auto'}>Cricut Joy: Craft with Smart Precision</Title>
                <Text maw={800} mx={'auto'} >Experience precise and intricate cuts with Cricut Joy. This machine is equipped with advanced cutting technology, ensuring that your projects achieve a professional finish every time.</Text>

                <Title mx={'auto'} order={3} maw={800} ta={'left'}>Design Anywhere with Wireless Freedom</Title>
                <Text maw={800} mx={'auto'}>Craft without constraints with Cricut Joy's wireless connectivity. Design and cut wirelessly from your computer, tablet, or smartphone, bringing flexibility and convenience to your creative process.</Text>

                <Title mx={'auto'} order={3} maw={800} ta={'left'}>Long Cuts, Continuous Creativity</Title>
                <Text maw={800} mx={'auto'}>Despite its compact size, Cricut Joy handles longer cuts with ease, thanks to the unique Repeat Function. Cut up to 20 feet in length, perfect for banners, signs, or continuous designs without interruption.</Text>

                <Title mx={'auto'} order={3} maw={800} ta={'left'}>User-Friendly Design Space for Seamless Creativity</Title>
                <Text maw={800} mx={'auto'}>Cricut Joy seamlessly integrates with the user-friendly Design Space software. Whether you're a beginner or an experienced crafter, the intuitive interface makes designing and customizing projects a breeze.</Text>

                <Title mx={'auto'} order={3} maw={800} ta={'left'}>Versatility in Materials for Diverse Crafting</Title>
                <Text maw={800} mx={'auto'}>From vinyl and iron-on to paper and cardstock, Cricut Joy is compatible with a wide range of materials. Explore various crafting possibilities and bring your unique ideas to life with this versatile cutting machine.</Text>

                <Title mx={'auto'} order={3} maw={800} ta={'left'}>Craft Personalized Cards Effortlessly</Title>
                <Text maw={800} mx={'auto'}>Make personalized and intricate cards effortlessly with Cricut Joy's dedicated Card Mat. Simplify the cardmaking process and add a personal touch to any occasion with this innovative feature.</Text>
            </Stack>
        </>
    )
}

export default CricutJoy
