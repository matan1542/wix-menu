import MenuItems from './MenuItems'
import style from './style.module.scss'

const Navigation = ({items})=>{
    
    return (
      <div className={style.navigationContainer}>
            <MenuItems items={items} />
      </div>
    );
}

export default Navigation