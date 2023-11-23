import { Outlet, useLocation, useNavigate } from "react-router-dom";
import "./App.css";
import HeaderAndMenu from "./page/headerAndMenu";
import { useEffect } from "react";

function App() {
  const location = useLocation();
  const nav = useNavigate();
  useEffect(() => {
    console.log(location.pathname);
  
  }, [location.pathname]);
  return (
    <div>
      <HeaderAndMenu />
    </div>
  );
}

export default App;
