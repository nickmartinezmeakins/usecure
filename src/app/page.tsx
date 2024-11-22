import { Quiz } from "@/components/organisms/Quiz";
import data from '../../src/app/api/data.json';
import { QuestionData } from "../types/questions";
import { Header } from "@/components/molecules/Header";
import { Button } from "../components/atoms/Button";

export default function Home() {
  const quizData: QuestionData = data;

  return (
    <section className="min-h-screen flex flex-col justify-between">
      <Header />
      <div className="flex justify-center align-middle">
        <Quiz title={quizData.title} slides={quizData.slides} />
      </div>
      <footer className="py-3 sm:py-4 px-4 sm:px-8 border-t border-gray flex flex-row justify-between">
        <Button>Go Back</Button>
        <Button>Continue</Button>
      </footer>
    </section>
  );
}
