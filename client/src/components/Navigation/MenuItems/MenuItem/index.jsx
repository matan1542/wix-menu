import style from "./style.module.scss";
import { useContext } from "react";

import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";
import appContext from "../../../../store/store";

const MenuItem = ({ itemId, item: { title }, levelIdx }) => {
  const { onClickItems } = useContext(appContext);

  return (
    <div
      className={style.menuItemContainer}
      onClick={() => {
        onClickItems(itemId);
      }}
    >
      <span>{title}</span>
    </div>
  );
};

export default MenuItem;
