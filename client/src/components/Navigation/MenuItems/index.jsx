import MenuItem from "./MenuItem";
import axios from "axios";
import style from "../style.module.scss";
import { useState } from "react";

const MenuItems = ({ items }) => {
  const [data, setData] = useState({});

  const onClickHandler =
    ((id) => {
      axios
        .get(`https://localhost:3000/api/menu-items/${id}`)
        .then((response) => {
          setData(response.data);
        })
        .catch((error) => {
          console.error("Error fetching data:", error);
        });
    },
    []);

  return (
    <div className={style.menuItemsContainer}>
      {Object.entries(items)?.map(([key, { title }]) => {
        return (
          <MenuItem key={key} id={key} title={title} onclick={onClickHandler} />
        );
      })}
    </div>
  );
};

export default MenuItems;
