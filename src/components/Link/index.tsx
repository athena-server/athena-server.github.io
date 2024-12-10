import NextLink from 'next/link';

/**
 * link component to be used globally
 * 
 * @param {string} [LinkProps.href] - the url to navigate to
 * @param {string} [LinkProps.label] - the text to display
 * @param {boolean} [LinkProps.openInNewTab] - whether to open the link in a new tab (defaults to false)
 * @param {string} [LinkProps.className] - the class name to apply to the link
 * 
 * @returns {JSX.Element} - the link component
 */
const Link = ({
    href,
    label,
    openInNewTab = false,
    className = "",
}: LinkProps): JSX.Element => {
    return (
        <div className={`text-neonGreen w-fit flex flex-row gap-[1em] xs:gap-[0px] ${className}`}>
            <div className='grid place-content-center'>
                <img 
                    src="/icons/linkicon.svg" 
                    alt="link" 
                    className='block h-[1.2em] w-[2em] sm:w-[2em] md:w-[3em] lg:w-[3em] object-contain' 
                />
            </div>
            <NextLink
                href={href}
                target={openInNewTab ? "_blank" : "_self"}
                rel={openInNewTab ? "noopener noreferrer" : undefined}
                className='hover:underline'
            >
                {label}
            </NextLink>
        </div>
    )
}

export default Link;

export interface LinkProps {
    href: string;
    label: string;
    openInNewTab?: boolean;
    className?: string;
}
