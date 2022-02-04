import React, { useEffect, useState } from "react"
import { Link } from "react-router-dom"

export default function FetchCoins() {
  const [coins, setCoins] = useState([])

  const fetchCoinData = async () => {
    const res = await fetch(
      "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=false"
    )
    const data = await res.json()
    console.log(data)
    setCoins(data)
  }

  useEffect(() => {
    fetchCoinData()
  }, [])

  return (
    <>
      <section>
        <button
          onClick={fetchCoinData}
          className="block mx-auto bg-slate-700 py-2 px-6 rounded shadow text-slate-200 hover:bg-slate-800 hover:text-slate-50 transition-all duration-300 mb-10"
        >
          Fetch Latest Data
        </button>

        <h2 className="text-slate-200 font-bold text-2xl text-center mb-5 mt-5">
          Showing information about {coins.length} coins
        </h2>
        <p className="text-slate-300 text-center mb-10">
          Click on the coins to view more information about them.
        </p>

        <div className="grid grid-cols-1 gap-5 lg:grid-cols-2">
          {coins.map((coin) => (
            <Link to={`/${coin.id}`} key={coin.id}>
              <article
                key={coin.id}
                className="hover:bg-slate-800 p-2 rounded list-decimal"
              >
                <div className="flex items-start justify-start">
                  <img
                    src={coin.image}
                    alt={coin.name}
                    className="w-12 h-12 mr-5"
                  />
                  <ul>
                    <li>
                      <h3 className="text-slate-100">{coin.name}</h3>
                    </li>
                    <li className="text-slate-400 uppercase text-sm mt-1">
                      {coin.symbol}
                    </li>
                  </ul>

                  <p className="text-slate-200 ml-auto">
                    ${coin.current_price}
                  </p>
                </div>
              </article>
            </Link>
          ))}
        </div>
      </section>
    </>
  )
}
