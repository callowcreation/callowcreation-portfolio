import React from 'react'
import Navbar from './NavBar'
import Footer from './Footer'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <>
            <div className="layout">
                <Navbar />
                <div className="content">
                    {children}
                </div>
            </div>
            <Footer />
        </>
    )
}