import "./App.scss";
import Navbar from "./components/NavbarMain/NavbarMain";
import { Outlet } from "react-router-dom";
import { useLocation } from "react-router-dom";

function App() {
  const { pathname } = useLocation();
  return (
    <div className="container">
      <Navbar />
      {pathname === "/" ? (
        <div className="dark">
          <Outlet />
        </div>
      ) : (
        <Outlet />
      )}
    </div>
  );
}

export default App;
