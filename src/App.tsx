import { useLocation } from "react-router-dom";
import "./App.css";
import { useEffect } from "react";
import HeaderAndMenu from "./page/HeaderAndMenu";

function App() {
  const location = useLocation();
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
