/*

* these comments are for information only and should be deleted before merging
* only edit this page, do not modify others
* when pushing to github, ensure no other files are modified
* use <Card /> component with specified props from src/components/Carded
* default font is inter and no change is required to use the font
* to use alumniSans or Geo, refer other pages where those fonts are used
* 
* don't create any components
* you can make use of any existing components
* 
* clarify any doubts before acting on them

*/
"use client";

import Card from "@/components/Card";
import Container from "@/components/Container";
import Section from "@/components/Section";
import SectionDivider from "@/components/SectionDivider";
import Navbar from "@/components/Navbar"; // Assuming Navbar component exists
import Footer from "@/components/Footer"; // Assuming Footer component exists
import { alumniSans } from "@/fonts";
import { useState } from "react";

type Option = "faculties" | "staffs" | "studentAdmins" | "webTeam"; // Updated option types

const Page = () => {
    const [selectedOption, setSelectedOption] = useState<Option>("faculties");

    const handleToggleChange = (option: Option) => {
        setSelectedOption(option);
    };

    return (
        <Container>
            <Navbar /> {/* Navbar Component */}

            <Section className="min-h-screen h-full mb-16 pt-20 lg:pt-24">
                {/* Heading for 'Meet the Team' */}
                <h1 className={`${alumniSans.className} text-center text-[72px] font-bold mb-4`}>
                    MEET THE TEAM
                </h1>

                {/* Toggle for selecting the category */}
                <div className="flex justify-center mb-8">
                <div className="relative flex items-stretch border border-gray-300 w-full max-w-[600px]">
                    {["faculties", "staffs", "studentAdmins", "webTeam"].map((option, index) => (
                        <button
                            key={option}
                            className={`flex-1 py-3 text-center text-[24px] font-bold h-full ${
                                selectedOption === option
                                    ? "bg-white text-black" // Highlight selected option with white background and black text
                                    : "bg-transparent text-white" // Inactive buttons with white text
                            } ${index < 3 ? "border-r border-white" : ""} hover:bg-white hover:text-black ${alumniSans.className}`}
                            onClick={() => handleToggleChange(option as Option)}
                        >
                            {/* Updated toggle button text */}
                            {option === "faculties" && "Faculties"}
                            {option === "staffs" && "Staffs"}
                            {option === "studentAdmins" && "Student Admins"}
                            {option === "webTeam" && "Web Team"}
                        </button>
                    ))}
                </div>
            </div>


                {/* Display cards based on the selected category */}
                {selectedOption === "faculties" && (
                    <Card
                        imageUrl="/Card/mayank.jpg"
                        name="Nandana Neo"
                        socials={{ email: "hello@hello.com" }}
                    />
                )}

                {selectedOption === "staffs" && (
                    <div className="flex flex-wrap justify-center gap-8">
                    <Card
                        imageUrl="/Card/mayank.jpg"
                        name="Nandana Neo"
                        socials={{ email: "hello@hello.com" }}
                    />
                    <Card
                        imageUrl="/Card/mayank.jpg"
                        name="Nandana Neo"
                        socials={{ email: "hello@hello.com" }}
                    />
                    <Card
                        imageUrl="/Card/mayank.jpg"
                        name="Nandana Neo"
                        socials={{ email: "hello@hello.com" }}
                    />
                    <Card
                        imageUrl="/Card/mayank.jpg"
                        name="Nandana Neo"
                        socials={{ email: "hello@hello.com" }}
                    />
                    <Card
                        imageUrl="/Card/mayank.jpg"
                        name="Nandana Neo"
                        socials={{ email: "hello@hello.com" }}
                    />
                    </div>
                )}


                {selectedOption === "studentAdmins" && (
                    <Card
                    imageUrl="/Card/mayank.jpg"
                    name="Nandana Neo"
                    socials={{ email: "hello@hello.com" }}
                />
                )}

                {selectedOption === "webTeam" && (
                    <div className="flex flex-col gap-12">
                    {/* First Set of 3 Cards */}
                    <div className="flex flex-wrap justify-start gap-6">
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                    </div>
                
                    {/* Heading and White Line for b'21s */}
                    <div className="relative w-full">
                        <h2 className="absolute top-[-60px] right-0 text-[72px] font-bold text-white sm:text-center sm:top-[-90px] sm:text-[72px]">
                            b'21s
                        </h2>
                        <div className="w-full sm:max-w-[calc(100%+4rem)] h-[1px] bg-white mx-auto sm:-ml-2 sm:-mr-2"></div>
                    </div>
                
                    {/* Set of 6 Cards Split into 2 Rows */}
                    <div className="flex flex-wrap justify-start gap-6">
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                    </div>
                    <div className="flex flex-wrap justify-start gap-6">
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                    </div>
                
                    {/* Heading and White Line for b'22s */}
                    <div className="relative w-full">
                        <h2 className="absolute top-[-60px] right-0 text-[72px] font-bold text-white sm:top-[-90px] sm:text-[72px]">
                            b'22s
                        </h2>
                        <div className="w-full sm:max-w-[calc(100%+4rem)] h-[1px] bg-white mx-auto sm:-ml-2 sm:-mr-2"></div>
                    </div>
                
                    {/* Set of 4 Cards Split into 2 Rows */}
                    <div className="flex flex-wrap justify-start gap-6">
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                    </div>
                    <div className="flex flex-wrap justify-start gap-6">
                        <Card
                            imageUrl="/Card/mayank.jpg"
                            name="Nandana Neo"
                            socials={{ email: "hello@hello.com" }}
                        />
                    </div>
                
                    {/* Heading and White Line for b'23s */}
                    <div className="relative w-full">
                        <h2 className="absolute top-[-60px] right-0 text-[72px] font-bold text-white sm:text-center sm:top-[-90px] sm:text-[72px]">
                            b'23s
                        </h2>
                        <div className="w-full sm:max-w-[calc(100%+4rem)] h-[1px] bg-white mx-auto sm:-ml-2 sm:-mr-2"></div>
                    </div>
                </div>
                )}

            </Section>

        </Container>
    );
};

export default Page;