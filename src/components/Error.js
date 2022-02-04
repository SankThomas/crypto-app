import React from "react"
import { Link } from "react-router-dom"

export default function Error() {
  return (
    <>
      <section>
        <h1>404 | This page does not exist</h1>
        <Link to="/">
          <button className="block mx-auto bg-slate-700 py-2 px-6 rounded shadow text-slate-200 hover:bg-slate-800 hover:text-slate-50 transition-all duration-300 mb-10">
            Back to Homepage
          </button>
        </Link>
      </section>
    </>
  )
}
