import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

function CartWidget(){
    return (
        <div>
    <FontAwesomeIcon icon="check-square" color="white" />
    <i style={{color:"white", fontSize:"24px", marginTop: "10px"}} className="fa fa-shopping-cart"></i>



        </div>


    )

}


export default CartWidget;