import styles from './styles.module.css'

const Arrow = ({
    color = "white",
    className = ""
}: {
    color: "white" | "black",
    className?: string
}) => {
    return (
        <svg width="15" height="15" viewBox="0 0 24 25" fill="none" xmlns="http://www.w3.org/2000/svg" className={styles.glowEffect}>
            <path d="M1.71484 22.7853L22.2863 2.21387M22.2863 2.21387H6.8577M22.2863 2.21387V17.6424" stroke="white" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>

    )
}

export default Arrow;