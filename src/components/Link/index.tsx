import NextLink from 'next/link';


/**
 * link comopnent to be used globally
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
        <NextLink href={href}>
            {label}
        </NextLink>
    )
}

export default Link;
export interface LinkProps {
    href: string;
    label: string;
    openInNewTab?: boolean;
    className?: string;
}