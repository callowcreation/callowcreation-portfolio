import React from 'react'
import { Link } from 'gatsby'
import Navbar from './NavBar'
import '../styles/global.css'

export default function Layout({ children }) {
    return (
        <div className="layout">
            <Navbar />
            <div className="content">
                {children}
            </div>
            <footer>
                <p>Copyright 2022 caLLowCreation - <Link to="/home/app-privacy-policy">Privacy Policy</Link> - <Link to="/home/terms-and-conditions">Terms and Conditions</Link> </p>
            </footer>
        </div>
    )
}