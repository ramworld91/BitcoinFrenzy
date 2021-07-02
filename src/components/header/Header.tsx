import style from './Header.module.css'
import {ReactComponent as Icon} from '../../assets/bitcoin.svg'
import { useSelector } from 'react-redux'
import { allSelectors } from '../../modules/selectors'
import { formatNumber } from '../../helpers/numbFormat'

const Header = () => {

    const btcPrice = useSelector(allSelectors.getBTCPrice)
    const userBtc = useSelector(allSelectors.getUserBTC)
    const userDollars = useSelector(allSelectors.getUserDollars)
    
    return (
        <div className={style.headerWrapper}>
            <div className={style.mainTitle}><Icon className={style.img}/>BITCOIN FRENZY</div>
            <span>1 BITCOIN = {formatNumber(btcPrice)} $</span>
            <div>{formatNumber(userDollars)} $ <div> {userBtc} BITCOINS </div></div>
        </div>
    )
}

export default Header