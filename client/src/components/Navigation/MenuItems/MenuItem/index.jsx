import style from "./style.module.scss";
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MenuItem = ({ item, onclick }) => {
  return (
    <div className={style.menuItemContainer} onClick={() => onclick(item?.id)}>
      <span>{item.title}</span>
      {item.items ? (
        <span>
          <ArrowDownwardIcon />{" "}
        </span>
      ) : null}
    </div>
  );
};

export default MenuItem;
