import "./styles/App.scss";
import NavBar from "./components/navBar/navBar";
import TuPartner from "./components/tuPartner/tuPartner";
import UnModelo from "./components/unModelo/unModelo";
import Integreamos from "./components/integramos/integreamos";
import Tecnologia from "./components/tecnologia/tecnologia";
import Comenzar from "./components/comenzar/comenzar";
import Confia from "./components/confia/confia";
import LasMarcas from "./components/lasMarcas/lasMarcas";
import Hablamos from "./components/hablamos/hablamos";
import Footer from "./components/footer/footer";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TuPartner />
      <UnModelo />
      <Integreamos />
      <Tecnologia />
      <Comenzar />
      <Confia />
      <LasMarcas />
      <Hablamos />
      <Footer />
    </div>
  );
}

export default App;
