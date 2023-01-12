import React ,{useState}from 'react'
import Board from './Board'

function Game() {
    
  const [history, setHistory] = useState([Array(9).fill(null)]);
    const [currentMove,setCurrentMove]=useState(0);
    const xIsNext=currentMove%2===0;
  const currentSquare=history[currentMove];

  // to handle history
  function handlePlay(nextSquares){
    const nextHistory = [...history.slice(0, currentMove + 1), nextSquares];
    setHistory(nextHistory);
   
    setCurrentMove(nextHistory.length - 1);
  }
  function jumpTo(nextMove){
    setCurrentMove(nextMove)
    
  }

  const moves=history.map((square,move)=>{
    let desc=(move>0)?`Go to move #${move}`:"Go to game start";
    return(
        <li key={move}>
            <button  onClick={()=>jumpTo(move)}>
                {desc}
            </button>
        </li>
    )
    
  })
  return (
    <>
    <div>
    <Board xIsNext={xIsNext} square={currentSquare} onPlay={handlePlay}/>
    </div>
    <div>
        <ol>
            {moves}
        </ol>
    </div>
    </>
  )
}


export default Game