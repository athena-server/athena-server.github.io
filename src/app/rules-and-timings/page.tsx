import Container from "@/components/Container"
import Section from "@/components/Section";
import { alumniSans } from "@/fonts";


/*
    important things to note [DELETE THIS AFTER READING]

    all necessory colours can be used using tailwind using the following syntax: text-neonGreen or bg-neonGreen etc
    colours can also be used within module css using var(--neon-green) etc 
    [REFER TO tailwind.config.ts and globals.css FILE FOR MORE INFO]
    *do not hardcode colours in the css files*
   
    all necessary fonts can be imported from th fonts/index.tsx 
    to use the font, use the following syntax
    * <div className={`${alumniSans.className} etc etc tailwind classes`}> </div> *
    do not use font-family in the css files, as it will conflict with the next js configuration of font system
    font `inter` is used as default so all elements will by default use it and does not require importing

    if any images are to be used, place them in the folder public/RulesAndTimings/

    For reference on how to use the components, refer to the components folder in the root directory and the already made folders
    *DO NOT CREATE NEW COMPONENTS UNLESS NECESSARY, ASK BEFORE DOING SO*
    
    [FOR RULES SECTION]
    *refer to the second section of facilities page for reference on how to use the <Link /> component and achieve the drop shadow on the numbers* 
   
   [FOR TIMINGS SECTION]
   **pending**
*/
const Page = () => {
    return (
        <Container>
            <Section id="rules" className="min-h-screen h-full mb-16 pt-20 lg:pt-24 flex flex-col items-center justify-center">
                { /* Rules section*/}
                hello
            </Section>
            <Section id="timings" className="min-h-screen h-full py-24 2xl:py-48 flex flex-col items-center justify-center" borderTop>
                { /* Timings section*/}
                make changes only here
            </Section>
        </Container>
    )
}

export default Page;