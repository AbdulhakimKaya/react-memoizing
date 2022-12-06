import {BrowserRouter, Routes, Route} from "react-router-dom";
import './App.css';
import Counter from "./components/Counter";

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route index element={<Counter/>}/>
        </Routes>
      </BrowserRouter>
  );
}

export default App;
