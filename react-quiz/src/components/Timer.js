import { useQuiz } from "../context/QuizContext";

export default function Timer() {
  
  const {mins, seconds} = useQuiz();

  return (
    <div className="timer">
      {mins < 10 ? `0${mins}` : mins}:{seconds < 10 ? `0${seconds}` : seconds}
    </div>
  );
}
