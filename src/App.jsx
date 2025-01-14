import "./App.css";
import { Routes, Route } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MainPage from "./pages/MainPage";
import CreatePage from "./pages/CreatePage";
import EditPage from "./pages/EditPage";
import LangContextProvider from "./contexts/LangContext";

function App() {
  return (
    <LangContextProvider>
      <Header />

      <Routes>
        <Route path="/" element={<MainPage />} />
        <Route path="/create" element={<CreatePage />} />
        <Route path="/edit/:todoId" element={<EditPage />} />
      </Routes>

      <Footer />
    </LangContextProvider>
  );
}

export default App;
