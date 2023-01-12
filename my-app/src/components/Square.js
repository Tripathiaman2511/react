import React from 'react'
import './main.css'
function Square({value,onSquareClick}) {
  return (
    <>
    <button className='square' onClick={onSquareClick}>{value || "-"}</button>
    </>
  )
}

export default Square