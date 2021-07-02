import { FC } from "react"
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify"
import Button from "../../../elements/Button"
import { GetDateTimeId } from "../../../../helpers/getDateTimeId"
import { regulateBTCPrice, setHistory } from "../../../../modules/actions"
import { allSelectors } from "../../../../modules/selectors"
import { formatNumber } from "../../../../helpers/numbFormat"

const BTCPrice: FC = () => {
    
    const btcPrice = useSelector(allSelectors.getBTCPrice)
    const dispatch = useDispatch()
    const {date, time, id} = GetDateTimeId()

    const onIncrease = () => {
        dispatch(regulateBTCPrice(+btcPrice + 1000))
        dispatch(setHistory(date, time, 'Increased Bitcoin price by 1,000$', id))
    }
    const onDecrease = () => {
        if (btcPrice <= 1000) return toast('Bitcoin price cannot be below 1,000$')
        else dispatch(regulateBTCPrice(btcPrice - 1000))
        dispatch(setHistory(date, time, 'Decreased Bitcoin price by 1,000$', id))

    }

    return (
        <div>
            <h2>Bitcoin price is {formatNumber(btcPrice)} $</h2>
            <Button onClick={onIncrease} value={`Increase Bitcoin Price (+1,000)`}/>
            <Button onClick={onDecrease} value={`Decrease Bitcoin Price (-1,000)`} />
        </div>
    )
}

export default BTCPrice