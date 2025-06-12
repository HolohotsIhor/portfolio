import React, { useEffect } from 'react';
import { IUser } from '../../models/models.ts';
import styles from './SearchResultList.module.scss';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux.ts';
import { Loader } from '../Loader/Loader.tsx';
import { getUserRepos } from '../../store/github/githubThunk.ts';

type InputResultListProps = {
    items: IUser[];
    handleShow: (show: boolean) => void;
};

export const SearchResultList: React.FC<InputResultListProps> = ({ items, handleShow }) => {
    const { loading, error } = useTypedSelector(state => state.github);
    const dispatch = useTypedDispatch();

    useEffect(() => {
        error && console.log(error);
    }, [error]);

    const handleClick = (login: string) => {
        if (login.length) {
            dispatch(getUserRepos(login));
            handleShow(false);
        }
    };

    if (!items.length && !loading) return null;

    return (
        <div className='result'>
            {loading ? (
                <div className={styles.loader}>
                    <Loader />
                </div>
            ) : (
                <div className={styles.searchResult}>
                    {items.map(item => (
                        <div
                            key={item.id}
                            onClick={() => handleClick(item.login)}
                            className={styles.resultItem}
                        >
                            {item.login}
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};
