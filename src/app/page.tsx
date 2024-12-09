import Container from "@/components/Container";
import { alumniSans } from "@/fonts";

const Page = () => {
    return (
        <Container>
            <div className="min-h-screen h-full w-full">
                {/* Hero section */}
                <section className = "flex flex-col justify-center h-screen"> 
                        {/* 1. SSL Text Div */}
                        <div className = "w-[1000px] h-[248px] top-[343px] left-[140px] p-0">
                            <p className = {`${alumniSans.className} text-[124px] font-bold leading-[124px] bg-[linear-gradient(281.06deg,_#FFFFFF_36.47%,_#3ACBF1_81.15%)] bg-clip-text text-transparent`}>Software Systems Laboratory</p>
                        </div>
                        
                        {/* 2. List Div */}
                        <div className = "flex w-[1000px] h-[36px] top-[666px] left-[140px]">
                            <ul className = "flex flex-row w-[1000px] h-[36px] top-[666px] left-[140px] gap-[49px]">
                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/mail.png" className="w-[24px] h-[24px]"></img>
                                    <span className="text-[16px] font-bold text-left leading-[19.36px]">
                                        ssladmin@nitc.ac.in
                                    </span>
                                </li>

                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/phone.png" className="w-[24px] h-[24px]"></img>
                                    <span className="text-[16px] font-bold text-left leading-[19.36px]">
                                        0495 228 6864
                                    </span>
                                </li>

                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/location.png" className="w-[24px] h-[24px]"></img>
                                    <span className="text-[16px] font-bold text-left leading-[19.36px]">
                                        ITL302 - 2nd Floor
                                    </span>
                                </li>

                                <li className = "flex flex-row p-[6px_3px_6px_3px] gap-[8px]">
                                    <img src = "/hero/clock.png" className="w-[24px] h-[24px]"></img>
                                    <span className="text-[16px] font-bold text-left leading-[19.36px]">
                                        9AM - 12AM
                                    </span>
                                </li>
                            </ul>
                        </div>

                        {/* 3. Athena:Running Div */}
                        <div className = "w-[205px] h-[36px] top-[800px] absolute bottom-0 left-1/2 -translate-x-1/2 flex items-center justify-center">
                        <p className= {`${alumniSans.className} text-[32px] text-[#3F56E9] font-medium leading-[35.56px] text-left text-shadow-[0px_0px_17.28px_0px_#3F56E9]`}>
                            ATHENA: RUNNING
                        </p>

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
