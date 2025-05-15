import smile1 from '../../../public/images/svg/smile-1.png';
import smile2 from '../../../public/images/svg/smile-2.png';
import smile3 from '../../../public/images/svg/smile-3.png';
import styles from './Vote.module.scss';
import { Component } from 'react';
import VoteCard from '../VoteCard/VoteCard';
import { Button } from '../Button/Button';

interface VoteState {
    voteCounts: Record<number, number>;
    resultMessage: string;
}

const smiles = [
    { id: 1, title: 'Smile 1', image: smile1 },
    { id: 2, title: 'Smile 2', image: smile2 },
    { id: 3, title: 'Smile 3', image: smile3 }
];

const messages = {
    noVotes: 'No votes yet.',
    several: 'We have several smileys that have',
}

class Vote extends Component<{}, VoteState> {
    constructor(props: {}) {
        super(props);
        this.state = {
            voteCounts: {},
            resultMessage: '',
        }
    }

    handleVote = (id: number) => {
        this.setState(prevState => ({
            voteCounts: {
                ...prevState.voteCounts,
                [id]: (prevState.voteCounts[id] || 0) + 1
            }
        }))
    }

    handleShowResults = () => {
        const { voteCounts } = this.state;
        const entries = Object.entries(voteCounts);

        if (entries.length === 0) this.setState({resultMessage: messages.noVotes});

        const [maxId, maxVotes] = entries.reduce(
            (max, curr) => curr[1] > max[1] ? curr : max,
            ['', 0]
        );

        const values = Object.values(voteCounts);
        let identicalVotes = 0;

        for (const id of values) {
            id === maxVotes && identicalVotes++;
        }

        if (identicalVotes > 1) {
            this.setState({resultMessage: `${messages.several} ${maxVotes} votes each!`});
            return;
        }

        const winner = smiles.find(smile => smile.id === Number(maxId));

        if (winner) this.setState({resultMessage: `Top vote: ${winner.title} with ${maxVotes} votes!`});
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
                <Button text='Get vote result' handler={this.handleShowResults} />
            </div>
        );
    }
}

export default Vote;
