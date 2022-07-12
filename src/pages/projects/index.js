import React from 'react'
import { Link, graphql } from 'gatsby'
import { GatsbyImage, getImage  } from 'gatsby-plugin-image'
import Layout from '../../components/Layout'
import * as styles from '../../styles/projects.module.css'

export default function Projects({ data }) {
    console.log(data)
    const projects = data.projects.nodes
    const contact = data.contact.siteMetadata.contact

    return (
        <Layout>
            <div className={styles.portfolio}>
                <h2>Portfolio</h2>
                <h3>Projects that I have created or worked on.</h3>
                <div className={styles.projects}>
                    {projects.filter(project => project.frontmatter.slug).map(project => (
                        <Link to={"/projects/" + project.frontmatter.slug} key={project.id}>
                            <div>
                                <GatsbyImage image={getImage(project.frontmatter.thumbImg)} alt="site banner" />
                                <h3>{project.frontmatter.title}</h3>
                                <p>{project.frontmatter.stack}</p>
                            </div>
                        </Link>
                    ))}
                </div>
                <p>Like what you see? Email me at {contact} for a quote.</p>
            </div>
        </Layout>
    )
}

export const query = graphql`
    query ProjectsPage {
        projects: allMarkdownRemark(sort: {fields: frontmatter___date, order: DESC}) {
            nodes {
                frontmatter {
                    title
                    stack
                    slug
                    thumbImg {
                        childImageSharp {
                            gatsbyImageData(
                                placeholder: BLURRED
                            )
                        }
                    }
                }
                id
            }
        }
        contact: site {
            siteMetadata {
                contact
            }
        }
    }
`