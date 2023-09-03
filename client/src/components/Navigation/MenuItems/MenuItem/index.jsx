import style from './style.module.scss'
import ArrowDownwardIcon from "@mui/icons-material/ArrowDownward";

const MenuItem = ({ item }) => {
  return (
      <div className={style.menuItemContainer}>
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
