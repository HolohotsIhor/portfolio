import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    text: string;
    handler: (event: React.MouseEvent<HTMLAnchorElement>) => void;
}

export const Button: React.FC<ButtonProps> = ({ text, handler }) => {
    return (
        <span
            className={`${styles.button} ${styles['button--arrow']}`}
            onClick={handler}
        >
            {text}
        </span>
    );
}
