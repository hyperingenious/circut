import { Button, Group, Image, Stack, Text, Title } from "@mantine/core"

function ProductShowCase({ productArray }) {
    return (
        <Group justify="center" gap={'xl'} maw={1100} my={'xl'} mx={'auto'}>
            {productArray.map((e, i) => <Stack key={i} align="center" gap={0}>
                <Image src={e.image} height={100} style={{width:'200px'}} />
                <Title ta={'center'} maw={300} order={3}>
                    {e.title}
                </Title>
                <Text ta={'center'} fw={500} size="xs" maw={300} >
                    {e.description}
                </Text>
                <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
            </Stack>)}
        </Group>
    )
}

export default ProductShowCase;