import { BackgroundImage, Box, Button, Center, Group, Image, Overlay, Stack, Text, Title } from "@mantine/core"

import bundle_1 from '../../../public/img/cricut-bundles/bundle-1.png'
import bundle_2 from '../../../public/img/cricut-bundles/bundle-2.jpeg'
import bundle_3 from '../../../public/img/cricut-bundles/bundle-3.jpeg'
import bundle_4 from '../../../public/img/cricut-bundles/bundle-4.jpg'
import bundle_5 from '../../../public/img/cricut-bundles/bundle-5.jpg'
import bundle_6 from '../../../public/img/cricut-bundles/bundle-6.jpg'

import banner from '../../../public/img/minor-banner.jpg'

function CricutBundle() {
    return (
        <>
            <Stack mx={'auto'} maw={800} p={"md"}>
                <Title>Cricut Bundle</Title>
                <Text>The Cricut Bundle is a comprehensive package designed to enhance the crafting experience for enthusiasts and professionals alike. This specialized bundle from Cricut includes a curated selection of essential tools, materials, and accessories, all meticulously chosen to complement each other seamlessly. With the Cricut Bundle, users gain access to a versatile assortment of items tailored to various crafting projects. </Text>
                <Stack my={'xl'} w={'100%'}>
                    <Title my={'xl'} order={2} ta="center" >
                        Some latest Cricut Bundles.
                    </Title>
                    <Group justify="space-around" gap={'xl'}>
                        <Stack align="center" gap={0}>
                            <Image src={bundle_1} height={200} width={200} maw={300} />
                            <Title ta={'center'} order={3}>
                                Mug Press™ Starter Bundle
                            </Title>
                            <Text ta={'center'} fw={500} size="xs" maw={500} >
                                Explore your crafting journey with the Cricut Beginner's Delight Bundle, a curated set featuring essential tools and Cricut accessories. Perfect for newcomers, this bundle ensures a seamless introduction to the world of Cricut creativity.


                            </Text>
                            <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                        </Stack>
                        <Stack align="center" gap={0}>
                            <Image src={bundle_2} height={200} width={200} maw={300} />
                            <Title ta={'center'} order={3}>
                                Cricut Maker® 3 + Essentials Bundle + Cricut Access™ Subscription
                            </Title>
                            <Text ta={'center'} fw={500} size="xs" maw={500} >
                                Dive into the world of vibrant designs and personalized creations with the Ultimate Cricut Vinyl Bundle. Elevate your projects with high-quality vinyl materials, precision tools, and exclusive Cricut resources, making your crafting experience truly exceptional.


                            </Text>
                            <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                        </Stack>
                        <Stack align="center" gap={0}>
                            <Image src={bundle_3} height={200} width={200} maw={300} />
                            <Title ta={'center'} order={3}>
                                Easypress Essentials Material Bundle
                            </Title>
                            <Text ta={'center'} fw={500} size="xs" maw={500} >
                                Unleash the full potential of your creativity with the Cricut Maker Pro Bundle. Designed for professionals and enthusiasts alike, this bundle combines the cutting-edge Cricut Maker technology with a curated selection of advanced tools, empowering you to take your projects to the next level.


                            </Text>
                            <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                        </Stack>
                        <Stack align="center" gap={0}>
                            <Image src={bundle_4} height={200} width={200} maw={300} />
                            <Title ta={'center'} order={3}>
                                Cricut EasyPress® 3 - 12 in x 10 in + Mat
                            </Title>
                            <Text ta={'center'} fw={500} size="xs" maw={500} >
                                Compact yet powerful, the Cricut Joy Essentials Bundle is perfect for on-the-go creators. Packed with Cricut Joy-compatible materials and accessories, this bundle offers a convenient solution for those seeking a portable and versatile crafting experience.


                            </Text>
                            <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                        </Stack>
                        <Stack align="center" gap={0}>
                            <Image src={bundle_5} height={200} width={200} maw={300} />
                            <Title ta={'center'} order={3}>
                                Cricut EasyPress™ 3, 12" x 10" + Everything Iron -On Bundle
                            </Title>
                            <Text ta={'center'} fw={500} size="xs" maw={500} >
                                Upgrade your crafting arsenal with the Cricut Explore Air 2 Master Bundle, a comprehensive set featuring the versatile Explore Air 2 machine along with an array of Cricut essentials. Unlock endless possibilities and express your unique style with this all-in-one crafting solution.


                            </Text>
                            <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                        </Stack>
                        <Stack align="center" gap={0}>
                            <Image src={bundle_6} height={200} width={200} maw={300} />
                            <Title ta={'center'} order={3}>
                                QuickSwap™ Tools Tips Bundle
                            </Title>
                            <Text ta={'center'} fw={500} size="xs" maw={500} >
                                Transform your fabric projects with the precision of the Cricut Heat Press Pro Bundle. This exclusive set combines the power of Cricut heat press technology with carefully selected accessories, providing a professional touch to your heat transfer projects.






                            </Text>
                            <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                        </Stack>
                    </Group>
                </Stack>


            </Stack>
            <Box w={'100%'} mx="auto" >
                <BackgroundImage
                    src={banner}
                    radius="xs"
                >
                    <Center py={100}
                        px={'auto'} style={{ flexDirection: 'column', alignItems: 'center' }}>

                        <Title maw={700} c={'dark'} ta={'center'} >Cricut Crafting Inspiration</Title>
                        <Text c="dark" maw={700} fw={500} ta={'center'} mt={'md'} px={'sm'}>
                            Immerse yourself in the world of creativity with our Cricut Crafting Inspiration collection. This carefully curated selection brings together a variety of crafting resources and project ideas, designed to fuel your imagination and encourage artistic exploration.
                        </Text>
                    </Center>
                </BackgroundImage>
            </Box>

        </>
    )
}

export default CricutBundle
