import styles from './Support.module.css'

export default function Support() {
  return(
    <div className={styles.backdrop} id="support">
      <div style={{"fontWeight": 300, "fontSize": "12px"}}>Write to <b><i>hi@tabinator.app</i></b> for any queries.</div>
    </div>
  )
}
