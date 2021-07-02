import { Link, useLocation } from "react-router-dom"
import routes from "../../routes/routes"
import style from "./NavBar.module.css"
import { ReactComponent as Image } from "../../assets/icon.svg"
import { FC } from "react"

const NavBar: FC = () => {

    const location = useLocation()
    const splitLocation = location.pathname.split("/")
    const currentLocation = '/' + splitLocation[1]    

    const items = [
        { to: routes.myWallet, title: 'MY WALLET' },
        { to: routes.buy, title: 'BUY BITCOIN' },
        { to: routes.sell, title: 'SELL BITCOIN' },
        { to: routes.btc, title: 'BITCOIN PRICE' }
    ]
    const mappedItems = items.map(el =>
        <Link key={el.title} className={currentLocation === el.to ? style.active : style.link} to={el.to}>
            <h5 className={style.text}> <span className={style.icon}><Image /></span> {el.title}</h5>
        </Link>)

    return (
        <div className={style.wrapper}>
            {mappedItems}
        </div>
    )
}

export default NavBar