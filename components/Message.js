import styles from './Message.module.css'

export default function Message() {
  return(
    <div className={styles.backdrop}>
      <div style={{"fontWeight": 300, "fontSize": "12px"}}>* Product is a Chrome Extension only supported on Google Chrome.</div>
    </div>
  )
}
