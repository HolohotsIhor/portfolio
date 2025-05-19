import React, { useEffect, useState } from 'react';
import { Navigation } from '../Navigation/Navigation';
import { Users } from '../Users/Users';
import { UserForm } from '../UserForm/UserForm';
import styles from './Contacts.module.scss';
import { DATA_USERS } from '../../helpers/constant';
import { User } from '../../models/user';

export const Contacts: React.FC = () => {
    const [usersArray, setUsersArray] = useState<User[] | null>(() => {
        const storedUsers = localStorage.getItem(DATA_USERS);
        return storedUsers ? JSON.parse(storedUsers) : null;
    });

    const [activeTab, setActiveTab] = useState(1);

    useEffect(() => {
        if (!usersArray) {
            const fetchUsers = async () => {
                const response = await fetch('http://localhost:5173/data/data.json');
                const data = await response.json();
                setUsersArray(data);
                localStorage.setItem(DATA_USERS, JSON.stringify(data));
            };
            fetchUsers();
        }
    }, []);

    const handleTabChange = (id: number) => {
        setActiveTab(id);
    };

    const routeToContacts = () => {
        setActiveTab(1);
    };

    const tabs = [
        {
            id: 1,
            title: 'Contacts',
            content: <Users
                users={usersArray}
                setUsers={setUsersArray} />,
        },
        {
            id: 2,
            title: 'Add new',
            content: <UserForm
                handler={routeToContacts}
                users={usersArray}
                setUsers={setUsersArray} />,
        },
    ];

    return (
        <div>
            <Navigation
                items={tabs.map(tab => ({
                    id: tab.id,
                    title: tab.title,
                    active: tab.id === activeTab,
                }))}
                handler={handleTabChange}
            />
            <div className={styles.content}>
                {tabs.find(tab => tab.id === activeTab)?.content}
            </div>
        </div>
    );
};
