import { Badge, Box, Image, List, Stack, Text, Title } from "@mantine/core";

import cdsd_1 from '../../../public/img/cricut-design-space-download/cdsd-1.png'
import cdsd_2 from '../../../public/img/cricut-design-space-download/cdsd-2.png'
import cdsd_3 from '../../../public/img/cricut-design-space-download/cdsd-3.png'
import cdsd_4 from '../../../public/img/cricut-design-space-download/cdsd-4.png'
import cdsd_5 from '../../../public/img/cricut-design-space-download/cdsd-5.png'
import cdsd_6 from '../../../public/img/cricut-design-space-download/cdsd-6.png'
import cdsd_7 from '../../../public/img/cricut-design-space-download/cdsd-7.png'
import cdsd_8 from '../../../public/img/cricut-design-space-download/cdsd-8.png'

function CircutDesignSpaceDownload() {
    return (
        <Stack maw={800} mx={'auto'} px={'md'}>
            <Title>
                Downloading and Installing Design Space
            </Title>
            <Badge size="xs">Edited: November 3, 2023</Badge>
            <Text size="md" fw={500}>Installing Design Space</Text>
            <Text>Design Space can be installed on your Windows or Mac computer or on your iOS or Android device. Here are the minimum recommended system requirements.
            </Text>
            <Box p={'md'} component="a" color="red" style={{
                border: '1px solid red'
            }}>
                <Text c={'red'}>
                    <b>Important:</b>1 an internet connection is required to download and sign in to this application.
                </Text>

            </Box>

            <Text>
                To download, install and launch Design Space for Desktop for your Windows computer:
            </Text>

            <List type="ordered" >
                <List.Item py={'sm'}>Open an internet browser and go to design.cricut.com</List.Item>
                <Image src={cdsd_1} w={'100%'} />

                <List.Item py={'sm'}>Select the checkbox to agree to Cricut Terms of Use and Privacy Policy, and select Download. During the download, the screen may change. This will be a little different with every browser. Google Chrome is used in the example below.
                </List.Item>
                <Image src={cdsd_2} w={'100%'} />

                <List.Item py={'sm'}>When the download is complete, double-click the file in the browser or in your Downloads folder.</List.Item>
                <Image src={cdsd_3} w={'100%'} />

                <List.Item py={'sm'}>If a window opens to ask if you trust the application, select the option to trust the application. </List.Item>
                <Image src={cdsd_4} w={'100%'} />

                <List.Item py={'sm'}>A setup window displays installation progress.</List.Item>
                <Image src={cdsd_5} w={'100%'} />

                <List.Item py={'sm'}>Sign in with your Cricut ID and password.</List.Item>
                <Image src={cdsd_6} w={'100%'} />

                <List.Item py={'sm'}>A Design Space for Desktop icon automatically gets added to your desktop screen. Right-click on the icon and choose Pin to Taskbar or drag the icon to the Taskbar to pin the shortcut within easy reach.
                </List.Item>

                <List.Item py={'sm'}>Enjoy using Design Space for Desktop!
                </List.Item>
            </List>

            <Title>Things to know:</Title>
            <List >
                <List.Item py={'sm'}>The app remembers your sign-in. You won't have to sign in each time you launch unless you signed out of the last session.</List.Item>
                <List.Item>
                    The app does not auto-save. Save your projects frequently as you design and before you quit the application. </List.Item>

            </List>

            <Title>
                Uninstalling Cricut Design Space
            </Title>
            <Text>
                If you'd like to uninstall Design Space from your computer or mobile device for troubleshooting purposes or permanently, please follow the steps below:
            </Text>

            <List type="ordered" >
                <List.Item py={'sm'}>Ensure that Design Space for Desktop is closed. If the application is not closed it will not uninstall properly.</List.Item>

                <List.Item py={'sm'}>  Open an internet browser and go to design.cricut.com</List.Item>
                <Image src={cdsd_7} w={'100%'} />

                <List.Item py={'sm'}>  Use the search field to search "Cricut." Select Cricut Design Space from the list, then select the Uninstall button.
                </List.Item>
                <Image src={cdsd_7} w={'100%'} />

                <List.Item py={'sm'}>
                    Confirm that you wish to uninstall Cricut Design Space.
                </List.Item>
                <Image src={cdsd_8} w={'100%'} />

                <List.Item py={'sm'}>The system will complete the uninstallation. If prompted, restart your computer.
                </List.Item>


            </List>


            <Box p={'md'} component="a" color="red" style={{
                border: '1px solid green'
            }}>
                <Text c={'green'}>
                    <b> Note:</b> There may be slight variations depending on your version of Windows. Visit windows.microsoft.com for more information.


                </Text>

            </Box>
            <Box p={'md'} component="a" color="orange" style={{
                border: '1px solid orange'
            }}>
                <Text c={'orange'}>
                    <b>Tip:</b> Once programs are uninstalled from the computer, it is recommended that you restart the computer before reinstalling programs.




                </Text>

            </Box>


        </Stack >
    )
}

export default CircutDesignSpaceDownload
