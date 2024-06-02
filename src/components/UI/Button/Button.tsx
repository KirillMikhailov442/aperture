import { FC } from 'react'
import styles from './Button.module.scss'
import classNames from 'classnames'

interface ButtonProps{
    text: string,
    className?: string,
    icon?: React.JSX.Element,
    posIcon?: 'left' | 'right'
}

const Button: FC<ButtonProps> = ({
    text,
    className,
    posIcon,
    icon
})=>{
    return(
        <button className={classNames(styles.button, className)}>
            {posIcon == 'left' && icon}
            {text}
            {posIcon == 'right' && icon}
        </button>
    )
}

export default Button