import Container from "@/components/Container";

const Page = () => {
    return (
        <Container>
            <div className="min-h-screen h-full w-full">
                <section> {/* Hero section */}
                    <div className = "flex flex-row justify-between items-center w-full">
                        <ul className = "flex justify-center space-x-20">
                            <li className="hover:text-lightBlue cursor-pointer">Home</li>
                            <li className="hover:text-lightBlue cursor-pointer">About Us</li>
                            <li className="hover:text-lightBlue cursor-pointer">Facilities</li>
                            <li className="hover:text-lightBlue cursor-pointer">Rules</li>
                            <li className="hover:text-lightBlue cursor-pointer">Timings</li>
                            <li className="hover:text-lightBlue cursor-pointer">Contact Us</li>
                        </ul>
                        <div className = "p-3 rounded-lg border-2 border-neonGreen shadow-[0_0_10px_3px_#2cff05] text-neonGreen">
                            <p className = "text-shadow-md text-shadow-neonGreen">SSL IS OPEN</p>
                        </div>
                    </div>
                    <div className="flex items-center justify-center min-h-screen">
                        <h1 className="text-6xl md:text-8xl font-bold">Software Systems Laboratory</h1>
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
