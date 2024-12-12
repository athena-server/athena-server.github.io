'use client';
import { useMemo } from "react";
import Container from "@/components/Container"
import Section from "@/components/Section";
import { alumniSans } from "@/fonts";
import Link from "@/components/Link";
import styles from "./styles.module.css";


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

    const rules = useMemo(() => [
        {id:"01", content:"Entry in the lab is only allowed for CSED students with valid ID card."},
        {id:"02", content:"Lab will not be open before/after official time without the presence of Lab administrators."},
        {id:"03", content:"Food items are not allowed in the lab. SSL is not a hangout place. Please keep the lab clean and maintain silence."},
        {id:"04", content:"Laptops are not allowed without permission. Mobile phones must be kept in silent mode."},
        {id:"05", content:"Please follow the proper dress code inside the lab."},
        {id:"06", content:"Download the form for requesting SSL for events or other activities.", link:"https://athena.nitc.ac.in/how-to-athena/", displayText:"Download"}
    ], []);

    return (
        <Container>
            <Section id="rules" className="min-h-screen h-full mb-16 pt-20 lg:pt-24">
                { /* Rules section*/}
                <h2 className={`${alumniSans.className} font-bold text-7xl my-4 `}> Rules</h2>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-3.5 auto-rows-fr" >
                {
                    rules.map(({id, content, link, displayText}, index) => (
                        <div 
                            key={index} 
                            className={`w-full border ${index%2 == 1 && 'border-dashed'} border-white p-2 pt-1 flex flex-col`}
                        >
                            <h2 className={`${alumniSans.className} font-bold bg-transparent text-6xl text-darkBlue ${styles.boxshadow} mb-2`}>{id}</h2>
                            <p>{content}</p>
                            {link && (
                                <div className="py-4">
                                <Link href={link} label={displayText}/>
                                </div>
                            )}
                        </div>
                    ))
                }
                </div>
            </Section>
            <Section id="timings" className="min-h-screen h-full py-24 2xl:py-48 flex flex-col items-center justify-center" borderTop>
                { /* Timings section*/}
                hello
            </Section>
        </Container>
    )
}

export default Page;