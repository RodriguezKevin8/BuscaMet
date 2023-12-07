import { Route, Routes } from "react-router-dom";
import { GlobalProvider } from "./context/GlobalState";
import Home from "./components/Home";
import Navbar from "./components/Navbar";
import Ofert from "./components/Ofert";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./components/Footer";
import Contactus from "./components/Contactus";
import Data from "./components/Data";
import Nofund from "./components/Nofund";
import OfertForm from "./components/OfertForm";
import Message from "./components/message";
import Login from "./components/Login";
import ProtectedRoute from "./auth/ProtectedRoute";

function App() {
  return (
    <>
      <GlobalProvider>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/ofert" element={<Ofert />} />
            <Route path="/contact" element={<Contactus />} />
            <Route path="/data/:id" element={<Data />} />
            <Route path="/mensajes" element={<Message />} />
            <Route path="/login" element={<Login />} />
            <Route path="*" element={<Nofund />} />
            <Route element={<ProtectedRoute />}>
              <Route path="/form" element={<OfertForm />} />
              <Route path="/edit/:id" element={<OfertForm />} />
            </Route>
          </Routes>
          <Footer />
        </div>
      </GlobalProvider>
    </>
  );
}

export default App;
