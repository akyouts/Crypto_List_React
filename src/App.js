import axios from "axios";
import { useEffect, useState }from "react";
import Coin from "./Coin";
import './app.css'


function App() {
  const [data,setData] = useState([]);
  const [search,setSearch] = useState(''); 


  
  useEffect( () => {
   axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&order=market_cap_desc&per_page=100&page=1&sparkline=false')
    .then((result)=>{
      setData(result.data);
      
    }).catch((err) => {console.log(err)})
    
  },[]);

  const handleSearch = e =>{
    setSearch(e.target.value);
    
  }
  const filterCoin = data.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())) ;
  
  
    return (
  <div className="coin-app">
    <div className="coin-search" >
      <h1 className="coin-text"> Search a currency </h1>
      <form>
        <input type="text" placeholder="search" className="coin-input" 
        value={search} onChange = {handleSearch}/>

      </form>
    </div>
    {filterCoin.map(coin => <Coin key={coin.id} name={coin.name} symbole={coin.symbol} 
    image={coin.image} current_price={coin.current_price} 
    market_cap={coin.market_cap}
    price_change_24h={coin.price_change_percentage_24h}/>)}
  </div>
  );
}

export default App;
