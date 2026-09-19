import { Link } from "react-router"
import { useState, useEffect } from "react"

function Catalog() {
  useEffect(() => {
    fetch("http://localhost:3000/games")
    .then((response) => response.json())
  }, []);


  return (
    <>
      <h1>Catalog</h1>

      <Link to="/cart">View Cart</Link>
    </>
  )
}

export default Catalog
