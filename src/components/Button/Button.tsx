import React from 'react';
import styles from './Button.module.scss';

type ButtonProps = {
    text: string;
    handler?: (event?: React.MouseEvent<HTMLElement>) => void;
    primary?: boolean;
    cancel?: boolean;
}

export const Button: React.FC<ButtonProps> = ({ text, handler, primary = false, cancel = false }) => {
    return (
        <button
            type="button"
            onClick={handler}
            className={`${styles.button} ${primary ? styles.primary : ''} ${cancel ? styles.cancel : ''}`}
        >
            {text}
        </button>
    );
}
