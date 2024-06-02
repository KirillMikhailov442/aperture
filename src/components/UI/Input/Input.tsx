'use client'

import React, { FC, useId } from 'react'
import styles from './Input.module.scss'
import classNames from 'classnames'

interface InputClassNames{
    wrapper?: string,
    input?: string
}

interface InputProps{
    placeholder?: string,
    icon?: React.JSX.Element,
    posIcon?: 'left' | 'right',
    classList?: InputClassNames
}

const Input: FC<InputProps> = ({
    placeholder,
    posIcon,
    icon,
    classList
}) =>{
    const id = useId()

    return(
        <label className={classNames(styles.wrapper, classList?.wrapper)} htmlFor={id}>
            {posIcon == 'left' && icon}
            <input 
                className={classNames(styles.input, classList?.input)}
                placeholder={placeholder}
                id={id}/>
            {posIcon == 'right' && icon}
        </label>
    )
}

export default Input