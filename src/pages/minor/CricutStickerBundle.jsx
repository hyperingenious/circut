import { BackgroundImage, Box, Button, Center, Group, Highlight, Image, List, Stack, Text, Title } from "@mantine/core"

import sticker from '../../../public/img/sticker.png'
import sticker_paper from '../../../public/img/sticker-paper.jpg'

function CricutStickerBundle() {
    return (
        <>
            <Stack mx={'auto'} maw={800} p={"md"}>
                <Title>Cricut Sticker Bundle</Title>
                <Text>Cricut Printable Sticker Paper gives you endless color possibilities, using your home printer and Cricut Explore machine to print and cut out nearly any image cleanly and precisely - no scissors required! Printable sticker paper adheres well to most surfaces and is not repositionable. Keep printed images dry to preserve longevity. Use your printer's software to calibrate colours before printing for optimal results.</Text>

                <Title>FREE DELIVERY ON STANDARD ORDERS OVER RM300*</Title>
                <Text>This offer is subject to all of the following terms and conditions:</Text>
                <List>
                    <List.Item>Free shipping is only valid to destinations within Malaysia.
                    </List.Item>
                    <List.Item>To qualify, your order must be greater than RM300 after any sale discounts or coupons are applied. The order value is not inclusive of any quoted freight charges or installation charges</List.Item>
                    <List.Item>Offer excludes Big & Bulky and Oversized products</List.Item>
                    <List.Item>Offer excludes eGift Cards.
                    </List.Item>
                    <List.Item>This offer only applies to orders placed online for delivery.
                    </List.Item>
                    <List.Item>This free shipping offer may be withdrawn or altered at any-time.
                    </List.Item>
                </List>
                <Text>Online orders must meet the above criteria in full to qualify for free shipping*.</Text>

                <Stack my={'xl'} w={'100%'}>
                    <Title my={'xl'} order={2} ta="center" >
                        Some latest Cricut Bundles.
                    </Title>
                    <Group justify="flex-start" gap={'xl'}>
                        <Stack align="flex-start" gap={0}>
                            <Image src={sticker} height={200} width={200} />
                            <Title ta={'left'} order={3}>
                                Printable Sticker Paper - US Letter (50 ct)
                            </Title>
                            <Title ta={'left'} order={5} mt={'xl'}>
                                Description
                            </Title>
                            <Text ta={'left'} fw={500} size="xs"  >
                                Personalize the world around you with Cricut Printable Sticker Paper. Made to simplify your sticker-making, this amazing material works with your home inkjet printer to print, then cut full-color sticker designs. Decorate notebooks, reward homework assignments, and make custom gift tags. Just create your design and print it, then your Cricut cutting machine automatically recognizes & precision-cuts the shapes for the custom stickers of your dreams. Features a thin liner to reduce printer jams. For best results, remove printer paper from printer tray. Then, load and print only one sheet of Cricut Sticker Paper at a time.
                            </Text>
                            <Title ta={'left'} order={5} mt={'md'}>
                                Features
                            </Title>
                            <List>
                                <List.Item>50 sheets 8.5 in x 11 in (21.6 cm x 27.9 cm)</List.Item>
                                <List.Item>Features a thin liner to reduce printer jams</List.Item>
                                <List.Item>Offer excludes Big & Bulky and Oversized products</List.Item>
                                <List.Item>Requires inkjet printer</List.Item>
                                <List.Item>Compatible with Cricut Explore® and Cricut Maker® machines, and Cricut Joy Xtra™</List.Item>
                                <List.Item>This free shipping offer may be withdrawn or altered at any-time.</List.Item>
                            </List>
                            <Title ta={'left'} order={5} mt={'md'}>
                                Compatibility
                            </Title>
                            <List>
                                <List.Item>Cricut Maker</List.Item>
                                <List.Item>Cricut Explore Machines</List.Item>
                                <List.Item>Cricut Joy Xtra</List.Item>
                            </List>
                            <Button mt={"md"} fullWidth variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                        </Stack>
                    </Group>
                </Stack>


            </Stack>
            <Box w={'100%'} mx="auto" >
                <BackgroundImage
                    src={sticker_paper}
                    radius="xs"
                >
                    <Center py={100}
                        px={'auto'} style={{ flexDirection: 'column', alignItems: 'center' }}> 
                        <Title maw={700} c={'black'} ta={'center'} >Crafting Brilliance with Cricut Sticker Paper</Title>
                        <Text c="black" maw={700} fw={500} ta={'center'} mt={'md'} px={'sm'}>
                            Cricut Sticker Paper opens a world of artistic possibilities, allowing crafters to add a personalized touch to their creations. This specially designed sticker paper by Cricut offers a seamless crafting experience, ensuring precise and vibrant stickers for various projects. Whether you're embellishing your planner, customizing gifts, or adding flair to your DIY projects, Cricut Sticker Paper delivers unmatched quality. Its easy compatibility with Cricut cutting machines ensures precise cuts, while the adhesive backing ensures a hassle-free application. Elevate your crafting journey with Cricut Sticker Paper, where innovation meets self-expression in every adhesive detail.
                        </Text>
                    </Center>
                </BackgroundImage>
            </Box>

        </>
    )
}

export default CricutStickerBundle;
