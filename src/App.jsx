import Card from './components/card'
import useCurrencyInfo from './hooks/useCurrencyInfo'
import { useState } from 'react'

function App() {

  const [amount, setAmount] = useState(0)
  const [from, setFrom] = useState('usd')
  const [to, setTo]= useState('inr')
  const [convertedAmount, setConvertedAmount] = useState(0)

  const currencyInfo= useCurrencyInfo(from)

  const options = Object.keys(currencyInfo)

  function swap(){
    setFrom(to)
    setTo(from)
    setConvertedAmount(amount)
    setAmount(convertedAmount)
  }

  const convert = () => {
    setConvertedAmount(amount * currencyInfo[to])
  }

  return (
    <>
      <img src="https://images.pexels.com/photos/259100/pexels-photo-259100.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" alt="#" className='fixed -z-10' />

      <form onSubmit={e=>{
        e.preventDefault();
        convert()
      }}>
      <div className='space-y-4 z-10 relative'>

        <button className='absolute top-[35%] left-[44%] p-2 bg-blue-400 rounded-lg text-white py-3 shadow-xl hover:shadow-[0_0_10px_1px_rgb(4,118,208)] active:shadow-[0_0_50px_1px_rgb(4,118,208)]' onClick={swap}>swap</button>


        <Card 
          name='From'
          amount={amount}
          currencyOptions={options}
          selectCurrency={from}
          onCurrencyChange={(currency)=>setAmount(currency)}
          onAmountChange={(amount)=>setAmount(amount)}
        />
        <Card 
          name='To'
          amount={convertedAmount}
          amountDisable
          selectCurrency='from'
          currencyOptions={options}
          onCurrencyChange={(currency)=>(setTo(currency))}

        />

        <button className='bg-green-500 p-4 text-white text-xl font-semibold rounded-lg w-full hover:bg-green-600 active:bg-green-500' type='submit' convert>Convert {from.toUpperCase()} to {to.toUpperCase()}</button>

      </div>
      </form>

    </>
  )
}

export default App
