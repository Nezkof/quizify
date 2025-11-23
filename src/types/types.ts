export interface Option {
   text: string;
   is_correct: boolean;
}

export interface Question {
   question: string;
   options: Option[];
}
