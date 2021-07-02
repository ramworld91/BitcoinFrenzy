import style from './App.module.css';
import Header from './components/header/Header';
import NavBar from './components/navbar/NavBar';
import Content from './components/content/Content';
import History from './components/history/History';
import { BrowserRouter } from 'react-router-dom';
import { ToastContainer } from 'react-toastify';

function App() {
  return (
    <>
    <BrowserRouter>
      <div className={style.appWrapper}>
        <div className={style.header}>
          <Header />
        </div>
        <div className={style.navBar}>
          <NavBar />
        </div>
        <div className={style.content}>
          <Content />
        </div>
        <div className={style.history}>
          <History />
        </div>
      </div>
    </BrowserRouter>
    <ToastContainer />
    </>
  );
}

export default App;
