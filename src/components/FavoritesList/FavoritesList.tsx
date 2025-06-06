import { useTypedSelector } from '../../hooks/useRedux.ts';
import styles from './FavoritesList.module.scss';

export const FavoritesList = () => {
    const { favourites } = useTypedSelector(state => state.github);

    return (
        <div>
            {
                favourites.map(item => (
                    <div
                        className={styles.favItem}
                        key={item}>{item}</div>
                ))
            }
        </div>
    );
}
