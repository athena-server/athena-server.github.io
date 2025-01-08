import Card, { CardProps } from "@/components/Card";
import { dummyData } from "../../../data/teamData";
import { getStaffData } from "@/lib/teams";
import NoData from "./NoData";

const Staff = () => {
    const staff = getStaffData();

    return (
        <div className="w-full h-full">
            {!staff.length ? (
                <NoData />
            ) : (
                <>
                    <div className="flex items-center justify-center flex-wrap gap-[10px] py-[24px] lg:p-[24px] ">
                        {staff.map((details, index) => (
                            <Card key={index} {...details} />
                        ))}
                    </div>
                </>
            )}
        </div>
    );
};

export default Staff;
