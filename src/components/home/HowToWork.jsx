import { Group, Image, Stack, Text, Title } from "@mantine/core";
import classes from './HowToWork.module.css'

function HowToWork() {
    return (
        <Group>
            <Stack gap={0}>
                <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
                    How Cricut really works?
                </Title>
            </Stack>

            <Stack>
                <Group>
                    <Stack>
                        <Title>Lorem ipsum dolor sit amet.</Title>
                        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi iure vel, error consequatur doloribus cupiditate.
                        </Text>
                    </Stack>
                    <Image />
                </Group>
            </Stack>
        </Group>
    )
}

export default HowToWork
