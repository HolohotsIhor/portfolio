import { useEffect } from 'react';
import { IUser } from '../../models/models.ts';
import styles from './SearchResultList.module.scss';
import { useAppDispatch, useAppSelector } from '../../hooks/useRedux.ts';
import { getUserRepos } from '../../store/github/githubThunk.ts';
import { Spin } from 'antd';

type InputResultListProps = {
    items: IUser[];
    handleShow: (show: boolean) => void;
};

export const SearchResultList = ({ items, handleShow }: InputResultListProps) => {
    const { loading, error } = useAppSelector(state => state.github);
    const dispatch = useAppDispatch();

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
                    <Spin />
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
