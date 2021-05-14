import React from 'react'
import Header from './Header'
import Get from './Get'
import Main from './Main'
import Marquee from './Marquee'
import './style.scss'

const Body = () => {
    return(
        <>
            <Header />
            <Get />
            <Main />
            <Marquee />
        </>
    )
}

export default Body