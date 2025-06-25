import styles from './SectionSubtitle.module.scss';

type SectionSubtitleProps = {
    text: string;
};

export const SectionSubtitle = ({ text }: SectionSubtitleProps) => {
    return (
        <p className={styles.sectionSubtitle}>
            {text}
        </p>
    );
}
