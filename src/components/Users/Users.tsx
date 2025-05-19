import React from 'react';
import styles from './Users.module.scss';
import { User } from '../../models/user';
import { DATA_USERS } from '../../helpers/constant';

interface UsersProps {
    users: User[] | null;
    setUsers: React.Dispatch<React.SetStateAction<User[] | null>>;
}

export const Users: React.FC<UsersProps> = ({ users, setUsers }) => {
    const handleDeleteUser = (e: React.MouseEvent<HTMLUListElement>) => {
        const target = e.target as HTMLElement;

        console.log(target);

        if (target.tagName === 'BUTTON' && target.dataset.id) {
            const idToDelete = target.dataset.id;
            if (!users) return;
            const newUsers = users.filter(user => user.id !== idToDelete);
            setUsers(newUsers);
            localStorage.setItem(DATA_USERS, JSON.stringify(newUsers));
        }
    };

    if (!users) {
        return <div>Loading...</div>;
    }

    if (!users.length) {
        return <div>Please, add new user.</div>;
    }

    return (
        <>
            <h2 className={styles.title}>Users</h2>
            <ul
                className={styles.userList}
                onClick={handleDeleteUser}
            >
                {users.map(user => (
                    <li className={styles.user} key={user.id}>
                        {`${user.firstName} ${user.lastName}: ${user.phone}`}
                        <button
                            type='button'
                            data-id={user.id}
                            className={styles.delete}
                        >
                            Delete
                        </button>
                    </li>
                ))}
            </ul>
        </>
    );
};
