import { Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Accueil from "./components//pages/Accueil";
import Apropos from "./components//pages/Apropos";
import Services from "./components//pages/Services";
import Methodologie from "./components/pages/Methodologie";
import Contact from "./components//pages/Contact";

function App() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Accueil />} />
        <Route path="/apropos" element={<Apropos />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/methodologie" element={<Methodologie />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
