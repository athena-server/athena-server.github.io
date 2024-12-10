import Container from "@/components/Container";
import SectionDivider from "@/components/SectionDivider";
import { alumniSans } from "@/fonts";
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

                {/* section 2 */}
            </section>
            <section className="relative min-h-screen h-full">
                <SectionDivider />

                {/* section 3 */}
            </section>
        </Container>
    )
}

export default Page;