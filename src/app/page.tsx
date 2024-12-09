import Container from "@/components/Container";
import { alumniSans, geo } from "@/fonts";

const Page = () => {
    return (
        <Container>
            <div className="min-h-screen h-full w-full">
                {/* Hero section */}
                <section className = "flex flex-col justify-center h-screen flex justify-center items-center lg:items-start"> 
                        {/* 1. SSL Text Div */}
                        <div className = "w-[215px] h-[192px] lg:w-[1000px] lg:h-[248px] lg:top-[343px] lg:left-[140px] p-0">
                            <p className = {`${alumniSans.className} font-bold text-[64px] leading-[64px] text-center flex justify-center lg:text-[124px] lg:leading-[124px] lg:text-left bg-[linear-gradient(281.06deg,_#FFFFFF_36.47%,_#3ACBF1_81.15%)] bg-clip-text text-transparent`}>Software Systems Laboratory</p>
                        </div>
                        
                        {/* 2. List Div */}
                        <div className = "flex w-[301px] h-[66px] lg:w-[1000px] lg:h-[36px] lg:top-[666px] lg:left-[140px]">
                            <ul className = "grid grid-cols-2 gap-[12px] lg:flex lg:flex-row lg:gap-[49px] w-[1000px] h-[36px] top-[666px] left-[140px]">
                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/mail.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]"></img>
                                    <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                        ssladmin@nitc.ac.in
                                    </span>
                                </li>

                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/phone.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]"></img>
                                    <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                        0495 228 6864
                                    </span>
                                </li>

                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/location.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]"></img>
                                    <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                        ITL302 - 2nd Floor
                                    </span>
                                </li>

                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/clock.png" className="w-[14px] h-[14px] lg:w-[24px] lg:h-[24px]"></img>
                                    <span className="lg:text-[16px] lg:leading-[19.36px] text-[12px] leading-[14.52px] font-bold text-left">
                                        9AM - 12AM
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* 3. Athena:Running Div */}
                        <div className = "w-[205px] h-[36px] absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                            <p className= {`${geo.className} text-[32px] text-[#3F56E9] font-medium leading-[35.56px] text-left text-shadow-[0px_0px_17.28px_0px_#3F56E9]`}>
                                ATHENA: RUNNING
                            </p>
                        </div>

                        {/* 4. Image Div */}
                        <div className = "absolute bottom-0 right-0 flex justify-end hidden lg:flex">
                            <img src = "/hero/server.png" alt = "Server" className = "w-[400px] h-[580.47px]"></img>
                        </div>
                </section>

                <section id="about-us">

                </section>

                <section id="facilities">

                </section>

                <section id="resources">

                </section>

                <section id="more-links">

                </section>
            </div>
        </Container>
    );
}

export default Page;
