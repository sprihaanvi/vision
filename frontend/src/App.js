import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import Layout from './components/Layout';
import Login from './components/Login';
import Info from "./components/Info";
import Appointment from "./components/Appointment";
import NoPage from "./components/NoPage";
import Home from "./components/Home";
import Assessment from "./components/Assessment";
function App() {
  return (
    <div className="App">
      <header className="App-header">
      <BrowserRouter>
      <Routes>
      <Route path="/" element={<Layout />}>
      <Route index element={<Home />} />
      <Route path="appointment" element={<Appointment />} />
      <Route path="info" element={<Info />} />
          <Route path="finddoc" element={<Login />} />
          <Route path="assessment" element={<Assessment />} />
          <Route path="*" element={<NoPage />} />
      </Route>
      </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
