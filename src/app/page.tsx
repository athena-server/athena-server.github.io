import Chip from "@/components/Chip";
import CloseIcon from "@/components/CloseIcon";
import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans } from "@/fonts";


const labsConducted = [
    {
        name: "Networks",
        // link: "exposnitc.github.io",
    },
    {
        name: "Operating Systems",
        link: "exposnitc.github.io",
    },
    {
        name: "DBMS",
        link: "nitcbase.github.io",
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
]

const Page = () => {



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
                    <div className="w-3/5 h-inherit flex flex-col gap-8 items-start justify-center py-14">
                        <h2 className={`${alumniSans.className} font-bold text-5xl lg:text-7xl`}> About Us </h2>
                        <div className="w-full h-full grid grid-cols-12 grid-rows-12 text-lg">
                            <span className="row-start-1 row-span-5 col-start-1 col-span-7 flex items-center p-3">
                                The objective of this laboratory is to provide the infrastructure for conducting the regular labs and project works for the BTech and MCA Programs. The lab is equipped with state of the art servers, desktops and software
                            </span>

                            <span className="row-start-1 row-span-5 col-start-8 col-span-5 border border-white border-[1px] border-b-0 p-3 flex flex-col gap-2 justify-start">
                                <h3 className={`${alumniSans.className} text-4xl font-bold`}> Established </h3>
                            </span>

                            <span className="row-start-6 row-span-7 col-start-1 col-span-7 border border-white border-[1px] border-e-0 p-3 flex flex-col gap-2 justify-start">
                                <h3 className={`${alumniSans.className} text-4xl font-bold`}> Labs Conducted </h3>
                                <div>
                                    <Chip text="hello" />
                                </div>
                            </span>

                            <span className="row-start-6 row-span-7 col-start-8 col-span-5 border border-white border-[1px] p-3 flex flex-col gap-2 justify-start relative">
                                <CloseIcon className="-top-0 -right-0" src="/CloseIcon/tab-bar-group.svg" />
                                <h3 className={`${alumniSans.className} text-4xl lg:text-5xl font-bold`}> Meet Our Team </h3>
                            </span>
                        </div>
                    </div>
                    <div className="w-2/5 h-inherit">
                        something
                    </div>
                </section>
                <section id="facilities" className="relative min-h-[75dvh] h-full">
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
