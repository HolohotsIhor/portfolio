import styles from './Button.module.scss';

type ButtonProps = {
    text: string;
    handler?: (event?: React.MouseEvent<HTMLElement>) => void;
    primary?: boolean;
    cancel?: boolean;
}

export const Button = ({ text, handler, primary = false, cancel = false }: ButtonProps) => {
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
