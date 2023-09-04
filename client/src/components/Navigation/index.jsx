import MenuItems from './MenuItems'
import style from './style.module.scss'

const Navigation = ({ levelItems, levelIdx }) => {
  return (
    <div className={style.navigationContainer}>
      <MenuItems levelItems={levelItems} levelIdx={levelIdx} />
    </div>
  );
};

export default Navigation