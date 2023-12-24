import {Routes, Route} from "react-router-dom"

import {Home} from "../pages/home"
import {Favorites} from "../pages/favorites"
import {Menu} from "../pages/menu"
import {NewDish} from "../pages/newDish"
import {Order} from "../pages/order"
import {OrderHistory} from "../pages/orderHistory"
import {Payment} from "../pages/payment"
import {Details} from "../pages/details"
import {UpdateDish} from "../pages/updateDish"

export function AdminRoutes(){
  return(
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/favorites" element={<Favorites/>}/>
      <Route path="/menu" element={<Menu/>}/>
      <Route path="/newDish" element={<NewDish/>}/>
      <Route path="/order" element={<Order/>}/>
      <Route path="/orderHistory" element={<OrderHistory/>}/>
      <Route path="/payment" element={<Payment/>}/>
      <Route path="/details/:id" element={<Details/>}/>
      <Route path="/updateDish/:id" element={<UpdateDish/>}/>


      {/* <Route path="*" exact={true} element={<NotFound/>} /> */}
    </Routes>
  )
} 