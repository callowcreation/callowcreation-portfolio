import React from 'react'
import Layout from '../components/Layout'
import { navigate, Link } from "gatsby";
import * as styles from '../styles/not-found.module.css'

export default function NotFound(props) {
    console.log({props})
    return (
        <Layout>
            <section className={styles.content}>
                <div>
                    <h1>404</h1>
                    <p>Sorry, the page</p>
                    <span>{props.location.href}</span>
                    <p>doesn't exist.</p>
                </div>
                <div className={styles.buttons}>
                    <a className={styles.btn} onClick={() => navigate(-1)}> Go Back </a>
                    <Link className={styles.btn} to="/"> Go Home </Link>
                </div>
            </section>
        </Layout>
    )
}