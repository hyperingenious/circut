import { Group, Image, Stack, Text, Title } from "@mantine/core";
import heatPress from '../../../public/img/hp-banner.png'
import hp_1 from '../../../public/img/heat-press/hp-1.png'
import hp_2 from '../../../public/img/heat-press/hp-2.png'
import hp_3 from '../../../public/img/heat-press/hp-3.png'

function CricutEasyPress() {
    return (
        <Stack maw={850} mx={'auto'} px={'md'}>
            <Image w={'100%'} src={heatPress} />
            <Text size="xl" mx={'auto'} fw={500} w={400} ta={'center'}>
                The speed of a heat press. The convenience of an iron. Cricut EasyPress® 2 makes it easy to take on any heat-transfer project that comes your way.

            </Text>
            <Title>
                Effortless Impressions: Mastering Easy Heat Press Techniques
            </Title>
            <Text>
                Discover the art of hassle-free heat pressing with our comprehensive guide! Whether you're a novice or a seasoned crafter, our easy heat press tips and tricks will empower you to create stunning custom designs effortlessly. Uncover the secrets to achieving professional-quality results without the stress. From selecting the right materials to mastering temperature settings, our step-by-step instructions will make the heat press process a breeze. Elevate your crafting game and bring your ideas to life with the simplicity of easy heat pressing – your gateway to endless creative possibilities!</Text>

            <Group mx={'auto'} style={{ flexDirection: 'column' }}>

                <Title ta={'center'} mx={'auto'}>How it works.</Title>

                <Stack>
                    <Group justify="center" >
                        <Stack maw={400}>
                            <Title>Set time & temp.</Title>
                            <Text>Our online Heat Guide gives you ideal settings for almost any project. </Text>
                        </Stack>
                        <Image src={hp_1} height={250} />
                    </Group>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Image src={hp_2} height={250} />
                        <Stack maw={400}>
                            <Title>Apply heat.

                            </Title>
                            <Text>The evenly heated plate means consistent, high-quality transfers.



                            </Text>
                        </Stack>
                    </Group>
                </Stack>

                <Stack>
                    <Group justify="center" >
                        <Stack maw={400}>
                            <Title>Enjoy lasting results.

                            </Title>
                            <Text>Even after repeated washes, your transfers will really last.


                            </Text>
                        </Stack>
                        <Image src={hp_3} height={250} />
                    </Group>
                </Stack>
            </Group>

        </Stack>


    )
}

export default CricutEasyPress
