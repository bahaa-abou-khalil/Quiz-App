import {BrowserRouter, Route, Routes} from "react-router-dom"
import QuizList from "./pages/QuizList";
import Quiz from "./pages/Quiz";
import './styles/pages/base/colors.css'
import './styles/pages/base/utilities.css'
import './styles/pages/base/base.css'
import './styles/pages/quiz.css'
import './styles/pages/quizList.css'
import './styles/components/quizCard.css'
import './styles/pages/login.css'
import QuizzesProvider from "./contexts/quizzesContext";
import Login from "./pages/Login";
import Register from "./pages/Register";
const App = () => {
  return (
    <div className="app white-bg flex center">
      <QuizzesProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Login/>}/>
            <Route path="/register" element={<Register/>}/>
            <Route path="/quizzes" element={<QuizList />}/>
            <Route path="/quiz/:quizid" element={<Quiz />}/>
          </Routes>
        </BrowserRouter>
      </QuizzesProvider>
    </div>
  );
}

export default App;
