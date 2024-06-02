import React, { FC } from 'react'
import styles from './Banner.module.scss'

import { LuTimer } from "react-icons/lu";
import { RiCameraLensFill } from "react-icons/ri";
import { FaLocationDot } from "react-icons/fa6";
import ISO from '@assets/iso.svg'
import Image from 'next/image';
import classNames from 'classnames';

interface BannerClassNames{
    banner?: string,
    content?: string,
    footer?: string,
    list?: string,
    item?: string
}

interface BannerProps{
    bgImage: string,
    delay: string,
    diaphragm: string,
    iso: number,
    country: string,
    children?: React.ReactNode,
    classList?: BannerClassNames
}

const Banner: FC<BannerProps> = ({
    bgImage,
    delay,
    diaphragm,
    iso,
    country,
    children,
    classList
}) =>{
    return(
        <section 
            className={classNames(styles.banner, classList?.banner)}
            style={{backgroundImage: `url(${bgImage})`}}>

            <div className={styles.content}>
                {children}
            </div>
            <footer className={styles.footer}>
                    <ul className={styles.list}>
                        <li className={styles.item}><LuTimer/> {delay}</li>
                        <li className={styles.item}><RiCameraLensFill/> {diaphragm}</li>
                        <li className={styles.item}><Image alt='iso' src={ISO}/> {iso}</li>
                        <li className={styles.item}><FaLocationDot/> {country}</li>
                    </ul>
            </footer>    
        </section>
    )
}

export default Banner