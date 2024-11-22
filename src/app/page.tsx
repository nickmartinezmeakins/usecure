import { Quiz } from "@/components/organisms/Quiz";
import data from '../../src/app/api/data.json';
import { QuestionData } from "../types/questions";

export default function Home() {
  const quizData: QuestionData = data;

  return (
    <Quiz title={quizData.title} slides={quizData.slides} />
  );
}
