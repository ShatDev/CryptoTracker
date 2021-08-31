import React, {useState, useEffect} from 'react';
import axios from 'axios';
import './App.css';
import Coin from './Components/Coin';
import * as ReactBootStrap from 'react-bootstrap';
import ParticlesTs from './Components/Particles'
import Swal from 'sweetalert2';

function App() {
  const [coins, setCoins] = useState([]);
  const [search, setSearch] = useState('');
  const [loading, setLoading] = useState(false)
  useEffect(() => {
    setLoading(true)
    axios.get('https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false')
  .then(res =>{
    setCoins(res.data);
    setLoading(false)
  }).catch(error => Swal.fire({
    title: error,
    text: "Please refresh, or try again later",
    icon: 'error',
    showCancelButton: false,
    confirmButtonColor: '#3085d6',
    cancelButtonColor: '#d33',
    confirmButtonText: 'Refresh'
  }).then((result) => {
    if (result.isConfirmed) {
      window.location.reload()
    }
  }))
}, []);

  const handleChange = e => {
    setSearch(e.target.value)
  }

  const filteredCoins = coins.filter(coin => 
    coin.name.toLowerCase().includes(search.toLowerCase())
    )
  let spinner = null;
  if (loading) {
    spinner = <ReactBootStrap.Spinner className="loaderSpinner" animation="border" />
  }
     
  return (
    <div className="coin-app">
      <div className="coin-search">
        <h1 className="coin-text"><span className="firstPart">Crypto</span><span className="secondPart">Tracker</span></h1>
        <p className="only" >Only the top 100 coin are available (Real Time Tracker)</p>
        <form>
          <input
          type="text"
          placeholder="Search..." 
          className="coin-input"
          onChange={handleChange}
          spellCheck="false"
          />
        </form>
      </div>
      {filteredCoins.map(coin => {
        return (
          <Coin
          key={coin.id}
           name={coin.name}
           image={coin.image}
           symbol={coin.symbol}
           marketcap={coin.market_cap}
           price={coin.current_price}
           priceChange={coin.price_change_percentage_24h}
           volume={coin.total_volume}
           />
           )
          })}
      {spinner}
      <ParticlesTs />
    </div>
  );
}

export default App;
