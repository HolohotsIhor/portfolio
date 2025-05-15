import smile1 from '../../../public/images/svg/smile-1.png';
import smile2 from '../../../public/images/svg/smile-2.png';
import smile3 from '../../../public/images/svg/smile-3.png';
import styles from './Vote.module.scss';
import { Component } from 'react';
import VoteCard from '../VoteCard/VoteCard';
import { Button } from '../Button/Button';

const smiles = [
    { id: 1, title: 'Smile 1', image: smile1 },
    { id: 2, title: 'Smile 2', image: smile2 },
    { id: 3, title: 'Smile 3', image: smile3 }
];

const storageKeys = {
    vote: 'voteCounts',
    message: 'resultMessage',
}

const messages = {
    noVotes: 'No votes yet.',
    several: 'We have several smileys that have',
}

interface VoteState {
    voteCounts: Record<number, number>;
    resultMessage: string;
}

class Vote extends Component<{}, VoteState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            voteCounts: {},
            resultMessage: '',
        }
    }

    componentDidMount() {
        const voteCounts = localStorage.getItem(storageKeys.vote);
        const message = localStorage.getItem(storageKeys.message);

        this.setState({
            voteCounts: voteCounts ? JSON.parse(voteCounts) : {},
            resultMessage: message || '',
        })
    }

    handleVote = (id: number) => {
        this.setState(prevState => {
            const updatedCounts = {
                ...prevState.voteCounts,
                [id]: (prevState.voteCounts[id] || 0) + 1
            };

            localStorage.setItem('voteCounts', JSON.stringify(updatedCounts));
            return { voteCounts: updatedCounts };
        })
    }

    handleResetResults = () => {
        const resetState = {
            voteCounts: {},
            resultMessage: ''
        };
        this.setState(resetState);
        localStorage.removeItem(storageKeys.vote);
        localStorage.removeItem(storageKeys.message);
    }

    handleShowResults = () => {
        const { voteCounts } = this.state;
        const entries = Object.entries(voteCounts);

        if (entries.length === 0) {
            const message = messages.noVotes;
            this.setState({resultMessage: message});
            localStorage.setItem(storageKeys.message, message);
            return;
        }

        const [maxId, maxVotes] = entries.reduce(
            (max, curr) => curr[1] > max[1] ? curr : max,
            ['', 0]
        );

        const values = Object.values(voteCounts);
        let identicalVotes = 0;

        for (const id of values) {
            id === maxVotes && identicalVotes++;
        }

        let message = '';

        if (identicalVotes > 1) {
            message = `${messages.several} ${maxVotes} votes each!`;
        } else {
            const winner = smiles.find(smile => smile.id === Number(maxId));
            if (winner) {
                message = `Top vote: ${winner.title} with ${maxVotes} votes!`;
            }
        }

        this.setState({ resultMessage: message });
        localStorage.setItem(storageKeys.message, message);
    };

    render() {
        const { voteCounts, resultMessage } = this.state
        return (
            <div className={styles.vote}>
                <h1 className={styles.title}>Vote for a best smile:</h1>
                {
                    resultMessage && (
                        <div className={styles.result}>
                            {resultMessage}
                        </div>
                    )
                }
                <div className={styles.container}>
                    {smiles.map(item => (
                        <VoteCard
                            key={item.id}
                            title={item.title}
                            imageSrc={item.image}
                            votes={voteCounts[item.id] || 0}
                            onVote={() => this.handleVote(item.id)}
                        />
                    ))}
                </div>
                <div className={styles.action}>
                    <Button text='Get vote result' handler={this.handleShowResults} />
                    <Button text='Reset result' handler={this.handleResetResults} />
                </div>
            </div>
        );
    }
}

export default Vote;
