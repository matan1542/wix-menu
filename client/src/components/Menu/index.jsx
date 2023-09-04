import { useContext } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import style from "./style.module.scss";
import appContext from "../../store/store";

const Menu = ({ children, onClickRootHandler }) => {
  // const { setIsMenuOpen } = useContext(appContext);

  return (
    <div className={style.menuContainer}>
      <button
        onClick={onClickRootHandler}
        className={style.menuBtn}
        aria-label="Opens menu items"
      >
        Menu{" "}
        {/* {children.props.items && (
          <span>
            {" "}
            <ArrowDownwardIcon />{" "}
          </span>
        )} */}
      </button>
      <div className={style.navigationWrapper}>{children}</div>
    </div>
  );
};

export default Menu;
