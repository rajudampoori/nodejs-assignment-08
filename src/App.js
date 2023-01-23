import { BrowserRouter,Routes,Route } from "react-router-dom";
import Signup from "./components/signup";
function App() {
  return (
    <div className="App">
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Signup/>}/>
    </Routes>
    </BrowserRouter>
    </div>
  );
}

export default App;
