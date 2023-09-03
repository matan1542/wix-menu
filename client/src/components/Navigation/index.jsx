import MenuItems from './MenuItems'
import style from './style.module.css'

const Navigation = ()=>{
    
    return (
        <div className={style.navigationContainer}>
            <MenuItems/>
        </div>
    )
}

export default Navigation