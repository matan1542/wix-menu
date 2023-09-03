import MenuItems from "../MenuItems";

const SubMenuNav = ({ items }) => {
    return (
      <div className={style.navigationContainer}>
            <MenuItems  items={items} />
      </div>
    );
};
