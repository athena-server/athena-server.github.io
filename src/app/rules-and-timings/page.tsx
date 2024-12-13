import Container from "@/components/Container"
import Section from "@/components/Section";
import { alumniSans } from "@/fonts";
import { useMemo } from "react";

const Page = () => {
    const schedule = useMemo(() => ({
        Monday: ["-", "-", "Aravind", "Shibin"],
        Tuesday: ["-", "-", "Shalin", "Aravind"],
        Wednesday: ["-", "-", "Jaefar", "Jaefar"],
        Thursday: ["-", "-", "Adil Abdul Jabbar C", "Arun Natarajan"],
        Friday: ["-", "-", "Sanjay Rajakumar", "Thomas"],
        Saturday: ["Harshavardhan", "Madhu Lokesh", "Bhaskar", "Binshadh"],
        Sunday: ["Harshavardhan", "Madhu Lokesh", "Naila", "Naila"],
    }), []);

    const timeSlots = useMemo(() => ["10:00-13:00", "14:00-17:00", "17:30-20:00", "20:30-23:30"], []);

    return (
        <Container>
            <Section id="rules" className="min-h-screen h-full mb-16 pt-20 lg:pt-24 flex flex-col items-center justify-center">
                { /* Rules section*/}
                hello
            </Section>
            <Section id="timings" className="h-full py-24 2xl:py-48 flex flex-col items-center justify-center gap-[3em]" borderTop>

                <div className="upper-section flex flex-col gap-[1rem] w-full lg:hidden">

                    <div className={`${alumniSans.className} pl-[2em] pb-[1em]`}>
                        <h1 className={`${alumniSans.className} text-5xl font-bold`}>Timings</h1>
                    </div>

                    <div className={`${alumniSans.className} border border-[#20331C] py-[0.5rem] grow grid place-content-center text-neonGreen text-2xl font-semibold`}><p style={{ filter: "drop-shadow(0 0 10px var(--neon-green)) drop-shadow(0 0 20px var(--neon-green)" }}>Monday to Friday</p></div>
                    <div className="border-[1.5px] border-dashed p-[0.5rem] flex-1">
                        <p>9am - 5:30pm : Lab managed by staff</p>
                        <p>5:30pm - 12am : Lab managed by student admins</p>
                    </div>
                    <div className={`${alumniSans.className} border border-[#20331C] py-[0.5rem] grow grid place-content-center text-neonGreen text-2xl font-semibold`}><p style={{ filter: "drop-shadow(0 0 10px var(--neon-green)) drop-shadow(0 0 20px var(--neon-green)" }}>Saturday & Sunday</p></div>
                    <div className="border-[1.5px] border-dashed p-[0.5rem] flex-1" >
                        <p>9am - 12am : Lab managed by admins,</p>
                        <p>with discretion to deny access</p>
                    </div>

                </div>

                <div className="upper-section lg:flex lg:flex-row gap-[1rem] w-full hidden">
                    <div
                        className={`${alumniSans.className} lg:grow-[2] border-[1px] lg:order-3  border-white flex items-center justify-center py-[1.5em] relative w-1/6`}
                    >
                        <h1 className={`${alumniSans.className} text-5xl font-bold`}>Timings</h1>
                        <img
                            src="/FacilitiesPage/tab.svg"
                            alt=""
                            className="absolute top-0 right-0"
                        />
                    </div>

                    <div className={`${alumniSans.className} lg:grow-[2]  lg:order-1 sm:order-1 text-2xl font-semibold text-neonGreen flex flex-col text-center gap-[1rem] lg:text-3xl w-1/6`}>
                        <div className="border border-[#20331C] py-[0.5rem] grow grid place-content-center"><p style={{ filter: "drop-shadow(0 0 10px var(--neon-green)) drop-shadow(0 0 20px var(--neon-green)" }}>Monday to Friday</p></div>
                        <div className="border border-[#20331C] py-[0.5rem] grow grid place-content-center"><p style={{ filter: "drop-shadow(0 0 10px var(--neon-green)) drop-shadow(0 0 20px var(--neon-green)" }}>Saturday & Sunday</p></div>
                    </div>

                    <div className="text-lg flex flex-col gap-[1rem] lg:order-2 lg:grow-3 w-4/6">
                        <div className="border-[1.5px] border-dashed p-[0.5rem] flex-1">
                            <p>9am - 5:30pm : Lab managed by staff</p>
                            <p>5:30pm - 12am : Lab managed by student admins</p>
                        </div>
                        <div className="border-[1.5px] border-dashed p-[0.5rem] flex-1" >
                            <p>9am - 12am : Lab managed by admins,</p>
                            <p>with discretion to deny access</p>
                        </div>
                    </div>

                </div>

                <div className={`${alumniSans.className} lower-section text-2xl w-full overflow-scroll`}>
                    <div className="grid grid-cols-[repeat(5,1fr)] w-full min-w-[800px]">

                        <div className="font-bold border p-2 text-center bg-[#16161b]">Day/Time</div>
                        {timeSlots.map((slot, index) => (
                            <div key={index} className="font-bold border grid place-content-center bg-[#16161b]">
                                <p>{slot}</p>
                            </div>
                        ))}

                        {Object.entries(schedule).map(([day, times], dayIndex) => (
                            <div key={dayIndex} className="contents p-3 text-center">
                                <div className="font-medium border bg-[#16161b]">{day}</div>
                                {times.map((person, timeIndex) => (
                                    <div key={timeIndex} className="border text-center">
                                        {person}
                                    </div>
                                ))}
                            </div>
                        ))}

                    </div>
                </div>

            </Section>
        </Container>
    )
}

export default Page;