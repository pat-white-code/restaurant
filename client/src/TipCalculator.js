import React, { useState } from 'react';
import styles from './TipCalculator.module.css';

const TipCalculator = () => {
  const [billTotal, setBillTotal] = useState(0);
  const handleBillTotal = (e) => {
    setTipTotal(null)
    setBillTotal(e.target.value);
  }

  const [qualityOfService, setQualityOfService] = useState(.15);
  const handleQualityOfService = (e) => {
    setTipTotal(null)
    setQualityOfService(e.target.value);
  }

  const [numberOfDiners, setNumberOfDiners] = useState(1);
  const handleNumberOfDiners = (e) => {
    setTipTotal(null)
    setNumberOfDiners(e.target.value);
  }

  const [tipTotal, setTipTotal] = useState(null);
  const calculateTip = (e) => {
    e.preventDefault();
    let tipTotal = billTotal * qualityOfService / numberOfDiners;
    setTipTotal(tipTotal);
  }

  return (
    <div className={styles['wrapper']}>
      <form className={styles['form']} onSubmit={calculateTip}>
        <h1>Tip Calculator</h1>
        <label for="bill-total">Bill Total</label>
        <input type="number" id="bill-total" value={billTotal} onChange={handleBillTotal} />
        <label for="quality-of-service">Quality Of Sertvice</label>
        <select name="quality-of-service" id="quality-of-service" value={qualityOfService} onChange={handleQualityOfService}>
          <option value={0}>Terrible - 0% </option>
          <option value={.05}>Poor - 5% </option>
          <option value={.10}>Decent - 10% </option>
          <option value={.15}>Good - 15% </option>
          <option value={.20}>Great - 20% </option>
          <option value={.25}>Outstanding - 25% </option>
        </select>
        <label htmlFor="number-of-diners">Number of Diners:</label>
        <input type="number" id="number-of-diners" name="number-of-diners" value={numberOfDiners} onChange={handleNumberOfDiners} />
        <button className={styles['form-submit']}type="submit">Calculate Tip</button>
        { tipTotal && (
        <div>
          <p>${tipTotal} {numberOfDiners > 1 && (
            <span>per person</span>
            )}</p>
        </div>
      )}
      </form>
    </div>
  )
}

export default TipCalculator;