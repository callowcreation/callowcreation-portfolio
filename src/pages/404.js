import React from 'react'
import Layout from '../components/Layout'
import { navigate, Link } from "gatsby";
import * as styles from '../styles/not-found.module.css'

export default function NotFound(props) {
    
    return (
        <Layout>
            <section className={styles.content}>
                <div>
                    <h1>404</h1>
                    <p>Sorry, the page</p>
                    <span>{props.location.href}</span>
                    <p>was not found</p>
                </div>
                <div className={styles.buttons}>
                    <Link className={styles.btn} onClick={() => navigate(-1)} to=""> Go Back </Link>
                    <Link className={styles.btn} to="/"> Go Home </Link>
                </div>
            </section>
        </Layout>
    )
}