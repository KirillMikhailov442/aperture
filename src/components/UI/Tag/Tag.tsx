import { Button } from "@/components/UI"
import styles from './Tag.module.scss'
import { FC } from "react"
import classNames from "classnames"

interface TagProps{
    text: string,
    className?: string
}

const Tag: FC<TagProps> = ({
    text,
    className
}) =>{
    return <Button
                text={text}
                className={classNames(styles.button, className)}
                posIcon='left'
                icon={<span className={styles.circle}></span>}/>
}

export default Tag