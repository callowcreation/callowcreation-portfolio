import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/Layout'
import * as styles from '../styles/home.module.css'

export default function Home() {
    return (
        <Layout>
            <section className={styles.header}>
                <div>
                    <h2>Software Developer</h2>
                    <h3>Game Developer</h3>
                    <p>Full-Stack Web & Unity Game Developer based in California</p>
                    <Link className={styles.btn} to="/projects">My Portfolio Projects</Link>
                </div>
                <img src="/banner.png" alt="site banner" style={{ maxWidth: '100%' }} />
            </section>
        </Layout>
    )
}