import React from 'react';
import styles from './Navigation.module.scss'

interface NavigationItems {
    id: number;
    title: string;
    active: boolean;
}

interface NavigationProps {
    items: NavigationItems[];
    handler: (id: number) => void;
}

export const Navigation: React.FC<NavigationProps> = ({ items, handler }) => {
    return (
        <div className={styles.nav}>
            {
                items.length
                    ? (
                        items.map(item => (
                            <div
                                key={item.id}
                                className={`${styles.navLink} ${item.active && styles.isActive}`}
                                onClick={() => handler(item.id)}
                            >
                                {item.title}
                            </div>
                        ))
                    )
                    : <div>Loading...</div>
            }
        </div>
    );
}
