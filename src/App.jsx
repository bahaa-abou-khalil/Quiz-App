import {BrowserRouter, Route, Routes} from "react-router-dom"
import Quiz from "./pages/Quiz";
import './styles/pages/base/colors.css'
import './styles/pages/base/utilities.css'
import './styles/pages/base/base.css'
import './styles/pages/quiz.css'
import './styles/components/quizCard.css'
const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Quiz />}/>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
