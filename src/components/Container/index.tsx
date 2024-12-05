'use client';
import { motion, AnimatePresence, HTMLMotionProps } from 'framer-motion'
import { ReactNode } from 'react';


/**
 * Wraps around the page to provide a consistent layout to all the pages.
 *
 * @param {Object} props - The props for the Container component.
 * @param {React.ReactNode} props.children - Contents of the page.
 * @param {string} [props.className] - Additional classes to be added to the container (optional).
 * @param {boolean} [props.disableAnimation] - Disables the page transition animation (optional).
 * @returns {JSX.Element} The rendered container component.
 *
 * @author Diljith P D
 */
const Container = ({
    children,
    className,
    disableAnimation,
}: {
    children: ReactNode
    className?: string
    disableAnimation?: boolean
}) => {
    const containerClass = `w-screen overflow-x-hidden min-h-screen h-full flex items-center justify-center sm:p-2 md:p-5 ${className}`
    const containerProps: HTMLMotionProps<'div'> =
        disableAnimation
            ? {
                className: containerClass,
            }
            : {
                className: containerClass,
                initial: { position: 'absolute', opacity: 0, y: -10 },
                animate: { position: 'relative', opacity: 1, y: 0 },
                exit: { position: 'absolute', opacity: 0, y: 10 },
                transition: { duration: 0.3, type: "tween" },
            }

    return (
        <AnimatePresence>
            <motion.div {...containerProps}>
                <div className='w-full max-w-[1920px]'>
                    {children}
                </div>
            </motion.div>
        </AnimatePresence>
    )
}

export default Container;