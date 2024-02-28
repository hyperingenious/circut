import { Group } from "@mantine/core"
import KeyPoints from "../../components/KeyPoints";
import Wonder from "../../components/Wonder";
import cricut_banner from '../../../public/img/cricut-cutter/cricut-cutter-banner.jpg'

function CricutCutter() {
    const keyPoints = [
        {
            title: 'Precision Cutting',
            description: 'Cricut cutters are known for their precise cutting capabilities. They can cut a wide range of materials with accuracy, from paper and vinyl to fabric and leather.'
        },
        {
            title: 'Versatility',
            description: 'These cutters are versatile and support a variety of materials, making them suitable for a range of DIY and crafting projects. Users can create custom designs for cards, apparel, home decor, and more.'
        },
        {
            title: 'Design Flexibility',
            description: 'With Cricut Design Space, users have access to a vast library of pre-designed projects and the ability to create their own custom designs. This software allows for easy customization and personalization.'
        },
        {
            title: 'Wireless Connectivity',
            description: 'Many Cricut models offer wireless connectivity, allowing users to connect and control the cutter via Bluetooth. This enhances convenience and eliminates the need for physical connections.'
        },
        {
            title: 'Scoring and Writing Abilities',
            description: 'Cricut machines often come equipped with scoring and writing tools, enabling users to add intricate details to their projects. This is especially useful for creating cards, invitations, and other paper crafts.'
        },
        {
            title: 'Print Then Cut Feature',
            description: 'The Print Then Cut feature allows users to print designs on a home printer and then cut them precisely using the Cricut machine. This is ideal for projects that involve detailed or multicolored designs.'
        },
        {
            title: 'Ease of Use',
            description: 'Cricut cutters are designed with user-friendliness in mind. They come with intuitive interfaces, making it easy for both beginners and experienced crafters to navigate and operate the machine.'
        },
        {
            title: 'Adaptive Tool System',
            description: 'Many Cricut models feature an adaptive tool system, allowing users to easily swap out tools for different functions. This includes cutting blades, scoring stylus, pens, and more.'
        },
        {
            title: 'Compact and Portable',
            description: 'Cricut machines are often compact and portable, making them suitable for crafting at home or on the go. This feature appeals to users who value flexibility in their creative workspace.'
        },
        {
            title: 'Integration with Smart Devices',
            description: 'Some Cricut models offer integration with smart devices through dedicated apps. Users can design and control their projects using tablets or smartphones for added convenience.'
        },
        {
            title: 'Offline Mode',
            description: 'Certain Cricut machines support offline mode, allowing users to work on their projects without requiring a constant internet connection. This is beneficial for crafting in various settings.'
        },
        {
            title: 'Compatibility with Various Materials',
            description: 'Cricut cutters can handle a diverse range of materials, including specialty items like adhesive foil, felt, and chipboard. This widens the possibilities for creative projects.'
        },
        {
            title: 'Crafting Dreams with Precision: The Cricut Cutter Odyssey',
            description: 'Embark on a transformative journey with the Cricut Cutter, where creativity knows no bounds. Feel the rhythmic hum of possibilities as this extraordinary machine brings your artistic aspirations to life. Immerse yourself in the artistry of precision cutting, where each curve and contour is a testament to your unique vision.'
        },
        {
            title: 'Explore Limitless Creativity',
            description: 'Unleash your creativity without constraints; the Cricut Cutter is your accomplice in exploring the vast spectrum of artistic expression. From intricate paper designs to personalized fabric embellishments, it\'s a journey into limitless crafting possibilities.'
        },
        {
            title: 'Empowering Personalization',
            description: 'Witness the magic of personalization as the Cricut Cutter transforms ordinary materials into bespoke masterpieces. Add a touch of individuality to gifts, home decor, and personal items, turning each creation into a reflection of your distinctive style.'
        },
        {
            title: 'A Symphony of Materials',
            description: 'Marvel at the versatility of the Cricut Cutter as it effortlessly dances through various materials. From the soft embrace of felt to the resilient strength of chipboard, every material becomes a note in the symphony of your crafting symphony.'
        },
        {
            title: 'Crafting Connections',
            description: 'Beyond the tangible creations, the Cricut Cutter weaves a tapestry of connections. Share the joy of crafting with loved ones, as you gift them custom-made treasures that speak volumes about the care and thoughtfulness invested in each piece.'
        },
        {
            title: 'Inspiration on Demand',
            description: 'At the heart of every creative endeavor lies inspiration. With the Cricut Cutter by your side, inspiration is not just a fleeting muse; it\'s a constant companion, ready to be summoned with each press of a button.'
        },
        {
            title: 'Elevating Everyday Moments',
            description: 'Transform mundane moments into extraordinary memories with the Cricut Cutter. Elevate your everyday surroundings with personalized touches that turn the ordinary into the extraordinary, leaving an indelible mark on the canvas of your life.'
        },
        {
            title: 'Crafting Confidence',
            description: 'Experience the confidence that comes with precision and perfection. The Cricut Cutter is not just a tool; it\'s a trusty ally that empowers you to embark on crafting adventures with the assurance that every cut is a stroke of mastery.'
        },
        {
            title: 'Title the Unwritten Chapters',
            description: 'As you delve into the world of crafting with the Cricut Cutter, you become the author of untold stories, each cut marking a new chapter in your creative narrative. Let the pages unfold, and witness the beauty of a story written with passion, precision, and the profound impact of the Cricut Cutter.'
        }
    ]
    return (<>
        <Group maw={800} mx={'auto'} my={'md'}>
            <KeyPoints keyPoints={keyPoints} />
        </Group>
        <Wonder bg={'yellow'} image={cricut_banner} title={'Crafting Dreams with Precision: The Cricut Cutter Journey'} text={"Embark on a creative odyssey with the Cricut Cutter, where every cut unfolds a realm of possibilities. This ingenious tool transforms your tangible art, cutting through the ordinary to reveal the extraordinary. With precision as its  and versatility as its palette, the Cricut Cutter empowers you to craft moments, memories, and masterpieces. Let your creativity flow, and watch as this remarkable machine turns your visions into reality, one meticulous cut at a time. Your crafting journey is not just a process; it's a celebration of the artistry within you, guided by the ingenuity of the Cricut Cutter. Craft your dreams, shape your destiny – the adventure begins with every press of the button."} />
    </>
    )
}

export default CricutCutter;