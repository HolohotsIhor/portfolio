import React, { ReactNode } from 'react';
import styles from './Layout.module.scss'
import { Container } from 'react-bootstrap';

type ContainerProps = {
    children: ReactNode;
};

export const Layout: React.FC<ContainerProps> = ({ children }) => {
    return (
        <Container className={styles.container}>
            {children}
        </Container>
    );
}
