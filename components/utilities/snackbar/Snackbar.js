import styles from './Snackbar.module.scss';
import cn from 'classnames';

export default function Snackbar({show, status, text}){

    return(
        <>
           {show && 
            <div className={cn(styles.snackbar, show && styles.show, status == "error" && styles.error, status == "success" && styles.success, status == "info" && styles.info)}>
                <div className={styles.textContainer}>
                    <p>{text}</p>
                </div>
            </div>
            }
        </>
    )
}