import { ContactForm } from '../../components/ContactForm/ContactForm';
import { useAppSelector } from '../../hooks/useRedux.ts';
import { SectionTitle } from '../../components/SectionTitle/SectionTitle.tsx';

export const Contacts = () => {
    const { language, languages } = useAppSelector(state => state.website);
    const currentDataLang = languages.find(item => item.lang === language)?.data;

    if (!currentDataLang) return null;

    return (
        <>
            <SectionTitle text={currentDataLang.CONTACTS.TITLE} />
            <ContactForm />
        </>
    );
}
