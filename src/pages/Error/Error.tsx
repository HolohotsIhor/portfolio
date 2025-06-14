import { languages } from '../../assets/data/languages';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const ErrorPage = () => {
    const { language } = useTypedSelector(state => state.website);

    return (
        <>
            <h1>{languages[language].ERROR_PAGE.TITLE}</h1>
        </>
    );
}
