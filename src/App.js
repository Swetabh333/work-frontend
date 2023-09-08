import './App.css';
import {useState,useEffect} from 'react';
import Navbar from './Components/Navbar';
import Table from './Components/Table';
import TableQy from './Components/TableQy';
import TableFy from './Components/TableFy';
import Sidebar from './Components/Sidebar';
import Login from './Components/Login';
import {
  BrowserRouter as Router,
  Routes,
  Route
} from 'react-router-dom';
import USidebar from './Components/USidebar';

function App() {


  const [sNoD,setSNoD] = useState(1);
  const [sNoQ,setSNoQ] = useState(1);
  const [sNoY,setSNoY] = useState(1);

  const changeSNoD = (m) => {
    setSNoD(m);
  }

  const changeSNoQ = (m) => {
    setSNoQ(m);
  }

  const changeSNoY = (m) => {
    setSNoY(m);
  }

  const [login,setLogin] = useState(true);

  useEffect(()=>{
    fetch('https://canarabackend.onrender.com/checkuser')
    .then((res)=>{
      return res.json()
    })
    .then((data)=>{
     console.log(data)
    })
  },[login])

  const changeLogin = ()=>{
    if(login===true){
      setLogin(false);
    }
    else{
      setLogin(true);
    }
  }
  return (
    <Router>
    {(document.URL.includes('daily') || document.URL.includes('yearly') || document.URL.includes('quarterly') ) && <Navbar></Navbar>}
      <div className='row'>
      <div className='col-12 clm-1'>
      <Routes>
        <Route path="/" exact element={<Login changeVal={changeLogin}></Login>}></Route>
        <Route path="/daily" exact element={<Table isDaily={true} snod={sNoD} snoq = {sNoQ} snoy ={sNoY} changesnod={changeSNoD} changesnoq={changeSNoQ} changeSNoY={changeSNoY}></Table>}></Route>
        <Route path="/quarterly" exact element={<TableQy isQuarterly={true} snod={sNoD} snoq = {sNoQ} snoy ={sNoY} changesnod={changeSNoD} changesnoq={changeSNoQ} changeSNoY={changeSNoY}></TableQy>}></Route>
        <Route path="/yearly" exact element={<TableFy isYearly={true} snod={sNoD} snoq = {sNoQ} snoy ={sNoY} changesnod={changeSNoD} changesnoq={changeSNoQ} changeSNoY={changeSNoY}></TableFy>}></Route>
      </Routes>
      </div>
      <div className='col-0 clm-2'>
         <Sidebar snod={sNoD} snoq = {sNoQ} snoy ={sNoY} changesnod={changeSNoD} changesnoq={changeSNoQ} changeSNoY={changeSNoY}></Sidebar>
         <USidebar></USidebar>
      </div>
      </div>
    </Router>
  );
}

export default App;
