import MenuItem from "./MenuItem";

import style from "../style.module.scss";

const MenuItems = ({ levelItems, levelIdx }) => {
  return (
    <div className={style.menuItemsContainer}>
      {Object.entries(levelItems.childrens).map(([id, item]) => (
        <MenuItem
          key={id}
          itemId={id}
          parentId={levelItems.parentId}
          levelIdx={levelIdx}
          item={item}
        />
      ))}
    </div>
  );
};

export default MenuItems;
