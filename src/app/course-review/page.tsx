'use client';
import { useMemo } from "react";
import Container from "@/components/Container"
import Section from "@/components/Section";
import Input from "@/components/Input";
import { alumniSans } from "@/fonts";
import Link from "@/components/Link";

const Page = () => {
    return (
        <Container>
            <Section className="pt-20 lg:pt-24 h-full">
                <div className = "w-full flex flex-row justify-between left-1/2 justify-center align-items items-center border-b-[1px] border-solid border-white ">
                    <h1 className={`${alumniSans.className} text-7xl font-bold`}>
                        COURSE REVIEW
                    </h1>
                    <Input onClick = {() => 0} />
                </div>
                <div className = "w-full h-full gap-[50px] place-items-center px-[18px] py-[35px] grid grid-cols-3 grid-rows-3">
                    <div className = "w-[350px] h-[120px] outline"></div> 
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                </div>
            </Section>
        </Container>
    )


};

export default Page;
