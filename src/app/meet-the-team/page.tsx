/*

* these comments are for information only and should be deleted before merging
* only edit this page, do not modify others
* when pushing to github, ensure no other files are modified
* use <Card /> component with specified props from src/components/Card, but utnil that page is created just the dummy layout i have created
* 
* don't create any components
* you can make use of any existing components
* 
* clarify any doubts before acting on them

*/


import Container from "@/components/Container"
import Section from "@/components/Section"
import { alumniSans, geo } from "@/fonts"


const DummyCard = () => {
    return (
        <div className="outline w-fit flex flex-col gap-[5px]">
            <div className="h-[250px] w-[250px] outline" />
            <span className={`${alumniSans.className} text-3xl font-bold text-center w-full px-[9px] py-[7px]`}> hello </span>
        </div>
    )
}

const Page = () => {
    return (
        <Container>
            <Section className="min-h-screen h-full mb-16 pt-20 lg:pt-24">
                <DummyCard /> {/* use card like this wherever required for layout*/}
            </Section>
        </Container>
    )
}

export default Page;