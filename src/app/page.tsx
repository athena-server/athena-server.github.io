"use client";

import Button from "@/components/Button";
import Container from "@/components/Container";

const Page = () => {
    return (
        <Container>
            <div className="min-h-screen h-full w-full">
                <section>
                    {/* hero section */}
                </section>

                <section id="about-us">

                </section>

                <section id="facilities" className="flex items-center justify-center mt-16">
                    <Button onClick={() => console.log("hello")}>
                        hello
                    </Button>
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
