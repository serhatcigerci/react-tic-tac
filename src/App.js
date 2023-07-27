import { useState } from 'react'


function Square() {
    const [value, setValue] = useState(null)
    return <button className="square">{value}</button>

}

export default function Board() {
    const number = [1, 2, 3, 5]
    const [squares, setSquares] = useState(Array(9).fill(null))
    return <> 
                <div>{number.includes(2, 3, 4) ? <div> you have a 2!</div> : <div> you don't have a 2!</div> }</div>
                <div className="board-row">
                    <Square value={squares[0]} />
                    <Square value={squares[1]} />
                    <Square value={squares[2]} />
                </div>
                <div className="board-row">
                    <Square value={squares[3]} />
                    <Square value={squares[4]} />
                    <Square value={squares[5]} />
                </div>
                <div className="board-row">
                    <Square value={squares[6]} />
                    <Square value={squares[7]} />
                    <Square value={squares[8]} />
                </div>
                
            </>
    }