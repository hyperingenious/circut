import { Group, Image, Stack, Text, Title } from "@mantine/core";
import classes from './HowToWork.module.css'
import how_1 from '../../../public/img/howto/howt-1.png'
import how_2 from '../../../public/img/howto/howto-2.png'
import how_3 from '../../../public/img/howto/howto-3.png'
import how_4 from '../../../public/img/howto/howto-4.png'
import how_5 from '../../../public/img/howto/howto-5.png'

function HowToWork() {
    return (
        <Group mx={'auto'} style={{ flexDirection: 'column' }}>
            <Stack gap={0}>
                <Title mb={0} order={2} className={classes.title} ta="center" mt="sm">
                    How Cricut really works?
                </Title>
            </Stack>

            <Stack>
                <Group justify="center" >
                    <Stack maw={400}>
                        <Title>1. Get Inspired.</Title>
                        <Text>Design your idea from scratch or find inspiration in the Cricut design library.
                        </Text>
                    </Stack>
                    <Image src={how_1} height={250} />
                </Group>
            </Stack>

            <Stack>
                <Group justify="center" >
                    <Image src={how_2} height={250} />
                    <Stack maw={400}>
                        <Title> 2. Make it yours.</Title>
                        <Text>Add a name or a note, experiment with colours, fonts, effects & more — whatever makes your creative heart sing.
                        </Text>
                    </Stack>
                </Group>
            </Stack>

            <Stack>
                <Group justify="center" >
                    <Stack maw={400}>
                        <Title>3. Cut your design.
                        </Title>
                        <Text>Let your Cricut machine work its magic, cutting every piece of your project with intricacy & precision.


                        </Text>
                    </Stack>
                    <Image src={how_3} height={250} />
                </Group>
            </Stack>

            <Stack>
                <Group justify="center" >
                    <Image src={how_4} height={250} />
                    <Stack maw={400}>
                        <Title>4. Put it all together.
                        </Title>
                        <Text>DeAssemble the pieces or apply your design to almost anything — from notebooks to nightlights, T-shirts to totes.


                        </Text>
                    </Stack>
                </Group>
            </Stack>

            <Stack>
                <Group justify="center" >
                    <Stack maw={400}>
                        <Title>5. Admire your work.
                        </Title>
                        <Text>You did it! Now comes the hardest part: Decide to keep it for yourself or gift it to someone you love.
                        </Text>
                    </Stack>
                    <Image src={how_5} height={250} />
                </Group>
            </Stack>
        </Group>
    )
}

export default HowToWork
