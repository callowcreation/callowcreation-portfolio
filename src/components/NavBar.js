import { Link, graphql, useStaticQuery } from 'gatsby'
import React from 'react'
import '../styles/nav.css'

export default function Navbar() {

    const data = useStaticQuery(graphql`
        query SiteInfo {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    const { title } = data.site.siteMetadata;

    return (
        <nav>
            <h1 className="company">{title}</h1>
            <div className="links">
                <Link to="/">Home</Link>
                <Link to="/about">About</Link>
                <Link to="/projects">Portfolio Projects</Link>
            </div>
        </nav>
    )
}