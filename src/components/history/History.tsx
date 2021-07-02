import { FC } from 'react'
import { useSelector } from 'react-redux'
import { allSelectors } from '../../modules/selectors'
import style from './History.module.css'

const History: FC = () => {

    const historyArr = useSelector(allSelectors.getHistory)

    const mappedHistory = historyArr.map((el: any) =>
        <div className={style.itemBlock} key={el.id}>
            <span className={style.date}>{el.date} {el.time}</span><div className={style.action}>{el.action}</div></div>
    )

    return (
        <div className={style.historyWrapper}>
            {mappedHistory}
        </div>
    )
}

export default History