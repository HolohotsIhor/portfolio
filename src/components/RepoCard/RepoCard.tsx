import { IRepo } from '../../models/models.ts';
import React from 'react';
import styles from './RepoCard.module.scss';

type RepoCardProps = {
    repo: IRepo;
}

export const RepoCard: React.FC<RepoCardProps> = ({ repo }) => {
    return (
        <div className={styles.card}>
            <a href={repo.html_url} target='_blank'>
                <h2>{repo.full_name}</h2>
            </a>
            <p>Forks: <strong>{repo.forks}</strong></p>
            <p><strong>{repo.watchers}</strong></p>
            <p>{repo?.description}</p>
        </div>
    );
}
