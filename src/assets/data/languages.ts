const EN_translations = {
    ABOUT_ME: {
        TITLE: 'Ihor Holohots',
        SUBTITLE: 'I build accessible, pixel-perfect digital experiences for the web',
    },
    SKILLS: {
        TITLE: 'Skill page',
    },
    GITHUB: {
        TITLE: 'Github page',
    },
    CONTACTS: {
        TITLE: 'Contacts page',
    },
    ERROR_PAGE: {
        TITLE: 'Error page',
    },
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
            { VALUE: 'default', NAME: 'Select company region*' },
            { VALUE: 'ukraine', NAME: 'Ukraine' },
            { VALUE: 'europe', NAME: 'Europe' },
            { VALUE: 'usa', NAME: 'USA' },
            { VALUE: 'other', NAME: 'Other world' },
        ],
        BUTTON: 'Write to me',
    },
};

const UA_translations = {
    ABOUT_ME: {
        TITLE: 'Ігор Гологоц',
        SUBTITLE: 'Я створюю доступний, ідеальний цифровий продукт для онлайн простору',
    },
    SKILLS: {
        TITLE: 'Сторінка скілов',
    },
    GITHUB: {
        TITLE: 'Сторінка Github',
    },
    CONTACTS: {
        TITLE: 'Сторінка контактів',
    },
    ERROR_PAGE: {
        TITLE: 'Сторінка помилки',
    },
    NAV: {
        ABOUT_ME: 'Про мене',
        SKILLS: 'Скіли та досвід',
        GITHUB: 'Мій Github',
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
            { VALUE: 'default', NAME: 'Оберіть регіон компанії*' },
            { VALUE: 'ukraine', NAME: 'Україна' },
            { VALUE: 'europe', NAME: 'Європа' },
            { VALUE: 'usa', NAME: 'США' },
            { VALUE: 'other', NAME: 'Інші країни' },
        ],
        BUTTON: 'Написати мені',
    },
};

export const languages = {
    EN: EN_translations,
    UA: UA_translations,
};
