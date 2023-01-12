

function Winner(square) {
    const line=[
        [0,1,2],
        [3,4,5],
        [6,7,8],
        [0,3,6],
        [1,4,7],
        [2,5,8],
        [0,4,8],
        [2,4,6]
    ];
    for(let x=0;x<line.length;x++){
const[a,b,c]=line[x];
    let value=square[a]?(square[a]===square[b]? (square[a]===square[c]?square[a]:null):null):null 
    if(value) return value;
    
}
  return null;
}

export default Winner