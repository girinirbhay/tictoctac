import React, { useState } from 'react'
import './style.css'
import Box from '../Box'

const board = [[],[],[]]

function Game(){

    const [turn, setTurn] = useState('X')
    const [winnerText, setWinnerText] = useState('')

    function changeTurn(row, col){
        board[row][col] = turn
        setTurn (turn => turn === 'X' ? 'O' : 'X')
        console.log(board)
        debugger;
        const Winner = checkForWin()

        if(!Winner){}
        else{
            
            setWinnerText(Winner + '  won!!!!')
        }
    }

    //row test
    function checkForWin(){
        debugger;
        for(let i = 0; i< board.length; i++){
            const row = board[i]
            if(row[0] === row[1] && row[1] === row[2] && row[0]){
                return row[0]
            }
        }

        //column test
        for(let i=0; i<board.length; i++){
            const col1 = board[0][i]
            const col2 = board[1][i]
            const col3 = board[2][i]

            if(col1 === col2 && col2 === col3 && col1){
                return col1
            }
        }

        //diagonal test
        const d1 = board[0][0]
        const d2 = board[1][1]
        const d3 = board[2][2]
        if(d1 === d2 && d2 === d3 && d1){
            return d1
        }

         //diagonal test
         const dS1 = board[0][2]
         const dS2 = board[1][1]
         const dS3 = board[2][0]
         if(dS1 === dS2 && dS2 === dS3 && dS1){
             return dS1
         }

        return false
    }


    return <div id="game">

    <div id="winnerText">{setWinnerText}</div>
        <div className="row">
            <Box row={0} col={0} currentVal={turn} changeTurn={changeTurn}/>
            <Box row={0} col={1} currentVal={turn} changeTurn={changeTurn}/>
            <Box row={0} col={2} currentVal={turn} changeTurn={changeTurn}/>
        </div>
        <div className="row">
            <Box row={1} col={0} currentVal={turn} changeTurn={changeTurn}/>
            <Box row={1} col={1} currentVal={turn} changeTurn={changeTurn}/>
            <Box row={1} col={2} currentVal={turn} changeTurn={changeTurn}/>
        </div>
        <div className="row">
            <Box row={2} col={0} currentVal={turn} changeTurn={changeTurn}/>
            <Box row={2} col={1} currentVal={turn} changeTurn={changeTurn}/>
            <Box row={2} col={2} currentVal={turn} changeTurn={changeTurn}/>
        </div>
    </div>
}

export default Game