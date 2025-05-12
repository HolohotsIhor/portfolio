import React from 'react';
import styles from './SectionSubtitle.module.scss';

type SectionSubtitleProps = {
    text: string;
};

export const SectionSubtitle: React.FC<SectionSubtitleProps> = ({ text }) => {
    return (
        <p className={styles.sectionSubtitle}>
            {text}
        </p>
    );
}
