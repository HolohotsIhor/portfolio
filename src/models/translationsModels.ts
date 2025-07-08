export interface WebsiteTranslation {
    _id: string;
    lang: string;
    data: TranslationData;
}

export interface TranslationData {
    ABOUT_ME: {
        TITLE: string;
        SUBTITLE: string;
    };
    SKILLS: {
        TITLE: string;
    };
    GITHUB: {
        TITLE: string;
    };
    CONTACTS: {
        TITLE: string;
    };
    ERROR_PAGE: {
        TITLE: string;
    };
    NAV: {
        ABOUT_ME: string;
        SKILLS: string;
        GITHUB: string;
        CONTACTS: string;
    };
    FORM_ERRORS: {
        NAME: FormErrorMessages;
        COMPANY: FormErrorMessages;
        EMAIL: {
            INVALID: string;
            REQUIRED: string;
        };
        LOCATION: {
            REQUIRED: string;
        };
    };
    FORM_FIELDS: {
        NAME: string;
        COMPANY: string;
        EMAIL: string;
        LOCATIONS: LocationOption[];
        SELECT_DEFAULT: string;
        BUTTON: string;
    };
}

export interface FormErrorMessages {
    ALLOWD: string;
    MIN: string;
    MAX: string;
    REQUIRED: string;
}

export interface LocationOption {
    VALUE: string;
    NAME: string;
}

export type WebsiteTranslations = WebsiteTranslation[];
