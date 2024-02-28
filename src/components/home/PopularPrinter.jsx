import { Stack, Title } from "@mantine/core"

import printer_1 from '../../../public/img/printers/printer-1.png'
import printer_2 from '../../../public/img/printers/printer-2.png'
import printer_3 from '../../../public/img/printers/printer-3.png'

import classes from './PopularPrinter.module.css'
import ProductShowCase from "../ProductShowCase"

function PopularPrinter() {
    const productArray = [
        { image: printer_1, title: "Cricut Joy", description: 'Ultra-compact cutting machine for fun and functional everyday projects like custom cards, decals & labels.' },
        { image: printer_2, title: "Cricut Joy", description: 'Ultra-compact cutting machine for fun and functional everyday projects like custom cards, decals & labels.' },
        { image: printer_3, title: "Cricut Joy", description: 'Ultra-compact cutting machine for fun and functional everyday projects like custom cards, decals & labels.' },
    ]
    return (
        <Stack my={'xl'} w={'100%'}>
            <Title my={'xl'} order={2} className={classes.title} ta="center" >
                Hero one of the Best Printers.
            </Title>
            <ProductShowCase productArray={productArray} />        </Stack>
    )
}

export default PopularPrinter
