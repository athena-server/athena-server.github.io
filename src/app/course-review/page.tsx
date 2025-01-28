'use client';
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import Container from "@/components/Container"
import Section from "@/components/Section";
import Input from "@/components/Input";
import { alumniSans } from "@/fonts";
import CourseCard, { CourseCardProps } from "@/components/CourseCard";
import { getCourses, getReviews } from "@/lib/courses";
import ReviewCard, { ReviewCardProps } from "@/components/ReviewCard";
import styles from './styles.module.css';
import { motion, AnimatePresence, easeInOut } from "framer-motion";
import Image from "next/image";

const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState<CourseCardProps | null>(null);
    const [prevValue, setPrevValue] = useState<CourseCardProps | null>(null);
    const [showReviewSection, setShowReviewSection] = useState<boolean>(false);
    const [courses, setCourses] = useState<CourseCardProps[]>([]);
    const [reviews, setReviews] = useState<{ firstHalf: ReviewCardProps[], secondHalf: ReviewCardProps[] }>({ firstHalf: [], secondHalf: [] });
    const [loading, setLoading] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const collapseGridClassName = useMemo(() =>
        (selected !== null)
            ? "flex flex-col w-full lg:w-1/2 h-full overflow-y-scroll gap-[50px] place-items-center px-[18px] py-[35px]"
            : "w-full h-auto gap-[50px] place-items-center px-[18px] py-[35px] grid md:grid-cols-2 xl:grid-cols-3",
        [selected])

    useEffect(() => {
        const loadData = async () => {
            const courses = await getCourses();
            setCourses(courses);
        }

        void loadData();
    }, []);

    useEffect(() => {
        const loadData = async () => {
            if (selected == null)
                return;
            setLoading(true);
            const reviews = await getReviews(selected.courseId);
            const middleIndex = Math.ceil(reviews.length / 2);
            setReviews({
                firstHalf: reviews.slice(0, middleIndex),
                secondHalf: reviews.slice(middleIndex),
            })
            setLoading(false);
        }

        void loadData();
    }, [selected, courses]);


    const currentPosts = useMemo(() => {
        const lastPostInd = currentPage * 9;
        const firstPostInd = lastPostInd - 9;

        return courses.slice(firstPostInd, lastPostInd);
    }, [courses, currentPage]);


    const handleSelectCourse = useCallback((course: CourseCardProps | null) => {
        setPrevValue(selected);
        setSelected(course);
        if (course !== null)
            setShowReviewSection(true);
    }, [selected]);

    const handleHideReviewSection = useCallback(() => {
        setShowReviewSection(false);
    }, []);

    useEffect(() => {
        if (prevValue == null && selected != null) {
            containerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center',
                inline: 'center',
            })
        }
    }, [selected]);



    return (
        <Container>
            <Section className="flex flex-col justify-center min-h-screen items-center lg:items-start h-full mb-16 pt-20 lg:pt-24">
                <div className="w-full flex flex-row justify-between justify-center align-items items-center border-b-[1px] border-solid border-white ">
                    <h1 className={`${alumniSans.className} text-7xl font-bold`}>
                        COURSE REVIEW
                    </h1>
                    <Input onSubmit={(e) => e.preventDefault()} />
                </div>

                <div className="w-full h-full flex flex-col gap-4 my-24" ref={containerRef}>
                    {
                        (selected !== null) && (
                            <div className="w-full flex justify-end">
                                <div className="w-full lg:w-1/2 flex items-center justify-between">
                                    <h4 className={`text-lg ${alumniSans.className}`}>
                                        {selected.courseId} | {selected.courseTitle}
                                    </h4>
                                    <button className="w-[36px] h-[36px] flex items-center justify-center" onClick={handleHideReviewSection}>
                                        <Image src="/icons/rarr.svg" alt="close-review-section" height={25} width={25} className="w-[20px] rotate-45" style={{
                                            filter: 'drop-shadow(0 0 7px white)',
                                        }} />
                                    </button>
                                </div>
                            </div>
                        )
                    }
                    <motion.div className={`${selected ? 'h-[75dvh]' : 'min-h-[75dvh] h-full'} w-full flex relative `}>
                        <motion.div
                            className={`${collapseGridClassName} ${loading ? styles.disabledDiv : ''}`}
                            layoutId='courses-container'
                            transition={{
                                duration: 0.5,
                                ease: easeInOut,
                            }}
                        >
                            {
                                currentPosts.map((item, index) => (
                                    <CourseCard
                                        key={index}
                                        courseTitle={item.courseTitle}
                                        courseId={item.courseId}
                                        reviewCount={item.reviewCount}
                                        onClick={() => handleSelectCourse(item)}
                                        selected={item.courseId === selected?.courseId}
                                    />
                                ))
                            }
                        </motion.div>

                        <AnimatePresence mode="wait" initial={false} onExitComplete={() => handleSelectCourse(null)}>
                            {
                                showReviewSection && (
                                    <motion.div
                                        className="bg-secondary absolute top-0 left-0 h-full w-full lg:relative lg:w-1/2 h-full overflow-y-scroll flex items-center justify-center py-[27px] px-[21px] lg:border-s lg:border-s-px"
                                        initial={{
                                            right: 0,
                                            x: '100%',
                                            opacity: 0,
                                        }}
                                        animate={{
                                            x: '0%',
                                            opacity: 1,

                                        }}
                                        exit={{
                                            right: 0,
                                            x: '100%',
                                            opacity: 0,
                                            transition: {
                                                duration: 0.3,
                                                ease: easeInOut,
                                            },
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: easeInOut,
                                        }}
                                    >
                                        {
                                            selected?.reviewCount == 0 ? (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    No Reviews For This Course Yet
                                                </div>
                                            ) : (
                                                <div className="flex gap-[24px] flex-col lg:flex-row">
                                                    <div className="w-full pt-48 lg:pt-0 lg:w-1/2 h-full flex flex-col gap-[24px]">
                                                        {
                                                            reviews.firstHalf.map((review, index) => (
                                                                <ReviewCard
                                                                    key={index}
                                                                    {...review}
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="w-full lg:w-1/2 h-full flex flex-col gap-[24px]">
                                                        {
                                                            reviews.secondHalf.map((review, index) => (
                                                                <ReviewCard
                                                                    key={index}
                                                                    {...review}
                                                                />
                                                            ))
                                                        }

                                                    </div>
                                                </div>
                                            )
                                        }
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>

                    </motion.div>
                </div>

                <div className="flex justify-center w-full">
                    {
                        Array.from({ length: Math.ceil(courses.length / 9) }).map((_, index) => (
                            <button
                                key={index + 1}
                                className={`w-[36px] h-[36px] border ${currentPage === (index + 1) ? "bg-white text-black" : "bg-secondary text-white"}`}
                                onClick={() => setCurrentPage(index + 1)}
                            >
                                {index + 1}
                            </button>
                        ))
                    }
                </div>
            </Section>
        </Container >
    )
};

export default Page;
