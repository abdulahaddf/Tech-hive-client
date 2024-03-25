import { Route, Routes } from "react-router-dom";
import "./App.css";
import HomePage from "./pages/Home/HomePage";
import DemoForm from "./pages/Home/DemoForm";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/" exact />
        <Route element={<DemoForm/>} path="/demo" exact />
      </Routes>
    </>
  );
}

export default App;
