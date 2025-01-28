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


const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [selected, setSelected] = useState<number>(-1);
    const [courses, setCourses] = useState<CourseCardProps[]>([]);
    const [reviews, setReviews] = useState<{ firstHalf: ReviewCardProps[], secondHalf: ReviewCardProps[] }>({ firstHalf: [], secondHalf: [] });
    const [loading, setLoading] = useState<boolean>(false);
    const containerRef = useRef<HTMLDivElement>(null);

    const collapseGridClassName = useMemo(() =>
        (selected !== -1)
            ? "flex flex-col w-1/2 h-full overflow-y-scroll gap-[50px] place-items-center px-[18px] py-[35px] border-e border-e-px"
            : "w-full h-full gap-[50px] place-items-center px-[18px] py-[35px] grid grid-cols-3 grid-rows-3",
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
            if (selected == -1)
                return;
            setLoading(true);
            const reviews = await getReviews(courses[selected].courseId);
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


    const handleSelectCourse = useCallback((index: number) => {
        if (selected == -1) {
            containerRef.current?.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            });
        }
        setSelected(index)
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
                        (selected !== -1) && (
                            <div className="w-full flex justify-end">
                                <h4 className={`w-1/2 text-lg ${alumniSans.className}`}>
                                    {courses[selected].courseId} | {courses[selected].courseTitle}
                                </h4>
                            </div>
                        )
                    }
                    <div className="h-[75dvh] w-full flex relative">
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
                                        onClick={() => handleSelectCourse(index)}
                                        selected={index === selected}
                                    />
                                ))
                            }
                        </motion.div>

                        <AnimatePresence>
                            {
                                (selected != -1) && (
                                    <motion.div
                                        className="w-1/2 overflow-y-scroll flex items-center justify-center py-[27px] px-[21px]"
                                        initial={{
                                            x: '100%',
                                            opacity: 0,
                                            position: 'absolute',
                                        }}
                                        animate={{
                                            x: '0%',
                                            opacity: 1,
                                            position: 'relative',
                                        }}
                                        exit={{
                                            x: '100%',
                                            opacity: 0,
                                            position: 'absolute',
                                        }}
                                        transition={{
                                            duration: 0.5,
                                            ease: easeInOut,
                                        }}
                                    >
                                        {
                                            courses[selected].reviewCount == 0 ? (
                                                <div className="w-full h-full flex items-center justify-center">
                                                    No Reviews For This Course Yet
                                                </div>
                                            ) : (
                                                <>
                                                    <div className="w-1/2 h-full">
                                                        {
                                                            reviews.firstHalf.map((review, index) => (
                                                                <ReviewCard
                                                                    key={index}
                                                                    {...review}
                                                                />
                                                            ))
                                                        }
                                                    </div>
                                                    <div className="w-1/2 h-full">
                                                        {
                                                            reviews.secondHalf.map((review, index) => (
                                                                <ReviewCard
                                                                    key={index}
                                                                    {...review}
                                                                />
                                                            ))
                                                        }

                                                    </div>
                                                </>
                                            )
                                        }
                                    </motion.div>
                                )
                            }
                        </AnimatePresence>

                    </div>
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
