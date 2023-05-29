
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Nosotros } from "./components/Nosotros";
import { Servicios } from "./components/Servicios";
import { Contact } from "./components/Contact";

function App() {
  return (
    <div className="App">
      <NavBar />
      <Banner />
      <Nosotros />
      <Servicios />
      <Contact />
    </div>
  );
}

export default App;
