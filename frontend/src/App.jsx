//Libraries
import React,{useState,useEffect,useMemo} from 'react';
import axios from 'axios';

//Components
import StockTable from './components/StockTable';

//Styles
import './App.css'










const App = () => {
  

  const [stock, setStock] = useState([]);
  const [search, setSearch] = useState('');
  const [ticker, setTicker] = useState('');

  const getStock = async (ticker) => {
    //using try catch to handle errors
    
    try {
      const res = await axios.get(`http://127.0.0.1:5000/stock/${ticker}`);
      setStock(res.data);
    } catch (error) {
      console.log(error);
    }
  };


  const handleChange = (e) => {
    setSearch(e.target.value);
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    getStock(search);
    setTicker(search);
    setSearch('');
  }

  useEffect(() => {
    
    
    console.log(stock);
  }
  ,[]);

  return (
    <div className="container">
      <h1>Stock Market</h1>
      <form onSubmit={handleSubmit}>
        <input type="text" value={search} onChange={handleChange} />
        <button type="submit">Search</button>
      </form>
      <h2>{ticker}</h2> 
      {stock.length > 0 ? <StockTable stock={stock} /> : null}

      
      </div>
  );  

}



export default App;