import "./styles.css";
import BasicTable from "./Table";
import PopupCard from "./PopupCard";
import { useState } from "react";

import * as opportunities from "./opportunities.json";

// TIME SPENT: about 4 hours
// NAME: Darion Jones
// EMAIL: darionjones2555@gmail.com

export default function App() {
  // State
  const [currentRow, setCurrentRow] = useState([])
  const [displayCard, setDisplayCard] = useState(false)
  const [currentIdx, setCurrentIdx] = useState(0)
  const [nextDisable, setNextDisable] = useState(false)
  const [prevDisable, setPrevDisable] = useState(false)
  // Set opportunites to data const 
  const data = opportunities.default;


  // Create function called handleRowClick
  function handleRowClick(event, row) {
    console.log("row", row);

    // Check if id of row clicked is 1
    if(row.oppId == 1){
      // setPrevDisable to true
      setPrevDisable(true)
    }else{
      // setPrevDisable to false
      setPrevDisable(false)
    }

    // Check if id of row clicked is 10 
    if(row.oppId == 10){
      // setNextDisable to true
      setNextDisable(true)
    }else{
      // setNextDisable to false
      setNextDisable(false)
    }

    // setCurrentRow state to the row that was clicked
    setCurrentRow(row)
    // setDisplayCard state to true
    setDisplayCard(true)
    // Change overflow on body to hidden
    document.body.style.overflow = 'hidden'
  }

  const closeMenu = () => {
    // setDisplayCard to false
    setDisplayCard(false)
    // Change overflow on body to auto
    document.body.style.overflow = 'auto'
  }

  // Change to previous opp
  const goPrev = () => {
    // Check if currentRow is undefined or null or length is 0
    if(currentRow != undefined || currentRow != null || currentRow.length !== 0){
      
      let newRow = currentRow.oppId - 1
      let newCurrentRow = data[newRow - 1]
      if(newCurrentRow.oppId >= 0){
        setCurrentRow(newCurrentRow)
      }

      // Check if prev button needs to be disabled
      if(newCurrentRow.oppId == 1){
        setPrevDisable(true)
      }else{
        setPrevDisable(false)
      }

      // Check if next button needs to be disabled
      if(newCurrentRow.oppId == data.length){
        setNextDisable(true)
      }else{
        setNextDisable(false)
      }
    }
  }

  // Change to next opp
  const goNext = () => {
    if(currentRow != undefined || currentRow != null || currentRow.length !== 0){
      let newRow = currentRow.oppId - 1
      let newCurrentRow = data[newRow + 1]
      if(newCurrentRow.oppId <= data.length){
        setCurrentRow(newCurrentRow)
      }

      // Check if next button needs to be disabled
      if(newCurrentRow.oppId == data.length){
        setNextDisable(true)
      }else{
        setNextDisable(false)
      }

      // Check if prev button needs to be disabled
      if(newCurrentRow.oppId == 1){
        setPrevDisable(true)
      }else{
        setPrevDisable(false)
      }
    }
  }



  return (
    <div className="App">
      <h2>PILYTIX Scored Opportunities</h2>
      <BasicTable onClick={handleRowClick}></BasicTable>
      <PopupCard currentRow={currentRow} displayCard={displayCard} onClick={closeMenu} goPrev={goPrev} goNext={goNext} nextDisable={nextDisable} prevDisable={prevDisable} />
    </div>
  );
}
