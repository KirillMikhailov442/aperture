import styles from './Hero.module.scss'
import {Banner} from '@layout/index'

import banner1 from '@assets/banner-1.jpg'

const Hero = () =>{
    return(
        <Banner
        bgImage={banner1.src}
        delay='1/2000s'
        diaphragm='f/11'
        iso={100}
        country='Iceland'
        classList={{
            banner: styles.hero
        }}
        >
          <div className={styles.content}>
            <h4 className={styles.positions}>Photographer & Filmmaker</h4>
            <h1 className={styles.title}>Aperture Studios</h1>
            <p className={styles.subtitle}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi, ex ipsam cupiditate rerum eius exercitationem unde laborum accusantium dignissimos veritatis consequatur dolor laudantium dolorem fugit amet? Dolorem ea non aut.</p>
          </div>
        </Banner>
    )
}

export default Hero