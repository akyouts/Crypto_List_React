import React from 'react'
import './coin.css'

const Coin = ({name,symbole , image , current_price , market_cap, price_change_24h }) => {
  return (
    <div className='coin-container'>
        <div className='coin-row'>
           <div className='coin'>
                <img src={image} alt="crypto" ></img>
                <h1>{name}</h1>
                <p className='coin-symbol' >{symbole}</p>
            </div>
             <div className='coin-data'>
                <p className='coin-price' >${current_price}</p>
                {(price_change_24h > 0)? (<p className='coin-percent green'>{price_change_24h.toFixed(2)}%</p>):(<p className='coin-percent red'>{price_change_24h.toFixed(2)}%</p>)}
                 <p className='coin-volume'>${market_cap.toLocaleString()}</p>
             </div>
        </div>

    </div>
  )
}

export default Coin