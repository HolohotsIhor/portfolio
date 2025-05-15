import { Component, ReactNode } from 'react';
import styles from './VoteCard.module.scss'

interface VoteCardProps {
    title?: string;
    imageSrc?: string;
    votes: number;
    onVote: () => void;
}

class VoteCard extends Component<VoteCardProps, VoteCardState> {
    render(): ReactNode {
        const { title, imageSrc, votes, onVote } = this.props;
        return (
            <div
                className={styles.card}
                onClick={onVote}
            >
                {title ?? 'Card name'}
                <div className={styles.imgContainer}>
                    <img
                        src={imageSrc}
                        alt={title} />
                </div>
                <div className={styles.votes}>{votes}</div>
            </div>
        );
    }
}

export default VoteCard;
