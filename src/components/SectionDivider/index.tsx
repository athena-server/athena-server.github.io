/**
 * Section divider to be used between sections of a page 
 * @example <div className="relative">
 *            <SectionDivider />
 *          </div>
 * 
 * @returns {JSX.Element} The rendered section divider component.
 * 
 * @author Diljith P D
 */
const SectionDivider = () => {
    return (
        <div className="w-screen max-w-[1920px] absolute top-0 bg-white h-[1px] left-[-1rem] md:left-[-4rem] 2xl:left-0" />
    )
}

export default SectionDivider;