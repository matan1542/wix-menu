import style from "./styles/style.module.scss";
import appContext from "./store/store";
import NavHeader from "./components/NavHeader";
import { useState } from "react";
import {
  readRootItems,
  addMenuItem,
  deleteMenuItem,
  readMenuItems,
} from "./services/menu-items.service";
import useContextMenu from "./Hooks/useContextMenu";
import ContextMenu from "./components/ContextMenu";

function App() {
  const { clicked, setClicked, points, setPoints } = useContextMenu();
  const [openedMapParents, setOpenedMapParents] = useState([]);
  const [contextItem, setContextItem] = useState(null);
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

  const deleteItem = async ({ id, level }) => {
    const navItemsCopy = [...navItems];
    console.log("navItemsCopy", navItemsCopy);
    delete navItemsCopy[level].childrens[id];
    if (Object.keys(navItemsCopy[level].childrens).length === 0) {
      navItemsCopy.splice(level, 1);
    }
    setNavItems(navItemsCopy);
  };

  const handleItemDeletion = async () => {
    const { level, id } = contextItem;
    deleteItem({ id, level });
    deleteMenuItem({ id, parentId: navItems[level].parentId });
  };

  const contextValue = {
    isMenuOpen,
    setIsMenuOpen,
    navItems,
    onClickRootHandler,
    onClickItems,
    setClicked,
    setPoints,
    setContextItem,
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
            <li onClick={handleItemDeletion}>Delete</li>
          </ul>
        </ContextMenu>
      )}
    </div>
  );
}

export default App;
