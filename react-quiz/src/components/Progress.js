import { useQuiz } from "../context/QuizContext";

export default function Progress() {
  const { index, numQuestions, points, maxPossiblePoints, answer } = useQuiz();
  return (
    <div>
      <header className="progress">
        <progress max={numQuestions} value={index + Number(answer !== null)} />

        <p>
          Question <strong>{index + 1}</strong> / {numQuestions}
        </p>

        <p>
          <strong>
            {points} / {maxPossiblePoints}
          </strong>
        </p>
      </header>
    </div>
  );
}
