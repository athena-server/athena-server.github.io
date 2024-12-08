import { ReactNode } from "react";

/**
 * Global button component to be used in all the pages.
 * 
 * @param {ButtonProps} props - The props for the Button component.
 * @param {React.ReactNode} props.children - The contents of the button.
 * @param {string} [props.className] - Additional classes to be added to the button (optional).
 * @param {() => void} [props.onClick] - The function to be called when the button is clicked (optional).
 * @param {boolean} [props.showIcon] - Whether to show the icon in the button (optional).
 * @param {boolean} [props.disabled] - Disables the button (optional)
 * @returns {JSX.Element} The rendered button component.
 * 
 * @author Diljith P D
 */
const Button = ({
    children,
    className,
    onClick,
}: ButtonProps): JSX.Element => {
    return (
        <button
            className={`${className}`}
            onClick={onClick}
        >
            {children}
        </button>
    );
}


export default Button;
export interface ButtonProps {
    children: ReactNode
    className?: string,
    onClick?: () => void,
    showIcon?: boolean,
    disabled?: boolean,
};