'use client'

import Link from 'next/link'
import Image from 'next/image'

import { Button } from '@UI/index'
import { IoMenu, IoClose } from "react-icons/io5";

import globalStyles from '@styles/globals.module.scss'
import styles from './Header.module.scss'

import logo from '@assets/logo.png'
import classNames from 'classnames'
import { useState } from 'react';

const Header = ()=> {

    const [isShowMobileList, setIsShowMoblieList] = useState(false)

    return(
        <>
        <header className={styles.header}>
            <div className={classNames(globalStyles.container, styles.container)}>
                <Link 
                    href='/'
                    className={styles.logo}>
                    <Image 
                        src={logo}
                        alt='logo'/>
                </Link>
                <nav className={styles.nav}>
                    <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Business areas
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Featured images
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Gear cage
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Contact
                            </Link>
                        </li>
                    </ul>
                    <Button
                        text='Get template'
                        className={styles.button}/>
                </nav>
                <IoMenu
                    className={styles.hamburger}
                    onClick={()=> setIsShowMoblieList(prev => !prev)}/>
            </div>
        </header>
        <div className={classNames(styles.mobileList, { [`${styles.show}`] : isShowMobileList })}>
            <header>
                <IoClose
                    className={styles.mobileListClose}
                    onClick={()=> setIsShowMoblieList(prev => !prev)}/>
            </header>
            <nav className={styles.mobileListContent}>
                <ul className={styles.list}>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Business areas
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Featured images
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Gear cage
                            </Link>
                        </li>
                        <li className={styles.item}>
                            <Link 
                                href='/' 
                                className={styles.link}>
                                    Contact
                            </Link>
                        </li>
                </ul>
                <Button
                    text='Get template'
                    className={styles.button}/>
            </nav>
        </div>
        </>
    )
}

export default Header