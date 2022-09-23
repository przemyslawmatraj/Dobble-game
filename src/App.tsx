import "./App.scss";
import Navbar from "./components/NavbarMain/NavbarMain";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <div className="container">
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
