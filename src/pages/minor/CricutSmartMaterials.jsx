import { Button, Group, Image, Stack, Text, Title } from "@mantine/core";

import smart_material_1 from '../../../public/img/smart-material/smart-material-1.jpg'
import smart_material_2 from '../../../public/img/smart-material/smart-material-2.jpg'
import smart_material_3 from '../../../public/img/smart-material/smart-material-3.jpg'
import smart_banner from '../../../public/img/smart-material/smart-banner.jpg'
import Wonder from "../../components/Wonder";
import SmallIntro from '../../components/SmallIntro'

function CricutSmartMaterials() {
    return (
        <>
            <SmallIntro
                title={'Featured Cricut Smart Materials'}
                description={"Discover unparalleled crafting convenience with our Featured Cricut Smart Materials. These innovative materials, specifically designed for use with Cricut cutting machines, ensure precision and ease in every project"}
            />

            <Group justify="center" gap={"xl"} my={"xl"} maw={800} mx={'auto'}>
                <Stack align="center" gap={0}>
                    <Image
                        src={smart_material_1}
                        height={100}
                        style={{ width: "200px" }}
                    />
                    <Title ta={"center"} order={3} maw={220}>
                        Cricut Joy™ Smart Vinyl™ Glossy – Permanent
                    </Title>
                    <Text ta={"center"} fw={500} size="xs" maw={220}>
                        Cricut Joy™ Smart Vinyl™ Glossy – Permanent: Create vibrant and lasting designs with this glossy permanent vinyl for Cricut Joy™, perfect for adding a polished finish to your DIY projects.
                    </Text>
                    <Button
                        mt={"md"}
                        variant="filled"
                        color="rgba(0, 0, 0, 1)"
                        size="xs"
                        radius="xl"
                    >
                        Show Now
                    </Button>
                </Stack>
                <Stack align="center" gap={0}>
                    <Image
                        src={smart_material_2}
                        height={100}
                        style={{ width: "200px" }}
                    />
                    <Title ta={"center"} order={3} maw={220}>
                        Cricut Joy™ Smart Iron-On™
                    </Title>
                    <Text ta={"center"} fw={500} size="xs" maw={220}>
                        Cricut Joy™ Smart Iron-On™: Effortlessly personalize fabrics with Cricut Joy™ Smart Iron-On™, a versatile heat transfer material that adds a touch of creativity to clothing and accessories.


                    </Text>
                    <Button
                        mt={"md"}
                        variant="filled"
                        color="rgba(0, 0, 0, 1)"
                        size="xs"
                        radius="xl"
                    >
                        Show Now
                    </Button>
                </Stack>
                <Stack align="center" gap={0}>
                    <Image
                        src={smart_material_3}
                        height={100}
                        style={{ width: "200px" }}
                    />
                    <Title ta={"center"} order={3} maw={220}>
                        Cricut Joy™ Smart Vinyl™ Matte – Permanent                    </Title>
                    <Text ta={"center"} fw={500} size="xs" maw={220}>
                        Cricut Joy™ Smart Vinyl™ Matte – Permanent: Achieve a muted, sophisticated look with this matte permanent vinyl designed for Cricut Joy™, ideal for crafting stylish and durable decals.
                    </Text>
                    <Button
                        mt={"md"}
                        variant="filled"
                        color="rgba(0, 0, 0, 1)"
                        size="xs"
                        radius="xl"
                    >
                        Show Now
                    </Button>
                </Stack>
            </Group>
            <Stack mx={"auto"} maw={800} p={"md"}>
                <Title>Cricut Smart Materials:</Title>
                <Text>
                    Cricut Smart Materials are revolutionary crafting materials designed
                    for seamless compatibility with Cricut cutting machines, enhancing the
                    crafting experience for users. Crafters interested in web development,
                    like yourself, will find these materials exceptionally user-friendly
                    and efficient.
                </Text>
                <Text>
                    The standout feature of Cricut Smart Materials is their convenience.
                    Specifically formulated to work without a cutting mat, they offer a
                    time-saving and hassle-free crafting process. This makes them an ideal
                    choice for individuals looking to balance web development with
                    crafting without the need for additional setup.
                </Text>
                <Text>
                    The versatility of Cricut Smart Materials is another key advantage.
                    Whether you're creating decals, labels, or intricate designs, the
                    extensive range of materials caters to diverse crafting needs. Their
                    compatibility with various Cricut machines adds flexibility for users
                    with different models.
                </Text>
                <Text>
                    The cost-effectiveness of Cricut Smart Materials is a practical
                    consideration, allowing crafters to indulge in creativity without
                    straining budgets. The user-friendly nature and compatibility with
                    different Cricut machines ensure a positive and streamlined crafting
                    experience.
                </Text>
            </Stack>
            <Wonder image={smart_banner} bg={'cyan'} title={'Crafting Wonders: Transforming Dreams with Cricut Cut Smart Materials'} text={"Dive into a world of creative possibilities and be inspired to craft something truly extraordinary with Cricut Cut Smart Materials. Whether it's personalized decals, intricate paper projects, or fabric masterpieces, these materials unlock a realm of limitless imagination. Join the crafting journey, and let the magic of Cricut propel you to create amazing, one-of-a-kind wonders that leave a lasting impression. Your creative journey begins here – turn your visions into reality with the precision and ease of Cricut Cut Smart Materials."} />
        </>
    );
}

export default CricutSmartMaterials;
