import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home({ data }) {
    
    const image = getImage(data.file)

    return (
        <Layout>
            <section className={styles.header}>
                <div>
                    <h3>Software Developer</h3>
                    <h3>Game Developer</h3>
                    <p>I am Jones a full-stack web & Unity game developer based in California, USA.</p>
                    <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
                </div>
                <GatsbyImage image={image} alt="site banner" />
            </section>
        </Layout>
    )
}

export const query = graphql`
    query Banner {
        file(relativePath: {eq: "banner.png"}) {
            childImageSharp {
                gatsbyImageData(
                    placeholder: BLURRED
                    width: 900
                )
            }
        }
    }
`