
import styles from './input.module.css';


function Input ({tipo, texto, dado}) {
    
    return(
        <>
        {/* é necessário deixar esse espaço para aceitar as duas classes*/ }
        
        <input className={`${styles.input} ${styles[tipo]}`} type={tipo} placeholder = {texto} onChange={dado}  required/>
        </>
    )
}
export default Input; 