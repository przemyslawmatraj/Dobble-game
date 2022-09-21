import "./App.scss";
import Navbar from "./Components/Navbar/Navbar";
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
