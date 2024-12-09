"use client";
import { AnimatePresence, motion } from 'framer-motion';
import { useCallback, useMemo, useState } from 'react';
import SslStatus from './SslStatus';
import MobileNavItem from './MobileNavItem';

const Navbar = () => {
    const navBarItems = useMemo(() => [
        {
            name: 'Home',
            route: "/",
        },
        {
            name: 'About Us',
            route: "/#about-us",
        },
        {
            name: 'Facilities',
            route: "/facilities-and-resources",
        },
        {
            name: 'Rules',
            route: '/rules-and-timings'
        },
        {
            name: 'Test',
            route: '/'
        }
    ], []);


    const [open, setOpen] = useState(false);

    const toggleMenu = useCallback(() => {
        console.log(open);
        setOpen(prev => (!prev));
    }, [setOpen]);

    return (
        <nav className="fixed top-0 left-0 w-full h-24 flex items-center justify-between">
            <div className='w-full lg:w-1/5 h-full flex items-center p-4 lg:px-8 lg:py-4 order-first z-[2]'>
                <img src="/Navbar/logo-temp.svg" width={75} height={75} alt="logo" />
            </div>
            <div className='w-full flex items-center justify-end lg:block lg:w-3/5 h-full p-2 lg:px-8 lg:py-4 order-last lg:order-1 z-[2]'>
                <div className="hidden h-full lg:flex items-center relative justify-center gap-4">
                    {
                        navBarItems.map((item, index) => (
                            <motion.div
                                key={index}
                                className='mx-4'
                                whileHover={{ scale: 1.1 }}
                            >
                                {item.name}
                            </motion.div>
                        ))
                    }
                    <span className='absolute bottom-0 left-0 w-full h-[1px] bg-white' />
                </div>
                <button className='h-full lg:hidden flex items-center justify-end' onClick={toggleMenu}>
                    <img src="/Navbar/hamburger-menu.svg" width={75} height={75} alt=" hamburger-menu" />
                </button>
            </div>
            <div className='w-full lg:w-1/5 h-full flex items-center justify-center lg:justify-end py-4 px-8 order-1 lg:order-last z-[2]'>
                <SslStatus />
            </div>
            <AnimatePresence>
                {
                    open && (
                        <motion.div
                            className='block lg:hidden fixed top-0 left-0 h-screen w-screen flex flex-col gap-2 items-center justify-center overscroll-contain'
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0, transition: { delay: 0.2 } }}
                            transition={{ duration: 0.4, ease: [0.445, 0.05, 0.55, 0.95] }}

                        >
                            <motion.div
                                className='absolute top-0 left-0 w-full bg-[rgba(0,0,0,0.2)] shadow-[0_8px_32px_0_rgba(31,38,135,0.37)] overscroll-contain'
                                initial={{ height: '0dvh', backdropFilter: 'blur(0px)' }}
                                animate={{ height: '100dvh', backdropFilter: 'blur(20px)' }}
                                exit={{ height: '0dvh', backdropFilter: 'blur(0px)' }}
                                transition={{ delay: 0.1, duration: 0.4, ease: [0.445, 0.05, 0.55, 0.95] }}
                            />
                            {
                                navBarItems.map((item, index) => (
                                    <MobileNavItem
                                        key={index}
                                        item={item}
                                        index={index}
                                        onClick={toggleMenu}
                                    />
                                ))
                            }
                        </motion.div>
                    )
                }
            </AnimatePresence>
        </nav>
    )
}

export default Navbar;