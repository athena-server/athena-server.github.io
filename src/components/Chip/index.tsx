import styles from './styles.module.css';

const Chip = ({
    text
}: {
    text: string,
}) => {
    return (
        <span className={styles.chip}>
            <span className={styles.glowEffect}>
                {text}
            </span>
        </span>
    )
}

export default Chip;