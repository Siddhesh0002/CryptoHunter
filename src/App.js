import './App.css';
import {BrowserRouter, Route, Routes} from 'react-router-dom';
import Header from './Components/Header';
import Homepage from './Pages/Homepage';
import CoinPage from './Pages/CoinPage';
import {makeStyles} from '@material-ui/core';

function App() {
  const useStyles= makeStyles(()=>({
    App:{
      backgroundColor:'#14161a',
      color:'white',
      minHeight:'100vh'
    }
  }))
    
  const classes= useStyles();
  return (
    <BrowserRouter>
    <div className={classes.App}>
    <Header />
    <Routes>
      <Route exact path='/' element={<Homepage/>} />
      <Route path='/coins/:id' element={<CoinPage />} />
    </Routes>
    </div>
    </BrowserRouter>
  );
}

export default App;
