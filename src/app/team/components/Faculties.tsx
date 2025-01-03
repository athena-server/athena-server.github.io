import Card, { CardProps } from "@/components/Card";
import { dummyData, TeamsData } from "./data";
import { alumniSans } from "@/fonts";

const Faculties = () => {
    const currentFaculty = (dummyData.faculties as TeamsData).current as CardProps[]
    const prevFaculties = ((dummyData.faculties as TeamsData).previous as CardProps[]);
    return (
        <div className="w-full h-full">
            <div className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                    <Card {...currentFaculty[0]} />
                </div>
            </div>
            <div className="pt-20 lg:pt-24">
                <h2 className={`text-[64px] font-bold w-full text-left lg:text-center ${alumniSans.className}`}> Our Roots </h2>
                <div className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white">
                    <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                        {
                            prevFaculties.map((fac, index) => (
                                <Card {...fac} key={index} />
                            ))
                        }
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Faculties;