'use client';

import React, { useState } from "react";
import { NavigationButtons } from "@/components/molecules/NavigationButtons";
import { QuestionData } from "@/types/questions";
import { Header } from "@/components/molecules/Header";
import { Tag } from "@/components/atoms/Tag";
import { RadioButton } from "@/components/atoms/RadioButton";

export const Quiz: React.FC<QuestionData> = ({ slides }) => {
  const [currentSlideIndex, setCurrentSlideIndex] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<string | null>(null);

  const handleNext = () => {
    if (currentSlideIndex < slides.length - 1) {
      setCurrentSlideIndex((prev) => prev + 1);
      setSelectedAnswer(null);
    }
  };

  const handlePrevious = () => {
    if (currentSlideIndex > 0) {
      setCurrentSlideIndex((prev) => prev - 1);
      setSelectedAnswer(null);
    }
  };

  const handleAnswerChange = (answerId: string) => {
    setSelectedAnswer(answerId);
  };

  const currentSlide = slides[currentSlideIndex];

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
                />
              ))}
            </div>
          </fieldset>
        </div>
      </div>
      <NavigationButtons
        onPrevious={handlePrevious}
        onNext={handleNext}
        isPreviousDisabled={currentSlideIndex === 0}
        isNextDisabled={selectedAnswer === null}
      />
    </section>
  );
};