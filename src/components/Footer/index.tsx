'use client';
import { useMemo } from "react";

/**
 * Footer component displaying contact details and a copyright section.
 * This component includes an email, phone number, and location with corresponding icons.
 *
 * @returns {JSX.Element} - The rendered footer component.
 *
 * @author Lishin V S
 */

const Footer = ():JSX.Element =>{

    const contactDetails = useMemo(() => [
        { label: "email", value: "ssladmin@nitc.ac.in", icon: "/Footer/mail.svg" },
        { label: "phone", value: "0495 228 6864", icon: "/Footer/phone.svg" },
        { label: "location", value: "ITL302 - 2nd Floor", icon: "/Footer/location.svg" },
    ], []);
    
    return (
        <footer className="px-8 bg-[#202127] border-t border-white md:px-10">
            <div className="font-bold text-sm flex flex-wrap justify-center  items-center py-5 sm:justify-between md:text-base">
                {/* Contact Detail */}
                <div className="flex flex-col mt-2 mb-8  lg:space-x-5  lg:mt-0  lg:mb-0 lg:flex-row">
                    {contactDetails.map((item, index)=>(
                        <div key={index} className="flex lg:justify-center items-center space-x-2 p-2">
                            <img src={item.icon} alt={item.label} className="md:w-5 md:h-5"/>
                            <p>{item.value}</p>
                        </div>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="flex justify-center items-center mt-8 mb-6 md:mt-0 md:mb-0">
                    <p className="text-center flex">
                        Copyright Ⓒ {new Date().getFullYear()} CSED,&nbsp; 
                        <span className="block lg:hidden">NIT Calicut</span>
                        <span className="hidden lg:block">National Institute of Technology Calicut</span>
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;