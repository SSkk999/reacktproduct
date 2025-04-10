import React from 'react'
import {Fragment} from 'react';
import {useSelector,useDispatch} from "react-redux";

const Index = () => {
    const cart = useSelector(state1=>state1.cart);
    const dispatch = useDispatch();
  return (
    <Fragment>
      <h2>Cart</h2>
      
        {
            cart.length===0 ? <p>Product is empty</p> : (
                <ul>
                {cart.map((item)=>
                (
                    <li key={item.id}>
                        <div>
                        {item.name}
                        <img width={"30px"} src={item.foto} alt="" />
                        </div>
                        

                        <button onClick={()=>dispatch({type: 'REMOVE',payload: item.id})}>Delete</button>
                    </li>
                )
                )}
                </ul>
            )
        }
        <button onClick={()=>dispatch({type: 'CLEAR_ALL'})}>Clear cart</button>
    </Fragment>
  )
}

export default Index
