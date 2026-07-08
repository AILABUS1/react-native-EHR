import type { Language } from '@/types/learning';

export const languages: Language[] = [
  {
    id: 'spanish',
    code: 'es',
    name: 'Spanish',
    nativeName: 'Español',
    flag: "https://flagcdn.com/w320/es.png",
    description: 'Beginner Spanish for everyday conversation, travel, and simple self-introductions.',
    unitIds: ['spanish-beginners', 'spanish-travel'],
  },
  {
    id: 'french',
    code: 'fr',
    name: 'French',
    nativeName: 'Français',
    flag: "https://flagcdn.com/w320/fr.png",
    description: 'Basic French for greetings, classroom vocabulary, and polite exchange.',
    unitIds: ['french-beginners'],
  },
  {
    id: 'yoruba',
    code: 'yo',
    name: 'Yoruba',
    flag: "https://flagcdn.com/w320/ng.png",
    nativeName: 'Èdè Yorùbá',
    description: 'Simple Yoruba lessons for family greetings, daily phrases, and cultural expressions.',
    unitIds: ['yoruba-beginners'],
  },
    {
    id: 'mandarin',
    code: 'zh',
    name: 'Mandarin',
    flag: "https://flagcdn.com/w320/cn.png",
    nativeName: '普通话',
    description: 'Basic Mandarin for greetings, classroom vocabulary, and polite exchange.',
    unitIds: ['mandarin-beginners'],
  },
];

export const supportedLanguageCodes = languages.map((language) => language.code);
