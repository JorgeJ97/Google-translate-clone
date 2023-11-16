export interface SupportedLenguages {
    en: 'English',
    es: 'Español',
    de: 'Deutsch',
}

export type AutoLenguage = 'auto'

export type TranslateProps = {
    fromLenguage: SupportedLenguages | AutoLenguage
    toLenguage: SupportedLenguages
    text: string
}