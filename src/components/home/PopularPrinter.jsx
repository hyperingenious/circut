import { Button, Group, Image, Stack, Text, Title } from "@mantine/core"
import printer_1 from '../../../public/img/printers/printer-1.png'
import printer_2 from '../../../public/img/printers/printer-2.png'
import printer_3 from '../../../public/img/printers/printer-3.png'

import classes from './PopularPrinter.module.css'

function PopularPrinter() {
    return (
        <Stack my={'xl'} w={'100%'}>
            <Title my={'xl'} order={2} className={classes.title} ta="center" >
                Hero one of the Best Printers.
            </Title>
            <Group justify="center" gap={'xl'}>
                <Stack align="center" gap={0}>
                    <Image src={printer_1} height={100} />
                    <Title ta={'center'} order={3}>
                        Cricut Joy
                    </Title>
                    <Text ta={'center'} fw={500} size="xs" maw={300} >
                        Ultra-compact cutting machine for fun and functional everyday projects like custom cards, decals & labels.
                    </Text>
                    <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                </Stack>
                <Stack align="center" gap={0}>
                    <Image src={printer_2} height={100} />
                    <Title ta={'center'} order={3}>
                        Cricut Joy
                    </Title>
                    <Text ta={'center'} fw={500} size="xs" maw={300} >
                        Ultra-compact cutting machine for fun and functional everyday projects like custom cards, decals & labels.
                    </Text>
                    <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                </Stack>
                <Stack align="center" gap={0}>
                    <Image src={printer_3} height={100} />
                    <Title ta={'center'} order={3}>
                        Cricut Joy
                    </Title>
                    <Text ta={'center'} fw={500} size="xs" maw={300} >
                        Ultra-compact cutting machine for fun and functional everyday projects like custom cards, decals & labels.
                    </Text>
                    <Button mt={"md"} variant="filled" color="rgba(0, 0, 0, 1)" size="xs" radius="xl">Show Now</Button>
                </Stack>
            </Group>
        </Stack>
    )
}

export default PopularPrinter
