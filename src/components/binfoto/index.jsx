import React from 'react'
import {useSelector,useDispatch} from "react-redux";
import 'bootstrap/dist/css/bootstrap.min.css';
import '/style.css'
const index = () => {
    const cart = useSelector(state1=>state1.cart);
  return (
    <div id='sd' fixed='top'>
      <div id='sd' fixed='top'>
      <button type="button" id='sd' className="btn btn-primary position-relative"  fixed='top' data-bs-toggle="modal" data-bs-target="#staticBackdrop">

  <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
 
  {cart.length}
    <span className="visually-hidden">unread messages</span>
  </span>
</button>
</div>
<div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h1 className="modal-title fs-5" id="staticBackdropLabel">Modal title</h1>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        ...
      </div>
      <div className="modal-footer">
        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary">Understood</button>
      </div>
    </div>
  </div>
</div>
    </div>

  )
}

export default index
