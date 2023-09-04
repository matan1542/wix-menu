import { useContext } from "react";
import Menu from "../Menu";
import Navigation from "../Navigation";

import style from "./style.module.scss";
import appContext from "../../store/store";

const NavHeader = () => {
  const { onClickRootHandler, navItems } = useContext(appContext);

  return (
    <nav className={style.navHeaderContainer}>
      <Menu onClickRootHandler={onClickRootHandler}>
        {navItems && (
          <>
            {navItems.map((levelItems, idx) => {
              return <Navigation levelItems={levelItems} levelIdx={idx} />;
            })}
          </>
        )}
      </Menu>
    </nav>
  );
};

export default NavHeader;
