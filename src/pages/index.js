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
                    <h2>Software Developer</h2>
                    <h3>Game Developer</h3>
                    <p>Full-Stack Web & Unity Game Developer based in California</p>
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
                gatsbyImageData
            }
        }
    }
`