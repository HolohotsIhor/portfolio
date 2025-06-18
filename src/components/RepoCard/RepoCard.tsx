import { IRepo } from '../../models/models.ts';
import React, { useState } from 'react';
import styles from './RepoCard.module.scss';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux.ts';
import { useAction } from '../../hooks/useActions.ts';
import { Button, Card, Flex } from 'antd';

type RepoCardProps = {
    repo: IRepo;
    loading: boolean;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo, loading }) => {
    const { favourites } = useTypedSelector(state => state.github);
    const [ isFav, setIsFav ] = useState(favourites.includes(repo.html_url));
    const { addFavourite, removeFavourite } = useAction();
    const dispatch = useTypedDispatch();

    console.log(loading);

    const handleAddToFav = () => {
        dispatch(addFavourite(repo.html_url));
        setIsFav(true);
    }

    const handleRemoveFromFav = () => {
        dispatch(removeFavourite(repo.html_url));
        setIsFav(false);
    }

    return (
        <Card loading={loading} style={{ minWidth: 300 }} className={styles.repoCard}>
            <Card.Meta
                title={
                    <a href={repo.html_url}>
                        {repo.full_name}
                    </a>
                }
                description={
                    <>
                        <p>{repo?.description}</p>
                        <p>Forks: <strong>{repo.forks}</strong></p>
                        <p>Forks: <strong>{repo.forks}</strong></p>
                        <Flex wrap gap="small" className="site-button-ghost-wrapper">
                            {
                                isFav ? (
                                    <Button type="primary" danger onClick={handleRemoveFromFav}>Remove</Button>
                                ) : (
                                    <Button type="primary" onClick={handleAddToFav}>Add to favourites</Button>
                                )
                            }
                            <Button
                                    href={repo.html_url}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    variant="success">View repo</Button>
                        </ Flex>
                    </>
                }
            />
        </Card>
    );
}
