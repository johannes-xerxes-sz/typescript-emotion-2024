import {
  BrowserRouter as Router,
  Routes,
  Route,
  // Navigate,
} from "react-router-dom";
import { Bounce, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

// CSS
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import "./App.css"

// Components
// import sampleComponents from "./components/SampleComponent`";

// Pages
import Sample from "./pages/SamplePage";
import LandingPage from "./pages/LandingPage";
import Sandbox from "./pages/ModalVariant2";
import DataGrid from "./pages/DataGrid";

function App() {
  return (
    <>
      <ToastContainer
        position="bottom-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        transition={Bounce}
        stacked
      />
      <Router>
        <Routes>
          <Route path="/data" element={<DataGrid />} />
          <Route path="/sample" element={<Sample />} />
          <Route path="test" element={<Sandbox />} />
          <Route path="/" element={<LandingPage />} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
