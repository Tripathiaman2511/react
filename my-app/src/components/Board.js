import React from 'react'
import Square from './Square'
import Winner from './Winner';

function Board({xIsNext,square,onPlay}) {
   

    function handleClick(i){
        if(Winner(square)||square[i]){
            return;
        }
        const nextSquares=square.slice();
        nextSquares[i]=xIsNext?'X':'O';
       
       
      onPlay(nextSquares)
    }
    const winner=Winner(square)
    let status=winner?`Winner: ${winner}`:`Next Player: ${xIsNext?"X":"O"}`
  return (
    <>
    <div>{status}</div>
    <div>
        <Square value={square[0]} onSquareClick={()=>handleClick(0)}/>
        <Square value={square[1]} onSquareClick={()=>handleClick(1)}/>
        <Square value={square[2]} onSquareClick={()=>handleClick(2)}/>
    </div>
    <div>
    <Square value={square[3]} onSquareClick={()=>handleClick(3)}/>
    <Square value={square[4]} onSquareClick={()=>handleClick(4)}/>
    <Square value={square[5]} onSquareClick={()=>handleClick(5)}/>
    </div>
    <div>
    <Square value={square[6]} onSquareClick={()=>handleClick(6)}/>
    <Square value={square[7]} onSquareClick={()=>handleClick(7)}/>
    <Square value={square[8]} onSquareClick={()=>handleClick(8)}/>
    </div>
    </>
      
)
}

export default Board