import Chip from "@/components/Chip";
import CloseIcon from "@/components/CloseIcon";
import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans } from "@/fonts";
import { useMemo } from "react";




const Page = () => {

    const labsConducted = useMemo(() => [
        {
            name: "Networks",
            // link: "exposnitc.github.io",
        },
        {
            name: "DBMS",
            link: "nitcbase.github.io",
        },
        {
            name: "Operating Systems",
            link: "exposnitc.github.io",
        },
        {
            name: "Hardware",
            link: "hwlabnitc.github.io",
        },
        {
            name: "Compiler",
            link: "silnitc.github.io",
        },
        {
            name: "Data Structures",
        },
        {
            name: "Programming lab",
        },
    ], []);

    return (
        <Container>
            <div className="min-h-screen h-full w-full">
                <section> {/* Hero section */}
                    <div className="flex flex-row justify-between items-center w-full">
                        <ul className="flex justify-center space-x-20">
                            <li className="hover:text-lightBlue cursor-pointer">Home</li>
                            <li className="hover:text-lightBlue cursor-pointer">About Us</li>
                            <li className="hover:text-lightBlue cursor-pointer">Facilities</li>
                            <li className="hover:text-lightBlue cursor-pointer">Rules</li>
                            <li className="hover:text-lightBlue cursor-pointer">Timings</li>
                            <li className="hover:text-lightBlue cursor-pointer">Contact Us</li>
                        </ul>
                        <div className="p-3 rounded-lg border-2 border-neonGreen shadow-[0_0_10px_3px_#2cff05] text-neonGreen">
                            <p className="text-shadow-md text-shadow-neonGreen">SSL IS OPEN</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center min-h-screen">
                        <h1 className="text-6xl md:text-8xl font-bold">Software Systems Laboratory</h1>
                    </div>
                </section>

                <section id="about-us" className="relative min-h-[75dvh] h-full flex justify-between">
                    <SectionDivider />
                    <CloseIcon />
                    <div className="w-full lg:w-4/5 xl:w-3/5 h-inherit flex flex-col gap-8 items-start justify-center py-14">
                        <h2 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> About Us </h2>
                        <div className="w-full h-full flex flex-col gap-4 lg:gap-0 items-start justify-center lg:grid grid-cols-12 grid-rows-12 text-lg">
                            <span className="w-full h-full row-start-1 row-span-5 col-start-1 col-span-7 flex items-center lg:p-3">
                                The objective of this laboratory is to provide the infrastructure for conducting the regular labs and project works for the BTech and MCA Programs. The lab is equipped with state of the art servers, desktops and software
                            </span>

                            <span className="w-full h-full row-start-1 row-span-5 col-start-8 col-span-5 border border-white border-[1px] lg:border-b-0 p-3 flex flex-col gap-2 justify-start">
                                <h3 className={`${alumniSans.className} text-4xl font-bold`}> Established </h3>
                                <p className={`${alumniSans.className} text-5xl text-neonGreen`} style={{
                                    filter: 'drop-shadow(0 0 6px var(--neon-green)) drop-shadow(0 0 8px var(--neon-green)',
                                }}> 2006 </p>
                            </span>

                            <span className="w-full h-full row-start-6 row-span-7 col-start-1 col-span-7 lg:border lg:border-white lg:border-[1px] lg:border-e-0 lg:p-3 flex flex-col gap-2 justify-start">
                                <h3 className={`${alumniSans.className} text-4xl font-bold`}> Labs Conducted </h3>
                                <div className="flex flex-wrap gap-[10px]">
                                    {
                                        labsConducted.map((lab, index) => (
                                            <Chip key={index} text={lab.name} />
                                        ))
                                    }
                                </div>
                            </span>

                            <span
                                className="w-full h-full row-start-6 row-span-7 col-start-8 col-span-5 border border-white border-[1px] p-3 flex flex-col gap-2 justify-start relative group z-1"
                            >
                                <img src="/CloseIcon/tab-bar-group.svg" className="absolute top-0 right-0 " />
                                <span className="absolute top-0 left-0 h-full w-0 group-hover:w-full transition-width duration-200 bg-white z-[-2] " />
                                <h3 className={`${alumniSans.className} text-4xl lg:text-5xl font-bold group-hover:text-black transition-color duration-200 pb-24`}> Meet Our Team </h3>
                                <img
                                    src="/Home/arrow.svg"
                                    alt="arrow"
                                    className="h-[30px] lg:h-[50px] w-[30px] lg:w-[50px] absolute bottom-3 right-3 group-hover:hidden" style={{
                                        filter: 'drop-shadow(0 0 6px white) drop-shadow(0 0 8px white)',
                                    }}
                                />
                                <img
                                    src="/Home/arrow-black.svg"
                                    alt="arrow-black"
                                    className="h-[30px] lg:h-[50px] w-[30px] lg:w-[50px] absolute bottom-3 right-3 hidden group-hover:block"
                                />
                            </span>
                        </div>
                    </div>
                    <div className="hidden w-1/5 xl:w-2/5 h-inherit text-xl xl:text-2xl font-medium py-14 lg:flex items-end justify-end text-darkBlue">
                        STATUS: ACTIVE
                    </div>
                </section>
                <section id="facilities" className="relative min-h-[75dvh] h-full">
                    <SectionDivider />
                    <CloseIcon />
                    <div className="">

                    </div>
                </section>
                <section id="resources" className="relative min-h-[75dvh] h-full">
                    <CloseIcon />
                    <div className="">

                    </div>
                </section>
                <section id="more-links" className="relative min-h-[75dvh] h-full">
                    <CloseIcon />
                    <div className="">

                    </div>
                </section>
            </div>
        </Container>
    );
}

export default Page;
