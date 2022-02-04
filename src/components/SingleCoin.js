import React, { useEffect, useState } from "react"
import { Link, useParams } from "react-router-dom"

export default function SingleCoin() {
  const [singleCoin, setSingleCoin] = useState([])
  const [text, setText] = useState(false)
  const { id } = useParams()

  useEffect(() => {
    const fetchSingleCoinData = async () => {
      const res = await fetch(`https://api.coingecko.com/api/v3/coins/${id}`)
      const data = await res.json()
      console.log(data)
      setSingleCoin(data)
    }

    fetchSingleCoinData()
  }, [id])

  return (
    <>
      <section>
        <div>
          <article className="mt-10">
            <div>
              <img
                src={singleCoin.image.small}
                alt={singleCoin.name}
                className="md:hidden"
              />
              <img
                src={singleCoin.image.large}
                alt={singleCoin.name}
                className="hidden md:block"
              />

              <h3 className="text-slate-100 text-2xl mt-5 sm:text-4xl font-bold tracking-wide">
                {singleCoin.name},{" "}
                <span className="text-slate-300 uppercase text-sm font-normal md:text-base">
                  {singleCoin.symbol}
                </span>
              </h3>
            </div>

            <p className="text-slate-500 mb-5">
              Market Cap Rank: {singleCoin.market_cap_rank}
            </p>

            {text ? (
              <p
                className="text-slate-300"
                dangerouslySetInnerHTML={{ __html: singleCoin.description.en }}
              ></p>
            ) : (
              <p
                className="text-slate-300"
                dangerouslySetInnerHTML={{
                  __html: `${singleCoin.description.en.substring(0, 400)}...`,
                }}
              ></p>
            )}

            <button
              onClick={() => setText(!text)}
              className="block mx-auto bg-slate-800 py-2 px-6 rounded shadow text-slate-100 hover:bg-slate-700 hover:text-slate-50 transition-all duration-300 mt-10 mb-5"
            >
              {text ? "Read Less" : "Read More"}
            </button>

            <p></p>
          </article>

          <Link to="/">
            <button className="block mx-auto bg-slate-700 py-2 px-6 rounded shadow text-slate-200 hover:bg-slate-800 hover:text-slate-50 transition-all duration-300 mt-10 mb-5">
              Back to Homepage
            </button>
          </Link>
        </div>
      </section>
    </>
  )
}
