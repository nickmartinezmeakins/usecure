'use client';

import React, { useState } from "react";
import { NavigationButtons } from "@/components/molecules/NavigationButtons";
import { QuestionData } from "@/types/questions";
import { Header } from "@/components/molecules/Header";
import { Tag } from "@/components/atoms/Tag";
import { RadioButton } from "@/components/atoms/RadioButton";
import { motion, AnimatePresence } from "framer-motion";

export const Quiz: React.FC<QuestionData> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | null>>({});
  const [validationState, setValidationState] = useState<Record<number, boolean>>({});
  const [isQuizComplete, setIsQuizComplete] = useState(false);

  const currentSlide = slides[currentSlideIndex];
  const selectedAnswer = selectedAnswers[currentSlideIndex] || null;
  const showValidation = validationState[currentSlideIndex] || false;

  const handleAnswerChange = (answerId: string) => {
    setSelectedAnswers((prev) => ({
      ...prev,
      [currentSlideIndex]: answerId,
    }));
  };

  const handleContinue = () => {
    if (!showValidation) {
      setValidationState((prev) => ({
        ...prev,
        [currentSlideIndex]: true,
      }));
    } else {
      if (currentSlideIndex < slides.length - 1) {
        setCurrentSlideIndex((prev) => prev + 1);
      } else {
        setIsQuizComplete(true);
      }
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  const calculateResults = () => {
    const correctAnswers = slides.reduce((count, slide, index) => {
      const selected = selectedAnswers[index];
      const correct = slide.answers.find((answer) => answer.correct)?.id;
      return selected === correct ? count + 1 : count;
    }, 0);

    const percentage = Math.round((correctAnswers / slides.length) * 100);

    return { correctAnswers, percentage };
  };

  const { correctAnswers, percentage } = calculateResults();

  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Header />
    
      {isQuizComplete ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center bg-grid bg-conver bg-no-repeat bg-center h-screen flex flex-col justify-center align-middle"
        >
          <h1 className="text-6xl font-bold">{percentage > 90 ? "Great work, you passed!" : "You failed"}</h1>
          <div className="mt-6 flex justify-center align-middle gap-5">
            <div>
              <p className="h3">{percentage}%</p>
              <p className="text-sm text-gray-600">90% required</p>
            </div>
            <div>
              <p className="h3">{correctAnswers}/{slides.length}</p>
              <p className="text-sm text-gray-600">Answered correctly</p>
            </div>
          </div>
        </motion.div>
      ) : (
        <>
        <div className="flex justify-center align-middle">
          <div className="max-w-3xl w-full px-4">
            <Tag>{currentSlideIndex + 1}/{slides.length}</Tag>
            <fieldset className="mt-4">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentSlideIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <legend className="h4">{currentSlide.question}</legend>
                  <div className="mt-8 max-w-[560px]">
                    {currentSlide.answers.map((answer) => (
                      <RadioButton
                        key={answer.id}
                        id={answer.id}
                        text={answer.text}
                        name={`question-${currentSlideIndex}`}
                        selected={selectedAnswer === answer.id}
                        onChange={handleAnswerChange}
                        disabled={showValidation}
                        status={
                          showValidation
                            ? answer.correct && selectedAnswer === answer.id
                              ? "correct"
                              : selectedAnswer === answer.id
                              ? "incorrect"
                              : answer.correct
                              ? "info"
                              : undefined
                            : undefined
                        }
                        message={
                          showValidation
                            ? answer.correct && selectedAnswer === answer.id
                              ? "Correct. This is the correct option to select."
                              : selectedAnswer === answer.id
                              ? "Incorrect. This is not the correct answer."
                              : answer.correct
                              ? "This was the correct answer: This is why."
                              : undefined
                            : undefined
                        }
                        showMessage={showValidation}
                      />
                    ))}
                  </div>
                </motion.div>
              </AnimatePresence>
            </fieldset>
          </div>
        </div>
          <NavigationButtons
            onPrevious={handlePrevious}
            onNext={handleContinue}
            isPreviousDisabled={currentSlideIndex === 0}
            isNextDisabled={!selectedAnswer && !showValidation}
            nextLabel={showValidation ? "Next" : "Continue"}
        />
        </>
      )}
      
    </section>
  );
};