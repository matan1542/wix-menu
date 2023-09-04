import style from "./style.module.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import { useState } from "react";
import ContextMenu from "./ContextMenu";

const MenuItem = ({ item, onclick }) => {
  const [showMenu, setShowMenu] = useState(false);
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  const handleContextMenu = (event) => {
    event.preventDefault();
    setShowMenu(true);
    setMenuPosition({ x: event.clientX, y: event.clientY });
  };

  const handleCloseMenu = () => {
    setShowMenu(false);
  };

  return (
    <div
      className={style.menuItemContainer}
      onClick={() => onclick(item?.id)}
      onContextMenu={handleContextMenu}
    >
      <span>{item.title}</span>
      {item.items ? (
        <span>
          <ArrowDownwardIcon />{" "}
          {showMenu && <ContextMenu onContextMenu={handleCloseMenu} />}
        </span>
      ) : null}
    </div>
  );
};

export default MenuItem;
