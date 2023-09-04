import style from "./styles/style.module.scss";
import appContext from "./store/store";
import NavHeader from "./components/NavHeader";
import { useState } from "react";
import { readMenuItems, readRootItems } from "./services/menu-items.service";
import useContextMenu from "./Hooks/useContextMenu";
import ContextMenu from "./components/ContextMenu";

function App() {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
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
    setClicked,
    setPoints,
  };
  return (
    <div className={style.appContainer}>
      <appContext.Provider value={contextValue}>
        <NavHeader navItems={[]} />
      </appContext.Provider>

      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <ul>
            <li>Edit</li>
            <li>Copy</li>
            <li>Delete</li>
          </ul>
        </ContextMenu>
      )}
    </div>
  );
}

export default App;
