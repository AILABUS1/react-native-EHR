import type { ContentUnit } from '@/types/learning';

export const units: ContentUnit[] = [
  {
    id: 'spanish-beginners',
    languageCode: 'es',
    title: 'Spanish Basics',
    description: 'Greeting people, introducing yourself, and understanding simple classroom words.',
    order: 1,
    lessonIds: ['spanish-lesson-1', 'spanish-lesson-2'],
    level: 'beginner',
    goals: [
      'Introduce yourself in Spanish',
      'Use simple greetings and polite phrases',
      'Recognize basic classroom vocabulary',
    ],
    tags: ['greetings', 'intro', 'classroom'],
  },
  {
    id: 'spanish-travel',
    languageCode: 'es',
    title: 'Spanish for Travel',
    description: 'Practice basic questions, directions, and travel-friendly phrases.',
    order: 2,
    lessonIds: ['spanish-lesson-3'],
    level: 'beginner',
    goals: [
      'Ask simple questions while traveling',
      'Get directions and order food',
      'Understand key travel vocabulary',
    ],
    tags: ['travel', 'questions', 'food'],
  },
  {
    id: 'french-beginners',
    languageCode: 'fr',
    title: 'French Greetings',
    description: 'Learn core French greetings, polite phrases, and daily expressions.',
    order: 1,
    lessonIds: ['french-lesson-1'],
    level: 'beginner',
    goals: [
      'Use common French greetings',
      'Introduce yourself politely',
      'Say thank you and ask simple questions',
    ],
    tags: ['greetings', 'polite'],
  },
  {
    id: 'yoruba-beginners',
    languageCode: 'yo',
    title: 'Yoruba Greetings',
    description: 'Simple greetings and introductions in Yoruba with cultural context.',
    order: 1,
    lessonIds: ['yoruba-lesson-1'],
    level: 'beginner',
    goals: [
      'Greet people in Yoruba',
      'Introduce yourself and ask how someone is',
      'Learn a few everyday expressions',
    ],
    tags: ['greetings', 'culture'],
  },
];
