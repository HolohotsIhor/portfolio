import React, { useEffect, useRef, useState } from 'react';
import styles from './UserForm.module.scss';
import { useInput } from '../../hooks/useInput';
import { User } from '../../models/user';
import { DATA_USERS } from '../../helpers/constant';

const input = {
    firstName: {
        placeholder: 'Input first name',
        pattern: /^[A-ZА-Я][a-zа-я]{1,20}$/,
        error: 'First name must start with a capital letter and contain only letters'
    },
    lastName: {
        placeholder: 'Input last name',
        pattern: /^[A-ZА-Я][a-zа-я]{1,20}$/,
        error: 'Last name must start with a capital letter and contain only letters'
    },
    phone: {
        placeholder: 'Input phone',
        pattern: /^\+?[0-9]{10,15}$/,
        error: 'Phone must be a valid number with 10–15 digits'
    }
};

interface UserFormProps {
    handler?: () => void;
    users: User[] | null;
    setUsers: React.Dispatch<React.SetStateAction<User[] | null>>;
}

export const UserForm: React.FC<UserFormProps> = ({ handler, users, setUsers }) => {
    const firstNameProps = useInput('', input.firstName.placeholder);
    const lastNameProps = useInput('', input.lastName.placeholder);
    const phoneProps = useInput('', input.phone.placeholder);
    const firstNameRef = useRef<HTMLInputElement>(null);

    const [errors, setErrors] = useState<{ [key: string]: string }>({});

    useEffect(() => {
        firstNameRef.current?.focus();
    }, []);

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();

        const newErrors: typeof errors = {};

        if (!input.firstName.pattern.test(firstNameProps.value)) {
            newErrors.firstName = input.firstName.error;
        }
        if (!input.lastName.pattern.test(lastNameProps.value)) {
            newErrors.lastName = input.lastName.error;
        }
        if (!input.phone.pattern.test(phoneProps.value)) {
            newErrors.phone = input.phone.error;
        }

        setErrors(newErrors);

        if (Object.keys(newErrors).length === 0) {
            // OK. We can adding new user
            const newUser = {
                id: (Math.floor(Date.now() / 1000)).toString(),
                firstName: firstNameProps.value,
                lastName: lastNameProps.value,
                phone: phoneProps.value
            };
            const newUsersArray = users ? [...users, newUser] : [newUser];
            localStorage.setItem(DATA_USERS, JSON.stringify(newUsersArray));
            setUsers(newUsersArray);
            if (handler) handler();
        }
    };

    return (
        <>
            <h2 className={styles.title}>Add new user:</h2>
            <form className={styles.form} onSubmit={handleSubmit}>
                <input
                    {...firstNameProps}
                    ref={firstNameRef}
                    className={styles.input}
                    type="text"
                />
                {errors.firstName && <div className={styles.error}>{errors.firstName}</div>}

                <input
                    {...lastNameProps}
                    className={styles.input}
                    type="text"
                />
                {errors.lastName && <div className={styles.error}>{errors.lastName}</div>}

                <input
                    {...phoneProps}
                    className={styles.input}
                    type="text"
                />
                {errors.phone && <div className={styles.error}>{errors.phone}</div>}

                <div className={styles.group}>
                    <button className={styles.button} type="submit">
                        Add user
                    </button>
                    <button
                        className={styles.button}
                        type="button"
                        onClick={handler}
                    >
                        Cancel
                    </button>
                </div>
            </form>
        </>
    );
};
