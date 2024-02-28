import { Group, Text, Title } from "@mantine/core";

function KeyPoints({ keyPoints }) {
    return (
        <Group px={'md'} maw={760} mx={'auto'} my={'xl'}>
            {keyPoints.map((point) =>
                <>
                    <Title order={3}>
                        {point.title}
                    </Title>
                    <Text>
                        {point.description}
                    </Text>
                </>
            )}
        </Group>
    )
}

export default KeyPoints;
