const CloseIcon = ({
    className = "",
    src = "/CloseIcon/tab-bar-icon.svg",
}) => {
    return (
        <img
            src={src}
            alt="tab-bar-icon"
            className={`hidden md:block absolute top-0 -right-16 ${className}`}
            height={100}
        />
    )
}

export default CloseIcon;