export type LanguageLevel = 'beginner' | 'intermediate' | 'advanced';

export type Language = {
  id: string;
  code: string;
  name: string;
  nativeName: string;
  flag?: string;
  description: string;
  unitIds: string[];
};

export type ContentUnit = {
  id: string;
  languageCode: string;
  title: string;
  description: string;
  order: number;
  lessonIds: string[];
  level: LanguageLevel;
  goals: string[];
  tags?: string[];
};

export type LessonActivityType =
  | 'reading'
  | 'speaking'
  | 'listening'
  | 'writing'
  | 'vocabulary'
  | 'conversation'
  | 'review';

export type LessonActivity = {
  id: string;
  type: LessonActivityType;
  title: string;
  description: string;
  instructions: string;
  durationMinutes: number;
};

export type VocabularyItem = {
  word: string;
  translation: string;
  partOfSpeech?: string;
  example?: string;
};

export type PhraseItem = {
  phrase: string;
  translation: string;
  context?: string;
};

export type LessonPromptType =
  | 'audio-practice'
  | 'role-play'
  | 'pronunciation'
  | 'storytelling'
  | 'culture-tip';

export type LessonPrompt = {
  id: string;
  type: LessonPromptType;
  prompt: string;
};

export type Lesson = {
  id: string;
  unitId: string;
  title: string;
  description: string;
  order: number;
  activities: LessonActivity[];
  vocabulary: VocabularyItem[];
  phrases: PhraseItem[];
  prompts: LessonPrompt[];
};
