import BigPrinter from "../components/home/BigPrinter"
import CricutInfo from "../components/home/CricutInfo"
import { HeroPage } from "../components/home/HeroPage"
import HomeCarousel from "../components/home/HomeCarousel"
import HowToWork from "../components/home/HowToWork"
import PopularPrinter from "../components/home/PopularPrinter"

function Home() {
    return (
        <>
            <HeroPage />
            <CricutInfo />
            <HomeCarousel />
            <PopularPrinter />
            <BigPrinter />
            <HowToWork />
        </>
    )
}

export default Home
