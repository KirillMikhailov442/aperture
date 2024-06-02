import styles from './Card.module.scss'

import { FC } from 'react'
import { CardProps } from '@/types'
import { Tag } from '@UI/index'



const Card: FC<CardProps> = ({
    bgImage,
    title,
    subtitle
}) =>{
    return(
        <div 
            className={styles.card} 
            style={{backgroundImage: `url(${bgImage.src})`}}>
                <h3 className={styles.title}>{title}</h3>
                <p className={styles.subtitle}>{subtitle}</p>
                <span><Tag text='Read more'/></span>
        </div>
    )
}

export default Card