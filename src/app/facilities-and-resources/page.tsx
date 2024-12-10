"use client";
import { useMemo } from "react";
import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans } from "@/fonts";
import Carousel from "@/components/Carousel";

const Page = () => {
  const carouselData = useMemo(() => [
    "FacilitiesPage/temp-image-1.jpg",
    "FacilitiesPage/temp-image-2.jpg",
    "FacilitiesPage/temp-image-1.jpg",
    "FacilitiesPage/temp-image-2.jpg",
  ], []);


  const resources = useMemo(() => [
    { icon: "FacilitiesPage/server.png", text: "9 High Performing Servers" },
    { icon: "FacilitiesPage/cctv.png", text: "24 hrs CCTV Monitoring" },
    { icon: "FacilitiesPage/monitor.png", text: "75 Terminal Systems" },
    { icon: "FacilitiesPage/computer.png", text: "2 Work Station with GPU" },
    { icon: "FacilitiesPage/networking.png", text: "7 Advanced Networking Equipments" },
    { icon: "FacilitiesPage/wifi.png", text: "Wi-Fi Facility" },
  ], []);

  return (
    <Container>
      <section className="relative min-h-screen h-full flex justify-center py-16 lg:py-24 px-0 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="flex flex-col w-full lg:w-7/12">
            <h1 className={`${alumniSans.className} text-8xl font-bold `}>
              FACILITIES
            </h1>
            <span
              className="text-white font-normal text-xl mt-10 mx-auto"
            >
              The lab has high-performance computers with LAN and internet
              facility through wired connectivity. It also provides WiFi, Audio
              Visual Projection Systems and printers. Moreover, it is equipped
              with 9 servers with advanced configurations for central data
              storage, website hosting, DHCP service, conduction of exams, LDAP
              service.
            </span>

            <div className="py-10 px-16 hidden aspect-video lg:block">
              <Carousel
                images={carouselData}
                showPreview
                controls
                autoPlay
              />
            </div>
          </div>

          <div className="w-full lg:w-5/12 h-full flex justify-center lg:justify-end ">
            <div className="border-[1px] border-white p-8 w-full lg:w-fith-full">
              <h2
                className={`${alumniSans.className} text-neonGreen font-bold text-5xl ml-4`}
                style={{
                  textShadow: `
                  0px 0px 20px var(--neon-green),
                  0px 0px 20px var(--neon-green),
                  0px 0px 20px var(--neon-green),
                  0px 0px 0px var(--neon-green)
                `,
                }}


              >
                Resources
              </h2>
              <ul className="text-white mt-4  space-y-6">
                {
                  resources.map(({ icon, text }, index) => (
                    <li className="gap-4 flex" key={index}>
                      <span className="h-[32px] w-[32px]">
                        <img src={icon} alt={`icon-${icon}`} />
                      </span>
                      <span
                        className="text-xl flex justify-center items-center"
                      >
                        {text}
                      </span>
                    </li>
                  ))
                }
              </ul>
            </div>
          </div>
        </div>
      </section>

      <section className="relative min-h-screen h-full">
        <SectionDivider />
        {/* section 2 */}
      </section>
      <section className="relative min-h-screen h-full">
        <SectionDivider />
        {/* section 3 */}
      </section>
    </Container>
  );
};

export default Page;
