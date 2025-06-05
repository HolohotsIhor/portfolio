import React from 'react';
import styles from './SectionTitle.module.scss';

type SectionTitleProps = {
    text: string;
};

export const SectionTitle: React.FC<SectionTitleProps> = ({ text }) => {
    return (
        <h1 className={styles.sectionSubtitle}>
            {text}
        </h1>
    );
}
