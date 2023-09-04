import { useContext } from "react";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

import style from "./style.module.scss";
import appContext from "../../store/store";

const Menu = ({ children }) => {
  const { setIsMenuOpen } = useContext(appContext);

  const toggle = () => setIsMenuOpen((prev) => !prev);
  return (
    <div className={style.menuContainer}>
      <button
        onClick={toggle}
        className={style.menuBtn}
        aria-label="Opens menu items"
      >
        Menu{" "}
        {children.props.items && (
          <span>
            {" "}
            <ArrowDownwardIcon />{" "}
          </span>
        )}
      </button>
      <div className={style.navWrapper}>{children}</div>
    </div>
  );
};

export default Menu;
