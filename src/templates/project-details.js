import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from '../styles/project-details.module.css'

export default function ProjectDetails({ data }) {

    const { html } = data.markdownRemark
    const { title, stack, featuredImg } = data.markdownRemark.frontmatter
    const image = getImage(featuredImg)

    return (
        <Layout>
            <div className={styles.details}>
                <h2>{title}</h2>
                <h3>{stack}</h3>
                <div className={styles.featured}>
                    {featuredImg ? <GatsbyImage image={image} alt="featured image" /> : <></>}                 
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
                        gatsbyImageData(
                            placeholder: BLURRED
                        )
                    }
                }
            }
        }
    }
`
