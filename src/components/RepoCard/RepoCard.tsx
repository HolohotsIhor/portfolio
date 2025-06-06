import { IRepo } from '../../models/models.ts';
import React, { useState } from 'react';
import styles from './RepoCard.module.scss';
import { Button } from '../Button/Button.tsx';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux.ts';
import { useAction } from '../../hooks/useActions.ts';

type RepoCardProps = {
    repo: IRepo;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
    const { favourites } = useTypedSelector(state => state.github);
    const [ isFav, setIsFav ] = useState(favourites.includes(repo.html_url));
    const { addFavourite, removeFavourite } = useAction();
    const dispatch = useTypedDispatch();

    const handleAddToFav = () => {
        dispatch(addFavourite(repo.html_url));
        setIsFav(true);
    }

    const handleRemoveFromFav = () => {
        dispatch(removeFavourite(repo.html_url));
        setIsFav(false);
    }

    return (
        <div className={styles.card}>
            <a href={repo.html_url} target='_blank'>
                <h2>{repo.full_name}</h2>
            </a>
            <p>Forks: <strong>{repo.forks}</strong></p>
            <p>Watchers: <strong>{repo.watchers}</strong></p>
            <p>{repo?.description}</p>
            {
                isFav ? (
                    <Button
                        cancel={true}
                        text='Remove'
                        handler={handleRemoveFromFav}
                    />
                ) : (
                    <Button
                        primary={true}
                        text='Add to favourites'
                        handler={handleAddToFav}
                    />
                )
            }
        </div>
    );
}
