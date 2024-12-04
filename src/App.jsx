import {BrowserRouter, Route, Routes} from "react-router-dom"
import Quiz from "./pages/Quiz";

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
