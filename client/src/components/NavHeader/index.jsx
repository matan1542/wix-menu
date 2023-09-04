import Menu from "../Menu";
import Navigation from "../Navigation";

import style from "./style.module.scss";

const NavHeader = ({ navItems }) => {
  return (
    <nav className={style.navHeaderContainer}>
      <Menu>
        <Navigation items={navItems} />
      </Menu>
    </nav>
  );
};

export default NavHeader;
