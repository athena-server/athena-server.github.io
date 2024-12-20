import Card, { CardProps } from "@/components/Card";
import { dummyData } from "./data";

const WebTeam = () => {
    const webteam = (dummyData.webteam) as CardProps[];
    return (
        <div className="w-full h-full">
            <div className="flex items-center justify-center flex-wrap gap-[10px] py-[24px] lg:p-[24px] ">
                {
                    webteam.map((details, index) => (
                        <Card key={index} {...details} />
                    ))
                }
            </div>
        </div>
    )
}

export default WebTeam;