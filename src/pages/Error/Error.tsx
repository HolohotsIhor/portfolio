import { languages } from '../../assets/data/languages';
import { useTypedSelector } from '../../hooks/useRedux.ts';

export const ErrorPage = () => {
    const { language } = useTypedSelector(state => state.website);

    return (
        <div className='content'>
            <h1>{languages[language].ERROR_PAGE.TITLE}</h1>
        </div>
    );
}
