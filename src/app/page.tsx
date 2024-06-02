import {Hero, ListCard} from '@/components'
import Image from 'next/image'

import styles from './Home.module.scss'
import stylesGlobals from '@styles/globals.module.scss'

import  img1 from '@assets/card-1.jpg'
import  img2 from '@assets/card-2.jpg'
import  img3 from '@assets/card-3.jpg'
import  img4 from '@assets/card-4.jpg'

import bannerImg1 from '@assets/banner-2.jpg'
import bannerImg2 from '@assets/banner-3.jpg'
import bannerImg3 from '@assets/banner-4.jpg'
import bannerImg4 from '@assets/banner-5.jpg'

import clientImg1 from '@assets/client-1.png'
import clientImg2 from '@assets/client-2.png'
import clientImg3 from '@assets/client-3.png'
import clientImg4 from '@assets/client-4.png'
import clientImg5 from '@assets/client-5.png'

import { CardProps } from '@/types'
import { Banner } from '@/components/layout'
import classNames from 'classnames'
import { Tag } from '@/components/UI'
import Link from 'next/link'

const data: CardProps[] = [
  {
  title: 'Product Photography',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore pariatur ratione dolor voluptatibus quibusdam similique quis minima asperiores maiores optio molestiae quos, excepturi iure, ab dolorem saepe at porro!',
  bgImage: img1
  },
  {
  title: 'Product Photography',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore pariatur ratione dolor voluptatibus quibusdam similique quis minima asperiores maiores optio molestiae quos, excepturi iure, ab dolorem saepe at porro!',
  bgImage: img2
  },
  {
  title: 'Product Photography',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore pariatur ratione dolor voluptatibus quibusdam similique quis minima asperiores maiores optio molestiae quos, excepturi iure, ab dolorem saepe at porro!',
  bgImage: img3
  },
  {
  title: 'Product Photography',
  subtitle: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Sed tempore pariatur ratione dolor voluptatibus quibusdam similique quis minima asperiores maiores optio molestiae quos, excepturi iure, ab dolorem saepe at porro!',
  bgImage: img4
  },
]


const Home = () =>{
  return(
    <main className={styles.main}>
      <Hero/>
      <ListCard data={data}/>
      <Banner
        bgImage={bannerImg1.src}
        delay='1"'
        diaphragm='f/16'
        iso={400}
        country='Japan'>
          <div className={styles.bannerContent}>
            <h3 className={styles.bannerTitle}>Sunset at Mount Fuji</h3>
            <p className={styles.bannerSubtitle}>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
          </div>
        </Banner>
        <section className={styles.section}>
          <div className={classNames(styles.sectionItem, styles.info)}>
              <p className={styles.infoDetails}>The Gear cage</p>
              <h2 className={styles.infoTitle}>The tools that we use.</h2>
              <p className={styles.infoSubTitle}>The say that &quot; no place is boring if you&apos;ve had a good night&apos;s sleep and have a pocket full of unexposed film&quot;. While we don&apos;t shoot (a lot) of film these days — these are the tools that we actually use everyday to capture the amazing things around us.</p>
              <span><Tag text='Check it out'/></span>
          </div>
          <Banner 
            bgImage={bannerImg2.src}
            classList={{
              banner: styles.sectionItem
            }}
            delay='0,8"'
            diaphragm='f/5,6'
            iso={100}
            country='Sweden'/>
        </section>
        <Banner
        bgImage={bannerImg3.src}
        delay='1/400s'
        diaphragm='f/3,5'
        iso={100}
        country='Costa Rica'>
          <div className={styles.bannerContent}>
            <h3 className={styles.bannerTitle}>Monstera Leafs</h3>
            <p className={styles.bannerSubtitle}>Vestibulum sit amet urna turpis. Mauris euismod elit et nisi ultrices, ut faucibus orci tincidunt.</p>
          </div>
        </Banner>
        <section className={styles.clients}>
            <div className={stylesGlobals.container}>
              <h1 className={stylesGlobals.sectionTitle}>Past clients</h1>
              <p className={stylesGlobals.sectionSubTitle}>Trusted by your favourite companies</p>
              <div className={styles.clientsList}>
                <Link href='/'><Image src={clientImg1} alt='Hille Hayes'/></Link>
                <Link href='/'><Image src={clientImg2} alt='Riksgransen'/></Link>
                <Link href='/'><Image src={clientImg3} alt='Studio Cai'/></Link>
                <Link href='/'><Image src={clientImg4} alt='Chill Industries'/></Link>
                <Link href='/'><Image src={clientImg5} alt='Stockholm'/></Link>
              </div>
            </div>
        </section>
        <Banner
          bgImage={bannerImg4.src}
          delay='6"'
          diaphragm='f/11'
          iso={800}
          country='Nepal'>
            <div className={styles.bannerContent}>
              <h3 className={styles.bannerTitle}>Sunset at Mount Fuji</h3>
              <p className={styles.bannerSubtitle}>Duis tristique sed lorem a vestibulum. Cras commodo consequat orci, in convallis risus egestas non.</p>
          </div>
        </Banner>
        <section className={styles.service}>
            <div className={classNames(stylesGlobals.container, styles.serviceContainer)}>
              <h1 className={stylesGlobals.sectionTitle}>Need help with photography or videography?</h1>
              <p className={stylesGlobals.sectionSubTitle}>We&apos;re here for you!</p>
              <span><Tag className={styles.serviceTag} text='Get in touch'/></span>
            </div>
        </section>
    </main>
  )
}

export default Home
