'use client';
import React, { useMemo, useState } from "react";
import Container from "@/components/Container"
import Section from "@/components/Section";
import Input from "@/components/Input";
import { alumniSans } from "@/fonts";
import Link from "@/components/Link";
import CourseCard from "@/components/CourseCard";
import Pagination from "./pagination";

const Page = () => {
    const [currentPage, setCurrentPage] = useState(2);
    const [perPage, setPerPage] = useState(9);

    const courseData = [
        { courseTitle: 'Yo Yo', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'skfjnvwkfvnwkfnv', courseId: 'Yo Yo', reviewCount: '6' },
        { courseTitle: 'Yo Yo', courseId: 'wrfgvwervwr', reviewCount: '2' },
        { courseTitle: 'Je erteegwg', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'iuwh poherthd hertheeh wf', courseId: 'Yo Yo', reviewCount: '6' },
        { courseTitle: 'tgwrhwr', courseId: 'rgjkvnkjrgnbjwr', reviewCount: '2' },
        { courseTitle: 'Yo Yo', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'skfjnvwktrh fvnwkfnv', courseId: 'Yo Yo', reviewCount: '6' },
        { courseTitle: 'jksdnhjsnt', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'Heylo', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'skfjnvwkfvnwkfnv', courseId: 'Yo Yo', reviewCount: '6' },
        { courseTitle: 'Yo Yo', courseId: 'wrfgvwervwr', reviewCount: '2' },
        { courseTitle: 'JNDfjiserig', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'iuwh poiweh wf', courseId: 'Yo Yo', reviewCount: '6' },
        { courseTitle: 'Yrthwrthw', courseId: 'rgjkvnkjrgnbjwr', reviewCount: '2' },
        { courseTitle: 'Yrtrhwwhnd ngdn', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'skfj nvwkfvnwkfnv', courseId: 'Yo Yo', reviewCount: '6' },
        { courseTitle: '45t245 w5ytery', courseId: 'Yo Yo', reviewCount: '2' },
        { courseTitle: 'skfj nvwkfvnwkfnv', courseId: 'Yo Yo', reviewCount: '6' },
        { courseTitle: '45t245 w5ytery', courseId: 'Yo Yo', reviewCount: '2' },
    ];

    const lastPostInd = currentPage * perPage;
    const firstPostInd = lastPostInd - perPage;
    const currentPosts = courseData.slice (firstPostInd, lastPostInd);


    


    return (
        <Container>
            <Section className="pt-20 lg:pt-24 h-full">
                <div className = "w-full flex flex-row justify-between left-1/2 justify-center align-items items-center border-b-[1px] border-solid border-white ">
                    <h1 className={`${alumniSans.className} text-7xl font-bold`}>
                        COURSE REVIEW
                    </h1>
                    <Input onClick = {() => 0} />
                </div>
                <div className = "w-full h-full gap-[50px] place-items-center px-[18px] py-[35px] grid grid-cols-3 grid-rows-3">
                {currentPosts.map((item,i=0) => (
                    <CourseCard
                        key={i++}
                        courseTitle={item.courseTitle}
                        courseId={item.courseId}
                        reviewCount={item.reviewCount}
                    />
                ))}                   
                    {/* <div className = "w-[350px] h-[120px] outline"></div> 
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div>
                    <div className = "w-[350px] h-[120px] outline"></div> */}
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
