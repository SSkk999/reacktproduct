import React from 'react'
import { useDispatch } from "react-redux";
import { useState } from "react";
import "../imgslider/style.css"
const index = () => {
  const [inputvalue,seting] = useState("");
    const dispatch = useDispatch();
 

  return (
 <>

<div className="d-flex justify-content-center gap-3 flex-wrap">
  <div className="card" style={{ width: '20rem', left: '35px',top:"220px",backgroundColor: '#666666'}}>

    <div className="card-body">
      <h5 className="card-title">Cola</h5>
      <img src="/cola.png" id='sss' className="card-img-top" alt="..." />
      <button className="btn btn-secondary" onClick={()=>dispatch({type:'ADD',foto: '/cola.png',name: 'cola'})} >Add to cart</button>
    </div>
  </div>

  <div className="card" style={{ width: '20rem', left: '90px',top:"220px",backgroundColor: '#666666' }}>
    
    <div className="card-body">
      <h5 className="card-title">Flint</h5>
      <img src="/flint.png" id='sss1'  className="card-img-top" alt="..." />
      <button className="btn btn-secondary" onClick={()=>dispatch({type:'ADD',foto: '/flint.png',name: 'flint'})} >Add to cart</button>
    </div>
  </div>


<div className="card" style={{ width: '20rem' , left: '125px',top:"220px",backgroundColor: '#666666'}}>
   
    <div className="card-body">
      <h5 className="card-title">Roshen</h5>
      <img src="./roshen.png"  id='sss1'  className="card-img-top" alt="..." />
      <button className="btn btn-secondary" onClick={()=>dispatch({type:'ADD',foto: '/roshen.png',name: 'roshen'})} >Add to cart</button>
    </div>
  </div>

  <div className="card" style={{ width: '20rem', left: '180px' ,top:"220px",backgroundColor: '#666666'}}>
   
    <div className="card-body">
      <h5 className="card-title">Sansanych</h5>
      <img src="./sansanych.png"  id='sss1' className="card-img-top" alt="..." />
      <button className="btn btn-secondary" onClick={()=>dispatch({type:'ADD',foto: '/sansanych.png',name: 'sansanych'})} >Add to cart</button>
    </div>
  </div>
  <div className="card" style={{ width: '20rem', left: '220px' ,top:"220px",backgroundColor: '#666666'}}>
   
    <div className="card-body">
      <h5 className="card-title">Lays</h5>
      <img src="./lays.webp"  id='sss1' className="card-img-top" alt="..." />
      <button className="btn btn-secondary" onClick={()=>dispatch({type:'ADD',foto: '/lays.webp',name: 'lays'})} >Add to cart</button>
    </div>
  </div>
 
</div>
 
  
 
 </>
  )
}

export default index
