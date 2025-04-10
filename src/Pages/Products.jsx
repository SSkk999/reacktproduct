import React from 'react'
import Imgslider from '../components/imgslider/index'
import TopNavBar from '../components/Header/TopNavBar'
import Footer from '../components/Footer/Footer'
import '../components/imgslider/style.css'
import Cart1 from '../components/cart/index'
import  Car from '../components/Cat/Index'
import Binfoto from '../components/binfoto/index'
import {useSelector,useDispatch} from "react-redux";
import './styleP.css'
const Products = () => {
  const cart = useSelector(state1=>state1.cart);

  return (
   
    <>
        <div className='z-3 position-absolute p-5 rounded-3' id='sd'>
    <button type="button" id='sd' className="btn btn-primary position-relative"  fixed='top' data-bs-toggle="modal" data-bs-target="#staticBackdropLabel">

<span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">

{cart.length}

</span>
</button>
    </div>
    <TopNavBar />
   
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
      <Car/>
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
  </div>
    <Imgslider/> 
    <p className="fw-bold" id='text'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?Lorem ipsum dolor sit amet consectetur adipisicing elit. Ut reiciendis repellendus architecto culpa ipsum tempora expedita eos harum facere odio aut, odit rem omnis nulla dolorum, sunt assumenda ex quos?</p>
    <Cart1/>  
  
    <Footer/>
    
    </>
  )
}

export default Products
