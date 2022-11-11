import React from "react";
import item from './Css/item.module.css'
import bed from './others/bed.png'
import bath from './others/bathtub.png'
import area from './others/area.png'

const Item=({name,price,Address,Bedrooms,Bathrooms,Area,Image})=>{
    return(
        <div className={item.wrapper}>
            <img src={Image} alt='No pic' className={item.img}/>
            <h3 className={item.price}>${price}<p>/price</p></h3>
            <h3 className={item.name} >{name}</h3>
            <h4 className={item.Address} >{Address}</h4>
            <div className={item.line}></div>
            <div className={item.specsContainer} >
                <img src={bed} className={item.icon}></img><h5>{Bedrooms} Beds</h5>
                <img src={bath} className={item.icon}></img><h5>{Bathrooms} Bathrooms</h5>
                <img src={area} className={item.icon}></img><h5>{Area} m^2</h5>
            </div>     
        </div>
    )
}

export default Item;