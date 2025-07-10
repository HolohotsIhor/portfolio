export interface WebsiteTranslations {
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
        EXPERIENCE: Experience[];
    };
    GITHUB: {
        TITLE: string;
    };
    CONTACTS: {
        TITLE: string;
    };
    ERROR: {
        TITLE: string;
    };
    LOGIN: {
        TITLE: string;
        TEXT: string;
    }
}

export interface Experience {
    TITLE: string;
    DESCRIPTION: string;
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

export type FieldType = {
    title: string;
    description: string;
};
