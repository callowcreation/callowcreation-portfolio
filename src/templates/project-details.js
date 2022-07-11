import React from 'react'
import { graphql } from 'gatsby'
import { StaticImage, GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {
    console.log(data)

    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    const image = getImage(featuredImg)

    const src = featuredImg.childImageSharp.gatsbyImageData.images.fallback.src
    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    {/* <GatsbyImage image={image} alt="featured image" />    */}
                    <StaticImage src={src} placeholder='blurred' />                           
                </div>
                <div className={styles.html} dangerouslySetInnerHTML={{__html: html}} />
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectDetails($slug: String) {
        markdownRemark(frontmatter: {slug: {eq: $slug}}) {
            html
            frontmatter {
                stack
                title
                featuredImg {
                    childImageSharp {
                        gatsbyImageData
                    }
                }
            }
        }
    }
`
