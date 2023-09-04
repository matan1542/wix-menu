import MenuItems from './MenuItems'
import style from './style.module.scss'

const Navigation = ({ items, levelIdx }) => {
  return (
    <div className={style.navigationContainer}>
      <MenuItems items={items} levelIdx={levelIdx} />
    </div>
  );
};

export default Navigation