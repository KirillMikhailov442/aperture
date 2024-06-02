import { CardProps } from '@/types'
import { FC } from 'react'
import {Card} from '@components/index'

import stylesGlobals from '@styles/globals.module.scss'
import styles from './ListCard.module.scss'

interface ListCardProps{
    data: CardProps[]
}

const ListCard: FC<ListCardProps> = ({
    data
}) =>{
    return(
        <section className={styles.wrapper}>
            <div className={stylesGlobals.container}>
                <h1 className={stylesGlobals.sectionTitle}>What we do.</h1>
                <p className={stylesGlobals.sectionSubTitle}>The areas that we &#39; re specialized in.</p>
                <div className={styles.grid}>
                    {
                        data.map(((card, index) => <Card key={index} {...card}/>))
                    }
                </div>
            </div>
        </section>
    )
}

export default ListCard