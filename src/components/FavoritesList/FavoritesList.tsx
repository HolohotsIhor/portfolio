import { useAppSelector } from '../../hooks/useRedux.ts';
import styles from './FavoritesList.module.scss';

export const FavoritesList = () => {
    const { favourites } = useAppSelector(state => state.github);

    return (
        <div className={styles.fav}>
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
