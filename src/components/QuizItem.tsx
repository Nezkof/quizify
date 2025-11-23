import { useState } from "react";
import type { Question } from "../types/types";

const QuizItem = ({ data, index }: { data: Question; index: number }) => {
   const [selectedOptionIndex, setSelectedOptionIndex] = useState<number | null>(null);
   const [isAnswered, setIsAnswered] = useState(false);

   const handleOptionClick = (optionIndex: number) => {
      if (isAnswered) return;
      setSelectedOptionIndex(optionIndex);
      setIsAnswered(true);
   };

   const getOptionClass = (optionIndex: number, isCorrect: boolean) => {
      const baseClasses = "w-full p-3 text-left border rounded-lg transition-all duration-200 mb-2 text-sm sm:text-base";

      if (!isAnswered) {
         return `${baseClasses} hover:bg-gray-50 border-gray-200 text-gray-700`;
      }

      if (optionIndex === selectedOptionIndex) {
         return isCorrect
            ? `${baseClasses} bg-green-100 border-green-500 text-green-800 font-medium`
            : `${baseClasses} bg-red-100 border-red-500 text-red-800`;
      }
      if (isCorrect) {
         return `${baseClasses} bg-green-50 border-green-300 text-green-700 opacity-75`;
      }

      return `${baseClasses} border-gray-100 text-gray-400 opacity-50`;
   };

   return (
      <div className="bg-white shadow-sm border border-gray-100 rounded-xl p-6 mb-6" >
         <h3 className="text-lg font-semibold text-gray-900 mb-4" >
            <span className="text-gray-400 mr-2" >#{index + 1}.</span>
            {data.question}
         </h3>

         < div className="flex flex-col" >
            {
               data.options.map((option, optIndex) => (
                  <button
                     key={optIndex}
                     onClick={() => handleOptionClick(optIndex)}
                     className={getOptionClass(optIndex, option.is_correct)}
                     disabled={isAnswered}
                  >
                     {option.text}
                  </button>
               ))}
         </div>

         {
            isAnswered && (
               <div className={
                  `mt-3 text-sm font-medium ${data.options[selectedOptionIndex!]?.is_correct ? 'text-green-600' : 'text-red-500'
                  }`
               }>
                  {
                     data.options[selectedOptionIndex!]?.is_correct
                        ? "✅ Правильно!"
                        : "❌ Неправильно."
                  }
               </div>
            )
         }
      </div>
   )
};

export default QuizItem
