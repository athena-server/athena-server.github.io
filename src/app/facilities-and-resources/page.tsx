"use client";
import { useState, useEffect, useMemo } from "react";
import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans, inter } from "@/fonts";
import Carousel from "@/components/Carousel";

const Page = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  const server = 9;
  const terminal = 75;
  const workStation = 2;
  const networking = 7;

  const carouselData = [
    { id: 1, text: "FacilitiesPage/image1.png" },
    { id: 2, text: "FacilitiesPage/image2.png" },
    { id: 3, text: "FacilitiesPage/image3.png" },
    { id: 4, text: "FacilitiesPage/image2.png" },
    { id: 5, text: "FacilitiesPage/image3.png" },
  ];

  const imageUrls = carouselData.map((i) => i.text);

  return (
    <Container>
      <section className="relative min-h-screen h-full ">
        <div
          className="flex justify-center items-center gap-5 flex-col min-h-screen min-w-screen
         lg:flex-row lg:w-[1256px] lg:h-[642px] lg:top-[209px] lg:left-[128px] mx-5 lg:mx-auto"
        >
          <div className="mx-auto flex flex-col  lg:w-[60%]">
            <h1 className={`${alumniSans.className} text-8xl font-bold `}>
              FACILITIES
            </h1>
            <span
              className={`${inter.className} text-white font-normal text-lg mt-10 mx-auto`}
            >
              The lab has high-performance computers with LAN and internet
              facility through wired connectivity. It also provides WiFi, Audio
              Visual Projection Systems and printers. Moreover, it is equipped
              with 9 servers with advanced configurations for central data
              storage, website hosting, DHCP service, conduction of exams, LDAP
              service.
            </span>

            <div className="m-10 pb-0  hidden bg-[#0E0E10]  lg:w-[665px] lg:h-[320px]  lg:block ">
              <Carousel
                images={imageUrls}
                showPreview={true}
                controls={true}
                autoPlay={true}
              />
            </div>
          </div>

          <div className="h-auto w-auto lg:w-[461px] lg:h-[598px] border-[1px] border-white xl:flex-shrink-0 p-4 m-4 mx-auto">
            <h2
              className={`${alumniSans.className} text-[#2CFF05] font-bold text-5xl ml-4`}
              style={{
                textShadow: `
                  0px 0px 20px #2CFF05,
                  0px 0px 20px #2CFF05,
                  0px 0px 20px #2CFF05,
                  0px 0px 0px #2CFF05
                `,
              }}
              
              
            >
              Resources
            </h2>
            <ul className="text-white mt-4  space-y-6">
              <li className="gap-4 flex ">
                <span className="h-[32px] w-[32px]">
                  <img src="FacilitiesPage/server.png" alt="" />
                </span>
                <span
                  className={`${inter.className} text-xl flex justify-center items-center`}
                >
                  {server} High Performing Servers{" "}
                </span>
              </li>
              <li className="gap-4 flex ">
                <span className="h-[32px] w-[32px]">
                  <img src="FacilitiesPage/cctv.png" alt="" />
                </span>
                <span
                  className={`${inter.className} text-xl flex justify-center items-center`}
                >
                  24 hrs CCTV Monitoring{" "}
                </span>
              </li>
              <li className="gap-4 flex ">
                <span className="h-[32px] w-[32px]">
                  <img src="FacilitiesPage/monitor.png" alt="" />
                </span>
                <span
                  className={`${inter.className} text-xl flex justify-center items-center`}
                >
                  {terminal} Terminal Systems{" "}
                </span>
              </li>
              <li className="gap-4 flex ">
                <span className="h-[32px] w-[32px]">
                  <img src="FacilitiesPage/computer.png" alt="" />
                </span>
                <span
                  className={`${inter.className} text-xl flex justify-center items-center`}
                >
                  {workStation} Work Station with GPU{" "}
                </span>
              </li>
              <li className="gap-4 flex ">
                <span className="h-[32px] w-[32px]">
                  <img src="FacilitiesPage/networking.png" alt="" />
                </span>
                <span
                  className={`${inter.className} text-xl flex justify-center items-center`}
                >
                  {networking} Advanced Networking Equipments{" "}
                </span>
              </li>
              <li className="gap-4 flex ">
                <span className="h-[32px] w-[32px]">
                  <img src="FacilitiesPage/wifi.png" alt="" />
                </span>
                <span
                  className={`${inter.className} text-xl flex justify-center items-center`}
                >
                  Wi-Fi Facility{" "}
                </span>
              </li>
            </ul>
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
