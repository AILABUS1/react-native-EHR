import type { Lesson } from '@/types/learning';

export const lessons: Lesson[] = [
  {
    id: 'spanish-lesson-1',
    unitId: 'spanish-beginners',
    title: 'Greetings and Introductions',
    description: 'Practice saying hello, introducing your name, and asking someone how they are.',
    order: 1,
    activities: [
      {
        id: 'spanish-lesson-1-activity-1',
        type: 'speaking',
        title: 'Say hello',
        description: 'Practice greetings aloud using simple phrases.',
        instructions: 'Say “Hola”, “Buenos días”, and “Buenas noches” out loud. Repeat each one three times.',
        durationMinutes: 5,
      },
      {
        id: 'spanish-lesson-1-activity-2',
        type: 'conversation',
        title: 'Introduce yourself',
        description: 'Learn sentence patterns for self-introduction.',
        instructions: 'Say “Me llamo...” and “Soy...” followed by your name, then ask “¿Cómo estás?”',
        durationMinutes: 7,
      },
      {
        id: 'spanish-lesson-1-activity-3',
        type: 'review',
        title: 'Check your phrases',
        description: 'Review the core greetings and introduction phrases from the lesson.',
        instructions: 'Read each phrase and say it aloud. Notice the differences between formal and informal greetings.',
        durationMinutes: 3,
      },
    ],
    vocabulary: [
      { word: 'hola', translation: 'hello', partOfSpeech: 'interjection' },
      { word: 'adiós', translation: 'goodbye', partOfSpeech: 'interjection' },
      { word: 'gracias', translation: 'thank you', partOfSpeech: 'noun' },
      { word: 'por favor', translation: 'please', partOfSpeech: 'phrase' },
    ],
    phrases: [
      { phrase: '¿Cómo estás?', translation: 'How are you?', context: 'Used to ask after someone’s wellbeing.' },
      { phrase: 'Me llamo Ana.', translation: 'My name is Ana.', context: 'A simple introduction phrase.' },
      { phrase: 'Mucho gusto.', translation: 'Nice to meet you.', context: 'Polite phrase after introductions.' },
    ],
    prompts: [
      {
        id: 'spanish-lesson-1-prompt-1',
        type: 'role-play',
        prompt: 'Pretend you meet a new friend. Say hello, introduce your name, and ask how they are feeling.',
      },
      {
        id: 'spanish-lesson-1-prompt-2',
        type: 'pronunciation',
        prompt: 'Listen carefully to the vowel sounds in “hola”, “gracias”, and “mucho gusto”. Repeat each phrase slowly.',
      },
    ],
  },
  {
    id: 'spanish-lesson-2',
    unitId: 'spanish-beginners',
    title: 'Classroom Words',
    description: 'Recognize and use basic Spanish words for school, objects, and classroom actions.',
    order: 2,
    activities: [
      {
        id: 'spanish-lesson-2-activity-1',
        type: 'reading',
        title: 'Classroom vocabulary',
        description: 'Read a list of common classroom words in Spanish.',
        instructions: 'Read each word and its translation. Try to say the Spanish word before looking at the English meaning.',
        durationMinutes: 5,
      },
      {
        id: 'spanish-lesson-2-activity-2',
        type: 'writing',
        title: 'Write short sentences',
        description: 'Build simple sentences using classroom vocabulary.',
        instructions: 'Write or type three sentences such as “Tengo un lápiz” or “La maestra es amable”.',
        durationMinutes: 6,
      },
    ],
    vocabulary: [
      { word: 'libro', translation: 'book', partOfSpeech: 'noun' },
      { word: 'lápiz', translation: 'pencil', partOfSpeech: 'noun' },
      { word: 'maestra', translation: 'teacher', partOfSpeech: 'noun' },
      { word: 'escuela', translation: 'school', partOfSpeech: 'noun' },
    ],
    phrases: [
      { phrase: 'Tengo un cuaderno.', translation: 'I have a notebook.', context: 'A simple classroom sentence.' },
      { phrase: '¿Dónde está el libro?', translation: 'Where is the book?', context: 'A question about an object in class.' },
    ],
    prompts: [
      {
        id: 'spanish-lesson-2-prompt-1',
        type: 'audio-practice',
        prompt: 'Say the sentence “Tengo un lápiz” and listen to yourself. Try to make the “ñ” sound smooth and clear.',
      },
    ],
  },
  {
    id: 'spanish-lesson-3',
    unitId: 'spanish-travel',
    title: 'Travel Questions',
    description: 'Use simple questions and polite phrases for travel, shopping, and asking directions.',
    order: 1,
    activities: [
      {
        id: 'spanish-lesson-3-activity-1',
        type: 'conversation',
        title: 'Ask for help',
        description: 'Practice polite questions for travel situations.',
        instructions: 'Say “¿Dónde está...?”, “¿Cuánto cuesta?” and “¿Puede ayudarme?” in a travel role-play.',
        durationMinutes: 7,
      },
      {
        id: 'spanish-lesson-3-activity-2',
        type: 'vocabulary',
        title: 'Travel words',
        description: 'Learn key travel words for places and food.',
        instructions: 'Match each Spanish word with its English meaning before checking your answers.',
        durationMinutes: 5,
      },
    ],
    vocabulary: [
      { word: 'aeropuerto', translation: 'airport', partOfSpeech: 'noun' },
      { word: 'restaurante', translation: 'restaurant', partOfSpeech: 'noun' },
      { word: 'dinero', translation: 'money', partOfSpeech: 'noun' },
    ],
    phrases: [
      { phrase: '¿Dónde está el baño?', translation: 'Where is the bathroom?', context: 'A very useful travel question.' },
      { phrase: 'Quisiera agua, por favor.', translation: 'I would like water, please.', context: 'A polite request at a restaurant.' },
    ],
    prompts: [
      {
        id: 'spanish-lesson-3-prompt-1',
        type: 'role-play',
        prompt: 'Imagine you are at a cafe. Order a drink and ask where the bathroom is using polite Spanish phrases.',
      },
    ],
  },
  {
    id: 'french-lesson-1',
    unitId: 'french-beginners',
    title: 'French Hello and Goodbye',
    description: 'Master common French greetings and polite expressions for first meetings.',
    order: 1,
    activities: [
      {
        id: 'french-lesson-1-activity-1',
        type: 'speaking',
        title: 'French greetings',
        description: 'Practice French greetings out loud.',
        instructions: 'Say “Bonjour”, “Bonsoir”, and “Salut” with a relaxed rhythm.',
        durationMinutes: 5,
      },
      {
        id: 'french-lesson-1-activity-2',
        type: 'conversation',
        title: 'Introduce yourself',
        description: 'Use polite French phrases to introduce your name.',
        instructions: 'Say “Je m’appelle...” and “Enchanté(e)”. Ask “Comment ça va?”.',
        durationMinutes: 7,
      },
    ],
    vocabulary: [
      { word: 'bonjour', translation: 'hello', partOfSpeech: 'interjection' },
      { word: 'merci', translation: 'thank you', partOfSpeech: 'interjection' },
      { word: 's’il vous plaît', translation: 'please', partOfSpeech: 'phrase' },
    ],
    phrases: [
      { phrase: 'Comment vous appelez-vous?', translation: 'What is your name?', context: 'A formal way to ask someone’s name.' },
      { phrase: 'Je vais bien, merci.', translation: 'I am fine, thank you.', context: 'A polite response to “How are you?”.' },
    ],
    prompts: [
      {
        id: 'french-lesson-1-prompt-1',
        type: 'pronunciation',
        prompt: 'Practice the nasal sound in “bonjour” and “merci”. Speak slowly and listen for the vowel rhythm.',
      },
    ],
  },
  {
    id: 'yoruba-lesson-1',
    unitId: 'yoruba-beginners',
    title: 'Yoruba Greetings',
    description: 'Learn common Yoruba greetings and polite expressions for meeting people.',
    order: 1,
    activities: [
      {
        id: 'yoruba-lesson-1-activity-1',
        type: 'speaking',
        title: 'Say hello in Yoruba',
        description: 'Practice greetings for different times of day.',
        instructions: 'Say “Báwo”, “Ẹ káàárọ̀”, and “Ẹ káàsán” aloud. Repeat each phrase twice.',
        durationMinutes: 5,
      },
      {
        id: 'yoruba-lesson-1-activity-2',
        type: 'conversation',
        title: 'Ask how someone is',
        description: 'Use a basic question to ask after someone’s wellbeing.',
        instructions: 'Practice “Ṣé àlàáfíà ni?” and answer with “Bẹ́ẹ̀ ni, àlàáfíà ni”.',
        durationMinutes: 6,
      },
    ],
    vocabulary: [
      { word: 'Báwo', translation: 'Hello', partOfSpeech: 'interjection' },
      { word: 'ọrẹ', translation: 'friend', partOfSpeech: 'noun' },
      { word: 'ilé', translation: 'house', partOfSpeech: 'noun' },
    ],
    phrases: [
      { phrase: 'Ẹ káàsán', translation: 'Good afternoon', context: 'A polite greeting in the afternoon.' },
      { phrase: 'Ṣé àlàáfíà ni?', translation: 'Are you well?', context: 'A common Yoruba wellbeing question.' },
    ],
    prompts: [
      {
        id: 'yoruba-lesson-1-prompt-1',
        type: 'culture-tip',
        prompt: 'Use Yoruba greetings when meeting someone older or respected. Saying hello first is an important sign of respect.',
      },
    ],
  },
];
