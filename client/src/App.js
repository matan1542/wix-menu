import Navigation from "./components/Navigation";
import style from "./styles/style.module.scss";
import appContext from "./store/store";
import NavHeader from "./components/NavHeader";
import { useState } from "react";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
  };
  return (
    <div className={style.appContainer}>
      <appContext.Provider value={contextValue}>
        <NavHeader navItems={{}} />
      </appContext.Provider>
    </div>
  );
}

export default App;
