'use client';

import React, { useState } from "react";
import { NavigationButtons } from "@/components/molecules/NavigationButtons";
import { QuestionData } from "@/types/questions";
import { Header } from "@/components/molecules/Header";
import { Tag } from "@/components/atoms/Tag";
import { RadioButton } from "@/components/atoms/RadioButton";

export const Quiz: React.FC<QuestionData> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState<Record<number, string | null>>({});
  const [validationState, setValidationState] = useState<Record<number, boolean>>({});

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
      }
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
    }
  };

  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-center align-middle">
        <div className="max-w-3xl w-full px-4">
          <Tag>{currentSlideIndex + 1}/{slides.length}</Tag>
          <fieldset className="mt-4">
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
    </section>
  );
};