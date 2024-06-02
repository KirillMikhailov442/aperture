import Image from 'next/image'
import styles from './Footer.module.scss'
import stylesGlobals from '@styles/globals.module.scss'

import logo from '@assets/logo.png'
import { Input } from '@UI/index'
import Link from 'next/link'

import { FaTwitter, FaInstagram, FaFacebookF } from "react-icons/fa";

const Footer = () =>{
    return(
        <footer className={styles.footer}>
            <div className={stylesGlobals.container}>
                <header className={styles.header}>
                    <div className={styles.about}>
                        <Image className={styles.image} src={logo} alt='logo'/>
                        <p className={styles.subtitle}>Photographers & videographers capturing the world around us.</p>
                    </div>
                    <div className={styles.links}>
                        <div className={styles.col}>
                            <p className={styles.colTitle}>Business areas</p>
                            <ul className={styles.colList}>
                                <li>Product Photography</li>
                                <li>Architecture Photography</li>
                                <li>Drone Photography</li>
                                <li>Wildlife Photography</li>
                            </ul>
                        </div>
                        <div className={styles.col}>
                            <p className={styles.colTitle}>Pages</p>
                            <ul className={styles.colList}>
                                <li>Gear cage</li>
                                <li>Featured images</li>
                                <li>Contact</li>
                                <li>Style guide</li>
                                <li>Instructions</li>
                                <li>Changelog</li>
                            </ul>
                        </div>
                    </div>
                </header>
                <div className={styles.subscribe}>
                    <div className={styles.content}>
                        <h2 className={styles.title}>Subscribe to our newsletter</h2>
                        <p className={styles.subtitle}>Read about all the things we do.</p>
                    </div>
                    <Input
                        classList={{
                            wrapper: styles.input
                        }}
                        icon={<span className={styles.inputSpan}></span>}
                        posIcon='right'/>
                </div>
                <div className={styles.bottom}>
                    <p className={styles.copyright}>© Aperture Photography, Inc. All rights reserved. Licensing.</p>
                    <ul className={styles.socialMedia}>
                        <li><Link href='/'><FaTwitter/></Link></li>
                        <li><Link href='/'><FaInstagram/></Link></li>
                        <li><Link href='/'><FaFacebookF/></Link></li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}

export default Footer