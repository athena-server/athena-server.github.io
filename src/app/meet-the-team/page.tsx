/*

* these comments are for information only and should be deleted before merging
* only edit this page, do not modify others
* when pushing to github, ensure no other files are modified
* use <Card /> component with specified props from src/components/Carded
* default font is inter and no change is required to use the font
* to use alumniSans or Geo, refer other pages where those fonts are used
* 
* don't create any components
* you can make use of any existing components
* 
* clarify any doubts before acting on them

*/


import Card from "@/components/Card"
import Container from "@/components/Container"
import Section from "@/components/Section"
import { alumniSans, geo } from "@/fonts"

const Page = () => {
    return (
        <Container>
            <Section className="min-h-screen h-full mb-16 pt-20 lg:pt-24">
                <Card
                    imageUrl="/Card/mayank.jpg"
                    name="Nandana Neo"
                    socials={{ email: "hello@hello.com" }}
                />
            </Section>
        </Container>
    )
}

export default Page;