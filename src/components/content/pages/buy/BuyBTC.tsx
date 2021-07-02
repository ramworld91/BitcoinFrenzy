import { FC } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { toast } from 'react-toastify'
import Button from '../../../elements/Button'
import { GetDateTimeId } from '../../../../helpers/getDateTimeId'
import { buyOrSellBTC, setDeposit, setHistory } from '../../../../modules/actions'
import { allSelectors } from '../../../../modules/selectors'
import { formatNumber } from '../../../../helpers/numbFormat'

const BuyBTC: FC = () => {
    
    const btcPrice = useSelector(allSelectors.getBTCPrice)
    const userBtc = useSelector(allSelectors.getUserBTC)
    const userDollars = useSelector(allSelectors.getUserDollars)
    const dispatch = useDispatch()
    const {date, time, id} = GetDateTimeId()

    const onBuy = () => {
        if (userDollars >= btcPrice) {
        dispatch(buyOrSellBTC(userBtc + 1))
        dispatch(setDeposit(userDollars - btcPrice))
        dispatch(setHistory(date, time, 'Purchased 1 Bitcoin', id))
    }
        else return toast("You don't have enough money to buy")
    }

    const checkCondition = btcPrice >= 10000 ? 'Prices are high, are you sure that you want to buy?' : 'Prices are low, buy more!'

    return (
        <div>
            <h2>Bitcoin price is {formatNumber(btcPrice)} $</h2>
            <h2>{checkCondition}</h2>
            <Button onClick={onBuy} value='Buy 1 Bitcoin'/>
        </div>
    )
}

export default BuyBTC