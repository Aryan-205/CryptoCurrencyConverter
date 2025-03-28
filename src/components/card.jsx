import React,{useId} from "react";

function Card({
  name,
  amount,
  onAmountChange,
  onCurrencyChange,
  currencyOptions = [],
  selectCurrency = "usd",
  amountDisable = false,
  currencyDisable = false,

}){

  const amountInputId = useId()

  return (
    <>
      <div className="border-2 rounded-lg w-96 p-8 bg-white">
        <div className="flex justify-between mb-4">
          <p className="text-2xl font-semibold">{name}</p>
          <select
            disabled={currencyDisable}
            value={selectCurrency}
            onChange={e=>onCurrencyChange(Number(e.target.value))}
            >
              {currencyOptions.map((currency)=>(
                <option key={currency} value={currency}>{currency}</option>
              ))}
          </select>
        </div>
        <input 
          id={amountInputId}
          type="number" 
          placeholder='The amount is: '
          className="text-lg" 
          value={amount}
          onChange={e=>onAmountChange && onAmountChange(Number(e.target.value))} 
          disabled={amountDisable}
          />
      </div>
    </>
  )
}

export default Card

