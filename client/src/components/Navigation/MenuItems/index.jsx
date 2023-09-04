import MenuItem from "./MenuItem";

import style from "../style.module.scss";

const MenuItems = ({ items, levelIdx }) => {
  return (
    <div className={style.menuItemsContainer}>
      {Object.entries(items).map(([id, item]) => (
        <MenuItem key={id} itemId={id} levelIdx={levelIdx} item={item} />
      ))}
    </div>
  );
};

export default MenuItems;