import MenuItem from "./MenuItem";

import style from "../style.module.scss";

const MenuItems = ({items})=>{

    return(
        <div className={style.menuItemsContainer}>
            {items.map((item, index) => (
                <MenuItem key={item.id} item={item} />
            ))}
        </div>
    )
}

export default MenuItems;