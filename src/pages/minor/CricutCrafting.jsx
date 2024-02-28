import { AspectRatio, Card, Container, Image, List, SimpleGrid, Stack, Text, Title } from "@mantine/core"
import classes from './CricutCrafting.module.css'


const mockdata = [
    {
        title: 'Cricut handmade ART',
        image:
            '../../../public/img/cricut-crafting/cricut-crafting-1.webp',
        date: 'August 18, 2022',
    },
    {
        title: 'Cricut Craft made out of paper',
        image:
            '../../../public/img/cricut-crafting/cricut-crafting-2.jpeg',
        date: 'August 27, 2022',
    },
    {
        title: 'Cricut Craft woolen thing',
        image:
            '../../../public/img/cricut-crafting/cricut-crafting-3.webp',
        date: 'September 9, 2022',
    },
    {
        title: 'Cricut Crafting melting',
        image:
            '../../../public/img/cricut-crafting/cricut-crafting-4.webp',
        date: 'September 12, 2022',
    },
];

function CricutCrafting() {

    const cards = mockdata.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {article.date}
            </Text>
            <Text className={classes.title} mt={5}>
                {article.title}
            </Text>
        </Card>
    ));
    return (
        <Stack mx={'auto'} maw={800} p={"md"}>
            <Container py="xl">
                <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
            </Container>
            <Title>Cricut Maker: Cutting craft foam with Knife blade
            </Title>
            <Text>Cricut Printable Sticker Paper gives you endless color possibilities, using your home printer and Cricut Explore machine to print and cut out nearly any image cleanly and precisely - no scissors required! Printable sticker paper adheres well to most surfaces and is not repositionable. Keep printed images dry to preserve longevity. Use your printer's software to calibrate colours before printing for optimal results.</Text>



            <Title>What thicknesses of craft foam can I cut with Knife Blade?</Title>
            <List>
                <List.Item>1.5mm</List.Item>
                <List.Item>2mm</List.Item>
                <List.Item>3mm</List.Item>
            </List>


            <Title>  What do I look for when purchasing materials?</Title>
            <List>
                <List.Item>Choose the thickness of material that works best for your project.</List.Item>
            </List>

            <Title> How large can my cuts be?</Title>
            <List>
                <List.Item>Maximum size of cut: 10.5” x 11.5” or 10.5” x 23.5”</List.Item>
            </List>

            <Title>What mat should I use?</Title>
            <List>
                <List.Item>StandardGrip Mat</List.Item>
            </List>

            <Title> How do I prepare the materials?</Title>

            <List>
                <List.Item>Place craft foam on mat smooth side down. (Specialty finishes should be face up.)</List.Item>
                <List.Item>Tape all four edges of the material to the mat within 1” of the corner (masking tape or blue painter’s tape is recommended).</List.Item>
                <List.Item>On Cricut Maker™ machine, move white star wheels all the way to the right (Learn More).</List.Item>
                <List.Item>If left in place, star wheels may leave an imprint on project material.</List.Item>
                <List.Item>When cutting thicker craft foam, clean front metal bar.</List.Item>
                <List.Item>Make sure no part of your material will go under the rubber rollers (this could cause the machine to jam or error)</List.Item>
                <List.Item>Whenever possible, test a cut prior to cutting your main project.</List.Item>
                <List.Item>If edges come out rugged, replace blade prior to the final cut.</List.Item>
            </List>









            <Title>             How long will my cuts take?
            </Title>


            <List>
                <List.Item>Thicker materials require multiple cut-passes with gradually increasing pressures. This means that Knife Blade cuts will take significantly more time than when cutting thinner materials with other blades.</List.Item>
                <List.Item>Design Space will tell you approximately how long a Knife Blade cut will take.</List.Item>
                <List.Item>Once you select a cut setting and load your mat for a Knife Blade project, an alert will inform you that a longer-than-usual cut time is expected.</List.Item>
                <List.Item> When the first cut pass has been completed, Design Space calculates the expected cut-time remaining based on how long the first pass took and based on how many passes are pre-programmed for that material. It also displays pass the machine is currently executing and how many total passes are expected.</List.Item>
                <List.Item> Tip: The duration of the cut will vary depending on the material, size, and intricacy of the image(s) being cut.
                </List.Item>
            </List>







            <Title>What should I do while my machine is cutting?</Title>
            <List>
                <List.Item>Check on the machine cutting frequently to review cuts.</List.Item>
            </List>


            <Title> Once my cut is complete, what do I do next?</Title>

            <List>
                <List.Item>Expect to see Knife blade impressions or cuts on the mat (if cutting several of the same images, place the image on different parts of your cutting mat for successful cuts).
                    Remove remaining craft foam cuts from the mat.
                    Once cut is complete, carefully remove your cuts then remove the tape and excess material.
                    Tips and Troubleshooting
                </List.Item>
                <List.Item>If material moves while being cut, your mat may not be sticky enough.</List.Item>
                <List.Item>If edges of cut pieces have rough, uneven edges, the blade may need to be replaced.</List.Item>
            </List>

        </Stack>
    )
}

export default CricutCrafting
