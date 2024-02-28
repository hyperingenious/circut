import { AspectRatio, Container, Card, Group, Image, SimpleGrid, Text, Title } from "@mantine/core"
import classes from './CricutDesignSpace.module.css'
import ds_1 from '../../../public/img/cricut-design-space/ds-1.jpg'
import ds_2 from '../../../public/img/cricut-design-space/ds-2.jpg'
import ds_3 from '../../../public/img/cricut-design-space/ds-3.jpg'
import ds_4 from '../../../public/img/cricut-design-space/ds-4.jpg'
import ds_5 from '../../../public/img/cricut-design-space/ds-5.jpg'
import ds_6 from '../../../public/img/cricut-design-space/ds-6.jpg'
import ds_7 from '../../../public/img/cricut-design-space/ds-7.jpg'
import ds_8 from '../../../public/img/cricut-design-space/ds-8.jpg'
import ds_9 from '../../../public/img/cricut-design-space/ds-9.jpg'
import ds_10 from '../../../public/img/cricut-design-space/ds-10.jpg'
import ds_11 from '../../../public/img/cricut-design-space/ds-11.jpg'

const mockdata = [
    {
        title: 'Introduction: Design Space® Tour',
        image: ds_1,
        date: 'September 5, 2022',
        description: 'Embark on a quick tour of our design software.'
    },
    {
        title: 'How to: Use Design Space® across devices',
        image: ds_2,
        date: 'September 7, 2022',
        description: 'Craft at home or on the go. Navigate through Design Space® on your phone or tablet, create or save your design, and seamlessly continue on your desktop or laptop computer.'
    },
    {
        title: 'How to: Save and Share Projects with Design Space®',
        image: ds_3,
        date: 'September 10, 2022',
        description: 'Discover the art of saving and organizing your projects in Design Space, and learn how to share them with the vibrant Cricut Community.'
    },
    {
        title: 'How to: Create Reusable Stencils',
        image: ds_4,
        date: 'September 12, 2022',
        description: 'Design stencils that can be used repeatedly for baked goods, furniture, walls, and more!'
    },
    {
        title: 'How to: Use the Design Space® Layers Panel & Combine Menu',
        image: ds_5,
        date: 'September 15, 2022',
        description: 'This course introduces you to the new Layers Panel and Combine Menu, empowering you to combine objects without commitment. Every action can now be adjusted or undone, visible through the new Layers Panel.'
    },
    {
        title: 'How to: Align & Place Designs',
        image: ds_6,
        date: 'September 20, 2022',
        description: 'Watch as Rabia shares best practices for sizing and aligning your designs on the mat, and accurately placing them on your finished project.'
    },
    {
        title: 'How to: Upload Images',
        image: ds_7,
        date: 'September 25, 2022',
        description: "Learn how to upload images into Design Space, Cricut's design software. In this course, you'll discover how to upload an image of handwriting and use it to create a personalized gift."
    },
    {
        title: 'How to: Create Stickers With Print Then Cut',
        image: ds_8,
        date: 'September 28, 2022',
        description: "In this course, you'll master using print then cut to make stickers with your Cricut cutting machine and an Inkjet printer."
    },
    {
        title: 'How to: Find & Work With Images',
        image: ds_9,
        date: 'October 3, 2022',
        description: "This series of mini-lessons goes beyond surface level to show you how to work with images in Design Space like a seasoned expert."
    },
    {
        title: 'How to: Make Designs Pop with Offset',
        image: ds_10,
        date: 'October 8, 2022',
        description: "Learn how to use the Offset function in Design Space to enhance your projects, including a cake topper and sticker."
    },
    {
        title: 'How to: Use Background Remover',
        image: ds_11,
        date: 'October 12, 2022',
        description: "Fire up Design Space and follow along as we demonstrate the Background Remover tool."
    },
];



function CircutDesignSpace() {
    const cards = mockdata.map((article) => (
        <Card key={article.title} p="md" radius="md" component="a" href="#" className={classes.card}>
            <AspectRatio ratio={1920 / 1080}>
                <Image src={article.image} />
            </AspectRatio>
            <Text c="dimmed" size="xs" tt="uppercase" fw={700} mt="md">
                {article.date}
            </Text>
            <Title className={classes.title} order={2} mt={5}>
                {article.title}
            </Title>
            <Text fw={400} c={'black'} mt={5}>
                {article.description}
            </Text>
        </Card>
    ));

    return (
        <Group maw={800} justify="center" mt={'xl'} mx={'auto'}>
            <Title ta={'center'}>Cricut Design Space</Title>
            <Text ta={'center'}>
                Cricut Design Space is a cutting-edge software platform that revolutionizes the crafting experience for enthusiasts and professionals alike. This user-friendly application seamlessly integrates with Cricut cutting machines, offering a dynamic space where creativity knows no bounds. With its intuitive interface,
            </Text>
            <Container py="xl">
                <SimpleGrid cols={{ base: 1, sm: 2 }}>{cards}</SimpleGrid>
            </Container>
        </Group>
    )
}

export default CircutDesignSpace
