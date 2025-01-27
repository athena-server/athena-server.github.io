'use client';
import { useMemo, useState } from "react";
import Container from "@/components/Container"
import Section from "@/components/Section";
import Input from "@/components/Input";
import { alumniSans } from "@/fonts";
import CourseCard from "@/components/CourseCard";
import Pagination from "./Pagination";
import { motion } from 'framer-motion';


const Page = () => {
    const [currentPage, setCurrentPage] = useState(1);
    const [perPage, setPerPage] = useState(9);

    const [ifSelected, setIfSelected] = useState(false);
    
    const collapse = useMemo(() => 
        ifSelected 
        ? "flex flex-col items-center justify-center gap-6"
        : "flex items-center justify-start gap-6 flex-wrap",
    [ifSelected])

    const courseData = [
        { courseTitle: 'Number Theory and Cryptography', courseId: 'CS4021D', reviewCount: 2 },
        { courseTitle: 'Principles of Programming Languages', courseId: 'CS4022D', reviewCount: 6 },
        { courseTitle: 'Information Theory', courseId: 'CS4024D', reviewCount: 2 },
        { courseTitle: 'Randomized Algorithms', courseId: 'CS4025D', reviewCount: 6 },
        { courseTitle: 'Combinatorial Algorithms', courseId: 'CS4026D', reviewCount: 2 },
        { courseTitle: 'Topics in Algorithms', courseId: 'CS4027D', reviewCount: 6 },
        { courseTitle: 'Quantum Computation', courseId: 'CS4028D', reviewCount: 2 },
        { courseTitle: 'Topics in Complexity', courseId: 'CS4029D', reviewCount: 2 },
        { courseTitle: 'Computational Complexity', courseId: 'CS4030D', reviewCount: 6 },
        { courseTitle: 'Computational Algebra', courseId: 'CS4031D', reviewCount: 2 },
        { courseTitle: 'Distributed Computing', courseId: 'CS4033D', reviewCount: 6 },
        { courseTitle: 'Middleware Technologies', courseId: 'CS4034D', reviewCount: 2 },
        { courseTitle: 'Advanced Database Management Systems', courseId: 'CS4036D', reviewCount: 6 },
        { courseTitle: 'Cloud Computing', courseId: 'CS4037D', reviewCount: 2 },
        { courseTitle: 'Machine Learning', courseId: 'CS4044D', reviewCount: 6 },
        { courseTitle: 'Medical Image Processing', courseId: 'CS4045D', reviewCount: 2 },
        { courseTitle: 'Computer Vision', courseId: 'CS4046D', reviewCount: 6 },
        { courseTitle: 'Algorithmic Decision Making', courseId: 'CS4066D', reviewCount: 2 },
        { courseTitle: 'Hashing Techniques for Big Data', courseId: 'CS4069D', reviewCount: 6 },
        { courseTitle: 'Network Analysis in Bioinformatics', courseId: 'CS4071D', reviewCount: 2 }
    ];

    const lastPostInd = currentPage * perPage;
    const firstPostInd = lastPostInd - perPage;
    const currentPosts = courseData.slice(firstPostInd, lastPostInd);

    // console.log(ifSelected);

    return (
        <Container>
            <Section className="pt-20 lg:pt-24 h-full">
                <div className="w-full flex flex-row justify-between left-1/2 justify-center align-items items-center border-b-[1px] border-solid border-white ">
                    <h1 className={`${alumniSans.className} text-7xl font-bold`}>
                        COURSE REVIEW
                    </h1>
                    <Input onClick={() => 0} />
                </div>
                <div className = "w-full h-full gap-[50px] place-items-center px-[18px] py-[35px] grid grid-cols-3 grid-rows-3">
                    {currentPosts.map((item) => (
                        <motion.div 
                            key = {item.courseId}
                            className = {collapse}
                        >
                            <CourseCard
                                courseTitle = {item.courseTitle}
                                courseId = {item.courseId}
                                reviewCount = {item.reviewCount}
                                onClick = {() => setIfSelected(prev => !prev)}
                            />
                        </motion.div>
                    ))}                   
                </div>

                <Pagination 
                    totalPosts = {courseData.length}
                    perPage = {perPage}
                    currentPage = {currentPage}
                    setCurrentPage = {setCurrentPage}
                />
            </Section>
        </Container>
    )
};

export default Page;
