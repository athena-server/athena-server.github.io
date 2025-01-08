import Card, { CardProps } from "@/components/Card";
import { dummyData, TeamsData } from "../../../data/teamData";
import { alumniSans } from "@/fonts";
import Button from "@/components/Button";
import { useCallback } from "react";
import { useRouter } from "next/navigation";
import { getAdminData } from "@/lib/teams";
import NoData from "./NoData";

const Admins = () => {
    const { currentAdmins, prevAdmins } = getAdminData();

    const router = useRouter();
    const routeHandler = useCallback(
        (url: string) => {
            router.push(url);
        },
        [router]
    );

    return (
        <div className="w-full h-full">
            {!currentAdmins.length && !prevAdmins.length ? (
                <NoData />
            ) : (
                <>
                    {Object.keys(currentAdmins).map((year, index) => (
                        <div
                            key={index}
                            className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white"
                        >
                            <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                                {(currentAdmins[year] as CardProps[]).map(
                                    (admin: CardProps, idx: number) => (
                                        <div key={idx}>
                                            <Card {...admin} />
                                        </div>
                                    )
                                )}
                            </div>
                            <div
                                className={`w-full lg:w-fit flex items-center lg:items-end justify-start lg:justify-end text-9xl ${alumniSans.className}`}
                            >
                                {year}&apos;s
                            </div>
                        </div>
                    ))}{" "}
                    <div className="pt-20 lg:pt-24">
                        <h2
                            className={`text-[64px] font-bold w-full text-left lg:text-center ${alumniSans.className}`}
                        >
                            {" "}
                            Previous Student Admins{" "}
                        </h2>
                        <div>
                            {Object.keys(prevAdmins).map((year, index) => (
                                <div
                                    key={index}
                                    className="flex flex-col-reverse lg:flex-row border-b border-b-[2px] border-white"
                                >
                                    <div className="w-full flex gap-[10px] flex-wrap md:grid-cols-3 py-[24px] lg:p-[24px] items-center justify-center md:justify-start">
                                        {(prevAdmins[year] as CardProps[]).map(
                                            (admin: CardProps, idx: number) => (
                                                <div key={idx}>
                                                    <Button
                                                        className="!px-[42px] !py-[16px]"
                                                        onClick={() =>
                                                            routeHandler(
                                                                admin.socials
                                                                    ?.linkedin ||
                                                                    "#"
                                                            )
                                                        }
                                                        hideIcon
                                                    >
                                                        {admin.name}
                                                    </Button>
                                                </div>
                                            )
                                        )}
                                    </div>

                                    <div
                                        className={`w-full lg:w-fit flex items-center lg:items-end justify-start lg:justify-end text-8xl ${alumniSans.className}`}
                                    >
                                        {year}&apos;s
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </>
            )}
        </div>
    );
};

export default Admins;
