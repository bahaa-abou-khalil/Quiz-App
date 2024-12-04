import {BrowserRouter, Route, Routes} from "react-router-dom"
import QuizList from "./pages/QuizList";
import './styles/pages/base/colors.css'
import './styles/pages/base/utilities.css'
import './styles/pages/base/base.css'
import './styles/pages/quiz.css'
import './styles/components/quizCard.css'
const App = () => {
  return (
    <div className="app white-bg">
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<QuizList />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
