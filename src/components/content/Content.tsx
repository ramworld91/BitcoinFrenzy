import { Route, Redirect } from 'react-router-dom';
import routes from '../../routes/routes';
import BuyBTC from './pages/buy/BuyBTC';
import MyWallet from './pages/myWallet/MyWallet';
import BTCPrice from './pages/price/BTCPrice';
import SellBTC from './pages/sell/SellBTC';
import style from './Content.module.css'
import { FC } from 'react';

const Content: FC = () => {

    return (
        <div className={style.contentWrapper}>
            <Route exact path={routes.root}>
                <Redirect to={routes.myWallet} />
            </Route>
            <Route exact path={routes.myWallet} component={MyWallet} />
            <Route exact path={routes.buy} component={BuyBTC} />
            <Route exact path={routes.sell} component={SellBTC} />
            <Route exact path={routes.btc} component={BTCPrice} />
        </div>
    )
}

export default Content