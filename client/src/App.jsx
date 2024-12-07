import {BrowserRouter, Route, Routes} from "react-router-dom"
import QuizList from "./pages/QuizList";
import Quiz from "./pages/Quiz";
import './styles/pages/base/colors.css'
import './styles/pages/base/utilities.css'
import './styles/pages/base/base.css'
import './styles/pages/quiz.css'
import './styles/pages/quizList.css'
import './styles/components/quizCard.css'
import QuizzesProvider from "./contexts/quizzesContext";
const App = () => {
  return (
    <div className="app white-bg">
      <QuizzesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<QuizList />}/>
            <Route path="/quiz/:quizid" element={<Quiz />}/>
          </Routes>
        </BrowserRouter>
      </QuizzesProvider>
    </div>
  );
}

export default App;
