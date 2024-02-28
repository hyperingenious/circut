import { Stack, Text, Title } from "@mantine/core"

function SmallIntro({ title, description }) {
    return (
        <Stack mx={"auto"} maw={800} p={"md"}>
            <Title>{title}</Title>
            <Text>
                {description}</Text>
        </Stack>
    )
}

export default SmallIntro
