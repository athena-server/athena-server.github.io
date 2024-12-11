"use client";
import { useMemo } from "react";
import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans, geo } from "@/fonts";
import Carousel from "@/components/Carousel";
import styles from "./styles.module.css";
import Link from "@/components/Link";

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

  const csedServers = useMemo(() => [
    { name: "Dept. Of CSE", link: "https://minerva.nitc.ac.in" },
    { name: "CSED People", link: "https://people.cse.nitc.ac.in/" },
    { name: "CSE Eduserver", link: "https://eduserver.cse.nitc.ac.in/" },
    { name: "CSEA", link: "https://assoc.cse.nitc.ac.in" },
    { name: "Secure Computing Lab", link: "http://scl.cse.nitc.ac.in/" },
    { name: "CSEA WiKi", link: "https://assoc.cse.nitc.ac.in/wiki/" },
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
            <div className="border-[1px] border-white p-8 w-full lg:w-fit h-full">
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

      <section className="relative min-h-screen h-full flex items-center justify-center">
        <SectionDivider />
        <div className="flex flex-col flex-wrap gap-[11px] lg:grid grid-cols-12 grid-rows-12 py-16 2xl:px-16">
          <div className="order-2 w-full h-auto border border-white p-[14px] col-start-1 col-span-3 row-start-1 row-span-7 lg:order-1 ">
            <h2 className={`${alumniSans.className} font-bold bg-transparent text-4xl text-[#3F56E9] ${styles.boxshadow}`}>
              01
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Athena Data Server
            </h3>
            <p>
              Athena is an internal data server for students who are doing their
              BTech in Computer Science and Engineering at the National
              Institute of Technology, Calicut. All the students have an account
              in Athena DataServer from their second year onwards. All users are
              assigned a fixed amount of disk quota. The users can also host
              their personal website.
            </p>
            <div className="py-[14px]">
              <Link
                href="https://athena.nitc.ac.in/how-to-athena/"
                label="How to use Athena"
              />
            </div>
          </div>
          <div className="order-3 w-full h-full border border-white p-[14px] col-start-4 col-span-5 row-start-1 row-span-7 border border-dashed border-white p-[14px]">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}>
              02
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              CSED Web Server
            </h3>
            <p>
              CSED Web Server is official website hosting server of department.
            </p>
            <div className="py-3.5 flex flex-col gap-1">
              {
                csedServers.map(({ name, link }, index) => (
                  <span key={index} className="">
                    <Link href={link} label={name} openInNewTab />
                  </span>
                ))
              }
            </div>
          </div>
          <div className="w-full h-full order-1 col-start-9 col-span-4 row-start-1 row-span-7 lg:border border-white lg:order-3 relative flex items-center lg:justify-center">
            <div className="hidden lg:block absolute top-0 right-0">
              <img src="/FacilitiesPage/tab.svg" alt="tab" />
            </div>
            <div className="flex justify-start lg:justify-center mt-0 mb-[20px] lg:items-center lg:p-[14px]">
              <h2 className={`${alumniSans.className} font-bold text-7xl`}>
                Servers
              </h2>
            </div>
          </div>
          <div className="order-4 w-full h-auto border border-white p-[14px] lg:col-span-4 row-start-8 row-span-5 border border-dashed p-[14px]">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}>
              03
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Ithus Authentication Server
            </h3>
            <p>
              Itus is an authentication server for systems in SSL. Each BTech
              student of department has a username and password with which they
              can login to the system. Itus uses LDAP for authentication.
            </p>
          </div>
          <div className="order-5 w-full h-auto border border-white p-[14px] lg:col-span-4 row-start-8 row-span-5 border border-white p-[14px]">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}>
              04
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Media Server
            </h3>
            <p>
              Media Server is a warehouse of open source operating systems and
              open courses from many prominent institutions of world.
            </p>
            <div className="py-[20px] mt-[14px]">
              <Link href="http://192.168.40.130/" label="Media Server" />
            </div>
          </div>
          <div className="order-6 w-full h-auto border border-white p-[14px] lg:col-span-4 row-start-8 row-span-5 border border-dashed border-white p-[14px]">
            <h2 className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}>
              05
            </h2>
            <h3 className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}>
              Mirror Server
            </h3>
            <p>
              Mirror Server is the Ubuntu Mirror available internal to the
              institution. It contains the up to date repository of supported
              LTS version and recent short support versions
            </p>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen h-full flex flex-col py-24">
        <SectionDivider />
        <h2 className={`${alumniSans.className} font-bold text-7xl`}> Terminal Systems </h2>
        <img
          src="/FacilitiesPage/facilities.svg"
          alt="Technical Specifications"
          className="py-16 px-0 lg:p-16"
        />
        <span className={`${geo.className} font-medium text-2xl text-center text-darkBlue`} style={{
          filter: 'drop-shadow(0 0 10px var(--dark-blue)) drop-shadow(0 0 20px var(--dark-blue))',
        }}>
          TECHNICAL SPECIFICATIONS
        </span>
      </section>
    </Container>
  );
};

export default Page;

