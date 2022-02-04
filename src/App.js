import FetchCoins from "./components/FetchCoins"
import { BrowserRouter, Routes, Route } from "react-router-dom"
import SingleCoin from "./components/SingleCoin"
import Error from "./components/Error"

function App() {
  return (
    <div className="bg-slate-900 p-5">
      <main className="lg:max-w-5xl lg:mx-auto">
        <h1 className="text-4xl text-center lg:text-6xl text-gray-200 font-bold mb-5">
          Latest in the Crypto Space
        </h1>
        <p className="text-center text-slate-300 mb-5">
          View information about the cryto space including market prices, all
          updated every minute with the freshest data from the{" "}
          <a
            href="https://coingecko.com"
            target="_blank"
            rel="noopenner noreferrer"
            className="text-white border-b border-dashed"
          >
            coingecko API.
          </a>
        </p>

        <BrowserRouter>
          <Routes>
            <Route path="/" element={<FetchCoins />}></Route>
            <Route path="/:id" element={<SingleCoin />}></Route>
            <Route path="*" element={<Error />}></Route>
          </Routes>
        </BrowserRouter>
      </main>
    </div>
  )
}

export default App
