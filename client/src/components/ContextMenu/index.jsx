import style from "./style.module.scss";
const ContextMenu = ({ top, left, children }) => {
  return (
    <div className={style.contextMenuContainer} style={{ top, left }}>
      {children}
    </div>
  );
};

export default ContextMenu;