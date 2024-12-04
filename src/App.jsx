import {BrowserRouter, Route, Routes} from "react-router-dom"
import QuizList from "./pages/QuizList";
import Quiz from "./pages/Quiz";
import './styles/pages/base/colors.css'
import './styles/pages/base/utilities.css'
import './styles/pages/base/base.css'
import './styles/pages/quiz.css'
import './styles/pages/quizList.css'
import './styles/components/quizCard.css'
import ScoreProvider from "./contexts/ScoreContext";
const App = () => {
  return (
    <div className="app white-bg">
      <ScoreProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<QuizList />}/>
            <Route path="/quiz" element={<Quiz />}/>
          </Routes>
        </BrowserRouter>
      </ScoreProvider>
    </div>
  );
}

export default App;
