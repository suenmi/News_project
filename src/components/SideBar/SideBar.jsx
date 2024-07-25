import css from "./SideBar.module.css"

const SideBar = () => {
    console.log(css)
    
    return (
        <div className = {css.sidebar}>
            <div className={css.logo}>
                <div className={css.logo_img}></div>
            </div>
            <div className={css.sidebar_menu}>
                <div className={css.menu__heading}>
                    <h1>Heading</h1>
                </div>
                <a href="#" >
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
                <div className={css.menu__heading}>
                    <h1>Heading</h1>
                </div>
                <a href="#">
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
                <div className={css.menu__heading}>
                    <h1>Heading</h1>
                </div>
                <a href="#">
                    <span>Info</span>
                </a>
                <a href="#">
                    <span>Info</span>
                </a>
            </div>
        </div>
    )
}

export default SideBar;