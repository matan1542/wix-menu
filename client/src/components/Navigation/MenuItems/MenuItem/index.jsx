import style from "./style.module.scss";
import { useContext } from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import appContext from "../../../../store/store";

const MenuItem = ({ itemId, item: { title }, levelIdx }) => {
  const { onClickItems, setClicked, setPoints, setContextItem } =
    useContext(appContext);

  const onContextMenuHandler = (e) => {
    e.preventDefault();
    setClicked(true);
    setPoints({
      x: e.pageX,
      y: e.pageY,
    });
    setContextItem({ id: itemId, level: levelIdx });
  };

  return (
    <div
      className={style.menuItemContainer}
      onClick={() => {
        onClickItems(itemId, levelIdx);
      }}
      onContextMenu={onContextMenuHandler}
    >
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;
