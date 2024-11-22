export interface QuestionData {
  title: string;
  slides: Slide[];
}

export interface Slide {
  type: string;
  question: string;
  answers: Answer[];
}

export interface Answer {
  id: string;
  text: string;
  correct: boolean;
}