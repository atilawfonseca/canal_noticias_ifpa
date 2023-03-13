import styles from './Footer.module.css'
import {ImLocation2} from 'react-icons/im';

function Footer(){
    return (
        <footer className={styles.footer_container}>
            <address>
            <span><ImLocation2 /></span>Estrada do Icuí Guajará S/Nº Entre Av. Independência e, Av. Arterial 5-A - Icuí-Guajará, Ananindeua - PA, 67125-000
            </address>
            &copy; 2022
        </footer>
    )

}
export default Footer; 