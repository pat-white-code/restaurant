import React, { useState } from 'react';

const TipCalculator = () => {
  const [billTotal, setBillTotal] = useState(0);
  const handleBillTotal = (e) => {
    setBillTotal(e.target.value);
  }

  const [qualityOfService, setQualityOfService] = useState(.15);
  const handleQualityOfService = (e) => {
    setQualityOfService(e.target.value);
  }

  const [numberOfDiners, setNumberOfDiners] = useState(1);
  const handleNumberOfDiners = (e) => {
    setNumberOfDiners(e.target.value);
  }

  const [tipTotal, setTipTotal] = useState(null);
  const calculateTip = () => {
    let tipTotal = billTotal * qualityOfService / numberOfDiners;
    setTipTotal(tipTotal);
  }

  return (
    <div>
      <form onSubmit={calculateTip}> 
        <label for="bill-total">First name:</label> <br />
        <input type="number" id="bill-total" value={billTotal} onChange={handleBillTotal} />
        <label for="quality-of-service">Quality Of Sertvice</label> <br />
        <select name="quality-of-service" id="quality-of-service" value={qualityOfService} onChange={handleQualityOfService}>
          <option value={0}>Terrible - 0% </option>
          <option value={.05}>Poor - 5% </option>
          <option value={.10}>Decent - 10% </option>
          <option value={.15}>Good - 15% </option>
          <option value={.20}>Great - 20% </option>
          <option value={.25}>Outstanding - 25% </option>
        </select>
        <label for="number-of-diners">Number of Diners:</label> <br />
        <input type="number" id="number-of-diners" name="number-of-diners" value={numberOfDiners} onChange={handleNumberOfDiners} />
      </form>
      { tipTotal && (
        <div>
          <p>{tipTotal} {numberOfDiners > 1 && (
            <span>per person</span>
            )}</p>
        </div>
      )}
    </div>
  )
}

export default TipCalculator;