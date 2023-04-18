import styles from './PdfViewer.module.scss'
import cn from 'classnames'

const PdfViewer = ({open, click}) => {
    return (

        <div className={cn(styles.pdfContainer, open && styles.open )} >
            <div className={styles.overlay} onClick={click}></div>
            <img src='./pdf/resume.png'/>
        </div>
    )
}

export default PdfViewer