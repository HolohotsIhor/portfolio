import { IRepo } from '../../models/models.ts';
import React, { useState } from 'react';
import styles from './RepoCard.module.scss';
import { useTypedDispatch, useTypedSelector } from '../../hooks/useRedux.ts';
import { useAction } from '../../hooks/useActions.ts';
import { Button, Card } from 'react-bootstrap';

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
        <Card border='light' className={styles.repoCard}>
            <Card.Header><a href={repo.html_url} target='_blank'>{repo.full_name}</a></Card.Header>
            <Card.Body>
                <Card.Title>Forks: <strong>{repo.forks}</strong></Card.Title>
                <Card.Text>Watchers: <strong>{repo.watchers}</strong></Card.Text>
                <Card.Text>{repo?.description}</Card.Text>
                <div className='d-flex gap-2'>
                    {
                        isFav ? (
                            <Button variant="danger" onClick={handleRemoveFromFav}>Remove</Button>
                        ) : (
                            <Button variant="primary" onClick={handleAddToFav}>Add to favourites</Button>
                        )
                    }
                    <Button as="a"
                            href={repo.html_url}
                            target="_blank"
                            rel="noopener noreferrer"
                            variant="success">View repo</Button>
                </div>
            </Card.Body>
        </Card>
    );
}
