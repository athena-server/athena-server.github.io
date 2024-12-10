import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans } from "@/fonts";
import styles from "./styles.module.css";
// to use font alumni sans on any text, use the following css: <div className={`${alumniSans.classname} ...tailwind styles`}
// default font is inter so need to change font for any other elements
// refer page.tsx in branch 1-home-page for further doubt clearing on any usage of font, or carousal or section divider component
// navbar and footer are already implemented in the layout component so no need to import them here (they are merged to main so won't be visible in this branch but it'll be there when you merge your branch to main)

// dont edit any component as it can cause issues in other places there those components are used
// only edit in the section where you are working so as to not conflict with the others working on same page
// you can create components in the components folder, IF AND ONLY IF you feel those components will be used in multiple parts, and not just in one spot,
// before creating a component, ask me to make sure the comopnent doesn't already exist and doesn't cause future conflicts

// delete these comments once you are done with them

const Page = () => {
  return (
    <Container>
      <section className="relative min-h-screen h-full">
        {/* Section 1 */}
      </section>
      <section className="relative min-h-screen h-full">
        <SectionDivider />
        <div className="flex flex-wrap flex-row gap-[11px]">
          <div className="border border-solid border-white p-[14px] mt-[114px] w-[332px] h-[431px]">
            <h1
              className={`${alumniSans.className} font-bold bg-transparent text-4xl text-[#3F56E9] ${styles.boxshadow}`}
            >
              01
            </h1>
    
            <h1
              className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}
            >
              Athena Data Server
            </h1>
            <p>
              Athena is an internal data server for students who are doing their
              BTech in Computer Science and Engineering at the National
              Institute of Technology, Calicut. All the students have an account
              in Athena DataServer from their second year onwards. All users are
              assigned a fixed amount of disk quota. The users can also host
              their personal website.
            </p>
          </div>
          <div className="border border-dashed border-white p-[14px] mt-[114px] w-[506px] h-[431px]">
            <h1
              className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}
            >
              02
            </h1>
            <h1
              className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}
            >
              CSED Web Server
            </h1>
            <p>
              CSED Web Server is official website hosting server of department.
            </p>
          </div>
          <div className="border border-solid border-white p-[14px] mt-[114px] h-[431px] w-[426px] flex justify-center items-center">
            <h1 className={`${alumniSans.className} font-bold text-7xl`}>
              Servers
            </h1>
          </div>
          <div className="border border-dashed border-white p-[14px] mb-[114px] w-[429px] h-[310px]">
            <h1
              className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}
            >
              03
            </h1>
            <h1
              className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}
            >
              Ithus Authentication Server
            </h1>
            <p>
              Itus is an authentication server for systems in SSL. Each BTech
              student of department has a username and password with which they
              can login to the system. Itus uses LDAP for authentication.
            </p>
          </div>
          <div className="border border-solid border-white p-[14px] mb-[114px] w-[410px] h-[310px]">
            <h1
              className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}
            >
              04
            </h1>
            <h1
              className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}
            >
              Media Server
            </h1>
            <p>
              Media Server is a warehouse of open source operating systems and
              open courses from many prominent institutions of world.
            </p>
          </div>
          <div className="border border-dashed border-white p-[14px] mb-[114px] w-[428px] h-[310px]">
            <h1
              className={`${alumniSans.className} font-bold text-4xl text-[#3F56E9] ${styles.boxshadow}`}
            >
              05
            </h1>
            <h1
              className={`${alumniSans.className} font-bold text-5xl ${styles.textstroke}`}
            >
              Mirror Server
            </h1>
            <p>
              Mirror Server is the Ubuntu Mirror available internal to the
              institution. It contains the up to date repository of supported
              LTS version and recent short support versions
            </p>
          </div>
        </div>
      </section>
      <section className="relative min-h-screen h-full">
        <SectionDivider />
        <div className="pt-[76px] pr-[108px] pb-[76px] pl-[108px]">
          <img
            src="/FacilitiesPage/facilities.svg"
            alt="Technical Specifications"
          />
        </div>
      </section>
    </Container>
  );
};

export default Page;
