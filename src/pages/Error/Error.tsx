import { languages } from '../../assets/data/languages';
import { useAppSelector } from '../../hooks/useRedux.ts';

export const ErrorPage = () => {
    const { language } = useAppSelector(state => state.website);

    return (
        <>
            <h1>{languages[language].ERROR_PAGE.TITLE}</h1>
        </>
    );
}
