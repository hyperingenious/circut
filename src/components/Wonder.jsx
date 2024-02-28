import { Image, Stack, Text, Title } from "@mantine/core"

function Wonder({ image, bg, title, text }) {
    return (
        <>
            <Image
                mx={'auto'}
                radius="md"
                h={400}
                src={image}
            />
            <Stack align="center" py={120} bg={bg} >
                <Title ta={'center'} maw={800} c={'white'}>
                    {title}
                </Title>
                <Text size="lg" ta={'center'} maw={800} c={'white'}>
                    {text}
                </Text>
            </Stack>
        </>
    )
}

export default Wonder
