
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cart/Cart'
import Header from './Header/Header'

function App() {
 const [cartlist,setCartList] = useState([])
 const [creditHour, setCreditHour] = useState(0)
 const [remCreditHour, setRemCredit] = useState(20)

 const selectHandler = (card,hours) => {
  // console.log('card clicked',card);
  const newCart = [...cartlist,card]
  setCartList(newCart);
  setCreditHour(creditHour+hours)
  setRemCredit(remCreditHour-hours)

 }

  return (
    <>
    <header>
    <Header></Header>
    </header>

    <div className=' md:flex gap-2 md:px-3 container mx-auto'>
      <Cards selectHandler={selectHandler}></Cards>
      <Cart cartlist={cartlist} creditHour={creditHour} remCreditHour={remCreditHour}></Cart>
    </div>
      
      
      
    </>
  )
}

export default App
