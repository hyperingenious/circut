import { Group, Image, List, Text, Title } from "@mantine/core"
import sticker_paper from '../../../public/img/sticker-paper.jpg'
function CricutDesignSpaceLogin() {
    return (<>
             <Image
                mx={'auto'} 
                radius="md"
                h={400}
                src={sticker_paper}
            />
        <Group maw={800} mx={'auto'}>
            <Title pl={'sm'}>
                What About Cricut Design Space?
            </Title>
            <Text pl={'sm'}>
                Cricut Design Space is being introduced as a type of software that allows you to design projects and wirelessly cut and print them with your Cricut Maker Machine. You can either start a new project from scratch or you can use a previously designed templates and choose from thousands of images and fonts.
            </Text>
            <Text pl={'sm'}>
                A Cricut Design Space is, where you touch up and organize your creations. In this space, not only you can use and upload your fonts and images but you can also use Cricut’s premium images and fonts through individual purchases, Cricut Access, and Cartridges.
            </Text>
            <Title pl={'sm'}>
                How to Download and Install Software for your Cricut device?
            </Title>
            <Text pl={'sm'}>
                Setting up Cricut device requires a software called Design Space. Here’s how to download it
            </Text>
            <List type="ordered" size="md" withPadding>
                <List.Item>Open a browser i.e., Chrome, Edge. </List.Item>
                <List.Item>Go to cricut.com/setup or cricut design space.</List.Item>
                <List.Item>Select Download. The screen will change during the download process. This will be a little different with every browser.</List.Item>
                <List.Item>Double-click the file in the browser or in your Downloads folder after download is completed.</List.Item>
                <List.Item>If a window opens to ask if you trust the application, select the option to trust the application.</List.Item>
                <List.Item>A setup window displays installation progress.</List.Item>
                <List.Item>Log in with your Cricut account.</List.Item>
                <List.Item>A Design Space for Desktop icon automatically gets added to your desktop screen.  </List.Item>
                <List.Item> Right-click on the icon and choose “Pin to Taskbar” or drag the icon to the Taskbar to pin the shortcut within easy reach.</List.Item>
                <List.Item> Design Space for Desktop is successfully installed.</List.Item>
            </List>


            <Title pl={'sm'}>Guide to Log in to the Design Space Software</Title>
            <List size="md" withPadding pl={'sm'}>
                <List.Item> Open a web browser and enter cricut design space.</List.Item>

                <List.Item> Download & install the “Desing Space” software.</List.Item>

                <List.Item> Then, go to the “Account” and tap on “Sign In” under the “Account Settings” icon.</List.Item>

                <List.Item> Now, enter your registered email address for your Cricut account if you already have one.</List.Item>

                <List.Item> Next, enter the password and tap on Sign In.</List.Item>

                <List.Item> If you are new to the Cricut Desing Space, tap on “Create Cricut ID.”</List.Item>

                <List.Item> After that, provide the required details.</List.Item>

                <List.Item> Read the terms and conditions.</List.Item>

                <List.Item> Then, go back to the previous screen, and tap on “I Agree the Cricut Terms of Use.”</List.Item>

                <List.Item> Also, tap on “Send me Emails (deals, tips, and inspiration).”</List.Item>

                <List.Item> Next, click on Create Cricut ID again.</List.Item>

                <List.Item> And once the above steps are finished, you will get a message about the procedure completion.</List.Item>

                <List.Item> Now, you can see that your account is logged in to the Cricut account via cricut.com/setup.</List.Item>

                <List.Item> In the end, get started with your craft projects easily and quickly.</List.Item>

                <List.Item> Design Space for Desktop is successfully installed.</List.Item>
            </List>


            <Title pl={'sm'}>How to Change your Cricut Account Password?</Title>
            <List size="md" withPadding pl={'sm'}>
                <List.Item> First of all, Sign in to your account on cricut design space.

                </List.Item>

                <List.Item> Then select the person icon on your screen, then go to My Account to access your account details.

                </List.Item>

                <List.Item> Further select Profile from either the left navigation menu or the links under the My Account section, it depends on your choice.

                </List.Item>

                <List.Item> Select the Change Password Box then, enter your new password and confirm. Select Save option and your new password is changed now.

                </List.Item>

                <List.Item>Next time you sign in to cricut.com or Design Space, you can use your new password.

                </List.Item>
            </List>

            <Title pl={'sm'}>Disclaimer</Title>
            <Text mb={'xl'} pl={'sm'}>
                We are not Cricut Design Space. This website is only for informational purposes. We use the title only for reference and not with the intention that we have any affiliation with the brand. Names, logos, images, and trademarks are the property of its respectful owners. We provide support for Install, Activate and Update your product instantly. Your product will be activated from third party support team.
            </Text>
        </Group>
        </>
    )
}

export default CricutDesignSpaceLogin
