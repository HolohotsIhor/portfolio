const EN_translations = {
    NAV: {
        ABOUT_ME: 'About me',
        SKILLS: 'Skills & Experience',
        GITHUB: 'My Github',
        CONTACTS: 'Contacts',
    },
    FORM_ERRORS: {
        NAME: {
            ALLOWD: 'Only letters and spaces allowed.',
            MIN: 'Name must be at least 2 characters.',
            MAX: 'Name must be at most 30 characters.',
            REQUIRED: 'Please input your name',
        },
        COMPANY: {
            ALLOWD: 'Only letters, numbers, dots, dashes and spaces allowed.',
            MIN: 'Company must be at least 2 characters.',
            MAX: 'Company must be at most 50 characters.',
            REQUIRED: 'Please input company',
        },
        EMAIL: {
            INVALID: 'Invalid email address.',
            REQUIRED: 'Please input email',
        },
        LOCATION: {
            REQUIRED: 'Please select a region',
        },
    },
    FORM_FIELDS: {
        NAME: 'Your name*',
        COMPANY: 'Company*',
        EMAIL: 'Email*',
        LOCATIONS: [
            { VALUE: 'ukraine', NAME: 'Ukraine' },
            { VALUE: 'europe', NAME: 'Europe' },
            { VALUE: 'usa', NAME: 'USA' },
            { VALUE: 'other', NAME: 'Other world' },
        ],
        SELECT_DEFAULT: 'Select company region*',
        BUTTON: 'Write to me',
    },
};

const UA_translations = {
    NAV: {
        ABOUT_ME: 'Про мене',
        SKILLS: 'Скіли та досвід',
        GITHUB: 'Мії Github репозиторії',
        CONTACTS: 'Зв\'язок зі мною',
    },
    FORM_ERRORS: {
        NAME: {
            ALLOWD: 'Допускаються лише літери та пробіли.',
            MIN: "Ім'я повинно містити щонайменше 2 символи.",
            MAX: "Ім'я повинно містити не більше 30 символів.",
            REQUIRED: "Введіть ваше ім'я.",
        },
        COMPANY: {
            ALLOWD: 'Допускаються лише літери, цифри, крапки, дефіси та пробіли.',
            MIN: 'Назва компанії повинна містити щонайменше 2 символи.',
            MAX: 'Назва компанії повинна містити не більше 50 символів.',
            REQUIRED: 'Введіть назву компанії.',
        },
        EMAIL: {
            INVALID: 'Невірна електронна адреса.',
            REQUIRED: 'Введіть електронну адресу.',
        },
        LOCATION: {
            REQUIRED: 'Оберіть регіон.',
        },
    },
    FORM_FIELDS: {
        NAME: 'Ваше ім’я*',
        COMPANY: 'Компанія*',
        EMAIL: 'Електронна пошта*',
        LOCATIONS: [
            { VALUE: 'ukraine', NAME: 'Україна' },
            { VALUE: 'europe', NAME: 'Європа' },
            { VALUE: 'usa', NAME: 'США' },
            { VALUE: 'other', NAME: 'Інші країни' },
        ],
        SELECT_DEFAULT: 'Оберіть регіон компанії*',
        BUTTON: 'Написати мені',
    },
};

export const languages = {
    EN: EN_translations,
    UA: UA_translations,
};
