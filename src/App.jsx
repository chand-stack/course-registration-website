
import { useState } from 'react'
import './App.css'
import Cards from './Components/Cards/Cards'
import Cart from './Components/Cart/Cart'
import Header from './Header/Header'

import { ToastContainer, toast } from 'react-toastify';
  import 'react-toastify/dist/ReactToastify.css';


function App() {
 const [cartlist,setCartList] = useState([])
 const [creditHour, setCreditHour] = useState(0)
 const [remCreditHour, setRemCredit] = useState(20)
 const [totalPrice, setTotalPrice] = useState(0)

 const selectHandler = (card,hours) => {
  console.log('card clicked',card);
  const newCredit = creditHour+hours;
  const cardId = cartlist.find(item => item.id === card.id);
  if(cardId){
  return  toast.warn('This Course Already Exist', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }else if(newCredit > 20 ){
    return  toast.warn('Exceeded Allocated Hours', {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "colored",
      });
  }else{
    const newCart = [...cartlist,card]
  setCartList(newCart);  
  setCreditHour(newCredit)
  setRemCredit(remCreditHour-hours)
  setTotalPrice(totalPrice+card.price)
  }

 }

  return (
    <>
    <header>
    <Header></Header>
    </header>

    <div className=' md:flex gap-2 md:px-3 container mx-auto'>
      <Cards selectHandler={selectHandler}></Cards>
      <Cart cartlist={cartlist} creditHour={creditHour} remCreditHour={remCreditHour} totalPrice={totalPrice}></Cart>
    </div>
    <ToastContainer
    position="top-center"
    autoClose={5000}
    hideProgressBar={false}
    newestOnTop={false}
    closeOnClick
    rtl={false}
    pauseOnFocusLoss
    draggable
    pauseOnHover
    theme="colored"
    />
      
      
      
    </>
  )
}

export default App
