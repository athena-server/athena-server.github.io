'use client';
import { useState, useEffect } from "react";

/**
 * Footer component displaying contact details and a copyright section.
 * This component includes an email, phone number, and location with corresponding icons.
 * 
 * @param {Object} props - The props for the Footer component.
 * @param {string} [props.email] - email address to display.(optional) Default: "ssladmin@nitc.ac.in".
 * @param {string} [props.phone] - phone number to display.(optional)  Default: "0495 228 6864".
 * @param {string} [props.location] - location to display.(optional)  Default: "ITL302 - 2nd Floor".
 *
 * @returns {JSX.Element} - The rendered footer component.
 *
 * @author Lishin V S
 */

const Footer = ({
    email= "ssladmin@nitc.ac.in",
    phone= "0495 228 6864",
    location= "ITL302 - 2nd Floor"
}:{
    email?: string,
    phone?: string,
    location?: string
}):JSX.Element =>{
    const [isMobile, setIsMobile] = useState(false);

    useEffect(()=>{
        setIsMobile(window.innerWidth < 1080);

        const handleResize = ()=>{setIsMobile(window.innerWidth < 1080)}
        window.addEventListener("resize", handleResize);

        return () => window.removeEventListener("resize", handleResize);
    },[]);

    return (
        <footer className="px-8 bg-[#202127] border-t border-white md:px-10">
            <div className="font-bold text-sm flex flex-wrap justify-center  items-center py-5 sm:justify-between md:text-base">
                {/* Contact Detail */}
                <div className="flex flex-col mt-2 mb-8  lg:space-x-5  lg:mt-0  lg:mb-0 lg:flex-row">
                    {[
                        {label:email, icon:"/Footer/mail.svg"},
                        {label:phone, icon:"/Footer/phone.svg"},
                        {label:location, icon:"/Footer/location.svg"},
                    ].map((item, index)=>(
                        <div key={index} className="flex lg:justify-center items-center space-x-2 p-2">
                            <img src={item.icon} alt={item.label} className="md:w-5 md:h-5"/>
                            <p>{item.label}</p>
                        </div>
                    ))}
                </div>

                {/* Copyright Section */}
                <div className="flex justify-center items-center mt-8 mb-6 md:mt-0 md:mb-0">
                    <p className="text-center">
                        Copyright Ⓒ {new Date().getFullYear()} CSED, 
                        {isMobile ? ' NIT Calicut' : ' National Institute of Technology Calicut'}
                    </p>
                </div>
            </div>
        </footer>
    )
}

export default Footer;