import React from 'react'
import { graphql, useStaticQuery } from 'gatsby'
import { Grid, IconButton, Link, Icon } from '@material-ui/core'
import LinkedInIcon from '@material-ui/icons/LinkedIn'
import GitHubIcon from '@material-ui/icons/GitHub'
import YouTubeIcon from '@material-ui/icons/YouTube'
import TwitterIcon from '@material-ui/icons/Twitter'

import * as styles from '../styles/social.module.css'



export default function Social() {

    const data = useStaticQuery(graphql`
        query TwitchIcon {
            file(relativePath: {eq: "icons/twitch_icon.png"}) {
                childImageSharp {
                    gatsbyImageData(layout: FIXED, width: 22)
                }
            }
        }
    `)


    const socialItems = [
        { icon: LinkedInIcon, url: 'https://www.linkedin.com/in/jones-cropper-32842334', alt: 'LinkedIn Social Icon' },
        { icon: GitHubIcon, url: 'https://github.com/callowcreation', alt: 'GitHub Social Icon' },
        { icon: YouTubeIcon, url: 'https://www.youtube.com/callowcreation', alt: 'YouTube Social Icon' },
        { icon: TwitterIcon, url: 'https://twitter.com/callowcreation', alt: 'Twitter Social Icon' },
        {
            icon: () => (
                <Icon>
                    <img src={data.file.childImageSharp.gatsbyImageData.images.fallback.src} />
                </Icon>), url: 'https://twitch.com/callowcreation', alt: 'Twitch Social Icon'
        }
    ];

    return (
        <div className={styles.social}>
            <Grid container direction='row' spacing={1} alignContent='center' justifyContent='center'>
                {socialItems.map(item => (
                    <Grid item>
                        <Link href={item.url} target="_blank" rel="noopener">
                            <IconButton aria-label={item.alt}>
                                <item.icon />
                            </IconButton>
                        </Link>
                    </Grid>
                ))}
            </Grid>
        </div>
    )
}