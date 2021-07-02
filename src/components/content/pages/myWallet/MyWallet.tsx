import { FC } from "react";
import { useDispatch, useSelector } from "react-redux"
import { toast } from "react-toastify";
import Button from "../../../elements/Button";
import { GetDateTimeId } from "../../../../helpers/getDateTimeId";
import { setDeposit, setHistory } from "../../../../modules/actions";
import { allSelectors } from "../../../../modules/selectors";

const MyWallet: FC = () => {

    const BTC = useSelector(allSelectors.getUserBTC)
    const dollars = useSelector(allSelectors.getUserDollars)
    const dispatch = useDispatch()
    const {date, time, id} = GetDateTimeId()

    const onDeposit = () => {
        dispatch(setDeposit(dollars + 100))
        dispatch(setHistory(date, time, '100$ Deposit', id))
    } 
    const onWithdraw = () => {
        if (!dollars) return toast('You dont have enough to withdraw!');
        
        else dispatch(setDeposit(dollars - 100))
        dispatch(setHistory(date, time, '100$ Withdrawal', id))
    }

    return (
        <div>
            <h2>Your Bitcoin wallet</h2>
            <h2>Your now own {BTC} Bitcoins</h2>
            <Button onClick={onDeposit} value='Deposit 100$' />
            <br/>
            <Button onClick={onWithdraw} value='Withdraw 100$'/>
        </div>
    )
}

export default MyWallet