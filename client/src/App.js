import style from "./styles/style.module.scss";
import appContext from "./store/store";
import NavHeader from "./components/NavHeader";
import { useState } from "react";
import { readMenuItems, readRootItems } from "./services/menu-items.service";

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState(null);

  const onClickRootHandler = async () => {
    const root = await readRootItems();
    setNavItems([root]);
  };

  const onClickItems = async (id) => {
    const subMenuItems = await readMenuItems(id);
    setNavItems((prevItems) => [...prevItems, subMenuItems]);
  };

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
    navItems,
    onClickRootHandler,
    onClickItems,
  };
  return (
    <div className={style.appContainer}>
      <appContext.Provider value={contextValue}>
        <NavHeader navItems={[]} />
      </appContext.Provider>
    </div>
  );
}

export default App;
