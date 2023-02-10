import React from 'react'
import Button from './Button'
import { GrClose } from "react-icons/gr";
import { useState } from 'react';
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    BarElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js'
import { Bar } from 'react-chartjs-2'

const PopupCard = ({ currentRow, displayCard, onClick, goPrev, goNext, nextDisable, prevDisable }) => {

    const daysAgo = [];
    const pilytixProb = []
    const repProb = []

    // Add current daysAgo, pilytixProb and repProb to arrays above
    if(currentRow.probabilityHistory != undefined || currentRow.probabilityHistory > 0){
        currentRow.probabilityHistory.forEach(item => daysAgo.push(item.daysAgo))
        
        currentRow.probabilityHistory.forEach(item => pilytixProb.push(item.pilytixProb))

        currentRow.probabilityHistory.forEach(item => repProb.push(item.repProb))
    }

    ChartJS.register(
        BarElement,
        CategoryScale,
        LinearScale,
        Tooltip,
        Legend
    )

    const barGraphInfo = {
        labels: daysAgo,
        datasets: [
            {
                label: 'Pilytix Prob',
                data: pilytixProb,
                backgroundColor: '#4bdcb4',
                borderColor: '#fff',
                borderWidth: 1,
            },
            {
                label: 'Rep Prob',
                data: repProb,
                backgroundColor: '#A020F0',
                borderColor: '#fff',
                borderWidth: 1,
            }
        ] 
    }

    const options = {

    }
    

  return (
    <div className={`popupCard ${displayCard ? 'show' : ''}`}>
        <div className="popupContainer">
            <div className="popupCardItems">
                <Button onClick={onClick} classText={'closeCard'} text={<GrClose />}  />
                <div className="popupCardHeader">
                    <h3>{currentRow.oppName}</h3>
                </div>
                <p className='oppId'>Id: {currentRow.oppId}</p>
                <p className='salesRepName'>Sales Rep Name: {currentRow.salesRepName}</p>
                <p>Amount: {currentRow.amount}</p>
                <p>Product: {currentRow.product}</p>
                <p>Current Stage: {currentRow.stage}</p>
                <p>Rep Prob: {currentRow.repProbability}</p>
                <p>Pilytix Tier: {currentRow.pilytixTier}</p>
                <p>Pilytix Prob:{currentRow.pilytixProbability}</p>
            <div className='probHistory'>
                <h3>Probability History: </h3>
                {currentRow.probabilityHistory == undefined || currentRow.probabilityHistory <= 0 ? <h4 className='noHistory'>No History</h4> : 
                <div>
                    {currentRow.probabilityHistory.map((item, idx) => 
                    <Bar style={{margin: '20px 0'}} data={barGraphInfo} options={options} />)}
                </div>}
            </div>
            <div className='increasingWin'>
                <h3>Increasing Win: </h3>
                {currentRow.pilytixFactorsIncreasingWin == undefined || currentRow.pilytixFactorsIncreasingWin <= 0 ? <h4 className='none'>NONE</h4> : 
                <div>
                    {currentRow.pilytixFactorsIncreasingWin.map((item, idx) => 
                    <ul key={idx}>
                        <li>{item.name}</li>
                        <li>{item.message}</li>
                        <li>{item.weight.value}</li>
                        <li>{item.weight.description}</li>
                    </ul>
                    )}
                </div>}
            </div>
            <div className='decreasingWin'>
                <h3>Decreasing Win: </h3>
                {currentRow.pilytixFactorsDecreasingWin == undefined || currentRow.pilytixFactorsDecreasingWin <= 0 ? <h4 className='none'>None</h4> : 
                <div>
                    {currentRow.pilytixFactorsDecreasingWin.map((item, idx) => 
                    <ul key={idx}>
                        <li>{item.name}</li>
                        <li>{item.message}</li>
                        <li>{item.weight.value}</li>
                        <li>{item.weight.description}</li>
                    </ul>
                    )}
                </div>}
            </div>
            <div className="changeBtns">
                <Button classText={prevDisable ? 'prev disable' : 'prev'} text={'Prev'} onClick={goPrev} />
                <Button classText={nextDisable ? 'next disable' : 'next'} text={'Next'} onClick={goNext} />
            </div>
        </div>
        </div>
    </div>
  )
}

export default PopupCard