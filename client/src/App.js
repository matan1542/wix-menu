import style from "./styles/style.module.scss";
import appContext from "./store/store";
import NavHeader from "./components/NavHeader";
import { useState } from "react";
import {
  readMenuItems,
  readRootItems,
  addMenuItem,
} from "./services/menu-items.service";
import useContextMenu from "./Hooks/useContextMenu";
import ContextMenu from "./components/ContextMenu";

function App() {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const [openedMapParents, setOpenedMapParents] = useState([]);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [navItems, setNavItems] = useState(null);

  const maintainMaps = ({ level, id }) => {
    // let openedMap = openedMapParents[level];
    // openedMap = { [id]: true };
    // let newMap = openedMapParents.slice(0, level + 1);
    let newNavItems = navItems.slice(0, level + 1);
    // setOpenedMapParents(newMap);
    setNavItems(newNavItems);
    return { newNavItems };
  };

  const onClickRootHandler = async (level) => {
    const root = await readRootItems();
    setNavItems([root]);
  };

  const onClickItems = async (id, level) => {
    let { newNavItems } = maintainMaps({ level, id });
    const subMenuItems = await readMenuItems(id);
    setNavItems([...newNavItems, subMenuItems]);
  };

  const onClickAdd = async (level, id) => {
    const newNavItems = [...navItems];
    let title = prompt("Enter title");
    let url = prompt("Enter url");
    console.log(level, id);
    const newMenuItem = await addMenuItem({ parentId: id, title, url });
    console.log(newMenuItem);
    newNavItems[level].childrens[newMenuItem.id] = true;
    // setNavItems([newNavItems]);
  };

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
    navItems,
    onClickRootHandler,
    onClickItems,
    setClicked,
    setPoints,
    openedMapParents,
  };

  return (
    <div className={style.appContainer}>
      <appContext.Provider value={contextValue}>
        <NavHeader />
      </appContext.Provider>

      {clicked && (
        <ContextMenu top={points.y} left={points.x}>
          <ul>
            <li onClick={onClickAdd}>Add</li>
            <li>Edit</li>
            <li>Delete</li>
          </ul>
        </ContextMenu>
      )}
    </div>
  );
}

export default App;
