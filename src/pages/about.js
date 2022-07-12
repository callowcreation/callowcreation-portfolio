import React from 'react'
import { graphql } from 'gatsby'
import { GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from '../components/Layout'
import * as styles from '../styles/about-page.module.css'

export default function About({ data }) {

    const textNode = data.allMarkdownRemark.nodes[0] // text
    const skillsNode = data.allMarkdownRemark.nodes[1] // skills
    const testimonialsNode = data.allMarkdownRemark.nodes[2] // testimonials

    const { html: htmlText } = textNode
    const { html: htmlSkills } = skillsNode
    const { html: htmlTestimonials } = testimonialsNode

    const { title } = textNode.frontmatter

    const image = getImage(textNode.frontmatter.featuredImg)
    
    return (
        <Layout>
            <h1>{title}</h1>
            <div className={styles.aboutText}>
                <GatsbyImage image={image} alt="Profile image" />
                <div className={styles.htmlText} dangerouslySetInnerHTML={{ __html: htmlText }} />
            </div>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: htmlSkills }} />
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: htmlTestimonials }} />
        </Layout>
    )
}

export const query = graphql`
query AboutPage {
    allMarkdownRemark(
        filter: {frontmatter: {title: {regex: "/About Page/"}}}
        sort: {order: ASC, fields: frontmatter___title}
        ) {
        nodes {
            html
            frontmatter {
                featuredImg {
                    childImageSharp {
                        gatsbyImageData(      
                            placeholder: BLURRED
                            width: 438
                        )
                    }
                }
                title
            }
        }
    }
}
`