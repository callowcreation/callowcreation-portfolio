import React from 'react'
import Layout from '../../components/Layout'
import * as styles from '../../styles/contact-us.module.css'

export default function ContactUs() {
    return (
        <Layout>
            <div className={styles.contact}>
                <iframe title="Contact Us Form" src="https://docs.google.com/forms/d/e/1FAIpQLSfm_3YEjvjv8A1fiVuKkkgf53wvyz_BgGp_1JRhqLgz5mJoug/viewform?embedded=true" width="640" height="974" frameborder="0" marginheight="0" marginwidth="0">Loading…</iframe>
            </div>
        </Layout>
    )
}