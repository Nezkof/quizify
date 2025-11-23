import { useEffect, useState } from 'react';
import type { Question } from './types/types';
import QuizItem from './components/QuizItem';

export default function QuizApp() {
   const [questions, setQuestions] = useState<Question[]>([]);
   const [loading, setLoading] = useState(true);
   const [error, setError] = useState<string | null>(null);

   const JSON_URL = import.meta.env.VITE_JSON_BIN_URL;

   useEffect(() => {
      const fetchQuestions = async () => {
         try {
            const response = await fetch(JSON_URL, {
            });

            if (!response.ok) throw new Error('Не вдалося завантажити тест');

            const data = await response.json();
            const quizData = Array.isArray(data) ? data : data.record;

            setQuestions(quizData);
         } catch (err) {
            console.error(err);
            setError('Помилка завантаження тестів. Перевірте консоль або URL.');
         } finally {
            setLoading(false);
         }
      };

      fetchQuestions();
   }, []);

   return (
      <div className="min-h-screen bg-gray-50 py-10 px-4 font-sans">
         <div className="max-w-2xl mx-auto">
            <header className="mb-8 text-center">
               <h1 className="text-3xl font-bold text-gray-800 tracking-tight">
                  Тестування
               </h1>
               <p className="text-gray-500 mt-2">Перевірка знань з моделювання систем</p>
            </header>

            {loading && (
               <div className="flex justify-center items-center h-40">
                  <div className="animate-spin rounded-full h-10 w-10 border-b-2 border-blue-500"></div>
               </div>
            )}

            {error && (
               <div className="bg-red-50 text-red-600 p-4 rounded-lg text-center border border-red-200">
                  {error}
               </div>
            )}

            {!loading && !error && (
               <div className="space-y-4">
                  {questions.map((q, index) => (
                     <QuizItem key={index} data={q} index={index} />
                  ))}

                  <div className="text-center pt-8 pb-4 text-gray-400 text-sm">
                     Всього питань: {questions.length}
                  </div>
               </div>
            )}
         </div>
      </div>
   );
}
