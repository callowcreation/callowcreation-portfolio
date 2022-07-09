import React from 'react'
import { graphql } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/about-page.module.css'

export default function About({ data }) {
    console.log(data);

    const { html, frontmatter } = data.markdownRemark
    const { title } = frontmatter
    return (
        <Layout>
            <h1>{title}</h1>
            <div className={styles.html} dangerouslySetInnerHTML={{ __html: html }} />
        </Layout>
    )
}

export const query = graphql`
query AboutPage {
    markdownRemark(frontmatter: {title: {eq: "About Page"}}) {
        frontmatter {
            title
        }
        html
    }
}
`