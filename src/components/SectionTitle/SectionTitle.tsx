import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
    text: string;
};

export const SectionTitle = ({ text }: SectionTitleProps) => {
    return (
        <h1 className={styles.sectionSubtitle}>
            {text}
        </h1>
    );
}
