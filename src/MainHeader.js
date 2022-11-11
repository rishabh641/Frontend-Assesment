import React from 'react'
import {Link} from 'react-router-dom'
import mainHeader from './Css/mainHeader.module.css'
import Logo from './others/favicon1.ico'

const MainHeader = () => {
    return (
        <div className={mainHeader.wrapper}>
            <div className={mainHeader.leftside}>
            <img src={Logo} className={mainHeader.logo} alt=''/>
            <h3 className={mainHeader.name}>Estatery</h3>
            <Link to='/rent' className={mainHeader.btn}>Rent</Link>
            <Link to='/buy' className={mainHeader.btn}>Buy</Link>
            <Link to='Sell' className={mainHeader.btn}>Sell</Link>
            <Link to='/manageProperty' className={mainHeader.btn}>Manage Property</Link>
            <Link to='/resources' className={mainHeader.btn}>Resources</Link>
            </div>

            <div className={mainHeader.rightside}>
            <Link to='/signup' className={mainHeader.ebtn}>Sign Up</Link>
            <Link to='/login' className={mainHeader.ebtn}>Login</Link>
            </div>
        </div>
    )
}

export default MainHeader
