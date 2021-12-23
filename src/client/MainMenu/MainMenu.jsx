import MainMenuItem from './MainMenuItem';

import style from './MainMenu.module.css';

import { items } from './items';

const MainMenu = () => {
    const elements = items.map(item => <MainMenuItem key={item.id} {...item} />)
    return (
        <div className={style['box-menu']}>
            <ul className={style.menu}>
                {elements}
            </ul>
        </div>
    )
}

export default MainMenu;