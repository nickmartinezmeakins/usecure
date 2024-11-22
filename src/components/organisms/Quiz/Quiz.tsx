import { QuestionData } from '../../../types/questions';


export const Quiz: React.FC<QuestionData> = ({ title, slides }) => {
  return (
    <div className="max-w-3xl w-full">
      <h1>{title}</h1>
      {slides.map((slide, index) => (
        <div key={index}>
          <h2>{slide.question}</h2>
          <ul>
            {slide.answers.map((answer) => (
              <li key={answer.id}>{answer.text}</li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};