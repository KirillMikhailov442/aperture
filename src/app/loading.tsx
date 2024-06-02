import { CircularProgress } from '@mui/material'
import styles from './Home.module.scss'

const Loading = () =>{
    return(
        <div className={styles.loading}>
            <CircularProgress/>
        </div>
    )
}

export default Loading