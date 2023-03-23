import { Route, Routes } from "react-router-dom";
import Login from "./components/Login";
import SignUpPage from "./components/SignUpPage";


function App() {
  return (
    <div>
      <Routes>
        <Route path='/' element={<SignUpPage />} />
        <Route path='/login' element={<Login />} />
      </Routes>
    </div>
  );
}

export default App;
