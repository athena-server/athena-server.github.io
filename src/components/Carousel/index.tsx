"use client";
import { AnimatePresence, motion } from 'framer-motion'
import { useEffect, useState } from 'react';

const Carousel = ({
    images,
    showNext = false,
}: CarouselProps) => {
    const [currentImage, setCurrentImage] = useState(0);

    useEffect(() => {
        const timeout = setInterval(() => {
            if (images.length === 0)
                setCurrentImage(0);
            else
                setCurrentImage(prev => (prev + 1) % images.length);
        }, 4000)

        return () => {
            clearInterval(timeout);
        }
    }, []);

    return (
        <div className="h-full w-full outline overflow-hidden relative">
            <AnimatePresence>
                <motion.img
                    src={images[currentImage]}
                    alt={`Image ${currentImage}`}
                    key={currentImage}
                    initial={{ x: '100%', position: 'absolute' }}
                    animate={{ x: '0%', position: 'relative' }}
                    exit={{ x: '-100%', position: 'absolute' }}
                    transition={{ duration: 0.8, ease: [0.445, 0.05, 0.55, 0.95] }}
                />
            </AnimatePresence>
        </div>
    )
}

export default Carousel;
export interface CarouselProps {
    images: string[];
    showNext?: boolean;
}