import React from 'react'
import { Link, graphql, useStaticQuery } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import * as styles from '../styles/footer.module.css'
import Social from './Social'

export default function Footer() {

    const data = useStaticQuery(graphql`
        query FooterLogo {
            file(relativePath: {eq: "logo-v-2-0-512.png"}) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 48)
                }
            }
        }
    `)

    console.log(data)
    const logoImage = getImage(data.file)
    return (
        <footer className={styles.footer}>
            <div className={styles.logo}>
                <p><Link to="/"><GatsbyImage image={logoImage} alt="Site Footer Logo" /></Link></p>
            </div>
            <div className={styles.information}>
                <Social />
                <p><Link to="/home/app-privacy-policy">Privacy Policy</Link> - <Link to="/home/terms-and-conditions">Terms and Conditions</Link> - <Link to="/home/contact-us">Contact Us</Link></p>
            </div>
            <div className={styles.copyright}>
                <p>© 2022 caLLowCreation</p>
            </div>
        </footer>
    )
}