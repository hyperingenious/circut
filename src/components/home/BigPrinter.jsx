import { Group, Image } from "@mantine/core";
import theImage from '../../../public/img/big-printer.png'

function BigPrinter() {
    return (
        <Group maw={1100} mx={'auto'} justify="center" my={'xl'}>
            <Image src={theImage} my={'xl'} radius={'xl'} h={400} />
        </Group>
    )
}

export default BigPrinter
